import { ItemsRepository } from '@app/repositories';
import { ItemsService } from '@app/services/item.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [ItemsService, ItemsRepository],
  exports: [ItemsService],
})
export class ItemModule {}
