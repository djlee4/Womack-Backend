import { current_timestamp } from 'src/lib/utils';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PartBrand } from './part-brand.entity';
import { PartCategory } from './part-category.entity';
import { PartType } from './part-type.entity';

@Entity('part')
export class Part {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  barcode: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  price: string;

  @Column()
  quantity: number;

  @Column({ type: 'boolean', name: 'has_core' })
  hasCore: boolean;

  @ManyToOne(() => PartBrand, (partBrand) => partBrand.id)
  @JoinColumn({ name: 'brand_id' })
  brand: PartBrand;

  @ManyToOne(() => PartCategory, (PartCategory) => PartCategory.id, {})
  @JoinColumn({ name: 'category_id' })
  category: PartCategory;

  @ManyToOne(() => PartType, (partType) => partType.id)
  @JoinColumn({ name: 'type_id' })
  type: PartType;

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
}
