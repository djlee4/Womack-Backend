import { current_timestamp } from 'src/lib/utils';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { Part } from './part.entity';

@Entity('part_category')
export class PartCategory {
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

  @OneToMany(() => Part, (part) => part.category)
  parts: Part[];
}
