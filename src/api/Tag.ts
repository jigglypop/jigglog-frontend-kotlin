import { SERVER_URL } from "../constants/URL";
import Api from "./methods";

export const getTagsApi = async () => {
  return await Api().get(`${SERVER_URL}/tag`);
};

export const getTagApi = async (id: string) => {
  return await Api().get(`${SERVER_URL}/tag/${id}` + `/?page=1`);
};
