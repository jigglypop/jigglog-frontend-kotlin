import { atom } from "jotai";
import { IWriteFormAtom, IWriteUpdateTypeAtom } from "./type";

export const writeFormAtom = atom<IWriteFormAtom>({
  title: "",
  summary: "",
  content: "",
  images: "",
  user: "",
  category_title: "",
  tags: "",
});
writeFormAtom.debugLabel = "write";

export const writeUpdateTypeAtom = atom<IWriteUpdateTypeAtom>({
  type: "",
  id: -1,
});
writeUpdateTypeAtom.debugLabel = "write_update";
