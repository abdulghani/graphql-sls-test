/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * npm i -D @adgstudio/graphql-generator (version 0.1.21)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

import * as graphql from "graphql";

export const Mutation = new graphql.GraphQLObjectType({
  name: "Mutation",
  fields: {
    saveHello: {
      type: graphql.GraphQLString,
      args: {
        name: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
      },
    },
  },
});

export const MyUser = new graphql.GraphQLObjectType({
  name: "MyUser",
  fields: {
    id: { type: graphql.GraphQLString },
    age: { type: graphql.GraphQLInt },
    isAdult: { type: new graphql.GraphQLNonNull(graphql.GraphQLBoolean) },
  },
});

export const SayHelloObjRes = new graphql.GraphQLObjectType({
  name: "SayHelloObjRes",
  description: "return type of hello with object",
  fields: { name: { type: graphql.GraphQLString }, user: { type: MyUser } },
});

export const Query = new graphql.GraphQLObjectType({
  name: "Query",
  description: "description for query",
  fields: {
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
      description: "say hello with an object",
      args: {
        name: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
      },
    },
    sayHelloArr: {
      type: new graphql.GraphQLList(SayHelloObjRes),
      description: "say hello with array result",
      args: {
        name: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
      },
    },
  },
});
