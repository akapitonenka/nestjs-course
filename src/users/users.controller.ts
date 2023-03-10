import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

import { CreateUserDto } from './dto/creat-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.userService.getAllUsers();
    }
}
