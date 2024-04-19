export const Query = `
    type Query {
      booksCount: Int!
      allBooks: [Books]!
      findBook(name: String!): Books
      findBookYear2000: [Books]!
    }
`;
