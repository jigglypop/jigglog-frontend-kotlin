"use strict";
(() => {
var exports = {};
exports.id = 759;
exports.ids = [759];
exports.modules = {

/***/ 9743:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(837);
/* harmony import */ var _components_common_meta_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7923);
/* harmony import */ var _components_write_Write__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8153);
/* harmony import */ var _store_post_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4269);
/* harmony import */ var _api_Category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5425);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util_toJson__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1216);
/* harmony import */ var _components_common_spinner_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8145);
/* harmony import */ var _components_common_notfound_NotFound__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(492);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2451);
/* harmony import */ var _store_post_atom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7481);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_write_Write__WEBPACK_IMPORTED_MODULE_4__, _store_post_query__WEBPACK_IMPORTED_MODULE_5__, jotai__WEBPACK_IMPORTED_MODULE_11__, _store_post_atom__WEBPACK_IMPORTED_MODULE_12__]);
([_components_write_Write__WEBPACK_IMPORTED_MODULE_4__, _store_post_query__WEBPACK_IMPORTED_MODULE_5__, jotai__WEBPACK_IMPORTED_MODULE_11__, _store_post_atom__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function UpdatePage({ id  }) {
    const { postData , isSuccess , isLoading  } = (0,_store_post_query__WEBPACK_IMPORTED_MODULE_5__/* .usePostEffect */ .Y)(id);
    const [post] = (0,jotai__WEBPACK_IMPORTED_MODULE_11__.useAtom)(_store_post_atom__WEBPACK_IMPORTED_MODULE_12__/* .postAtom */ .a);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            isSuccess && postData.data && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_meta_Meta__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        description: "업데이트 | " + postData.data?.data.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_write_Write__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                ]
            }),
            isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_spinner_Spinner__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            post.post === null && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_notfound_NotFound__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                error: post.error
            })
        ]
    });
}
const getServerSideProps = async ({ params  })=>{
    const id = params?.id;
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_7__.QueryClient();
    await queryClient.prefetchQuery([
        "post"
    ], ()=>(0,_api_Post__WEBPACK_IMPORTED_MODULE_2__/* .getPostApi */ .MZ)(id));
    await queryClient.prefetchQuery([
        "categories"
    ], _api_Category__WEBPACK_IMPORTED_MODULE_6__/* .getCategoriesApi */ .B);
    return {
        props: {
            dehydratedState: (0,_util_toJson__WEBPACK_IMPORTED_MODULE_8__/* .toJson */ .Q)(queryClient),
            id: id
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdatePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 727:
/***/ ((module) => {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ 9503:
/***/ ((module) => {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/prism/dracula");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 2451:
/***/ ((module) => {

module.exports = import("jotai");;

/***/ }),

/***/ 2752:
/***/ ((module) => {

module.exports = import("jotai/utils");;

/***/ }),

/***/ 3135:
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152,42,930,874,240,569,16,803,853], () => (__webpack_exec__(9743)));
module.exports = __webpack_exports__;

})();