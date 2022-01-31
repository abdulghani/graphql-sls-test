import { mergeTypeDefs } from "@graphql-tools/merge";
import fastGlob from "fast-glob";
import { flatten } from "lodash";
import readFile from "./read-file";

async function readSdl(
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
  });
}

export default readSdl;
