import { GraphQLResolveInfo } from "graphql";
import {
  EntityResolver,
  GraphqlContext,
  GraphqlResolverArgs,
  Mutation,
  Nullable,
  Promisable,
  Query,
  Resolver as _Resolver,
  SaveHelloArgs,
  SayHelloArgs,
  SayHelloArrArgs,
  SayHelloObjArgs,
  SayHelloObjRes,
} from "./index.graphql.types";

class Resolver implements _Resolver {
  saveHello(
    source: this,
    args: SaveHelloArgs,
    context: GraphqlContext,
    info: GraphQLResolveInfo
  ): Promisable<Nullable<string>> {
    throw new Error("Method not implemented.");
  }
  hello(): Promisable<Nullable<string>> {
    return "hello world";
  }
  sayHello(
    source: this,
    args: SayHelloArgs,
    context: GraphqlContext,
    info: GraphQLResolveInfo
  ): Promisable<Nullable<string>> {
    return `hello ${args.name ?? "world"}`;
  }
  sayHelloArr(
    source: this,
    args: SayHelloArrArgs,
    context: GraphqlContext,
    info: GraphQLResolveInfo
  ): Promisable<Nullable<SayHelloObjRes>[]> {
    return [
      {
        name: args.name,
      },
    ];
  }
  sayHelloObj(
    source: this,
    args: SayHelloObjArgs,
    context: GraphqlContext,
    info: GraphQLResolveInfo
  ): Promisable<Nullable<SayHelloObjRes>> {
    console.log("source", { source });
    return {
      name: args.name,
    };
  }
}

export default Resolver;
