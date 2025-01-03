import { Submission } from '@multistep-wizard/db-config';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class SubmissionsApiService {
  constructor(
    @Inject('SUBMISSION_CLIENT') private submissionsClient: ClientProxy
  ) {}

  getByUserId(id: number) {
    return this.submissionsClient.send('submissions.getByUserId', id);
  }

  create(submission: Submission) {
    return this.submissionsClient.send('submissions.create', submission);
  }

  update(id: number, submission: Submission) {
    return this.submissionsClient.send('submissions.update', {
      id,
      submission,
    });
  }
}
