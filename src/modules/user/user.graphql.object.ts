/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
import * as graphql from "graphql";

export const Mutation = new graphql.GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: graphql.GraphQLString,
      args: { id: { type: graphql.GraphQLString } },
    },
  },
});

export const Query = new graphql.GraphQLObjectType({
  name: "Query",
  fields: {
    getUser: {
      type: graphql.GraphQLString,
      args: { id: { type: graphql.GraphQLString } },
    },
  },
});
