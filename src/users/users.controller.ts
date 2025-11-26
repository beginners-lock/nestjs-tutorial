// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import type { User } from './user.type';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // GET /users or /users?role=value
  @Get()
  findAll(@Query('role') role?: 'ADMIN' | 'USER') {
    return this.usersService.findAll(role);
  }

  // GET /users/:id
  @Get(':id')
  findUserById(@Param('id') id: string) {
    return this.usersService.findUserById(parseInt(id));
  }

  // POST /users
  @Post()
  createUser(@Body() user: Omit<User, 'id'>) {
    return this.usersService.createUser(user);
  }

  // PATCH /users/:id
  @Patch(':id')
  editUserData(@Param('id') id: string, @Body() user: Partial<User>) {
    return this.usersService.editUserData(parseInt(id), user);
  }

  // PUT /users/:id
  @Put(':id')
  changeUserData(@Param('id') id: string, @Body() user: Omit<User, 'id'>) {
    return this.usersService.changeUserData(parseInt(id), user);
  }

  // DELETE /users/:id
  @Delete(':id')
  deleteUserById(@Param('id') id: string) {
    return this.usersService.deleteUserById(parseInt(id));
  }
}
