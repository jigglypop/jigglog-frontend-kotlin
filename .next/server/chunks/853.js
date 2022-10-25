"use strict";
exports.id = 853;
exports.ids = [853];
exports.modules = {

/***/ 4269:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ usePostEffect)
/* harmony export */ });
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2752);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(837);
/* harmony import */ var _atom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7481);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai_utils__WEBPACK_IMPORTED_MODULE_0__, _atom__WEBPACK_IMPORTED_MODULE_3__]);
([jotai_utils__WEBPACK_IMPORTED_MODULE_0__, _atom__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const usePostEffect = (id)=>{
    const setPost = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_0__.useUpdateAtom)(_atom__WEBPACK_IMPORTED_MODULE_3__/* .postAtom */ .a);
    const { data , isSuccess , isLoading , isError , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)([
        "post",
        id
    ], ()=>(0,_api_Post__WEBPACK_IMPORTED_MODULE_2__/* .getPostApi */ .MZ)(id), {
        staleTime: 1000,
        onSuccess (res) {
            if (res.data) {
                setPost({
                    post: res.data.data,
                    error: ""
                });
            } else {
                setPost({
                    post: null,
                    error: "오류 : " + res.err
                });
            }
        }
    });
    return {
        postData: data,
        isSuccess,
        isLoading,
        isError,
        error
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ toJson)
/* harmony export */ });
/* unused harmony export replacerFunc */
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);

const replacerFunc = ()=>{
    const visited = new WeakSet();
    return (key, value)=>{
        if (typeof value === "object" && value !== null) {
            if (visited.has(value)) {
                return;
            }
            visited.add(value);
        }
        return value;
    };
};
const toJson = (queryClient)=>{
    return JSON.parse(JSON.stringify((0,react_query__WEBPACK_IMPORTED_MODULE_0__.dehydrate)(queryClient), replacerFunc()));
};


/***/ })

};
;