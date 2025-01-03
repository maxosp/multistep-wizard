import { Submission } from '@multistep-wizard/db-config';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SubmissionsService {
  constructor(
    @InjectRepository(Submission)
    private readonly submissionsRepository: Repository<Submission>
  ) {}

  async getByUserId(userId: number) {
    return await this.submissionsRepository.find({
      where: { userId },
    });
  }

  async create(submission: Submission) {
    const newSubmission = this.submissionsRepository.create(submission);
    return this.submissionsRepository.save(newSubmission);
  }

  async update(id: number, submission: Submission) {
    return await this.submissionsRepository.update(id, submission);
  }
}
