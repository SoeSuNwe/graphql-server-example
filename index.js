import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from "./schema.js";

const books = [
  {
    title: 'The Awakening',
    date: '23/07/2023',
    author: {
      name: 'Kate Chopin'
    },
  },
  {
    title: 'City of Glass',
    date: '02/04/2023',
    author: {
      name: 'Paul Auster'
    },
  },
];

const authors = [
  {
    name: 'Kate Chopin',
    age: 30
  },

  {
    name: 'Paul Auster',
    age: 20
  },

  {
    name: 'Aung Aung',
    age: 10
  },
];

const users = [
  {
    id: '1',
    name: 'Elizabeth Bennet',
  },
  {
    id: '2',
    name: 'Fitzwilliam Darcy',
  },
];


const resolvers = {
  Query: {
    books() { return books },
    authors: () => authors,
    getBookByTitle(parent, args, contextValue, info) {
      return books.find((book) => book.title === args.title);
    },
    queryAuthor(parent, args, contextValue, info) {
      const { filter } = args;  
      var newauthors =  authors.filter((word) => word.age == filter.age); 
      return newauthors
    },
    getUserById(parent, args, contextValue, info) {
      return users.find((user) => user.id === args.id);
    },
  },
  Mutation: {}
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});


const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);