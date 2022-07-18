import { IsNotEmpty, Min } from 'class-validator';
import { PartBrand } from '../entities/part-brand.entity';
import { PartCategory } from '../entities/part-category.entity';
import { PartType } from '../entities/part-type.entity';

export class CreatePartDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  barcode: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  price: string;

  @IsNotEmpty()
  @Min(1)
  quantity: number;

  @IsNotEmpty()
  hasCore: boolean;

  brand?: PartBrand;

  category?: PartCategory;

  type?: PartType;
}
