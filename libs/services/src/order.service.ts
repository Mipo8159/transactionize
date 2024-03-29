import { OrdersRepository } from '@app/repositories';
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ItemsService } from './item.service';
import { CreateItemDto } from '@app/dto';

@Injectable()
export class OrdersService {
  constructor(
    private ordersRepository: OrdersRepository,
    private itemsService: ItemsService,
  ) {}

  async getOrders() {
    return await this.ordersRepository.getOrders();
  }

  async createOrder(items: CreateItemDto[]) {
    const orderNo = `ORD_${randomUUID()}`;
    const order = await this.ordersRepository.createOrder(orderNo);
    await this.itemsService.createItems(order.id, items);
    return order;
  }
}
