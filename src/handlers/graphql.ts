import * as graphql from "graphql";
import HelloResolver from "src/modules/base/hello.resolver";
import { Query } from "src/modules/base/index.object";
import CreateHandler from "../utils/create-handler";

const handler = CreateHandler(async (event) => {
  // const schema = graphql.buildSchema(GRAPHQL_GENERATED_SDL, {
  //   assumeValidSDL: true,
  // });
  const resolver = new HelloResolver();
  const schema = new graphql.GraphQLSchema({ query: Query });

  const res = await graphql.graphql({
    schema,
    rootValue: resolver,
    source: '{ sayHello(name: "Ghani") }',
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "hello world",
      res,
    }),
  };
});

export default handler;
