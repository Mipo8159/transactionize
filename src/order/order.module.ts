import { OrdersRepository } from '@app/repositories';
import { OrdersService } from '@app/services/order.service';
import { Module } from '@nestjs/common';
import { ItemModule } from 'src/item/item.module';
import { OrdersController } from './orders.controller';

@Module({
  imports: [ItemModule],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository],
})
export class OrderModule {}
