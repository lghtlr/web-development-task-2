import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { OrdersService } from "./order.service";
import { Order } from "./order.entity";
import { OrderDto } from "./order.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller('orders')
@ApiTags('Заказы') // заголовок раздела в сваггере
export class OrdersController {
    constructor(private readonly orderService: OrdersService) { }

    @ApiOperation({ summary: 'Поиск всех заказов' }) // операция для сваггера
    @Get()
    findAll(){
        return this.orderService.findAll();
    }

    @ApiOperation({ summary: 'Поиск заказа по id' }) // операция для сваггера
    @Get(':id')
    findOne(@Param('id') id: string) {
        // + == конвертация строки в число
        return this.orderService.findOne(+id);
    }

    @ApiOperation({ summary: 'Обновление заказа по id' }) // операция для сваггера
    @Put(':id')
    update(@Param('id') id: string, @Body() updateOrder: Order) {
        // + == конвертация строки в число
        return this.orderService.update(+id, updateOrder);
    }

    @ApiOperation({ summary: 'Создать новый заказ' }) // операция для сваггера
    @Post()
    create(@Body() createOrder: OrderDto) {
        return this.orderService.create(createOrder);
    }

}