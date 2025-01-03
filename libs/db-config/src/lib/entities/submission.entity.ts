import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class SubmissionValues {
  questionId: number;
  value: string;
}

@Entity()
export class Submission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  stepId: number;

  @Column({ type: 'simple-json' })
  values: {
    questionId: number;
    value: string;
  }[];

  @ManyToOne(() => User, (user) => user.submissions)
  user: User;
}
