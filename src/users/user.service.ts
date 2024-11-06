import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource /datasource.service";
import { User } from "./user.entity";

@Injectable()
export class UsersService { 
    constructor(private readonly datasourceService: DatasourceService) { }

    create(user: User) {
        this.datasourceService.getUsers().push(user);
        return user;
    }

    findOne(id: number) {
        return this.datasourceService
            .getUsers()
            .find((user) => user.id === id);
    }

    findAll(): User[] {
        return this.datasourceService.getUsers();   
    }

    update(id: Number, updateUser: User) {
        const index = this.datasourceService
            .getUsers()
            .findIndex((user) => user.id === id);
        this.datasourceService.getUsers() [index] = updateUser;
        return this.datasourceService.getUsers() [index];
    }

    delete(id: Number) {
        const index = this.datasourceService
            .getUsers()
            .findIndex((user) => user.id === id);
        this.datasourceService.getUsers().splice(index, 1);
        return HttpStatus.OK;
    }
}