/*
   * -------------------------------------------------------
   * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
   * -------------------------------------------------------
   */
  
  /* tslint:disable */
  /* eslint-disable */

const GRAPHQL_GENERATED_SDL = `
schema {
  query: Query
  mutation: Mutation
}

interface CommonUser {
  ID: String
  name: String
}

input CreateInput {
  name: String
  email: String
}

enum Enum {
  ONE
  TWO
}

type Mutation {
  addUser(id: String): String
  createHello(payload: CreateInput): String
  createProduct(id: String): String
  editProduct(id: String): String
}

"""
  describe union
"""
union MyUnion = MyUser | User

type MyUser implements CommonUser {
  ID: String
  name: String
  addedField: String
}

"""
  description for query
"""
type Query {
  getProduct(id: String): String
  getUser(id: String): String
  """
    description for this
  """
  hello: String
  multipleInput(payload: SearchInput, name: String!): String
  sayHello(name: String): String
  searchHello(payload: SearchInput): String
}

input SearchInput {
  """
    description for search input
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

type User {
  ID: String!
  name: String!
  email: String!
}
` as const;

export default GRAPHQL_GENERATED_SDL;