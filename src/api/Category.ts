import { SERVER_URL } from "../constants/URL";
import Api from "./methods";

export const getCategoriesApi = async () => {
  return await Api().get(`${SERVER_URL}/category`);
};

export const getCategoryApi = async (id: string, page: number) => {
  return await Api().get(`${SERVER_URL}/category/${id}` + `/?page=${page}`);
};
