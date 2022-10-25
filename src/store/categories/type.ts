import { ICategory } from "../../type/category";

export type ICategoryAtom = {
  categories: ICategory[];
  error: string;
};
