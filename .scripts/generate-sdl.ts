import { GraphqlSdlFactory } from "@adgstudio/graphql-generator";
import path from "path";

async function main() {
  const outputPath = path.resolve(process.cwd(), "./src/index.graphql");
  const factory = new GraphqlSdlFactory();

  await factory.merge("./src/modules/**/*.graphql", { outputPath });
}

main();
