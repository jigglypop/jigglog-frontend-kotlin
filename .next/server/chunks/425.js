"use strict";
exports.id = 425;
exports.ids = [425];
exports.modules = {

/***/ 5425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ getCategoriesApi),
/* harmony export */   "e": () => (/* binding */ getCategoryApi)
/* harmony export */ });
/* harmony import */ var _constants_URL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5539);
/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2131);


const getCategoriesApi = async ()=>{
    return await (0,_methods__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(`${_constants_URL__WEBPACK_IMPORTED_MODULE_0__/* .SERVER_URL */ .LB}/category`);
};
const getCategoryApi = async (id, page)=>{
    return await (0,_methods__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(`${_constants_URL__WEBPACK_IMPORTED_MODULE_0__/* .SERVER_URL */ .LB}/category/${id}` + `/?page=${page}`);
};


/***/ }),

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
const makeErrorMessage = (err)=>{
    const errJson = err.toJSON();
    if (err.response && err.response.data) {
        errJson.err = getMatch(err.response.data);
    } else {
        errJson.err = "페이지 오류";
    }
    return errJson;
};
const setFetch = async (method, Authorization, body)=>{
    const payload = {
        method: method,
        headers: {
            "Content-Type": "application/json",
            Authorization: null
        },
        body: null
    };
    if (Authorization) payload.headers.Authorization = await _util_cache__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get("token");
    if (body) payload.body = JSON.stringify(body);
    return payload;
};
const setResult = async (res, setToken = false)=>{
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
function Api() {
    const get = async (URL)=>{
        const payload = await setFetch("GET", false);
        const res = await fetch(URL, payload);
        return await setResult(res);
    };
    const getToken = async (URL)=>{
        const payload = await setFetch("GET", true);
        const res = await fetch(URL, payload);
        return await setResult(res);
    };
    const post = async (URL, body)=>{
        const payload = await setFetch("POST", false, body);
        const res = await fetch(URL, payload);
        return await setResult(res, true);
    };
    const postToken = async (URL, body)=>{
        const payload = await setFetch("POST", true, body);
        const res = await fetch(URL, payload);
        return await setResult(res);
    };
    const patchToken = async (URL, body)=>{
        const payload = await setFetch("PATCH", true, body);
        const res = await fetch(URL, payload);
        return await setResult(res);
    };
    const deleteToken = async (URL)=>{
        const payload = await setFetch("DELETE", true);
        const res = await fetch(URL, payload);
        return await setResult(res);
    };
    const postUpload = async (URL, body)=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(URL, body, {
                headers: {
                    "Content-Type": "application/json"
                }
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
        postUpload
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
const BASE_URL = "https://jigglog.com";
// export const BASE_URL = "http://localhost:8080";
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