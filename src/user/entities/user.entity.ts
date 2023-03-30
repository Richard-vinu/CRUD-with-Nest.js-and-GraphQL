// import { ObjectType, Field, Int } from '@nestjs/graphql';

// @ObjectType()
// export class User {
//   @Field(() => Int, { description: 'Example field (placeholder)' })
//   exampleField: number;
// }

import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(type=>Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
