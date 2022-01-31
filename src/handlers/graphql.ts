import { buildSchema } from "graphql";
import GRAPHQL_GENERATED_SDL from "src/schemas/generated";
import CreateHandler from "../utils/create-handler";

const handler = CreateHandler(async (event) => {
  const schema = buildSchema(GRAPHQL_GENERATED_SDL);

  console.log("SCHEMA", { schema });

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "hello world",
    }),
  };
});

export default handler;
