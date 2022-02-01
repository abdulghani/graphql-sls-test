
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface SearchInput {
    query: string;
}

export interface BaseQuery {
    __typename?: 'BaseQuery';
    hello(): Nullable<string> | Promise<Nullable<string>>;
    searchHello(payload?: Nullable<SearchInput>): Nullable<string> | Promise<Nullable<string>>;
}

export type UTCDateTime = any;
export type BaseResolver = Omit<BaseQuery, '__typename'>;
type Nullable<T> = T | null;
