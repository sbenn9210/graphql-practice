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
    shawn: Brittany
    vehicle: Car
    mula: Money
  }

  type Test {
    desc: String
  }

  type Brittany {
    boyfriend: String!
    fiance: String
    age: Int
    engaged: Boolean
  }
  
  type Car {
    color: String
    VIN: String
    year: Int
    make: String
    model: String

  }

  type Money {
    country: String
    amount: Int
    accepted: States
    test: [States]
  }

  type States {
      first: String
      second: String
    }
`;

const resolvers = {
  Query: {
    hello: () => {
      return {
        desc: "Hello World!",
      };
    },
    shawn: () => {
      return {
        boyfriend: "Shawn",
        fiance: "Might be Shawn",
        age: 24,
        engaged: false,
      };
    },
    vehicle: () => {
      return {
        color: "Black",
        VIN: "39GDD9837F8",
        year: 1998,
        make: "Toyota",
        model: "Camry",
      };
    },

    mula: () => {
      return {
        country: "United States",
        amount: 10039932,
        test: [
          {
            first: "true",
            second: "false",
          },
          {
            first: "false",
            second: "false",
          },
        ],
        accepted: {
          first: "Texas",
          second: "New York",
        },
      };
    },
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => console.log(`Server is running on http://localhost:4000`));
