import { gql } from "apollo-server";
import { Query } from "./query.defs.js";
import { TypeBook } from "./type-book.js";

export const typeDefs = gql`
  ${TypeBook}
  ${Query}
`;
