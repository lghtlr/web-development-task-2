import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { OrdersService } from "./order.service";
import { Order } from "./order.entity";

@Controller('orders')
export class OrdersController {
    constructor(private readonly orderService: OrdersService) { }

    @Get()
    findAll(){
        return this.orderService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.orderService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateOrder: Order) {
        return this.orderService.update(+id, updateOrder);
    }

    @Post()
    create(@Body() createOrder: Order) {
        return this.orderService.create(createOrder);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.orderService.delete(+id);
    }
}