import { Injectable } from '@nestjs/common';
import type { User } from './users.type';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'USER',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      role: 'USER',
    },
  ];

  findAll(role?: 'ADMIN' | 'USER') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }

    return this.users;
  }

  findUserById(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (user) {
      return user;
    } else {
      throw new Error('User not found');
    }
  }

  createUser(user: Omit<User, 'id'>) {
    const lastId = this.users[this.users.length - 1].id;
    this.users.push({ id: lastId + 1, ...user });
    return { id: lastId + 1, ...user };
  }

  editUserData(id: number, user: Partial<User>) {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      throw new Error('User not found');
    } else {
      this.users[userIndex] = { ...this.users[userIndex], ...user };
      return this.users[userIndex];
    }
  }

  changeUserData(id: number, user: Omit<User, 'id'>) {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      throw new Error('User not found');
    } else {
      this.users[userIndex] = { id, ...user };
      return this.users[userIndex];
    }
  }

  deleteUserById(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      throw new Error('User not found');
    } else {
      const removedUser = this.users[userIndex];
      this.users.splice(userIndex, 1);
      return removedUser;
    }
  }
}
