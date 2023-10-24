import { Injectable } from '@nestjs/common';

export type User = any;
@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      name: 'John',
      password: 'changeme',
    },
    {
      id: 2,
      name: 'Jane Doe',
      password: 'secret',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.name === username);
  }
}
