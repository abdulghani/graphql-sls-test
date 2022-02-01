import { writeFileSync } from "fs";
import path from "path";
import GraphQLSdlGenerator from "src/utils/read-sdl";

class GraphQLSDLFactory {
  private graphqlSdlGenerator: GraphQLSdlGenerator;
  private readonly DEFINITIONS_FILE_HEADER = `/*
   * -------------------------------------------------------
   * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
   * -------------------------------------------------------
   */
  
  /* tslint:disable */
  /* eslint-disable */\n\n`;

  constructor() {
    this.graphqlSdlGenerator = new GraphQLSdlGenerator();
  }

  private format(str: string) {
    const varName = "GRAPHQL_GENERATED_SDL";
    const starter = `const ${varName} = \`\n`;
    const closer = `\n\` as const;\n\nexport default ${varName};`;

    return [this.DEFINITIONS_FILE_HEADER, starter, str, closer].join("");
  }

  public async generateSdl() {
    console.log("GENERATING GRAPHQL SDL...");
    const sdl = await this.graphqlSdlGenerator.readSdl(
      "./src/modules/**/*.graphql"
    );

    const filePath = path.resolve(process.cwd(), "./src/graphql.sdl.ts");
    writeFileSync(filePath, this.format(sdl), { encoding: "utf-8" });

    console.log(`GRAPHQL SDL CREATED (${filePath})`);
  }
}

const factory = new GraphQLSDLFactory();
factory.generateSdl();
