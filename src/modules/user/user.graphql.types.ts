import * as graphql from "graphql";

export type Nullable<T> = T | null | undefined;

export interface Mutation {
  __typename?: "Mutation";
  addUser(
    args: AddUserArgs,
    context: any,
    info: graphql.GraphQLResolveInfo
  ): Nullable<string> | Promise<Nullable<string>>;
}

export interface AddUserArgs {
  id?: Nullable<string>;
}

export interface Query {
  __typename?: "Query";
  getUser(
    args: GetUserArgs,
    context: any,
    info: graphql.GraphQLResolveInfo
  ): Nullable<string> | Promise<Nullable<string>>;
}

export interface GetUserArgs {
  id?: Nullable<string>;
}

export type Resolver = Omit<Mutation, "__typename"> & Omit<Query, "__typename">;
