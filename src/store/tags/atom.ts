import { atom } from "jotai";
import { ITagsAtom } from "./type";

export const tagsAtom = atom<ITagsAtom>({
  tags: [],
  error: "",
});
tagsAtom.debugLabel = "tags";
