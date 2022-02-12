import { GraphqlObjectGenerator } from "@adgstudio/graphql-generator";
import path from "path";

async function generateObject() {
  const instance = new GraphqlObjectGenerator();
  const outputPath = path.join(process.cwd(), "./src/index.graphql.object.ts");

  await instance.generate("./src/modules/**/*.graphql");
  await instance.generate("./src/modules/**/*.graphql", { outputPath });
}

generateObject();
