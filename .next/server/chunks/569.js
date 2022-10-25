"use strict";
exports.id = 569;
exports.ids = [569];
exports.modules = {

/***/ 5820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ GradientButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2792);


const GradientButton = ({ children , onClick  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_1__/* .GradientButton */ .OQ, {
        type: "submit",
        onClick: onClick,
        children: children
    });
};


/***/ }),

/***/ 7844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BoxInput),
/* harmony export */   "q": () => (/* binding */ GradientInput)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GradientInput = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  @keyframes gradient {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }

  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 2px;
  padding: 1.4rem 2rem 1.6rem;
  background: transparent;

  &:after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 999;
    height: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background-position: 0% 0%;
    background: linear-gradient(
      to right,
      #b294ff,
      #57e6e6,
      #feffb8,
      #57e6e6,
      #b294ff,
      #57e6e6
    );
    background-size: 500% auto;
    animation: gradient 3s linear infinite;
  }

  input {
    width: 100%;
    flex-grow: 1;
    background: transparent;
    color: white;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 2rem;
    vertical-align: middle;
    &::-webkit-input-placeholder {
      color: white;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #1d1d1d inset !important;
    transition: background-color 10000s ease-in-out 0s;
    -webkit-text-fill-color: #fff !important;
  }
`;
const BoxInput = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  border-radius: 2px;
  background: #f3f3f3;

  input {
    width: 100%;
    background: transparent;
    padding: 1rem;
    font-size: ${(props)=>props.fontSize ? props.fontSize : "1.5rem"};
    font-weight: 800;
    line-height: 1rem;
    vertical-align: middle;
    &::-webkit-input-placeholder {
      color: #c2c2c2;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #1d1d1d inset !important;
    transition: background-color 10000s ease-in-out 0s;
    -webkit-text-fill-color: black !important;
  }
`;


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

/***/ 5006:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useCategoriesEffect),
/* harmony export */   "n": () => (/* binding */ useCategoriesActions)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5425);
/* harmony import */ var _atom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3160);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__, _atom__WEBPACK_IMPORTED_MODULE_3__]);
([jotai__WEBPACK_IMPORTED_MODULE_0__, _atom__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function useCategoriesActions() {
    const [categories, setCategories] = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.useAtom)(_atom__WEBPACK_IMPORTED_MODULE_3__/* .categoriesAtom */ .m);
    const { mutate , isLoading , isError , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_api_Category__WEBPACK_IMPORTED_MODULE_2__/* .getCategoriesApi */ .B, {
        onSuccess (res) {
            setCategories({
                ...categories,
                categories: res.data.data.filter((category)=>{
                    if (category.id !== 1 && category.posts !== 0) {
                        return category;
                    }
                })
            });
        }
    });
    return {
        categories,
        getCategories: mutate,
        isLoading,
        isError,
        error
    };
}
function useCategoriesEffect() {
    const { data , isLoading , isError , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)([
        "categories"
    ], _api_Category__WEBPACK_IMPORTED_MODULE_2__/* .getCategoriesApi */ .B);
    const [_, setCategories] = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.useAtom)(_atom__WEBPACK_IMPORTED_MODULE_3__/* .categoriesAtom */ .m);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setCategories({
            error: error ? error.toString() : "",
            categories: data?.data.data.filter((category)=>{
                if (category.id !== 1 && category.posts !== 0) {
                    return category;
                }
            }) || []
        });
    }, [
        data,
        isLoading,
        isError
    ]);
    return {
        categories: data?.data.data || [],
        isLoading,
        isError,
        error
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;