import { CommonModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ItemModule } from './item/item.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    CommonModule,
    ItemModule,
    OrderModule,
    ProductModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}

  // async onModuleInit() {
  //   await this.dataSource.query(`
  //       insert into product (title, price) values
  //           ('Computer', 1000), ('Mouse', 19);
  //   `);
  // }
}
