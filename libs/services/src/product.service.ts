import { ProductsRepository } from '@app/repositories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(private productsRepository: ProductsRepository) {}

  async getAllProducts() {
    return await this.productsRepository.getAllProducts();
  }
}
