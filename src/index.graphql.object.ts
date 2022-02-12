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

export const CommonUser = new graphql.GraphQLInterfaceType({
  name: "CommonUser",
  fields: {
    ID: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString },
  },
});

export const MyUser = new graphql.GraphQLObjectType({
  name: "MyUser",
  interfaces: [CommonUser],
  fields: {
    ID: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString },
    addedField: { type: graphql.GraphQLString },
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

export const CreateInput = new graphql.GraphQLInputObjectType({
  name: "CreateInput",
  fields: {
    name: { type: graphql.GraphQLString },
    email: { type: graphql.GraphQLString },
  },
});

export const PaginationInput = new graphql.GraphQLInputObjectType({
  name: "PaginationInput",
  fields: {
    cursor: { type: graphql.GraphQLString },
    limit: { type: graphql.GraphQLInt },
  },
});

export const ParamInput = new graphql.GraphQLInputObjectType({
  name: "ParamInput",
  fields: {
    name: { type: graphql.GraphQLString },
    email: { type: graphql.GraphQLString },
  },
});

export const SearchInput = new graphql.GraphQLInputObjectType({
  name: "SearchInput",
  fields: {
    pagination: { type: PaginationInput },
    param: { type: ParamInput },
  },
});

export const MyUnion = new graphql.GraphQLUnionType({
  name: "MyUnion",
  description: "describe union",
  types: [MyUser, User],
});

export const Mutation = new graphql.GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: graphql.GraphQLString,
      args: { id: { type: graphql.GraphQLString } },
    },
    createHello: {
      type: graphql.GraphQLString,
      args: { payload: { type: CreateInput } },
    },
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

export const Query = new graphql.GraphQLObjectType({
  name: "Query",
  description: "description for query",
  fields: {
    aHello: { type: MyUser },
    getProduct: {
      type: graphql.GraphQLString,
      args: { id: { type: graphql.GraphQLString } },
    },
    getUser: {
      type: graphql.GraphQLString,
      args: { id: { type: graphql.GraphQLString } },
    },
    hello: { type: graphql.GraphQLString, description: "description for this" },
    multipleInput: {
      type: graphql.GraphQLString,
      args: {
        payload: { type: SearchInput },
        name: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
      },
    },
    sayHello: {
      type: graphql.GraphQLString,
      args: { name: { type: graphql.GraphQLString } },
    },
    searchHello: {
      type: graphql.GraphQLString,
      args: { payload: { type: SearchInput } },
    },
  },
});
