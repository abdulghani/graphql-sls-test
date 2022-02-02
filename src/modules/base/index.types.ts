type Nullable<T> = T | null | undefined;

export enum Enum {
  ONE = "ONE",
  TWO = "TWO",
}

export interface CreateInput {
  name?: Nullable<string>;
  email?: Nullable<string>;
}

export interface SearchInput {
  query: string;
  string?: Nullable<string>;
  number?: Nullable<number>;
  float?: Nullable<number>;
  isTrue?: Nullable<boolean>;
  enum: Enum;
  listString: Array<string>;
  date?: Nullable<UTCDateTime>;
}

export interface CommonUser {
  ID?: Nullable<string>;
  name?: Nullable<string>;
}

export interface MyUser extends CommonUser {
  __typename?: "MyUser";
  ID: Nullable<string>;
  name: Nullable<string>;
  addedField: Nullable<string>;
}

export interface Query {
  __typename?: "Query";
  hello: Nullable<string>;
  searchHello(
    payload?: Nullable<SearchInput>
  ): Nullable<string> | Promise<Nullable<string>>;
  multipleInput(
    name: string,
    payload?: Nullable<SearchInput>
  ): Nullable<string> | Promise<Nullable<string>>;
  sayHello(
    name?: Nullable<string>
  ): Nullable<string> | Promise<Nullable<string>>;
  createHello(
    payload?: Nullable<CreateInput>
  ): Nullable<string> | Promise<Nullable<string>>;
}

export interface User {
  __typename?: "User";
  ID: string;
  name: string;
  email: string;
}

export type UTCDateTime = any;

export type MyUnion = string | number | number;
