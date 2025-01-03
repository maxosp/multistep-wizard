import { Injectable } from '@nestjs/common';
import { Step } from '@multistep-wizard/types';

@Injectable()
export class StepsService {
  private steps: Step[] = [
    {
      id: 1,
      title: 'Step 1',
      questions: [
        {
          id: 1,
          type: 'text',
          title: 'Text question',
        },
        {
          id: 2,
          type: 'checkbox',
          title: 'Checkbox question',
          options: ['Option 1', 'Option 2', 'Option 3'],
        },
      ],
    },
    {
      id: 2,
      title: 'Step 2',
      questions: [
        {
          id: 1,
          type: 'number',
          title: 'Number question',
        },
        {
          id: 2,
          type: 'radio',
          title: 'Radio question',
          options: ['Option 1', 'Option 2', 'Option 3'],
        },
      ],
    },
  ];

  getAll() {
    return this.steps;
  }
}
