import { gql } from "apollo-server-core";
import path from "path";
import GraphQLObjectFactory from "src/utils/graphql-object-factory";
import GraphQLSdlGenerator from "src/utils/read-sdl";

async function generateObject() {
  const sdlReader = new GraphQLSdlGenerator();
  const instance = new GraphQLObjectFactory();

  const sdl = await sdlReader.readSdl("**/base/index.graphql");
  await instance.generate({
    sdl: gql`
      ${sdl}
    `,
    outputPath: path.join(process.cwd(), "./src/modules/base/index.object.ts"),
  });
}

generateObject();
