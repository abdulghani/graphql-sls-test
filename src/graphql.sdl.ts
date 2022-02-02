/*
   * -------------------------------------------------------
   * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
   * -------------------------------------------------------
   */
  
  /* tslint:disable */
  /* eslint-disable */

const GRAPHQL_GENERATED_SDL = `
type Query {
  """
    description for this
  """
  hello: String
  searchHello(payload: SearchInput): String
  multipleInput(payload: SearchInput, name: String): String
  getUser(id: String): String
  getProduct(id: String): String
}

input SearchInput {
  """
    description for query
  """
  query: String! = "hello"
  string: String = "hello"
  number: Int = 10
  float: Float = 10.026
  isTrue: Boolean = false
  enum: Enum! = ONE
  listString: [String!]! = ["hello"]
  date: UTCDateTime
}

scalar UTCDateTime

enum Enum {
  ONE
  TWO
}

type User {
  ID: String!
  name: String!
  email: String!
}

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