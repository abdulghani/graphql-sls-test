import * as graphql from "graphql";
import bigjson from "json-bigint";
import HelloResolver from "src/modules/base/hello.resolver";
import { Query } from "src/modules/base/index.object";
import CreateHandler from "../utils/create-handler";

const handler = CreateHandler(async (event) => {
  const { operationName, variables, query } = bigjson.parse(event.body ?? "{}");
  const resolver = new HelloResolver();
  const schema = new graphql.GraphQLSchema({ query: Query });

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
