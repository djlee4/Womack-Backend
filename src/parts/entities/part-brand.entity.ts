import { Entity, OneToMany } from 'typeorm';
import { __base_entity } from './base.entity';
import { Part } from './part.entity';

@Entity('part-brand')
export class PartBrand extends __base_entity {
  @OneToMany(() => Part, (part) => part.type)
  parts: Part[];
}
