import { GraphqlTypesGenerator } from "@adgstudio/graphql-generator";
import path from "path";

async function main() {
  const outputPath = path.resolve(
    process.cwd(),
    "./src/index.graphql.types.ts"
  );
  const factory = new GraphqlTypesGenerator();

  await factory.generate("./src/modules/**/*.graphql");
  await factory.generate("./src/modules/**/*.graphql", { outputPath });
}

main();
