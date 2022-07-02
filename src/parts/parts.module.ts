import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './entities';
import { PartsController } from './parts.controller';
import { PartsService } from './parts.service';

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  controllers: [PartsController],
  providers: [PartsService],
})
export class PartsModule {}
