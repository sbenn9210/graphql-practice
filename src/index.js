const { GraphQLServer } = require("graphql-yoga");

// let links = [
//   {
//     id: "link-0",
//     url: "www.howtographql.com",
//     description: "Fullstack tutorial for GraphQL",
//   },
// ];

// let idCount = links.length;

// const resolvers = {
//   Query: {
//     info: () => `This is the API of a Hackernews Clone`,
//     feed: () => links,
//     link: (parent, args) => links.filter((item) => (item.id = args.id)),
//   },

//   Mutation: {
//     post: (parent, args) => {
//       const link = {
//         id: `link-${idCount++}`,
//         description: args.description,
//         url: args.url,
//       };
//       links.push(link);
//       return link;
//     },
//     updateLink: (parent, args) => {
//       let updatedLink = {
//         id: args.id,
//         description: args.description,
//         url: args.url,
//       };

//       let oldLink = links.find((item) => item.id === args.id);
//       let index = links.indexOf(oldLink);

//       links.splice(index, 1, updatedLink);
//       return links;
//     },
//   },
// };

// const server = new GraphQLServer({
//   typeDefs: "./src/schema.graphql",
//   resolvers,
// });
// server.start(() => console.log(`Server is running on http://localhost:4000`));

// type checking
// query vs. mutation
// objects
// arrays
// arguments

// crud

const typeDefs = `
  type Query {
    hello: Test
  }

  type Test {
    desc: String
  }
  
`;

const resolvers = {
  Query: {
    hello: () => {
      return {
        desc: "Hello World!",
      };
    },
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => console.log(`Server is running on http://localhost:4000`));
