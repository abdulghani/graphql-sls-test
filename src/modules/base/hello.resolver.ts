import "reflect-metadata";
import { IQuery } from "./index.type";

class HelloResolver implements IQuery {
  public async hello(): Promise<string> {
    return "hello world";
  }
}

export default HelloResolver;
