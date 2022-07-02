import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';
import { PartBrand } from './entities/part-brand.entity';
import { PartCategory } from './entities/part-category.entity';
import { PartType } from './entities/part-type.entity';
import { Part } from './entities/part.entity';

@Injectable()
export class PartsService {
  constructor(
    @InjectRepository(Part)
    private readonly partRepository: Repository<Part>,
    @InjectRepository(PartType)
    private readonly partTypeRepo: Repository<PartType>,
    @InjectRepository(PartBrand)
    private readonly partBrandRepo: Repository<PartBrand>,
    @InjectRepository(PartCategory)
    private readonly partCategoryRepo: Repository<PartCategory>,
  ) {}
  async create(createPartDto: CreatePartDto) {
    try {
      const newPart = this.partRepository.create(createPartDto);
      const { type, brand, category } = newPart;

      const partType = await this.partTypeRepo.findOne({
        where: { name: type.name },
      });
      if (!partType) {
        const newPartType = await this.partTypeRepo.save({ name: type.name });
        newPart.type = newPartType;
      } else {
        newPart.type = partType;
      }

      const partBrand = await this.partBrandRepo.findOne({
        where: { name: brand.name },
      });
      if (!partBrand) {
        const newPartBrand = await this.partBrandRepo.save({
          name: brand.name,
        });
        newPart.brand = newPartBrand;
      } else {
        newPart.brand = partBrand;
      }

      const partCategory = await this.partCategoryRepo.findOne({
        where: { name: category.name },
      });
      if (!partCategory) {
        const newPartCategory = await this.partCategoryRepo.save({
          name: category.name,
        });
        newPart.category = newPartCategory;
      } else {
        newPart.category = partCategory;
      }

      return this.partRepository.save(newPart);
    } catch (error) {
      throw new HttpException(
        {
          message: 'Failed to create part',
          error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  findAll() {
    return this.partRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} part`;
  }

  update(id: number, updatePartDto: UpdatePartDto) {
    return `This action updates a #${id} part`;
  }

  remove(id: number) {
    return `This action removes a #${id} part`;
  }
}
