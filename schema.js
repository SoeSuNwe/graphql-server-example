

const typeDefs =`  
  type Book {
    title: String
    author: Author
  }

  type User {
    id: ID
    name: String
  }

  type Author {
    name: String
    age: Int
    books: [Book]
  } 

  input AuthorFilter { 
    name: String
    age: Int
  }

  input AuthorInput {
    name: String  
    age: Int
  } 

  type Query {
    books: [Book]
    authors: [Author] 
    getBookByTitle(title: String): Book
    queryAuthor(filter: AuthorFilter): [Author]
    getUserById(id: ID!): User      
  } 

  type Mutation {
    addBook(title: String, author: String):Book  
  }  
   
`;
export default typeDefs;