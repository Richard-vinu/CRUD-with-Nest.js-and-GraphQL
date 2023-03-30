import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';


@Resolver(of => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => [User])
  getUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  // @Query((returns) => User)
  // getUser(@Args('id') id: number): User {
  //   return this.userService.getUserById(id);
  // }

  // @Mutation((returns) => User)
  // createUser(@Args('user') user: User): User {
  //   return this.userService.createUser(user);
  // }

  // @Mutation((returns) => User)
  // updateUser(@Args('id') id: number, @Args('user') user: Partial<User>): User {
  //   return this.userService.updateUser(id, user);
  // }

  // @Mutation((returns) => Boolean)
  // deleteUser(@Args('id') id: number): boolean {
  //   return this.userService.deleteUser(id);
  // }
}
