import { IMutation, IQuery } from "./graphql.type";
import HelloResolver from "./modules/base/hello.resolver";

// THIS FILE SHOULD BE AUTO GENERATED
// CREATE GENERATOR FOR THIS TYPE OF CLASS
class GraphQLResolver implements IQuery, IMutation {
  public helloResolver = new HelloResolver();

  public hello = this.helloResolver.hello;

  getProduct(id?: string | null): (string | null) | Promise<string | null> {
    throw new Error("Method not implemented.");
  }
  getUser(id?: string | null): (string | null) | Promise<string | null> {
    throw new Error("Method not implemented.");
  }

  createProduct(id?: string | null): (string | null) | Promise<string | null> {
    throw new Error("Method not implemented.");
  }

  addUser(id?: string | null): (string | null) | Promise<string | null> {
    throw new Error("Method not implemented.");
  }
}

export default GraphQLResolver;
