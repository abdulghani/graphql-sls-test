import { gql } from "apollo-server-core";
import path from "path";
import GraphqlTypeFactory from "../graphql-type-factory";
import GraphQLSdlGenerator from "../read-sdl";

jest.setTimeout(0);

describe("test type factory", () => {
  it("works", async () => {
    const sdlReader = new GraphQLSdlGenerator();
    const instance = new GraphqlTypeFactory();

    const sdl = await sdlReader.readSdl("**/base/index.graphql");
    await instance.generate({
      sdl: gql`
        ${sdl}
      `,
      config: {
        outputPath: path.join(
          process.cwd(),
          "./src/modules/base/index.types.ts"
        ),
      },
    });
  });
});
