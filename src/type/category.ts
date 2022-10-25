import { IPost } from "./post";

export type ICategory = {
  id: number;
  title: string;
  posts: IPost[];
};

export type ICategoryTag = {
  id: number;
  title: string;
  posts: IPost[];
};

export type ICategoryHeader = {
  id: number;
  title: string;
  posts: number;
};
