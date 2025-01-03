import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Submission } from './submission.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Submission, (submission) => submission.user)
  submissions: Submission[];
}
