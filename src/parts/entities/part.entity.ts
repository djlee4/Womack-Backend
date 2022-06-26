import { Column, Entity, ManyToOne } from 'typeorm';
import { __base_entity } from './base.entity';
import { PartBrand } from './part-brand.entity';
import { PartCategory } from './part-category.entity';
import { PartType } from './part-type.entity';

@Entity('part')
export class Part extends __base_entity {
  @Column()
  barcode: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'money' })
  price: string;

  @Column()
  quantity: number;

  @Column({ type: 'boolean' })
  core: boolean;

  @ManyToOne(() => PartBrand, (partBrand) => partBrand.id)
  brand: PartBrand;

  @ManyToOne(() => PartCategory, (PartCategory) => PartCategory.id)
  category: PartCategory;

  @ManyToOne(() => PartType, (partType) => partType.id)
  type: PartType;
}
