import { atom } from "jotai";
import { IPostAtom } from "./type";

export const postAtom = atom<IPostAtom>({
  post: null,
  error: "",
});
postAtom.debugLabel = "post";
