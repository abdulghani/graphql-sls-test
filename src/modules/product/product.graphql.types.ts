import * as graphql from "graphql";

export type Nullable<T> = T | null | undefined;

export interface Mutation {
  __typename?: "Mutation";
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
  searchProduct(): Array<Nullable<Product>> | Promise<Array<Nullable<Product>>>;
}

export interface GetProductArgs {
  id?: Nullable<string>;
}

export type Resolver = Omit<Mutation, "__typename"> & Omit<Query, "__typename">;
