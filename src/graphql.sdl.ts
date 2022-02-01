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
  getProduct(id: String): String
  getUser(id: String): String
}

type Mutation {
  createProduct(id: String): String
  editProduct(id: String): String
  addUser(id: String): String
}

schema {
  query: Query
  mutation: Mutation
}
` as const;

export default GRAPHQL_GENERATED_SDL;