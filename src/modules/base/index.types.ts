import * as graphql from "graphql";

export type Nullable<T> = T | null | undefined;

export enum Enum {
  ONE = "ONE",
  TWO = "TWO",
}

export interface CreateInput {
  name?: Nullable<string>;
  email?: Nullable<string>;
}

export interface SearchInput {
  query: string;
  string?: Nullable<string>;
  number?: Nullable<number>;
  float?: Nullable<number>;
  isTrue?: Nullable<boolean>;
  enum: Enum;
  listString: Array<string>;
  date?: Nullable<UTCDateTime>;
}

export interface CommonUser {
  ID?: Nullable<string>;
  name?: Nullable<string>;
}

export interface Mutation {
  __typename?: "Mutation";
  createHello(
    args: CreateHelloArgs,
    context: any,
    info: graphql.GraphQLResolveInfo
  ): Nullable<string> | Promise<Nullable<string>>;
}

export interface CreateHelloArgs {
  payload?: Nullable<CreateInput>;
}

export interface MyUser extends CommonUser {
  __typename?: "MyUser";
  ID: Nullable<string>;
  name: Nullable<string>;
  addedField: Nullable<string>;
}

export interface Query {
  __typename?: "Query";
  hello(): Nullable<string> | Promise<Nullable<string>>;
  searchHello(
    args: SearchHelloArgs,
    context: any,
    info: graphql.GraphQLResolveInfo
  ): Nullable<string> | Promise<Nullable<string>>;
  multipleInput(
    args: MultipleInputArgs,
    context: any,
    info: graphql.GraphQLResolveInfo
  ): Nullable<string> | Promise<Nullable<string>>;
  sayHello(
    args: SayHelloArgs,
    context: any,
    info: graphql.GraphQLResolveInfo
  ): Nullable<string> | Promise<Nullable<string>>;
}

export interface SearchHelloArgs {
  payload?: Nullable<SearchInput>;
}

export interface MultipleInputArgs {
  name: string;
  payload?: Nullable<SearchInput>;
}

export interface SayHelloArgs {
  name?: Nullable<string>;
}

export interface User {
  __typename?: "User";
  ID: string;
  name: string;
  email: string;
}

export type UTCDateTime = any;

export type MyUnion = MyUser | User;

export type Resolver = Omit<Mutation, "__typename"> & Omit<Query, "__typename">;
