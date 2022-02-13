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

export interface UUser {
  __typename?: "UUser";
  email?: Nullable<string>;
  name?: Nullable<string>;
}

export interface SayHelloObjRes {
  __typename?: "SayHelloObjRes";
  name?: Nullable<string>;
  user?: Resolvable<this, Nullable<UUser>>;
}

export interface Query {
  __typename?: "Query";
  hello(): Promisable<Nullable<string>>;
  sayHello({
    source,
    args,
    context,
    info,
  }: GraphqlResolverArgs<this, SayHelloArgs>): Promisable<Nullable<string>>;
  sayHelloObj({
    source,
    args,
    context,
    info,
  }: GraphqlResolverArgs<this, SayHelloObjArgs>): Promisable<
    Nullable<SayHelloObjRes>
  >;
}

export interface SayHelloArgs {
  name: string;
}

export interface SayHelloObjArgs {
  name: string;
}

export type Resolver = Omit<Query, "__typename">;
