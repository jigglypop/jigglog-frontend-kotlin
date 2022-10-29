import axios from "axios";
import cache from "../util/cache";

const getMatch = (data: string) => {
  return data
    .split("<br>")[0]
    .match(/Error: (.)+/)[0]
    .replace("Error: ", "");
};

const makeErrorMessage = (err) => {
  const errJson = err.toJSON();
  if (err.response && err.response.data) {
    errJson.err = getMatch(err.response.data);
  } else {
    errJson.err = "페이지 오류";
  }
  return errJson;
};

const setFetch = async <T>(
  method: string,
  Authorization: boolean,
  body?: T
) => {
  const payload = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: null,
    },
    body: null,
  };
  if (Authorization) payload.headers.Authorization = await cache.get("token");
  if (body) payload.body = JSON.stringify(body);
  return payload;
};

const setResult = async (res: Response, setToken: boolean = false) => {
  if (res.status === 200) {
    if (setToken) {
      localStorage.setItem("token", JSON.stringify(res.headers.get("token")));
    }
    const data = await res.json();
    return data;
  } else {
    const error = await res.json();
    throw new Error(error.message);
  }
};

export default function Api() {
  const get = async (URL: string) => {
    const payload = await setFetch("GET", false);
    const res = await fetch(URL, payload);
    return await setResult(res);
  };

  const getToken = async (URL: string) => {
    const payload = await setFetch("GET", true);
    const res = await fetch(URL, payload);
    return await setResult(res);
  };

  const post = async <T>(URL: string, body: T) => {
    const payload = await setFetch("POST", false, body);
    const res = await fetch(URL, payload);
    return await setResult(res, true);
  };

  const postToken = async <T>(URL: string, body: T) => {
    const payload = await setFetch("POST", true, body);
    const res = await fetch(URL, payload);
    return await setResult(res);
  };

  const patchToken = async <T>(URL: string, body: T) => {
    const payload = await setFetch("PATCH", true, body);
    const res = await fetch(URL, payload);
    return await setResult(res);
  };

  const deleteToken = async (URL: string) => {
    const payload = await setFetch("DELETE", true);
    const res = await fetch(URL, payload);
    return await setResult(res);
  };
  const postUpload = async <T>(URL: string, body: T) => {
    try {
      const response = await axios.post(URL, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (error) {
      return makeErrorMessage(error);
    }
  };
  return {
    get,
    post,
    postToken,
    getToken,
    patchToken,
    deleteToken,
    postUpload,
  };
}
