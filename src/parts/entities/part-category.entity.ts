import { Entity, OneToMany } from 'typeorm';
import { __base_entity } from './base.entity';
import { Part } from './part.entity';

@Entity('part-category')
export class PartCategory extends __base_entity {
  @OneToMany(() => Part, (part) => part.category)
  parts: Part[];
}
