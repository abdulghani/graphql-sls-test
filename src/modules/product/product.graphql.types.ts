/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

import * as graphql from "graphql";
import GraphqlContext from "../../types/context";

export type Nullable<T> = T | null | undefined;

export type Promisable<T> = T | Promise<T>;

export type GraphqlResolverArgs<TSource = any, TArgs = any> = {
  source: TSource;
  args: TArgs;
  context: GraphqlContext;
  info: graphql.GraphQLResolveInfo;
};

export type GraphqlFieldResolver<TSource, TArgs, TResult> = (
  args: GraphqlResolverArgs<TSource, TArgs>
) => Promisable<TResult>;

export type Resolvable<TSource, TResult, TArgs = {}> =
  | TResult
  | GraphqlFieldResolver<TSource, TArgs, TResult>;

export interface Product {
  __typename?: "Product";
  description?: Nullable<string>;
  id?: Nullable<string>;
  title?: Nullable<string>;
}

export interface Query {
  __typename?: "Query";
  getProduct({
    source,
    args,
    context,
    info,
  }: GraphqlResolverArgs<this, GetProductArgs>): Promisable<Nullable<Product>>;
  searchProduct(): Promisable<Array<Nullable<Product>>>;
}

export interface GetProductArgs {
  id?: Nullable<string>;
}

export interface Mutation {
  __typename?: "Mutation";
  createProduct({
    source,
    args,
    context,
    info,
  }: GraphqlResolverArgs<this, CreateProductArgs>): Promisable<
    Nullable<string>
  >;
  editProduct({
    source,
    args,
    context,
    info,
  }: GraphqlResolverArgs<this, EditProductArgs>): Promisable<Nullable<string>>;
}

export interface CreateProductArgs {
  id?: Nullable<string>;
}

export interface EditProductArgs {
  id?: Nullable<string>;
}

export type Resolver = Omit<Mutation, "__typename"> & Omit<Query, "__typename">;
