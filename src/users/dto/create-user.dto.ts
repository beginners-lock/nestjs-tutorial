import { PickType } from '@nestjs/mapped-types';
import { IsString, IsEmail, IsNotEmpty, IsEnum } from 'class-validator';

export const ROLES = ['ADMIN', 'USER'];

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(ROLES, { message: 'Valid role required' })
  role: 'ADMIN' | 'USER';
}

export class UserRoleDto extends PickType(CreateUserDto, ['role'] as const) {}
