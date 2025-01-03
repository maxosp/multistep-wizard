import { Controller } from '@nestjs/common';
import { SubmissionsService } from './submissions.service';
import { MessagePattern } from '@nestjs/microservices';
import { Submission } from '@multistep-wizard/db-config';

@Controller()
export class SubmissionsController {
  constructor(private readonly submissionsService: SubmissionsService) {}

  @MessagePattern('submissions.getByUserId')
  getByUserId(userId: number) {
    return this.submissionsService.getByUserId(userId);
  }

  @MessagePattern('submissions.create')
  create(submission: Submission) {
    return this.submissionsService.create(submission);
  }

  @MessagePattern('submissions.update')
  update({ id, submission }: { id: number; submission: Submission }) {
    return this.submissionsService.update(id, submission);
  }
}
