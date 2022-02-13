/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

import * as graphql from "graphql";

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
      args: {
        name: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
      },
    },
  },
});
