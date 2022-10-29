import { SERVER_URL } from "../constants/URL";
import Api from "./methods";

export const getPortfoliosApi = async () => {
  return await Api().get(`${SERVER_URL}/portfolio`);
};

export const getPortfolioApi = async (id: string) => {
  return await Api().get(`${SERVER_URL}/portfolio/${id}`);
};
