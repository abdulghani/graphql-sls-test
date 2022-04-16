/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * npm i -D @adgstudio/graphql-generator (version 0.1.21)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

import * as graphql from "graphql";
import IMPORTED_CONTEXT from "../../types/context";

export type Nullable<T> = T | null | undefined;

export type Promisable<T> = T | Promise<T>;

export interface GraphqlContext extends IMPORTED_CONTEXT {
  entityResolvers: EntityResolver;
}

export type GraphqlResolverArgs<TSource = any, TArgs = any> = {
  source: TSource;
  args: TArgs;
  context: GraphqlContext;
  info: graphql.GraphQLResolveInfo;
};

export type GraphqlFieldResolver<TSource, TArgs, TResult> = (
  source: TSource,
  args: TArgs,
  context: GraphqlContext,
  info: graphql.GraphQLResolveInfo
) => Promisable<TResult>;

export type Resolvable<TSource, TResult> =
  | TResult
  | GraphqlFieldResolver<TSource, unknown, TResult>;

export interface SayHelloObjRes {
  __typename?: "SayHelloObjRes";
  name?: Nullable<string>;
  user?: Resolvable<this, Nullable<MyUser>>;
}

export interface Query {
  __typename?: "Query";
  hello(): Promisable<Nullable<string>>;
  sayHello(
    source: unknown,
    args: SayHelloArgs,
    context: GraphqlContext,
    info: graphql.GraphQLResolveInfo
  ): Promisable<Nullable<string>>;
  sayHelloArr(
    source: unknown,
    args: SayHelloArrArgs,
    context: GraphqlContext,
    info: graphql.GraphQLResolveInfo
  ): Promisable<Array<Nullable<SayHelloObjRes>>>;
  sayHelloObj(
    source: unknown,
    args: SayHelloObjArgs,
    context: GraphqlContext,
    info: graphql.GraphQLResolveInfo
  ): Promisable<Nullable<SayHelloObjRes>>;
}

export interface SayHelloArgs {
  name: string;
}

export interface SayHelloArrArgs {
  name: string;
}

export interface SayHelloObjArgs {
  name: string;
}

export interface MyUser {
  __typename?: "MyUser";
  age?: Nullable<number>;
  id?: Nullable<string>;
  isAdult: boolean;
}

export interface Mutation {
  __typename?: "Mutation";
  saveHello(
    source: unknown,
    args: SaveHelloArgs,
    context: GraphqlContext,
    info: graphql.GraphQLResolveInfo
  ): Promisable<Nullable<string>>;
}

export interface SaveHelloArgs {
  name: string;
}

export interface EntityResolver {
  resolveSayHelloObjRes?(
    source: unknown,
    args: unknown,
    context: GraphqlContext,
    info: graphql.GraphQLResolveInfo
  ): Promise<SayHelloObjRes | undefined>;
  resolveQuery?(
    source: unknown,
    args: unknown,
    context: GraphqlContext,
    info: graphql.GraphQLResolveInfo
  ): Promise<Query | undefined>;
  resolveMyUser?(
    source: unknown,
    args: unknown,
    context: GraphqlContext,
    info: graphql.GraphQLResolveInfo
  ): Promise<MyUser | undefined>;
  resolveMutation?(
    source: unknown,
    args: unknown,
    context: GraphqlContext,
    info: graphql.GraphQLResolveInfo
  ): Promise<Mutation | undefined>;
}

export interface Resolver
  extends Omit<Mutation, "__typename">,
    Omit<Query, "__typename"> {}
