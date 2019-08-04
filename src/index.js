const { GraphQLServer } = require('graphql-yoga');

// Define GraphQL schema
const typeDefs = `type Query {
  info: String!
  feed: [Link!]!
    
},

type Mutation {
  post(url: String!, description: String!): Link!
}

type Link {
  id: ID!
  description: String!
  url: String!
}
`;

// Add dummy data, store in links variate at runtime
let links = [
  {
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  }
];

// Implement GraphQL schema
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links
  },

  Link: {
    id: parent => parent.id,
    description: parent => parent.description,
    url: parent => parent.url
  }
};

// Bundle and pass the schema and resolvers to the GraphQLServer imported from graphql-yoga
const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
