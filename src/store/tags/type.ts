import { ICategoryTag } from "../../type/category";
import { IPost } from "../../type/post";

export type ITagsAtom = {
  tags: ICategoryTag[];
  error: string;
};
