import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  InputComponent,
  ButtonComponent,
  CheckboxGroupComponent,
  RadioGroupComponent,
} from '@multistep-wizard/ui-kit';
import { StepsService } from '../../services/steps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputComponent,
    RadioGroupComponent,
    CheckboxGroupComponent,
    ButtonComponent,
  ],
  templateUrl: './step.component.html',
})
export class StepFormComponent implements OnInit {
  constructor(private router: Router) {}

  stepsService = inject(StepsService);

  get formData() {
    return this.stepsService.formData();
  }

  get currentStepIndex() {
    return this.stepsService.currentStepIndex() + 1;
  }

  ngOnInit(): void {
    this.stepsService.fetchSteps();
    this.stepsService.fetchSubmissions();
  }

  onNext() {
    if (!this.stepsService.hasNextStep()) {
      this.submitForm();
    } else {
      this.stepsService
        .saveStep(this.stepsService.formData())
        .subscribe(() => this.stepsService.nextStep());
    }
  }

  onPrev() {
    this.stepsService.previousStep();
  }

  submitForm() {
    this.stepsService
      .saveStep(this.stepsService.formData())
      .subscribe(() => this.router.navigate(['/finish']));
  }
}
