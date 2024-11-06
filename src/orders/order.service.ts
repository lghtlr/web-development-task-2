import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource /datasource.service";
import { Order } from "./order.entity";

@Injectable()
export class OrdersService { 
    constructor(private readonly datasourceService: DatasourceService) { }

    create(order: Order) {
        this.datasourceService.getOrders().push(order);
        return order;
    }

    findOne(id: number) {
        return this.datasourceService
            .getOrders()
            .find((order) => order.id === id);
    }

    findAll(): Order[] {
        return this.datasourceService.getOrders();   
    }

    update(id: Number, updateOrder: Order) {
        const index = this.datasourceService
            .getOrders()
            .findIndex((order) => order.id === id);
        this.datasourceService.getOrders() [index] = updateOrder;
        return this.datasourceService.getOrders() [index];
    }

    delete(id: Number) {
        const index = this.datasourceService
            .getOrders()
            .findIndex((order) => order.id === id);
        this.datasourceService.getOrders().splice(index, 1);
        return HttpStatus.OK;
    }
 }