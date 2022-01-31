
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IQuery {
    __typename?: 'IQuery';
    hello(): Nullable<string> | Promise<Nullable<string>>;
    getUser(): Nullable<string> | Promise<Nullable<string>>;
}

export interface ISchema {
    Query: IQuery;
}

export interface IQuery {
}

type Nullable<T> = T | null;
