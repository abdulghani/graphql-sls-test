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

export const Query = new graphql.GraphQLObjectType({
  name: "Query",
  fields: {
    getUser: { type: User, args: { id: { type: graphql.GraphQLString } } },
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
  },
});
