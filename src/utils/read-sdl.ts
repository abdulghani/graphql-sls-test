import { mergeTypeDefs } from "@graphql-tools/merge";
import fastGlob from "fast-glob";
import { flatten } from "lodash";
import readFile from "./read-file";

class GraphQLSdlGenerator {
  public async readSdl(
    glob: string | string[],
    ignorePaths?: string | string[]
  ) {
    if (!glob || !glob.length) {
      throw new Error("readSdl glob needs at least 1 argument");
    }
    const ignoreList = (() => {
      if (typeof ignorePaths === "string" && ignorePaths?.trim?.() !== "") {
        return [ignorePaths];
      }
      if (Array.isArray(ignorePaths)) {
        return ignorePaths;
      }
      return undefined;
    })();
    const entries = await fastGlob(glob);
    const filteredEntries = (() => {
      if (ignoreList) {
        return entries.filter((item) =>
          ignoreList.find((ignore) => !item.match(new RegExp(ignore, "i")))
        );
      }
      return entries;
    })();
    const types = await Promise.all(
      filteredEntries.map((item) => readFile(item, { encoding: "utf-8" }))
    );

    const flatTypes = flatten(types);

    return mergeTypeDefs(flatTypes, {
      throwOnConflict: true,
      commentDescriptions: true,
      reverseDirectives: true,
      sort: true,
    });
  }

  public async readSdlList(
    glob: string | string[],
    ignorePaths?: string | string[]
  ) {
    if (!glob || !glob.length) {
      throw new Error("readSdl glob needs at least 1 argument");
    }
    const ignoreList = (() => {
      if (typeof ignorePaths === "string" && ignorePaths?.trim?.() !== "") {
        return [ignorePaths];
      }
      if (Array.isArray(ignorePaths)) {
        return ignorePaths;
      }
      return undefined;
    })();

    const entries = await fastGlob(glob);
    const filteredEntries = (() => {
      if (ignoreList) {
        return entries.filter((item) =>
          ignoreList.find((ignore) => !item.match(new RegExp(ignore, "i")))
        );
      }
      return entries;
    })();
    const sdls = await Promise.all(
      filteredEntries.map((item) => readFile(item, { encoding: "utf-8" }))
    );
    const moduleNames = filteredEntries.map((item) => {
      const splitted = item.split("/");
      return splitted?.[splitted.length - 2]?.toLowerCase?.() ?? undefined;
    });

    return sdls.map((sdl, i) => ({
      sdl,
      path: filteredEntries[i],
      name: moduleNames[i],
    }));
  }
}

export default GraphQLSdlGenerator;
