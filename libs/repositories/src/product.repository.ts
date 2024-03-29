import { BaseRepository } from '@app/base';
import { Product } from '@app/entities';
import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { DataSource } from 'typeorm';

@Injectable({ scope: Scope.REQUEST }) // are reinitialized on every request
export class ProductsRepository extends BaseRepository {
  constructor(dataSource: DataSource, @Inject(REQUEST) req: Request) {
    super(dataSource, req);
  }

  async getAllProducts() {
    return await this.getRepository(Product).find();
  }
}
