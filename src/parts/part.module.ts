import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartService } from '../parts/part.service';
import { Part } from './entities/part.entity';
import { PartController } from './part.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Part])],
  providers: [PartService],
  controllers: [PartController],
  exports: [PartService],
})
export class PartModule {}
