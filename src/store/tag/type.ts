import { IPost } from "../../type/post";

export type ITagAtom = {
  posts: IPost[];
  page: number;
  last: number;
};
