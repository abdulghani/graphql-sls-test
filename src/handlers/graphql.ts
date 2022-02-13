import { FieldResolver } from "@adgstudio/graphql-generator/dist/utils";
import * as graphql from "graphql";
import { Mutation, Query } from "src/index.graphql.object";
import Resolver from "src/index.resolver";
import bigjson from "src/utils/big-json";
import CreateHandler from "../utils/create-handler";

const handler = CreateHandler(async (event) => {
  const { operationName, variables, query } = bigjson.parse(event.body ?? "{}");
  const schema = new graphql.GraphQLSchema({
    query: Query,
    mutation: Mutation,
  });
  const resolver = new Resolver();

  const res = await graphql.graphql({
    schema,
    source: query,
    rootValue: resolver,
    operationName: operationName,
    variableValues: variables,
    fieldResolver: FieldResolver,
  });

  return {
    statusCode: 200,
    body: bigjson.stringify(res),
  };
});

export default handler;
