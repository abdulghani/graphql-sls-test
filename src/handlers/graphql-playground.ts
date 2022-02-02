import lambdaPlayground from "graphql-playground-middleware-lambda";

const handler = lambdaPlayground({
  endpoint: "/dev/graphql",
  settings: {
    "editor.cursorShape": "block",
    "editor.theme": "dark",
    "schema.polling.enable": false,
  },
  codeTheme: {
    editorBackground: "#000",
    resultBackground: "#0b0b0b",
  } as any,
});

export default handler;
