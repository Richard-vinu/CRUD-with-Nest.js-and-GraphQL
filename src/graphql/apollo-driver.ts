// import { ApolloServerBase } from 'apollo-server-core';
// import { ApolloServerExpressConfig } from 'apollo-server-express';
// import { GraphQLSchema } from 'graphql';
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

// export class MyApolloDriver extends ApolloDriver {
//   createHandler(
//     server: ApolloServerBase,
//     path: string,
//     schema: GraphQLSchema,
//     register: (config: ApolloServerExpressConfig) => void,
//   ) {
//     register({
//       app: server.getHttpServer(),
//       path,
//       cors: true,
//     });
//     server.installSubscriptionHandlers(server.getHttpServer());
//   }
// }

// export interface MyApolloDriverConfig extends ApolloDriverConfig {}
