import { atom } from "jotai";
import { IRegisterFormAtom } from "./type";

export const registerFormAtom = atom<IRegisterFormAtom>({
  username: "",
  password: "",
});
registerFormAtom.debugLabel = "register";
