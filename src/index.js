const { GraphQLServer } = require('graphql-yoga');

// Add dummy data, store in links variate at runtime
let links = [
  {
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  }
];

let idCount = links.length;

// Implement GraphQL schema
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links
  },

  Mutation: {
    post: (parent, args) => {
      // Add an integer variable to generate unique IDs for newly created Link elements.
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url
      };
      links.push(link);
      return link;
    }
  }
  // Link resolvers removed bc unnecessary: GraphQL server infers what they look like
  // Link: {
  //   id: parent => parent.id,
  //   description: parent => parent.description,
  //   url: parent => parent.url
  // }
};

// Bundle and pass the schema and resolvers to the GraphQLServer imported from graphql-yoga
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
