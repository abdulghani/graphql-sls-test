import CreateHandler from "../utils/create-handler";

const handler = CreateHandler(async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "hello world",
    }),
  };
});

export default handler;
