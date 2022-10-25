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

const getMatch = (data)=>{
    return data.split("<br>")[0].match(/Error: (.)+/)[0].replace("Error: ", "");
};
const headers = {
    "Content-Type": "application/json",
    Authorization: ""
};
const makeErrorMessage = (err)=>{
    const errJson = err.toJSON();
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
            return makeErrorMessage(err);
        }
    };
    const getToken = async (URL)=>{
        try {
            let token = "";
            if (localStorage && localStorage.getItem("token")) {
                token = `Bearer ${localStorage.getItem("token").toString()}`;
                headers.Authorization = token;
            }
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(URL, {
                headers: headers
            });
            return response;
        } catch (err) {
            return makeErrorMessage(err);
        }
    };
    const post = async (URL, body)=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(URL, body, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return response;
        } catch (err) {
            return makeErrorMessage(err);
        }
    };
    const postGithub = async (URL, body)=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(URL, body, {
                headers: {
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            });
            return response;
        } catch (err) {
            return makeErrorMessage(err);
        }
    };
    const postToken = async (URL, body)=>{
        try {
            let token = "";
            if (localStorage && localStorage.getItem("token")) {
                token = `Bearer ${localStorage.getItem("token").toString()}`;
                headers.Authorization = token;
            }
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(URL, body, {
                headers: headers
            });
            return response;
        } catch (err) {
            return makeErrorMessage(err);
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
        postGithub,
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
const BASE_URL = "https://moija.link";
const S3_URL = "https://jiggloghttps.s3.ap-northeast-2.amazonaws.com/gltf";
const LOCAL_URL = "http://localhost:4000";
const SERVER_URL = `${BASE_URL}/api`;
const MAIN_URL = (/* unused pure expression or super */ null && (`https://jigglog.com`)); // export const SERVER_URL = `${LOCAL_URL}/api`;


/***/ })

};
;