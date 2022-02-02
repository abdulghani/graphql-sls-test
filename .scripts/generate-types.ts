import path from "path";
import GraphQLTypeFactory from "src/utils/generate-type";

class GraphQLTypesFactory {
  public async generateTypes() {
    console.log("GENERATING TYPE FROM GRAPHQL...");

    const rootDir = process.cwd();
    const factory = new GraphQLTypeFactory();
    const mergedPath = path.join(rootDir, "./src/graphql.type.ts");

    await factory.generateTypeRelative({
      typePaths: [`${rootDir}/src/modules/**/*.graphql`],
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
    await factory.generateType({
      typePaths: [`${rootDir}/src/modules/**/*.graphql`],
      path: mergedPath,
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

    console.log(`TYPE FILE CREATED:`);
    console.log(mergedPath);
  }
}

const factory = new GraphQLTypesFactory();
factory.generateTypes();
