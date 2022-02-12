import { GraphQLResolveInfo } from "graphql";
import {
  AddUserArgs,
  CreateHelloArgs,
  CreateProductArgs,
  EditProductArgs,
  GetProductArgs,
  GetUserArgs,
  MultipleInputArgs,
  MyUser,
  Nullable,
  Resolver,
  SayHelloArgs,
  SearchHelloArgs,
} from "./index.graphql.types";

class BaseResolver implements Resolver {
  addUser(
    args: AddUserArgs,
    context: any,
    info: GraphQLResolveInfo
  ): Nullable<string> | Promise<Nullable<string>> {
    throw new Error("Method not implemented.");
  }
  createHello(
    args: CreateHelloArgs,
    context: any,
    info: GraphQLResolveInfo
  ): Nullable<string> | Promise<Nullable<string>> {
    throw new Error("Method not implemented.");
  }
  createProduct(
    args: CreateProductArgs,
    context: any,
    info: GraphQLResolveInfo
  ): Nullable<string> | Promise<Nullable<string>> {
    throw new Error("Method not implemented.");
  }
  editProduct(
    args: EditProductArgs,
    context: any,
    info: GraphQLResolveInfo
  ): Nullable<string> | Promise<Nullable<string>> {
    throw new Error("Method not implemented.");
  }
  aHello(): Nullable<MyUser> | Promise<Nullable<MyUser>> {
    throw new Error("Method not implemented.");
  }
  getProduct(
    args: GetProductArgs,
    context: any,
    info: GraphQLResolveInfo
  ): Nullable<string> | Promise<Nullable<string>> {
    throw new Error("Method not implemented.");
  }
  getUser(
    args: GetUserArgs,
    context: any,
    info: GraphQLResolveInfo
  ): Nullable<string> | Promise<Nullable<string>> {
    throw new Error("Method not implemented.");
  }
  hello(): Nullable<string> | Promise<Nullable<string>> {
    return "hello world";
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
    return `hello ${args.name ?? "world"}`;
  }
  searchHello(
    args: SearchHelloArgs,
    context: any,
    info: GraphQLResolveInfo
  ): Nullable<string> | Promise<Nullable<string>> {
    throw new Error("Method not implemented.");
  }
}

export default BaseResolver;
