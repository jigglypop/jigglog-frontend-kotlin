import { atom } from "jotai";
import { IDeleteAtom } from "./type";

export const deleteAtom = atom<IDeleteAtom>({
  id: -1,
});
deleteAtom.debugLabel = "delete";
