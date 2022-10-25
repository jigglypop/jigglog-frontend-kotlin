import { atom } from "jotai";
import { ITagAtom } from "./type";

export const TagAtom = atom<ITagAtom>({
  posts: [],
  page: 0,
  last: 0,
});
TagAtom.debugLabel = "tag";
