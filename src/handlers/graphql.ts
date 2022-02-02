import * as graphql from "graphql";
import bigjson from "json-bigint";
import { Query } from "src/modules/base/index.object";
import BaseResolver from "src/modules/base/index.resolver";
import CreateHandler from "../utils/create-handler";

const handler = CreateHandler(async (event) => {
  const { operationName, variables, query } = bigjson.parse(event.body ?? "{}");
  const schema = new graphql.GraphQLSchema({ query: Query });
  const resolver = new BaseResolver();

  const res = await graphql.graphql({
    schema,
    rootValue: resolver,
    source: query,
    operationName,
    variableValues: variables,
  });

  return {
    statusCode: 200,
    body: bigjson.stringify(res),
  };
});

export default handler;
