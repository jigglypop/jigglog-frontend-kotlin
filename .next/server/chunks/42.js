"use strict";
exports.id = 42;
exports.ids = [42];
exports.modules = {

/***/ 2131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Api)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(648);


const getMatch = (data)=>{
    return data.split("<br>")[0].match(/Error: (.)+/)[0].replace("Error: ", "");
};
const headers = {
    "Content-Type": "application/json",
    Authorization: ""
};
const makeErrorMessage = (err)=>{
    const errJson = err.toJSON();
    console.log("에러제이슨");
    if (err.response && err.response.data) {
        errJson.err = getMatch(err.response.data);
    } else {
        errJson.err = "페이지 오류";
    }
    return errJson;
};
function Api() {
    const get = async (URL)=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(URL);
            return response;
        } catch (err) {
            return err;
        // return makeErrorMessage(err);
        }
    };
    const getToken = async (URL)=>{
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
                Authorization: _util_cache__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get("token")
            }
        });
        if (res.status === 200) {
            const data = await res.json();
            return data;
        } else {
            const error = await res.json();
            throw new Error(error.message);
        }
    };
    const post = async (URL, body)=>{
        const res = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
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
    const postToken = async (URL, body)=>{
        try {
            let token = "";
            if (localStorage && localStorage.getItem("token")) {
                token = `${localStorage.getItem("token").toString()}`;
                headers.Authorization = token;
            }
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(URL, body, {
                headers: headers
            });
            return response;
        } catch (err) {
            return err;
        }
    };
    const putToken = async (URL, body)=>{
        try {
            let token = "";
            if (localStorage && localStorage.getItem("token")) {
                token = `Bearer ${localStorage.getItem("token").toString()}`;
                headers.Authorization = token;
            }
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().put(URL, body, {
                headers: headers
            });
            return response;
        } catch (err) {
            return makeErrorMessage(err);
        }
    };
    const deleteToken = async (URL)=>{
        try {
            let token = "";
            if (localStorage && localStorage.getItem("token")) {
                token = `Bearer ${localStorage.getItem("token").toString()}`;
                headers.Authorization = token;
            }
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](URL, {
                headers: headers
            });
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
        deleteToken
    };
}


/***/ }),

/***/ 5539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C7": () => (/* binding */ S3_URL),
/* harmony export */   "LB": () => (/* binding */ SERVER_URL)
/* harmony export */ });
/* unused harmony exports BASE_URL, LOCAL_URL, MAIN_URL */
// export const BASE_URL = "https://moija.link";
const BASE_URL = "https://jigglog.com";
const S3_URL = "https://jiggloghttps.s3.ap-northeast-2.amazonaws.com/gltf";
const LOCAL_URL = "http://localhost:4000";
const SERVER_URL = `${BASE_URL}/api`;
const MAIN_URL = (/* unused pure expression or super */ null && (`https://jigglog.com`)); // export const SERVER_URL = `${LOCAL_URL}/api`;


/***/ }),

/***/ 648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const cache = {
    get (key) {
        const result = localStorage.getItem(key);
        if (result) {
            const data = JSON.parse(result);
            return data;
        } else {
            return null;
        }
    },
    set (key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    },
    remove (key) {
        localStorage.removeItem(key);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cache);


/***/ })

};
;