import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

const config = new ConfigService();
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  url: config.get<string>('DB_URL'),
  synchronize: false,
  entities: ['dist/libs/entities/src/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
};

const dataSource: DataSource = new DataSource(dataSourceOptions);
export default dataSource;
