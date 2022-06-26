import { Entity, OneToMany } from 'typeorm';
import { __base_entity } from './base.entity';
import { Part } from './part.entity';

@Entity('part-type')
export class PartType extends __base_entity {
  @OneToMany(() => Part, (part) => part.type)
  parts: Part[];
}
