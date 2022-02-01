/*
   * -------------------------------------------------------
   * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
   * -------------------------------------------------------
   */
  
  /* tslint:disable */
  /* eslint-disable */

const GRAPHQL_GENERATED_SDL = `
type Query {
  hello: String
  searchHello(payload: SearchInput): String
  getUser(id: String): String
  getProduct(id: String): String
}

input SearchInput {
  query: String!
}

scalar UTCDateTime

type Mutation {
  addUser(id: String): String
  createProduct(id: String): String
  editProduct(id: String): String
}

schema {
  query: Query
  mutation: Mutation
}
` as const;

export default GRAPHQL_GENERATED_SDL;