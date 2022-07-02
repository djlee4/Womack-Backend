import { current_timestamp } from 'src/lib/utils';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Part } from './part.entity';

@Entity('part_type')
export class PartType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @CreateDateColumn({
    nullable: false,
    name: 'created_at',
    type: 'datetime',
  })
  createdAt: string;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'datetime',
    nullable: true,
  })
  deletedAt?: string | null;

  @OneToMany(() => Part, (part) => part.type)
  parts: Part[];
}
