const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

// Implement GraphQL schema
const resolvers = {
  

  Mutation: {
    post: (root, args, context) => {
      return context.prisma.createLink({
        url: args.url,
        description: args.description
      });
    }
  }
};

// Bundle and pass the schema and resolvers to the GraphQLServer imported from graphql-yoga
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  // Initialize the context object that's passied into all GraphQL resolvers
  context: { prisma }
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
