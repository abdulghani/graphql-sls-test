/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * npm i -D @adgstudio/graphql-generator (version 0.1.18)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

import * as graphql from "graphql";

export const SayHelloObjRes = new graphql.GraphQLObjectType({
  name: "SayHelloObjRes",
  fields: { name: { type: graphql.GraphQLString } },
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
