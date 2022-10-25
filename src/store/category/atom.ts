import { atom } from "jotai";
import { ICategoryAtom } from "./type";

export const categoryAtom = atom<ICategoryAtom>({
  posts: [],
  page: 0,
  last: 0,
});
categoryAtom.debugLabel = "category";
