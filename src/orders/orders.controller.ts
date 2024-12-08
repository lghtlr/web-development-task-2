import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { OrdersService } from "./order.service";
import { Order } from "./order.entity";
import { OrderDto } from "./order.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller('orders')
@ApiTags('Заказы') // заголовок раздела в сваггере
export class OrdersController {
    constructor(private readonly orderService: OrdersService) { }

    @Get()
    findAll(){
        return this.orderService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        // + == конвертация строки в число
        return this.orderService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateOrder: Order) {
        // + == конвертация строки в число
        return this.orderService.update(+id, updateOrder);
    }

    @Post()
    create(@Body() createOrder: OrderDto) {
        return this.orderService.create(createOrder);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        // + == конвертация строки в число
        return this.orderService.delete(+id);
    }
}