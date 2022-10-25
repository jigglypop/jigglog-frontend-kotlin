import { atom } from "jotai";
import { IPortfoliosAtom } from "./type";

export const portfoliosAtom = atom<IPortfoliosAtom>({
  portfolios: [],
  error: "",
});
portfoliosAtom.debugLabel = "portfolios";
