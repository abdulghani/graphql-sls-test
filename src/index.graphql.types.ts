/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * npm i -D @adgstudio/graphql-generator (version 0.1.19)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

import * as graphql from "graphql";
import GraphqlContext from "./types/context";

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

export interface SayHelloObjRes {
  __typename?: "SayHelloObjRes";
  name?: Nullable<string>;
  user?: Resolvable<this, Nullable<MyUser>>;
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
  sayHelloArr({
    source,
    args,
    context,
    info,
  }: GraphqlResolverArgs<this, SayHelloArrArgs>): Promisable<
    Array<Nullable<SayHelloObjRes>>
  >;
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
  saveHello({
    source,
    args,
    context,
    info,
  }: GraphqlResolverArgs<this, SaveHelloArgs>): Promisable<Nullable<string>>;
}

export interface SaveHelloArgs {
  name: string;
}

export type Resolver = Omit<Mutation, "__typename"> & Omit<Query, "__typename">;
