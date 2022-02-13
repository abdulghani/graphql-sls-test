import {
  AddUserArgs,
  CreateProductArgs,
  EditProductArgs,
  GetProductArgs,
  GetUserArgs,
  GraphqlResolverArgs,
  Mutation,
  Nullable,
  Product,
  Promisable,
  Query,
  Resolver as _Resolver,
  SayHelloArgs,
  SayHelloObjArgs,
  SayHelloObjRes,
  User,
} from "./index.graphql.types";

class Resolver implements _Resolver {
  addUser({
    source,
    args,
    context,
    info,
  }: GraphqlResolverArgs<Mutation, AddUserArgs>): Promisable<Nullable<User>> {
    throw new Error("Method not implemented.");
  }
  createProduct({
    source,
    args,
    context,
    info,
  }: GraphqlResolverArgs<Mutation, CreateProductArgs>): Promisable<
    Nullable<string>
  > {
    throw new Error("Method not implemented.");
  }
  editProduct({
    source,
    args,
    context,
    info,
  }: GraphqlResolverArgs<Mutation, EditProductArgs>): Promisable<
    Nullable<string>
  > {
    throw new Error("Method not implemented.");
  }
  getProduct({
    source,
    args,
    context,
    info,
  }: GraphqlResolverArgs<Query, GetProductArgs>): Promisable<
    Nullable<Product>
  > {
    throw new Error("Method not implemented.");
  }
  getUser({
    source,
    args,
    context,
    info,
  }: GraphqlResolverArgs<Query, GetUserArgs>): Promisable<Nullable<User>> {
    throw new Error("Method not implemented.");
  }
  hello(): Promisable<Nullable<string>> {
    return "hello";
  }
  sayHello({
    source,
    args,
    context,
    info,
  }: GraphqlResolverArgs<Query, SayHelloArgs>): Promisable<Nullable<string>> {
    return `hello ${args.name ?? "world"}`;
  }
  async sayHelloObj({
    source,
    args,
    context,
    info,
  }: GraphqlResolverArgs<Query, SayHelloObjArgs>): Promise<
    Nullable<SayHelloObjRes>
  > {
    return {
      name: args.name,
      user: async (args) => {
        return {
          name: args.source.name,
          email: args.source.name + "@mail.com",
        };
      },
    };
  }
  searchProduct(): Promisable<Nullable<Product>[]> {
    throw new Error("Method not implemented.");
  }
  searchUser(): Promisable<Nullable<User>[]> {
    throw new Error("Method not implemented.");
  }
}

export default Resolver;
