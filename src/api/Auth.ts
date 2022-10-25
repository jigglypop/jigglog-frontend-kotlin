import { SERVER_URL } from "../constants/URL";
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

export const postGithubApi = async (body) => {
  return await Api().postGithub(
    `https://github.com/login/oauth/access_token?client_id=${body.client_id}&client_secret=${body.client_secret}&code=${body.code}`,
    body
  );
};
