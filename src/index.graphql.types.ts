/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
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
  getUser({
    source,
    args,
    context,
    info,
  }: GraphqlResolverArgs<this, GetUserArgs>): Promisable<Nullable<User>>;
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
  searchProduct(): Promisable<Array<Nullable<Product>>>;
  searchUser(): Promisable<Array<Nullable<User>>>;
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

export interface SayHelloObjArgs {
  name: string;
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

export interface AddUserArgs {
  payload?: Nullable<AddUserInput>;
}

export interface CreateProductArgs {
  id?: Nullable<string>;
}

export interface EditProductArgs {
  id?: Nullable<string>;
}

export type Resolver = Omit<Mutation, "__typename"> & Omit<Query, "__typename">;
