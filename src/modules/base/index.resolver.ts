import { GraphQLResolveInfo } from "graphql";
import {
  CreateHelloArgs,
  MultipleInputArgs,
  Nullable,
  Resolver,
  SayHelloArgs,
  SearchHelloArgs,
} from "./index.types";

class BaseResolver implements Resolver {
  createHello(
    args: CreateHelloArgs,
    context: any,
    info: GraphQLResolveInfo
  ): Nullable<string> | Promise<Nullable<string>> {
    throw new Error("Method not implemented.");
  }
  hello(): Nullable<string> | Promise<Nullable<string>> {
    throw new Error("Method not implemented.");
  }
  searchHello(
    args: SearchHelloArgs,
    context: any,
    info: GraphQLResolveInfo
  ): Nullable<string> | Promise<Nullable<string>> {
    throw new Error("Method not implemented.");
  }
  multipleInput(
    args: MultipleInputArgs,
    context: any,
    info: GraphQLResolveInfo
  ): Nullable<string> | Promise<Nullable<string>> {
    throw new Error("Method not implemented.");
  }
  sayHello(
    args: SayHelloArgs,
    context: any,
    info: GraphQLResolveInfo
  ): Nullable<string> | Promise<Nullable<string>> {
    throw new Error("Method not implemented.");
  }
}

export default BaseResolver;
