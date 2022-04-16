import { GraphqlTypesGenerator } from "@adgstudio/graphql-generator";
import path from "path";

async function main() {
  const outputPath = path.resolve(
    process.cwd(),
    "./src/index.graphql.types.ts"
  );
  const factory = new GraphqlTypesGenerator();

  await factory.generate("./src/modules/**/*.graphql", {
    contextTypePath: "./src/types/context.ts",
  });
  await factory.generate("./src/modules/**/*.graphql", {
    outputPath,
    contextTypePath: "./src/types/context.ts",
  });
}

main();
