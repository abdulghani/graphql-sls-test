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

export interface Query {
  __typename?: "Query";
  getProduct(
    args: GetProductArgs,
    context: any,
    info: graphql.GraphQLResolveInfo
  ): Nullable<string> | Promise<Nullable<string>>;
}

export interface GetProductArgs {
  id?: Nullable<string>;
}

export type Resolver = Omit<Mutation, "__typename"> & Omit<Query, "__typename">;
