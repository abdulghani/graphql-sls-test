
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IQuery {
    __typename?: 'IQuery';
    getProduct(id?: Nullable<string>): Nullable<string> | Promise<Nullable<string>>;
}

export interface IMutation {
    __typename?: 'IMutation';
    createProduct(id?: Nullable<string>): Nullable<string> | Promise<Nullable<string>>;
    editProduct(id?: Nullable<string>): Nullable<string> | Promise<Nullable<string>>;
}

export type IResolver = Omit<IQuery, '__typename'> & Omit<IMutation, '__typename'>;
type Nullable<T> = T | null;
