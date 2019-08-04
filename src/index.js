const { GraphQLServer } = require('graphql-yoga');

// Define GraphQL schema
const typeDefs = `type Query {
    info: String!
}`;

// Implement GraphQL schema
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`
  }
};

// Bundle and pass the schema and resolvers to the GraphQLServer imported from graphql-yoga
const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
