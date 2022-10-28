import axios from "axios";
import cache from "../util/cache";

const getMatch = (data: string) => {
  return data
    .split("<br>")[0]
    .match(/Error: (.)+/)[0]
    .replace("Error: ", "");
};

const headers = {
  "Content-Type": "application/json",
  Authorization: "",
};

const makeErrorMessage = (err) => {
  const errJson = err.toJSON();
  console.log("에러제이슨");
  if (err.response && err.response.data) {
    errJson.err = getMatch(err.response.data);
  } else {
    errJson.err = "페이지 오류";
  }
  return errJson;
};

export default function Api() {
  const get = async (URL: string) => {
    try {
      const response = await axios.get(URL);
      return response;
    } catch (err) {
      return err;
      // return makeErrorMessage(err);
    }
  };

  const getToken = async (URL: string) => {
    // try {
    //   let token = "";
    //   if (localStorage && localStorage.getItem("token")) {
    //     token = `${localStorage.getItem("token").toString()}`;
    //     headers.Authorization = token;
    //   }
    //   const response = await axios.get(URL, { headers: headers });
    //   return response;
    // } catch (err) {
    //   return err;
    //   // return makeErrorMessage(err);
    // }
    const res = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: cache.get("token"),
      },
    });
    if (res.status === 200) {
      const data = await res.json();
      return data;
    } else {
      const error = await res.json();
      throw new Error(error.message);
    }
  };

  const post = async <T>(URL: string, body: T) => {
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      localStorage.setItem("token", JSON.stringify(res.headers.get("token")));
      const data = await res.json();
      return data;
    } else {
      const error = await res.json();
      throw new Error(error.message);
    }
  };

  const postToken = async <T>(URL: string, body: T) => {
    try {
      let token = "";

      if (localStorage && localStorage.getItem("token")) {
        token = `${localStorage.getItem("token").toString()}`;
        headers.Authorization = token;
      }
      const response = await axios.post(URL, body, { headers: headers });
      return response;
    } catch (err) {
      return err;
    }
  };

  const putToken = async <T>(URL: string, body: T) => {
    try {
      let token = "";
      if (localStorage && localStorage.getItem("token")) {
        token = `Bearer ${localStorage.getItem("token").toString()}`;
        headers.Authorization = token;
      }
      const response = await axios.put(URL, body, { headers: headers });
      return response;
    } catch (err) {
      return makeErrorMessage(err);
    }
  };

  const deleteToken = async (URL: string) => {
    try {
      let token = "";
      if (localStorage && localStorage.getItem("token")) {
        token = `Bearer ${localStorage.getItem("token").toString()}`;
        headers.Authorization = token;
      }
      const response = await axios.delete(URL, { headers: headers });
      return response;
    } catch (err) {
      return makeErrorMessage(err);
    }
  };

  return {
    get,
    post,
    postToken,
    getToken,
    putToken,
    deleteToken,
  };
}
