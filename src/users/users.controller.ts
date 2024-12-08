import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsersService } from "./user.service";
import { User } from "./user.entity";
import { UserDto } from "./user.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller('users')
@ApiTags('Пользователи') // заголовок раздела в сваггере
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @ApiOperation({ summary: 'Поиск всех пользователей' }) // операция для сваггера
    @Get()
    findAll(){
        return this.userService.findAll();
    }

    @ApiOperation({ summary: 'Поиск пользователя по id' }) // операция для сваггера
    @Get(':id')
    findOne(@Param('id') id: string) {
        // + == конвертация строки в число
        return this.userService.findOne(+id);
    }

    @ApiOperation({ summary: 'Обновление пользователя по id' }) // операция для сваггера
    @Put(':id')
    update(@Param('id') id: string, @Body() updateUser: User) {
        // + == конвертация строки в число
        return this.userService.update(+id, updateUser);
    }

    @ApiOperation({ summary: 'Создать нового пользователя' }) // операция для сваггера
    @Post()
    create(@Body() createUser: UserDto) {
        return this.userService.create(createUser);
    }

    @ApiOperation({ summary: 'Удаление пользователя по id' }) // операция для сваггера
    @Delete(':id')
    remove(@Param('id') id: string) {
        // + == конвертация строки в число
        return this.userService.delete(+id);
    }
}