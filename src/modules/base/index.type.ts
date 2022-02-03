
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Enum {
    ONE = "ONE",
    TWO = "TWO"
}

export interface SearchInput {
    query: string;
    string?: Nullable<string>;
    number?: Nullable<number>;
    float?: Nullable<number>;
    isTrue?: Nullable<boolean>;
    enum: Enum;
    listString: string[];
    date?: Nullable<UTCDateTime>;
}

export interface CreateInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
}

export interface CommonUser {
    ID?: Nullable<string>;
    name?: Nullable<string>;
}

export interface BaseQuery {
    __typename?: 'BaseQuery';
    hello(): Nullable<string> | Promise<Nullable<string>>;
    searchHello(payload?: Nullable<SearchInput>): Nullable<string> | Promise<Nullable<string>>;
    multipleInput(payload?: Nullable<SearchInput>, name: string): Nullable<string> | Promise<Nullable<string>>;
    sayHello(name?: Nullable<string>): Nullable<string> | Promise<Nullable<string>>;
    aHello(): Nullable<string> | Promise<Nullable<string>>;
}

export interface BaseMutation {
    __typename?: 'BaseMutation';
    createHello(payload?: Nullable<CreateInput>): Nullable<string> | Promise<Nullable<string>>;
}

export interface User {
    __typename?: 'User';
    ID: string;
    name: string;
    email: string;
}

export interface MyUser extends CommonUser {
    __typename?: 'MyUser';
    ID?: Nullable<string>;
    name?: Nullable<string>;
    addedField?: Nullable<string>;
}

export type UTCDateTime = any;
export type MyUnion = MyUser | User;
export type BaseResolver = Omit<BaseQuery, '__typename'> & Omit<BaseMutation, '__typename'>;
type Nullable<T> = T | null;
