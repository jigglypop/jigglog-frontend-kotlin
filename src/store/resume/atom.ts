import { atom } from "jotai";
import { IResumeAtom } from "./type";

export const resumeAtom = atom<IResumeAtom>({
  resume: null,
  error: "",
});
resumeAtom.debugLabel = "resume";
