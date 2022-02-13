/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
import * as graphql from "graphql";

export const Product = new graphql.GraphQLObjectType({
  name: "Product",
  fields: {
    id: { type: graphql.GraphQLString },
    title: { type: graphql.GraphQLString },
    description: { type: graphql.GraphQLString },
  },
});

export const Mutation = new graphql.GraphQLObjectType({
  name: "Mutation",
  fields: {
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
  fields: {
    getProduct: {
      type: Product,
      args: { id: { type: graphql.GraphQLString } },
    },
    searchProduct: { type: new graphql.GraphQLList(Product) },
  },
});
