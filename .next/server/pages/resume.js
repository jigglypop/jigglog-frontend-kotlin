"use strict";
(() => {
var exports = {};
exports.id = 647;
exports.ids = [647];
exports.modules = {

/***/ 2195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ getResumeApi)
/* harmony export */ });
/* harmony import */ var _constants_URL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5539);
/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2131);


const getResumeApi = async ()=>{
    return await (0,_methods__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(`${_constants_URL__WEBPACK_IMPORTED_MODULE_0__/* .SERVER_URL */ .LB}/resume`);
};


/***/ }),

/***/ 6843:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Resume)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(195);
/* harmony import */ var _common_text_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2053);
/* harmony import */ var _post_Markdown_Markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2874);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9233);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_post_Markdown_Markdown__WEBPACK_IMPORTED_MODULE_5__]);
_post_Markdown_Markdown__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function Resume({ resume  }) {
    const info = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(resume.content);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_6__/* .RPWrapper */ .Xf, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_6__/* .RPInnerWrapper */ .Jl, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_6__/* .User */ .n5, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            width: "20rem",
                            height: "20rem",
                            imageUrl: resume.user.imageUrl,
                            boxShadow: "2px 2px 10px white",
                            className: "manager"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_text_Text__WEBPACK_IMPORTED_MODULE_4__/* .GradientText */ .t, {
                            children: resume.user.username
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_6__/* .SocialInformation */ .cK, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_6__/* .PostContent */ .C2, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_post_Markdown_Markdown__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        content: info.content
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4012:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResumePage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5425);
/* harmony import */ var _api_Resume__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2195);
/* harmony import */ var _components_common_meta_Meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7923);
/* harmony import */ var _components_common_notfound_NotFound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(492);
/* harmony import */ var _components_common_spinner_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8145);
/* harmony import */ var _components_resume_portfolio_resume__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6843);
/* harmony import */ var _store_resume_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1044);
/* harmony import */ var _util_toJson__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1216);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_resume_portfolio_resume__WEBPACK_IMPORTED_MODULE_8__, _store_resume_query__WEBPACK_IMPORTED_MODULE_9__]);
([_components_resume_portfolio_resume__WEBPACK_IMPORTED_MODULE_8__, _store_resume_query__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function ResumePage() {
    const { resume , isSuccess , isLoading , isError  } = (0,_store_resume_query__WEBPACK_IMPORTED_MODULE_9__/* .useResumeEffect */ .S)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            isSuccess && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_meta_Meta__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        description: "이력서"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_resume_portfolio_resume__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        resume: resume
                    })
                ]
            }),
            isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_spinner_Spinner__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            isError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_notfound_NotFound__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
        ]
    });
}
const getServerSideProps = async ()=>{
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient();
    await queryClient.prefetchQuery([
        "resume"
    ], _api_Resume__WEBPACK_IMPORTED_MODULE_4__/* .getResumeApi */ .V);
    await queryClient.prefetchQuery([
        "categories"
    ], _api_Category__WEBPACK_IMPORTED_MODULE_3__/* .getCategoriesApi */ .B);
    return {
        props: {
            dehydratedState: (0,_util_toJson__WEBPACK_IMPORTED_MODULE_10__/* .toJson */ .Q)(queryClient)
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 273:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ resumeAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const resumeAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({
    resume: null,
    error: ""
});
resumeAtom.debugLabel = "resume";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1044:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useResumeEffect)
/* harmony export */ });
/* unused harmony export useResumeActions */
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2752);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_Resume__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2195);
/* harmony import */ var _atom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(273);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__, jotai_utils__WEBPACK_IMPORTED_MODULE_1__, _atom__WEBPACK_IMPORTED_MODULE_4__]);
([jotai__WEBPACK_IMPORTED_MODULE_0__, jotai_utils__WEBPACK_IMPORTED_MODULE_1__, _atom__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function useResumeActions() {
    const [resume, setResume] = useAtom(resumeAtom);
    return {
        resume,
        setResume
    };
}
function useResumeEffect() {
    const setResume = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_1__.useUpdateAtom)(_atom__WEBPACK_IMPORTED_MODULE_4__/* .resumeAtom */ .w);
    const { data , isSuccess , isLoading , isError , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        "resume"
    ], ()=>(0,_api_Resume__WEBPACK_IMPORTED_MODULE_3__/* .getResumeApi */ .V)(), {
        onSuccess (res) {
            setResume({
                resume: res,
                error: ""
            });
        },
        onError (res) {
            setResume({
                resume: null,
                error: "오류 : " + res.message
            });
        }
    });
    return {
        resume: data,
        isSuccess,
        isLoading,
        isError,
        error
    };
}

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


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [425,930,874,195,430], () => (__webpack_exec__(4012)));
module.exports = __webpack_exports__;

})();