// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UserRoleDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ParseRolePipe } from './pipe/role.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // GET /users or /users?role=value
  @Get()
  findAll(
    @Query('role', ParseRolePipe)
    role?: UserRoleDto['role'],
  ) {
    return this.usersService.findAll(role);
  }

  // GET /users/:id
  @Get(':id')
  findUserById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findUserById(id);
  }

  // POST /users
  @Post()
  createUser(@Body(ValidationPipe) user: CreateUserDto) {
    return this.usersService.createUser(user);
  }

  // PATCH /users/:id
  @Patch(':id')
  editUserData(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) user: UpdateUserDto,
  ) {
    return this.usersService.editUserData(id, user);
  }

  // PUT /users/:id
  @Put(':id')
  changeUserData(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) user: CreateUserDto,
  ) {
    return this.usersService.changeUserData(id, user);
  }

  // DELETE /users/:id
  @Delete(':id')
  deleteUserById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.deleteUserById(id);
  }
}
