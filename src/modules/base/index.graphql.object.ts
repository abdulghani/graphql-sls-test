/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
import * as graphql from "graphql";

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
  },
});
