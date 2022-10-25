import { ICategoryTag } from "../../type/category";
import { IPost } from "../../type/post";

export type ICategoryItem = {
  posts: IPost[];
  categories: ICategoryTag[];
  type: "category" | "tag";
  getMorePost: () => Promise<void>;
};
