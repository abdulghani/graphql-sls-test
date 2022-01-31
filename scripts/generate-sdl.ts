import { writeFileSync } from "fs";
import path from "path";
import readSdl from "src/utils/read-sdl";

class GraphQLSDLFactory {
  private readonly DEFINITIONS_FILE_HEADER = `/*
   * -------------------------------------------------------
   * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
   * -------------------------------------------------------
   */
  
  /* tslint:disable */
  /* eslint-disable */\n\n`;

  private format(str: string) {
    const varName = "GRAPHQL_GENERATED_SDL";
    const starter = `const ${varName} = \`\n`;
    const closer = `\n\` as const;\n\nexport default ${varName};`;

    return [this.DEFINITIONS_FILE_HEADER, starter, str, closer].join("");
  }

  public async generateSdl() {
    console.log("GENERATING GRAPHQL SDL...");
    const sdl = await readSdl("**/*.graphql", "generated.graphql");

    const filePath = path.resolve(process.cwd(), "./src/schemas/generated.ts");
    writeFileSync(filePath, this.format(sdl), { encoding: "utf-8" });

    console.log(`GRAPHQL SDL CREATED (${filePath})`);
  }
}

const factory = new GraphQLSDLFactory();
factory.generateSdl();
