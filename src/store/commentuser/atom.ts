import { atom } from "jotai";
import { ICommentUserFormAtom } from "./type";

export const commentUserFormAtom = atom<ICommentUserFormAtom>({
  username: "",
  password: "",
});
commentUserFormAtom.debugLabel = "commentuser";
