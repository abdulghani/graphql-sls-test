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
  createProduct(
    args: CreateProductArgs,
    context: any,
    info: graphql.GraphQLResolveInfo
  ): Nullable<string> | Promise<Nullable<string>>;
  editProduct(
    args: EditProductArgs,
    context: any,
    info: graphql.GraphQLResolveInfo
  ): Nullable<string> | Promise<Nullable<string>>;
}

export interface AddUserArgs {
  payload?: Nullable<AddUserInput>;
}

export interface CreateProductArgs {
  id?: Nullable<string>;
}

export interface EditProductArgs {
  id?: Nullable<string>;
}

export interface Product {
  __typename?: "Product";
  description: Nullable<string>;
  id: Nullable<string>;
  title: Nullable<string>;
}

export interface Query {
  __typename?: "Query";
  getProduct(
    args: GetProductArgs,
    context: any,
    info: graphql.GraphQLResolveInfo
  ): Nullable<Product> | Promise<Nullable<Product>>;
  getUser(
    args: GetUserArgs,
    context: any,
    info: graphql.GraphQLResolveInfo
  ): Nullable<User> | Promise<Nullable<User>>;
  hello(): Nullable<string> | Promise<Nullable<string>>;
  sayHello(
    args: SayHelloArgs,
    context: any,
    info: graphql.GraphQLResolveInfo
  ): Nullable<string> | Promise<Nullable<string>>;
  searchProduct(): Array<Nullable<Product>> | Promise<Array<Nullable<Product>>>;
  searchUser(): Array<Nullable<User>> | Promise<Array<Nullable<User>>>;
}

export interface GetProductArgs {
  id?: Nullable<string>;
}

export interface GetUserArgs {
  id?: Nullable<string>;
}

export interface SayHelloArgs {
  name: string;
}

export interface User extends UserBase {
  __typename?: "User";
  email: Nullable<string>;
  id: Nullable<string>;
  name: Nullable<string>;
}

export type Resolver = Omit<Mutation, "__typename"> & Omit<Query, "__typename">;
