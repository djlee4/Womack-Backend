import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import entities from './parts/entities';
import { HealthModule } from './health/health.module';
import { PartsModule } from './parts/parts.module';
import { StuffModule } from './stuff/stuff.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'inventory',
      entities: entities,
      migrationsTableName: 'migrations',
      migrations: [],
      connectorPackage: 'mysql2',
      synchronize: true,
    }),
    HealthModule,
    PartsModule,
    StuffModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
