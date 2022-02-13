/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

import * as graphql from "graphql";

export const UserBase = new graphql.GraphQLInterfaceType({
  name: "UserBase",
  fields: {
    name: { type: graphql.GraphQLString },
    email: { type: graphql.GraphQLString },
  },
});

export const User = new graphql.GraphQLObjectType({
  name: "User",
  interfaces: [UserBase],
  fields: {
    id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString },
    email: { type: graphql.GraphQLString },
  },
});

export const UUser = new graphql.GraphQLObjectType({
  name: "UUser",
  fields: {
    name: { type: graphql.GraphQLString },
    email: { type: graphql.GraphQLString },
  },
});

export const SayHelloObjRes = new graphql.GraphQLObjectType({
  name: "SayHelloObjRes",
  fields: { name: { type: graphql.GraphQLString }, user: { type: UUser } },
});

export const Product = new graphql.GraphQLObjectType({
  name: "Product",
  fields: {
    id: { type: graphql.GraphQLString },
    title: { type: graphql.GraphQLString },
    description: { type: graphql.GraphQLString },
  },
});

export const Query = new graphql.GraphQLObjectType({
  name: "Query",
  description: "description for query",
  fields: {
    getProduct: {
      type: Product,
      args: { id: { type: graphql.GraphQLString } },
    },
    getUser: { type: User, args: { id: { type: graphql.GraphQLString } } },
    hello: { type: graphql.GraphQLString, description: "say hello" },
    sayHello: {
      type: graphql.GraphQLString,
      description: "say hello with a name",
      args: {
        name: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
      },
    },
    sayHelloObj: {
      type: SayHelloObjRes,
      args: {
        name: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
      },
    },
    searchProduct: { type: new graphql.GraphQLList(Product) },
    searchUser: { type: new graphql.GraphQLList(User) },
  },
});

export const AddUserInput = new graphql.GraphQLInputObjectType({
  name: "AddUserInput",
  fields: {
    name: { type: graphql.GraphQLString },
    email: { type: graphql.GraphQLString },
  },
});

export const Mutation = new graphql.GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: { type: User, args: { payload: { type: AddUserInput } } },
    createProduct: {
      type: graphql.GraphQLString,
      args: { id: { type: graphql.GraphQLString } },
    },
    editProduct: {
      type: graphql.GraphQLString,
      args: { id: { type: graphql.GraphQLString } },
    },
  },
});
