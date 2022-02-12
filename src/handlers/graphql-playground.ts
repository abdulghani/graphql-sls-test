import lambdaPlayground from "graphql-playground-middleware-lambda";

const handler = lambdaPlayground({
  endpoint: "/dev/graphql",
  settings: {
    "editor.cursorShape": "block",
    "editor.theme": "dark",
    "schema.polling.enable": false,
    "general.betaUpdates": true,
  },
});

export default handler;
