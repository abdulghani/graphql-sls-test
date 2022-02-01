import { buildSchema, graphql } from "graphql";
import GraphQLResolver from "src/graphql.resolver";
import GRAPHQL_GENERATED_SDL from "src/graphql.sdl";
import CreateHandler from "../utils/create-handler";

const handler = CreateHandler(async (event) => {
  const schema = buildSchema(GRAPHQL_GENERATED_SDL);
  const resolver = new GraphQLResolver();

  const res = await graphql({
    schema,
    rootValue: resolver,
    source: "{ hello }",
  });
  console.log("SCHEMA", { schema, res });

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "hello world",
      res,
    }),
  };
});

export default handler;
