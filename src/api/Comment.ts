import { SERVER_URL } from "../constants/URL";
import { IComments } from "../type/comment";
import Api from "./methods";

export const getCommentsApi = async (id: number) => {
  return await Api().get(`${SERVER_URL}/comment/${id}`);
};

export const postCommentsApi = async (postId: number, body) => {
  return await Api().postToken<IComments>(
    `${SERVER_URL}/comment/${postId}`,
    body
  );
};

export const deleteCommentsApi = async (commentId: number) => {
  return await Api().deleteToken(`${SERVER_URL}/comment/${commentId}`);
};
