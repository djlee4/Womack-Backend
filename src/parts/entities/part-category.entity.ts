import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
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
    select: false,
  })
  createdAt: string;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'datetime',
    nullable: true,
    select: false,
  })
  deletedAt?: string | null;

  @OneToMany(() => Part, (part) => part.category)
  parts: Part[];
}
