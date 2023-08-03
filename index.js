import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = ` 
  type Book {
    title: String
    author: String
  }  

  type greeting {
    message: String
  }

  type Query {
    books: [Book]
    greeting: greeting
  }
   
`;
const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];
const greeting = {
    message: 'Hello GraphQL  From TutorialsPoint !!'
}
const resolvers = {
    Query: {
        books: () => books,
        greeting: () => greeting
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});


const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);