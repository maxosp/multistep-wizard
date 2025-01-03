import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { SubmissionsApiService } from './submissions-api.service';
import { Submission } from '@multistep-wizard/db-config';

@Controller('submissions')
export class SubmissionsApiController {
  constructor(private submissionsApiService: SubmissionsApiService) {}

  @Get(':id')
  getByUserId(@Param('id') userId: number) {
    return this.submissionsApiService.getByUserId(userId);
  }

  @Post()
  create(@Body() submission: Submission) {
    return this.submissionsApiService.create(submission);
  }

  @Patch(':id')
  update(@Param() id: number, @Body() submission: Submission) {
    return this.submissionsApiService.update(id, submission);
  }
}
