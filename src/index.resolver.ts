import { GraphQLResolveInfo } from "graphql";
import {
  AddUserArgs,
  CreateProductArgs,
  EditProductArgs,
  GetProductArgs,
  GetUserArgs,
  Nullable,
  Product,
  Resolver as _Resolver,
  SayHelloArgs,
  User,
} from "./index.graphql.types";

class Resolver implements _Resolver {
  addUser(
    args: AddUserArgs,
    context: any,
    info: GraphQLResolveInfo
  ): Nullable<User> | Promise<Nullable<User>> {
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
  getProduct(
    args: GetProductArgs,
    context: any,
    info: GraphQLResolveInfo
  ): Nullable<Product> | Promise<Nullable<Product>> {
    throw new Error("Method not implemented.");
  }
  getUser(
    args: GetUserArgs,
    context: any,
    info: GraphQLResolveInfo
  ): Nullable<User> | Promise<Nullable<User>> {
    throw new Error("Method not implemented.");
  }
  hello(): Nullable<string> | Promise<Nullable<string>> {
    return "hello world";
  }
  sayHello(
    args: SayHelloArgs,
    context: any,
    info: GraphQLResolveInfo
  ): Nullable<string> | Promise<Nullable<string>> {
    return `hello ${args.name ?? "world"}`;
  }
  searchProduct(): Nullable<Product>[] | Promise<Nullable<Product>[]> {
    throw new Error("Method not implemented.");
  }
  searchUser(): Nullable<User>[] | Promise<Nullable<User>[]> {
    throw new Error("Method not implemented.");
  }
}

export default Resolver;
