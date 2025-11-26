// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import type { User } from './user.type';

@Controller('users')
export class UsersController {
  // GET /users or /users?role=value
  @Get()
  findAll(@Query('role') role?: 'ADMIN' | 'USER') {
    if (role) {
      return [role];
    } else {
      return [];
    }
  }

  // GET /users/:id
  @Get(':id')
  findUserById(@Param('id') id: string) {
    return { id };
  }

  // POST /users
  @Post()
  createUser(@Body() user: Omit<User, 'id'>) {
    return user;
  }

  // PATCH /users/:id
  @Patch(':id')
  editUserData(@Param('id') id: string, @Body() user: Partial<User>) {
    return { id, ...user };
  }

  // PUT /users/:id
  @Put(':id')
  changeUserData(@Param('id') id: string, @Body() user: Omit<User, 'id'>) {
    return { id, ...user };
  }

  // DELETE /users/:id
  @Delete(':id')
  deleteUserById(@Param('id') id: string) {
    return `Deleted user with ID: ${id}`;
  }
}
