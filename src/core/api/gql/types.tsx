export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
};

export type AddPostReq = {
  jsonData: Scalars['String'];
  title: Scalars['String'];
};

export type Collection = {
  __typename?: 'Collection';
  token: Scalars['String'];
  user: User;
};

export type GetPostReq = {
  token: Scalars['String'];
};

export type LoginReq = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addPost: Post;
  login: Scalars['Boolean'];
  logout: Scalars['Boolean'];
  register: Scalars['Boolean'];
  removePost: Scalars['String'];
};


export type MutationAddPostArgs = {
  body: AddPostReq;
};


export type MutationLoginArgs = {
  body: LoginReq;
};


export type MutationRegisterArgs = {
  body: RegisterReq;
};


export type MutationRemovePostArgs = {
  body: RemovePostReq;
};

export type Post = {
  __typename?: 'Post';
  content: Scalars['JSON'];
  created: Scalars['DateTime'];
  title: Scalars['String'];
  token: Scalars['String'];
  updated: Scalars['DateTime'];
  user: User;
};

export type Query = {
  __typename?: 'Query';
  collection: Array<Collection>;
  currentUser: User;
  post: Post;
  posts: Array<Post>;
  users: Array<User>;
};


export type QueryPostArgs = {
  body: GetPostReq;
};

export type RegisterReq = {
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RemovePostReq = {
  token: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  collections: Array<Collection>;
  email: Scalars['String'];
  token: Scalars['String'];
};
