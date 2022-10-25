import { IPortfolio } from "../../type/portfolio";

export interface IPortfoliosAtom {
  portfolios: IPortfolio[];
  error: string;
}
