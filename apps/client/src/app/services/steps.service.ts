import {
  computed,
  inject,
  Injectable,
  signal,
  WritableSignal,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Submission } from '@multistep-wizard/db-config';
import { Step } from '@multistep-wizard/types';
import { UserSessionService } from './user-session.service';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  constructor(private http: HttpClient) {}

  submissionsApiUrl = '/api/submissions/';
  stepsApiUrl = '/api/steps/';

  userSesionService = inject(UserSessionService);

  steps: WritableSignal<Step[]> = signal([]);
  submissions: WritableSignal<Submission[]> = signal([]);

  currentStepIndex = signal(0);
  currentStep = computed(() => this.steps()[this.currentStepIndex()]);

  hasPreviousStep = computed(() => this.currentStepIndex() > 0);
  hasNextStep = computed(
    () => this.currentStepIndex() < this.steps().length - 1
  );

  formData = computed(() => {
    const form: { [key: string]: string } = {};

    this.submissions().forEach((submission) => {
      if (this.currentStep().id === submission.stepId) {
        submission.values.forEach((submissionValue) => {
          const question = this.currentStep().questions.find(
            (q) => q.id === submissionValue.questionId
          );

          if (question) {
            form[question.type] = submissionValue.value;
          }
        });
      }
    });

    return form;
  });

  fetchSteps() {
    return this.http
      .get<Step[]>(this.stepsApiUrl)
      .subscribe((steps: Step[]) => {
        this.steps.set(steps);
      });
  }

  fetchSubmissions() {
    const userId = this.userSesionService.getUser();
    const res = this.http.get<Submission[]>(this.submissionsApiUrl + userId);
    res.subscribe((submission) => this.submissions.set(submission));
    return res;
  }

  nextStep() {
    this.currentStepIndex.update((currentValue) => currentValue + 1);
  }

  previousStep() {
    this.currentStepIndex.update((currentValue) => currentValue - 1);
  }

  saveStep(step: { [key: string]: string | string[] }) {
    const values = Object.entries(step)
      .map(([key, value]) => {
        const question = this.currentStep().questions.find(
          (q) => q.type === key
        );

        if (!question) {
          return false;
        }

        return {
          questionId: question?.id,
          value,
        };
      })
      .filter(Boolean);

    const payload = {
      userId: this.userSesionService.getUser(),
      stepId: this.currentStep().id,
      values,
    };

    const existingSubmission = this.submissions().find(
      (s) => s.stepId === this.currentStep().id
    );

    if (existingSubmission) {
      return this.http.patch(
        this.submissionsApiUrl + existingSubmission.id,
        payload
      );
    } else {
      return this.http.post(this.submissionsApiUrl, payload);
    }
  }
}
