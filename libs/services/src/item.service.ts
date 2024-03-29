import { CreateItemDto } from '@app/dto';
import { ItemsRepository } from '@app/repositories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
  constructor(private itemsRepository: ItemsRepository) {}

  async createItems(orderId: number, items: CreateItemDto[]) {
    await this.itemsRepository.createItems(orderId, items);
  }
}
