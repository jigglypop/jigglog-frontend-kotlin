import axios from "axios";

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
      return makeErrorMessage(err);
    }
  };

  const getToken = async (URL: string) => {
    try {
      let token = "";
      if (localStorage && localStorage.getItem("token")) {
        token = `Bearer ${localStorage.getItem("token").toString()}`;
        headers.Authorization = token;
      }
      const response = await axios.get(URL, { headers: headers });
      return response;
    } catch (err) {
      return makeErrorMessage(err);
    }
  };

  const post = async <T>(URL: string, body: T) => {
    try {
      const response = await axios.post(URL, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (err) {
      return makeErrorMessage(err);
    }
  };

  const postGithub = async <T>(URL: string, body: T) => {
    try {
      const response = await axios.post(URL, body, {
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      return response;
    } catch (err) {
      return makeErrorMessage(err);
    }
  };

  const postToken = async <T>(URL: string, body: T) => {
    try {
      let token = "";
      if (localStorage && localStorage.getItem("token")) {
        token = `Bearer ${localStorage.getItem("token").toString()}`;
        headers.Authorization = token;
      }
      const response = await axios.post(URL, body, { headers: headers });
      return response;
    } catch (err) {
      return makeErrorMessage(err);
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
    postGithub,
    deleteToken,
  };
}
