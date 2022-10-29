"use strict";
(() => {
var exports = {};
exports.id = 300;
exports.ids = [300];
exports.modules = {

/***/ 6014:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CategoryPage),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_Category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5425);
/* harmony import */ var _components_category_CategoryAndTag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1820);
/* harmony import */ var _components_common_meta_Meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7923);
/* harmony import */ var _components_common_notfound_NotFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(492);
/* harmony import */ var _components_common_spinner_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8145);
/* harmony import */ var _store_categories_atom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3160);
/* harmony import */ var _store_category_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3891);
/* harmony import */ var _util_toJson__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1216);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_1__, _store_categories_atom__WEBPACK_IMPORTED_MODULE_9__, _store_category_query__WEBPACK_IMPORTED_MODULE_10__]);
([jotai__WEBPACK_IMPORTED_MODULE_1__, _store_categories_atom__WEBPACK_IMPORTED_MODULE_9__, _store_category_query__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function CategoryPage({ id  }) {
    const categories = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtomValue)(_store_categories_atom__WEBPACK_IMPORTED_MODULE_9__/* .categoriesAtom */ .m);
    const { postsAndLength , getMorePost , isSuccess , isLoading , isError , error  } = (0,_store_category_query__WEBPACK_IMPORTED_MODULE_10__/* .useCategoryEffect */ .w)(id);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_meta_Meta__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                description: "카테고리 목록"
            }),
            isSuccess && postsAndLength.posts && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_category_CategoryAndTag__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                posts: postsAndLength.posts,
                categories: categories.categories,
                getMorePost: getMorePost,
                type: "category"
            }),
            isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_spinner_Spinner__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            isError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_notfound_NotFound__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
        ]
    });
}
const getStaticProps = async ({ params  })=>{
    const id = params?.id;
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();
    const page = 1;
    await queryClient.prefetchQuery([
        "category",
        id
    ], ()=>(0,_api_Category__WEBPACK_IMPORTED_MODULE_4__/* .getCategoryApi */ .e)(id, page));
    await queryClient.prefetchQuery([
        "categories"
    ], _api_Category__WEBPACK_IMPORTED_MODULE_4__/* .getCategoriesApi */ .B);
    return {
        props: {
            dehydratedState: (0,_util_toJson__WEBPACK_IMPORTED_MODULE_11__/* .toJson */ .Q)(queryClient),
            id: id
        }
    };
};
const getStaticPaths = async ()=>{
    return {
        paths: [],
        fallback: "blocking"
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3160:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ categoriesAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const categoriesAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({
    categories: [],
    error: ""
});
categoriesAtom.debugLabel = "categories";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8492:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ categoryAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const categoryAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({
    posts: [],
    page: 0,
    last: 0,
    error: ""
});
categoryAtom.debugLabel = "category";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3891:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ useCategoryEffect)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5425);
/* harmony import */ var _atom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__, _atom__WEBPACK_IMPORTED_MODULE_3__]);
([jotai__WEBPACK_IMPORTED_MODULE_0__, _atom__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const useCategoryEffect = (id)=>{
    const [postsAndLength, setPostsAndLength] = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.useAtom)(_atom__WEBPACK_IMPORTED_MODULE_3__/* .categoryAtom */ .L);
    const { isSuccess , isLoading , isError , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)([
        "category",
        id
    ], ()=>(0,_api_Category__WEBPACK_IMPORTED_MODULE_2__/* .getCategoryApi */ .e)(id, 1), {
        onSuccess (res) {
            setPostsAndLength({
                posts: res,
                page: 1,
                last: Math.ceil(res[0].postcount / 8),
                error: ""
            });
        },
        onError (res) {
            setPostsAndLength({
                ...postsAndLength,
                error: "오류 : " + res.message
            });
        }
    });
    const { mutate: fetchCategory , isLoading: isFetchLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(()=>(0,_api_Category__WEBPACK_IMPORTED_MODULE_2__/* .getCategoryApi */ .e)(id, postsAndLength.page + 1), {
        onSuccess (res) {
            setPostsAndLength({
                posts: [
                    ...postsAndLength.posts,
                    ...res
                ],
                page: postsAndLength.page + 1,
                last: postsAndLength.last,
                error: ""
            });
        },
        onError (res) {
            setPostsAndLength({
                ...postsAndLength,
                error: "오류 : " + res.message
            });
        }
    });
    const getMorePost = async ()=>{
        const { page , last  } = postsAndLength;
        if (page + 1 <= last) {
            fetchCategory();
        }
    };
    return {
        postsAndLength,
        getMorePost,
        isSuccess,
        isLoading,
        isError,
        error
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 4259:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 4336:
/***/ ((module) => {

module.exports = require("react-infinite-scroll-component");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,425,930,195,439], () => (__webpack_exec__(6014)));
module.exports = __webpack_exports__;

})();