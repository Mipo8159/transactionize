import { Inject, Injectable, Scope } from '@nestjs/common';
import { Request } from 'express';
import { DataSource } from 'typeorm';
import { REQUEST } from '@nestjs/core';
import { BaseRepository } from '@app/base';
import { Order } from '@app/entities';

@Injectable({ scope: Scope.REQUEST }) // are reinitialized on every request
export class OrdersRepository extends BaseRepository {
  constructor(dataSource: DataSource, @Inject(REQUEST) req: Request) {
    super(dataSource, req);
  }

  async getOrders() {
    return await this.getRepository(Order).find({
      relations: {
        items: {
          product: true,
        },
      },
    });
  }

  async createOrder(orderNo: string) {
    const ordersRepository = this.getRepository(Order);

    const order = ordersRepository.create({
      date: new Date(),
      orderNo: orderNo,
    });
    await ordersRepository.insert(order);

    return order;
  }
}
