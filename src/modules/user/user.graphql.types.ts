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

export interface UserBase {
  name?: Nullable<string>;
  email?: Nullable<string>;
}

export interface User extends UserBase {
  __typename?: "User";
  email?: Nullable<string>;
  id?: Nullable<string>;
  name?: Nullable<string>;
}

export interface Query {
  __typename?: "Query";
  getUser({
    source,
    args,
    context,
    info,
  }: GraphqlResolverArgs<this, GetUserArgs>): Promisable<Nullable<User>>;
  searchUser(): Promisable<Array<Nullable<User>>>;
}

export interface GetUserArgs {
  id?: Nullable<string>;
}

export interface AddUserInput {
  name?: Nullable<string>;
  email?: Nullable<string>;
}

export interface Mutation {
  __typename?: "Mutation";
  addUser({
    source,
    args,
    context,
    info,
  }: GraphqlResolverArgs<this, AddUserArgs>): Promisable<Nullable<User>>;
}

export interface AddUserArgs {
  payload?: Nullable<AddUserInput>;
}

export type Resolver = Omit<Mutation, "__typename"> & Omit<Query, "__typename">;
