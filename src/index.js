const { GraphQLServer } = require('graphql-yoga');

// Implement GraphQL schema
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews clone`,
    feed: (root, args, context, info) => {
      return context.prisma.links();
    }
  },

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
  resolvers
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
