import { books } from "../db/books.js";

export const Query = {
  booksCount: () => books.length,
  allBooks: () => books,
  findBookYear2000: () => books.filter(({ year }) => Number(year) > 2000),
  findBook: (root, args) => {
    const { name } = args;
    return books.find((book) => book.name === name);
  },
};
