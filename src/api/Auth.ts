import { SERVER_URL } from "../constants/URL";
import { ICommentUserFormAtom } from "../store/commentuser/type";
import { ILoginFormAtom } from "../store/login/type";
import { IRegisterFormAtom } from "../store/register/type";
import Api from "./methods";

export const getCheckApi = async () => {
  return await Api().getToken(`${SERVER_URL}/auth/check`);
};

export const postLoginApi = async (body: ILoginFormAtom) => {
  return await Api().post(`${SERVER_URL}/auth/login`, body);
};

export const postRegisterApi = async (body: IRegisterFormAtom) => {
  return await Api().post(`${SERVER_URL}/auth/register`, body);
};

export const postCommentUserApi = async (body: ICommentUserFormAtom) => {
  console.log("코멘트유저");
  return await Api().post(`${SERVER_URL}/auth/comment`, body);
};
