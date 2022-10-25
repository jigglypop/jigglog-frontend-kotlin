import { SERVER_URL } from "../constants/URL";
import Api from "./methods";

export const getResumeApi = async () => {
  return await Api().get(`${SERVER_URL}/resume`);
};
