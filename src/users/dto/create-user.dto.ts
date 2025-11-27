import { PickType } from '@nestjs/mapped-types';
import { IsString, IsEmail, IsNotEmpty, IsEnum } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['ADMIN', 'USER'], { message: 'Valid role required' })
  role: 'ADMIN' | 'USER';
}

export class UserRoleDto extends PickType(CreateUserDto, ['role'] as const) {}

export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}
