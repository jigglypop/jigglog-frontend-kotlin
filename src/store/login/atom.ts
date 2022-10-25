import { atom } from "jotai";
import { ILoginFormAtom } from "./type";

export const loginFormAtom = atom<ILoginFormAtom>({
  username: "",
  password: "",
});
loginFormAtom.debugLabel = "login";
