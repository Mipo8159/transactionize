import { ProductsRepository } from '@app/repositories';
import { ProductsService } from '@app/services';
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';

@Module({
  providers: [ProductsService, ProductsRepository],
  controllers: [ProductsController],
})
export class ProductModule {}
