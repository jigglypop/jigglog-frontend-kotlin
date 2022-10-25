import { atom } from "jotai";
import { ICategoryAtom } from "./type";

export const categoriesAtom = atom<ICategoryAtom>({
  categories: [],
  error: "",
});
categoriesAtom.debugLabel = "categories";
