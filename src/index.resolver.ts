import {
  EntityResolver,
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
  entityResolver: EntityResolver = {
    resolveMyUser: async ({ args, context, info, source }) => {
      return {};
    },
  };

  saveHello({
    source,
    args,
    context,
    info,
  }: GraphqlResolverArgs<Mutation, SaveHelloArgs>): Promisable<
    Nullable<string>
  > {
    throw new Error("Method not implemented.");
  }

  sayHelloArr({
    source,
    args,
    context,
    info,
  }: GraphqlResolverArgs<Query, SayHelloArrArgs>): Promisable<
    Nullable<SayHelloObjRes>[]
  > {
    return [
      {
        name: args.name,
      },
    ];
  }
  sayHelloObj({
    source,
    args,
    context,
    info,
  }: GraphqlResolverArgs<Query, SayHelloObjArgs>): Promisable<
    Nullable<SayHelloObjRes>
  > {
    return {
      name: args.name,
    };
  }
  hello(): Promisable<Nullable<string>> {
    return "hello world";
  }
  sayHello({
    source,
    args,
    context,
    info,
  }: GraphqlResolverArgs<Query, SayHelloArgs>): Promisable<Nullable<string>> {
    return `hello ${args.name ?? "world"}`;
  }
}

export default Resolver;
