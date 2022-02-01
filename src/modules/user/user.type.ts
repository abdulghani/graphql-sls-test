
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface UserQuery {
    __typename?: 'UserQuery';
    getUser(id?: Nullable<string>): Nullable<string> | Promise<Nullable<string>>;
}

export interface UserMutation {
    __typename?: 'UserMutation';
    addUser(id?: Nullable<string>): Nullable<string> | Promise<Nullable<string>>;
}

export type UserResolver = Omit<UserQuery, '__typename'> & Omit<UserMutation, '__typename'>;
type Nullable<T> = T | null;
