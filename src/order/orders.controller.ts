import { TransactionInterceptor } from '@app/base';
import { CreateItemDto } from '@app/dto';
import { OrdersService } from '@app/services/order.service';
import {
  Body,
  Controller,
  Get,
  ParseArrayPipe,
  Post,
  UseInterceptors,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  async getOrders() {
    return await this.ordersService.getOrders();
  }

  @Post()
  @UseInterceptors(TransactionInterceptor)
  async createOrder(
    @Body(new ParseArrayPipe({ items: CreateItemDto }))
    data: CreateItemDto[],
  ) {
    return await this.ordersService.createOrder(data);
  }
}
