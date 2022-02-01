
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

export interface IQuery {
    __typename?: 'IQuery';
    hello(): Nullable<string> | Promise<Nullable<string>>;
    searchHello(payload?: Nullable<SearchInput>): Nullable<string> | Promise<Nullable<string>>;
    getProduct(id?: Nullable<string>): Nullable<string> | Promise<Nullable<string>>;
    getUser(id?: Nullable<string>): Nullable<string> | Promise<Nullable<string>>;
}

export interface IMutation {
    __typename?: 'IMutation';
    createProduct(id?: Nullable<string>): Nullable<string> | Promise<Nullable<string>>;
    editProduct(id?: Nullable<string>): Nullable<string> | Promise<Nullable<string>>;
    addUser(id?: Nullable<string>): Nullable<string> | Promise<Nullable<string>>;
}

export type UTCDateTime = any;

export interface ISchema {
    Query: IQuery;
    Mutation: IMutation;
}

export interface IQuery {
}

export interface IMutation {
}

export type IResolver = Omit<IQuery, '__typename'> & Omit<IMutation, '__typename'>;
type Nullable<T> = T | null;
