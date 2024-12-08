import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsersService } from "./user.service";
import { User } from "./user.entity";
import { UserDto } from "./user.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller('users')
@ApiTags('Пользователи') // заголовок раздела в сваггере
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    findAll(){
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        // + == конвертация строки в число
        return this.userService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateUser: User) {
        // + == конвертация строки в число
        return this.userService.update(+id, updateUser);
    }

    @Post()
    create(@Body() createUser: UserDto) {
        return this.userService.create(createUser);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        // + == конвертация строки в число
        return this.userService.delete(+id);
    }
}