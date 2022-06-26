import { Injectable, Inject } from '@nestjs/common';
import { Part } from '../parts/entities/part.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PartService {
  constructor(
    @Inject(Part)
    private partRepository: Repository<Part>,
  ) {}

  async findAll(): Promise<Part[]> {
    return this.partRepository.find();
  }
}
