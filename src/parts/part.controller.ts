import { Controller, Get } from '@nestjs/common';
import { Part } from './entities/part.entity';
import { PartService } from './part.service';

@Controller()
export class PartController {
  constructor(private readonly partService: PartService) {}

  @Get()
  async getHello(): Promise<Part[]> {
    return await this.partService.findAll();
  }
}
