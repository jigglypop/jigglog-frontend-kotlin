import { SERVER_URL } from "../constants/URL";
import { IDeleteAtom } from "../store/delete/type";
import { IWrite } from "../type/post";
import Api from "./methods";

export const getPostsApi = async () => {
  return await Api().get(`${SERVER_URL}/post` + `/?page=1`);
};

export const getPostApi = async (id: string) => {
  return await Api().get(`${SERVER_URL}/post/${id}`);
};
export const postWriteApi = async (body) => {
  return await Api().postToken<IWrite>(`${SERVER_URL}/post`, body);
};

export const patchUpdateApi = async (id: number, body) => {
  return await Api().patchToken<IWrite>(`${SERVER_URL}/post/${id}`, body);
};

export const deletePostApi = async (body: IDeleteAtom) => {
  return await Api().deleteToken(`${SERVER_URL}/post/${body.id}`);
};

export const uploadApi = async (body) => {
  return await Api().postUpload<IWrite>(`${SERVER_URL}/upload`, body);
};
