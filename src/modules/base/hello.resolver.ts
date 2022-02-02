import "reflect-metadata";
import { BaseResolver, SearchInput } from "./index.type";

class HelloResolver implements BaseResolver {
  sayHello(args: {
    name?: string | null;
  }): (string | null) | Promise<string | null> {
    return `hello ${args.name ?? "world"}`;
  }
  multipleInput(
    payload?: SearchInput | null,
    name?: string | null
  ): (string | null) | Promise<string | null> {
    throw new Error("Method not implemented.");
  }
  searchHello(
    payload?: SearchInput | null
  ): (string | null) | Promise<string | null> {
    throw new Error("Method not implemented.");
  }
  public async hello(): Promise<string> {
    return "hello world";
  }
}

export default HelloResolver;
