import { SERVER_URL } from "../constants/URL";
import { IComments } from "../type/comment";
import Api from "./methods";

export const postRecommentsApi = async (recommentId: number, body) => {
  return await Api().postToken<IComments>(
    `${SERVER_URL}/recomment/${recommentId}`,
    body
  );
};

export const deleteRecommentsApi = async (recommentId: number) => {
  return await Api().deleteToken(`${SERVER_URL}/recomment/${recommentId}`);
};
