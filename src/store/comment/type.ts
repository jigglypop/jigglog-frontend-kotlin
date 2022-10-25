import { IComments } from "../../type/comment";

export type ICommentsFormAtom = {
  content: string;
};

export type ICommentsOpenAtom = {
  openId: number;
};

export type ICommentsAtom = {
  comments: IComments[] | null;
  error: string;
};
