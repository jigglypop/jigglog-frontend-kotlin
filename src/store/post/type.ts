import { IPost } from "../../type/post";

export type IPostAtom = {
  post: IPost | null;
  error: string;
};
