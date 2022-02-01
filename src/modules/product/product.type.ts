
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface ProductQuery {
    __typename?: 'ProductQuery';
    getProduct(id?: Nullable<string>): Nullable<string> | Promise<Nullable<string>>;
}

export interface ProductMutation {
    __typename?: 'ProductMutation';
    createProduct(id?: Nullable<string>): Nullable<string> | Promise<Nullable<string>>;
    editProduct(id?: Nullable<string>): Nullable<string> | Promise<Nullable<string>>;
}

export type ProductResolver = Omit<ProductQuery, '__typename'> & Omit<ProductMutation, '__typename'>;
type Nullable<T> = T | null;
