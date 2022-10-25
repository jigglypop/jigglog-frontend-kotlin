import { IPost } from "../../type/post";

export type ICategoryAtom = {
  posts: IPost[];
  page: number;
  last: number;
};
