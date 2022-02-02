
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

export interface BaseQuery {
    __typename?: 'BaseQuery';
    hello(): Nullable<string> | Promise<Nullable<string>>;
    searchHello(payload?: Nullable<SearchInput>): Nullable<string> | Promise<Nullable<string>>;
    multipleInput(payload?: Nullable<SearchInput>, name?: Nullable<string>): Nullable<string> | Promise<Nullable<string>>;
}

export interface User {
    __typename?: 'User';
    ID: string;
    name: string;
    email: string;
}

export type UTCDateTime = any;
export type BaseResolver = Omit<BaseQuery, '__typename'>;
type Nullable<T> = T | null;
