import * as graphql from "graphql";

export type Nullable<T> = T | null | undefined;

export interface AddUserInput {
  name?: Nullable<string>;
  email?: Nullable<string>;
}

export interface UserBase {
  name?: Nullable<string>;
  email?: Nullable<string>;
}

export interface Mutation {
  __typename?: "Mutation";
  addUser(
    args: AddUserArgs,
    context: any,
    info: graphql.GraphQLResolveInfo
  ): Nullable<User> | Promise<Nullable<User>>;
}

export interface AddUserArgs {
  payload?: Nullable<AddUserInput>;
}

export interface Query {
  __typename?: "Query";
  getUser(
    args: GetUserArgs,
    context: any,
    info: graphql.GraphQLResolveInfo
  ): Nullable<User> | Promise<Nullable<User>>;
  searchUser(): Array<Nullable<User>> | Promise<Array<Nullable<User>>>;
}

export interface GetUserArgs {
  id?: Nullable<string>;
}

export interface User extends UserBase {
  __typename?: "User";
  email: Nullable<string>;
  id: Nullable<string>;
  name: Nullable<string>;
}

export type Resolver = Omit<Mutation, "__typename"> & Omit<Query, "__typename">;
