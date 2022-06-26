import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PartModule } from './parts/part.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      migrationsTableName: 'migrations',
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '',
      database: 'inventory',
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([PartModule]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
