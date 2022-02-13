import * as graphql from "graphql";

export type Nullable<T> = T | null | undefined;

export interface Query {
  __typename?: "Query";
  hello(): Nullable<string> | Promise<Nullable<string>>;
  sayHello(
    args: SayHelloArgs,
    context: any,
    info: graphql.GraphQLResolveInfo
  ): Nullable<string> | Promise<Nullable<string>>;
}

export interface SayHelloArgs {
  name: string;
}

export type Resolver = Omit<Query, "__typename">;
