import * as graphql from "graphql";
import CreateHandler from "../utils/create-handler";

const handler = CreateHandler(async (event) => {
  // const schema = graphql.buildSchema(GRAPHQL_GENERATED_SDL, {
  //   assumeValidSDL: true,
  // });
  // const resolver = new GraphQLResolver();

  // Define the Query type
  const queryType = new graphql.GraphQLObjectType({
    name: "Query",
    fields: {
      hello: {
        type: graphql.GraphQLString,
        resolve: () => {
          return "hello world";
        },
      },
    },
  });
  const schema = new graphql.GraphQLSchema({ query: queryType });

  const res = await graphql.graphql({
    schema,
    // rootValue: resolver,
    source: "{ hello }",
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
