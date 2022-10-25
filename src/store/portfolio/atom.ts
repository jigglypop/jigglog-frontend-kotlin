import { atom } from "jotai";
import { IPortfolioAtom } from "./type";

export const portfolioAtom = atom<IPortfolioAtom>({
  portfolio: null,
  error: "",
});
portfolioAtom.debugLabel = "portfolio";
