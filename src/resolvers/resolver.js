import { Query } from "./query.resolver.js";

export const resolvers = {
  Query,
  Books: {
    expensive: (root) => Number(root.price) > 50,
    infoBasic: (root) => `Year:${root.year}, Price:${root.price ?? "No"}`,
  },
};
