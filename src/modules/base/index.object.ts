/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
import * as graphql from "graphql";

export const UTCDateTime = new graphql.GraphQLScalarType({
  name: "UTCDateTime",
});

export const Enum = new graphql.GraphQLEnumType({
  name: "Enum",
  values: { ONE: { value: "ONE" }, TWO: { value: "TWO" } },
});

export const CreateInput = new graphql.GraphQLInputObjectType({
  name: "CreateInput",
  fields: {
    name: { type: graphql.GraphQLString },
    email: { type: graphql.GraphQLString },
  },
});

export const SearchInput = new graphql.GraphQLInputObjectType({
  name: "SearchInput",
  fields: {
    query: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      description: "description for query",
      defaultValue: "hello",
    },
    string: { type: graphql.GraphQLString, defaultValue: "hello" },
    number: { type: graphql.GraphQLInt, defaultValue: 10 },
    float: { type: graphql.GraphQLFloat, defaultValue: 10.026 },
    isTrue: { type: graphql.GraphQLBoolean, defaultValue: false },
    enum: { type: new graphql.GraphQLNonNull(Enum), defaultValue: "ONE" },
    listString: {
      type: new graphql.GraphQLNonNull(
        new graphql.GraphQLList(
          new graphql.GraphQLNonNull(graphql.GraphQLString)
        )
      ),
      defaultValue: ["hello"],
    },
    date: { type: UTCDateTime },
  },
});

export const Query = new graphql.GraphQLObjectType({
  name: "Query",
  fields: {
    hello: { type: graphql.GraphQLString, description: "description for this" },
    searchHello: {
      type: graphql.GraphQLString,
      args: { payload: { type: SearchInput } },
    },
    multipleInput: {
      type: graphql.GraphQLString,
      args: {
        payload: { type: SearchInput },
        name: { type: graphql.GraphQLString },
      },
    },
    sayHello: {
      type: graphql.GraphQLString,
      args: { name: { type: graphql.GraphQLString } },
    },
    createHello: {
      type: graphql.GraphQLString,
      args: { payload: { type: CreateInput } },
    },
  },
});

export const User = new graphql.GraphQLObjectType({
  name: "User",
  fields: {
    ID: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
    name: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
    email: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
  },
});
