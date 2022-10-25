import { atom } from "jotai";
import { ICommentsAtom, ICommentsFormAtom, ICommentsOpenAtom } from "./type";

export const commentFormAtom = atom<ICommentsFormAtom>({
  content: "",
});
commentFormAtom.debugLabel = "comment_form";

export const commentsOpenAtom = atom<ICommentsOpenAtom>({
  openId: 0,
});
commentsOpenAtom.debugLabel = "comments_open";

export const commentsAtom = atom<ICommentsAtom>({
  comments: null,
  error: "",
});
commentsAtom.debugLabel = "comments";
