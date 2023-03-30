import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  // private users: User[] = [
  //   {
  //     id: 1,
  //     name: 'John Doe',
  //     email: 'johndoe@example.com',
  //     password: 'password',
  //   },
  //   {
  //     id: 2,
  //     name: 'Jane Doe',
  //     email: 'janedoe@example.com',
  //     password: 'password',
  //   },
  // ];

  async findAll(): Promise<User[]> {
    const  users = new User()
    users.id = 1;
    users.email="vinu@gamail.com";
    users.name="apple";
    users.password = "2323";
    return [users];
  }

  // getUserById(id: number): User {
  //   return this.users.find((user) => user.id === id);
  // }

  // createUser(user: User): User {
  //   const newUserId = this.users.length + 1;
  //   const newUser = { ...user, id: newUserId };
  //   this.users.push(newUser);
  //   return newUser;
  // }

  // updateUser(id: number, user: Partial<User>): User {
  //   const updatedUser = { ...this.getUserById(id), ...user };
  //   this.users = this.users.map((u) => (u.id === id ? updatedUser : u));
  //   return updatedUser;
  // }

  // deleteUser(id: number): boolean {
  //   const userIndex = this.users.findIndex((user) => user.id === id);
  //   if (userIndex < 0) {
  //     return false;
  //   }
  //   this.users.splice(userIndex, 1);
  //   return true;
  // }
}
