import path from "path";
import GraphQLTypeFactory from "src/utils/generate-type";

async function generateTypes() {
  console.log("GENERATING TYPE FROM GRAPHQL...");

  const rootDir = process.cwd();
  const factory = new GraphQLTypeFactory();
  const typePath = path.join(rootDir, "./src/types/graphql.ts");

  await factory.generateType({
    typePaths: [`${rootDir}/src/**/*.graphql`],
    path: typePath,
    outputAs: "interface",
    emitTypenameField: true,
    enumsAsTypes: false,
    watch: false,
    debug: false,
    federation: false,
    skipResolverArgs: false,
    customScalarTypeMapping: {
      DateTime: "string",
    },
  });

  console.log(`TYPE FILE CREATED (${typePath})`);
}

generateTypes();
