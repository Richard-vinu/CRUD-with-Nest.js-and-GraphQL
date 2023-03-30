import { Module } from '@nestjs/common';
import { GraphQLModule, } from '@nestjs/graphql';

// import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { join } from 'path';
  import { ApolloDriver } from '@nestjs/apollo';

import { UserModule } from './user/user.module';

@Module({
  imports: [
  GraphQLModule.forRoot({
      driver:ApolloDriver,
     autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UserModule,
  ],
})
export class AppModule {}
