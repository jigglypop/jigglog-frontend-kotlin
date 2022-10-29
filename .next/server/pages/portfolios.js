"use strict";
(() => {
var exports = {};
exports.id = 270;
exports.ids = [270];
exports.modules = {

/***/ 6705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ getPortfolioApi),
/* harmony export */   "j": () => (/* binding */ getPortfoliosApi)
/* harmony export */ });
/* harmony import */ var _constants_URL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5539);
/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2131);


const getPortfoliosApi = async ()=>{
    return await (0,_methods__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(`${_constants_URL__WEBPACK_IMPORTED_MODULE_0__/* .SERVER_URL */ .LB}/portfolio`);
};
const getPortfolioApi = async (id)=>{
    return await (0,_methods__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(`${_constants_URL__WEBPACK_IMPORTED_MODULE_0__/* .SERVER_URL */ .LB}/portfolio/${id}`);
};


/***/ }),

/***/ 2053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ GradientText)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GradientText = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  background: linear-gradient(
    45deg,
    #b294ff,
    #57e6e6,
    #feffb8,
    #57e6e6,
    #b294ff,
    #57e6e6
  );
  color: transparent;
  background-size: 500% auto;
  animation: gradient 3s linear infinite;
  -webkit-background-clip: text;
`;


/***/ }),

/***/ 5322:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_spring_parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7436);
/* harmony import */ var _react_spring_parallax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_JQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3703);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3999);
/* harmony import */ var _common_text_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2053);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_portfolios_atom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7670);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_portfolios_atom__WEBPACK_IMPORTED_MODULE_7__, jotai__WEBPACK_IMPORTED_MODULE_8__]);
([_store_portfolios_atom__WEBPACK_IMPORTED_MODULE_7__, jotai__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Portfolios = ()=>{
    const parallaxRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { portfolios  } = (0,jotai__WEBPACK_IMPORTED_MODULE_8__.useAtomValue)(_store_portfolios_atom__WEBPACK_IMPORTED_MODULE_7__/* .portfoliosAtom */ .e);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const onClick = (index)=>{
        router.push(`/portfolio/${index}`);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_util_JQuery__WEBPACK_IMPORTED_MODULE_9__.$)("html").css("overflow", "hidden");
        return ()=>{
            (0,_util_JQuery__WEBPACK_IMPORTED_MODULE_9__.$)("html").css("overflow", "scroll");
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: portfolios.length !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_4__/* .PortfoliosWrapper */ .jc, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_2__.Parallax, {
                pages: portfolios.length,
                className: "parallax",
                ref: parallaxRef,
                children: [
                    ...portfolios
                ].reverse().map((portfolio, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_4__/* .PortfolioItem */ .HW, {
                        position: index % 2,
                        onClick: ()=>onClick(portfolio.id),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_2__.ParallaxLayer, {
                                offset: index,
                                speed: 1,
                                className: "portfolio-wrapper",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: portfolio.images,
                                    alt: "portfolio",
                                    className: "portfolio-background"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_2__.ParallaxLayer, {
                                offset: index,
                                speed: 1,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "background"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_2__.ParallaxLayer, {
                                offset: index,
                                speed: 1,
                                className: "portfolio-items",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: portfolio.images,
                                    className: "portfolio-image-item"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_2__.ParallaxLayer, {
                                offset: index,
                                speed: 1.2,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "titlebig",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: `/portfolio/${portfolio.id}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_text_Text__WEBPACK_IMPORTED_MODULE_5__/* .GradientText */ .t, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: portfolio.title
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_2__.ParallaxLayer, {
                                offset: index,
                                speed: -0,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "summarybig",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_text_Text__WEBPACK_IMPORTED_MODULE_5__/* .GradientText */ .t, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: portfolio.summary
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_2__.ParallaxLayer, {
                                offset: index,
                                speed: -0,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "iconsetbig",
                                    children: portfolio.iconsets.map((iconset)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_text_Text__WEBPACK_IMPORTED_MODULE_5__/* .GradientText */ .t, {
                                            children: " #" + iconset.title.replace("logo", "").toUpperCase()
                                        }, iconset.id))
                                })
                            })
                        ]
                    }, index))
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolios);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HW": () => (/* binding */ PortfolioItem),
/* harmony export */   "jc": () => (/* binding */ PortfoliosWrapper)
/* harmony export */ });
/* unused harmony export PortfolioItemOuter */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PortfoliosWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    position: relative;

    /* 스크롤 */
    .parallax {
        ::-webkit-scrollbar {
            width: 15px;
            background-color: var(--text-white-dark);
        }
        /* 스크롤 엄지부분 */
        ::-webkit-scrollbar-thumb {
            background: var(--header-gradient-picker);
            border-radius: 10px;
            border: 2px solid transparent;
            background-clip: padding-box;
        }
        /* 스크롤 트랙 */
        ::-webkit-scrollbar-track {
            background-color: black;
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);
        }
        /* 스크롤 코너 */
        ::-webkit-scrollbar-corner {
            background-color: transparent;
        }
    }

    left: 0;
    height: 100vh;

    .click {
        font-family: "BMDOHYEON_ttf" !important;
        position: absolute;
        cursor: pointer;
        z-index: 20;
        font-size: 8rem;
        font-weight: 800;
    }
`;
const PortfolioItemOuter = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    position: relative;
    width: 100vw;
    height: 100vh;
`;
const PortfolioItem = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    .background {
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        width: 100vw;
        height: 100vh;

        background-color: rgba(0, 0, 0, 0.95);
        -webkit-backdrop-filter: blur(2px);
        backdrop-filter: blur(2px);
    }

    .titlebig {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30rem;
        /* margin-left: ${(props)=>props.position === 1 ? "70rem" : "-70rem"}; */

        p {
            font-family: "BMDOHYEON_ttf";
            font-size: 4rem;
            font-weight: 800;
        }
    }

    .summarybig {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40rem;
        /* margin-left: ${(props)=>props.position === 1 ? "70rem" : "-70rem"}; */

        p {
            font-family: "BMDOHYEON_ttf";
            font-size: 2rem;
            font-weight: 800;
        }
    }

    .iconsetbig {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 47rem;
        /* margin-left: ${(props)=>props.position === 1 ? "70rem" : "-70rem"}; */

        p {
            font-family: "BMDOHYEON_ttf";
            font-size: 1.2rem;
            font-weight: 800;
        }
    }

    .portfolio-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;

        .portfolio-background {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100vw;
            height: 100vh;
            transform: translate(-50%, -50%);
            object-fit: cover;
        }
    }

    .portfolio-items {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -15rem;

        .portfolio-image-item {
            width: 60rem;
            height: 25rem;
            object-fit: cover;
            border-radius: 1rem;
            box-shadow: 0 0 30px black;
        }
    }
`;


/***/ }),

/***/ 2670:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PortfoliosPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5425);
/* harmony import */ var _components_common_meta_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7923);
/* harmony import */ var _components_common_notfound_NotFound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(492);
/* harmony import */ var _components_common_spinner_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8145);
/* harmony import */ var _components_portfolios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5322);
/* harmony import */ var _store_portfolios_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5000);
/* harmony import */ var _util_toJson__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1216);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_portfolios__WEBPACK_IMPORTED_MODULE_7__, _store_portfolios_query__WEBPACK_IMPORTED_MODULE_8__]);
([_components_portfolios__WEBPACK_IMPORTED_MODULE_7__, _store_portfolios_query__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function PortfoliosPage() {
    const { portfolios , isSuccess , isLoading , isError , error  } = (0,_store_portfolios_query__WEBPACK_IMPORTED_MODULE_8__/* .usePortfoliosEffect */ .L)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_meta_Meta__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                description: "jigglypop 포트폴리오 목록"
            }),
            isSuccess && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_portfolios__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_spinner_Spinner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            isError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_notfound_NotFound__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
}
const getServerSideProps = async ({ params  })=>{
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient();
    await queryClient.prefetchQuery([
        "categories"
    ], _api_Category__WEBPACK_IMPORTED_MODULE_3__/* .getCategoriesApi */ .B);
    return {
        props: {
            dehydratedState: (0,_util_toJson__WEBPACK_IMPORTED_MODULE_9__/* .toJson */ .Q)(queryClient)
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7670:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ portfoliosAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const portfoliosAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({
    portfolios: [],
    error: ""
});
portfoliosAtom.debugLabel = "portfolios";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5000:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ usePortfoliosEffect)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_Portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6705);
/* harmony import */ var _atom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7670);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__, _atom__WEBPACK_IMPORTED_MODULE_3__]);
([jotai__WEBPACK_IMPORTED_MODULE_0__, _atom__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// export function usePortfoliosActions() {
//   const [portfolios, setPortfolios] = useAtom(portfoliosAtom);
//   const getPortfolios = async () => {
//     const portfoliosResponse = await getPortfoliosApi();
//     if (portfoliosResponse.status === 200) {
//       await setPortfolios({
//         error: "",
//         portfolios: portfoliosResponse.data.data,
//       });
//     } else {
//       await setPortfolios({
//         ...portfolios,
//         error: portfoliosResponse.err,
//       });
//     }
//   };
//   return {
//     getPortfolios,
//   };
// }
const usePortfoliosEffect = ()=>{
    const [portfolios, setPortfolios] = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.useAtom)(_atom__WEBPACK_IMPORTED_MODULE_3__/* .portfoliosAtom */ .e);
    const { isSuccess , isLoading , isError , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)("portfolios", _api_Portfolio__WEBPACK_IMPORTED_MODULE_2__/* .getPortfoliosApi */ .j, {
        onSuccess (res) {
            setPortfolios({
                portfolios: res,
                error: ""
            });
        },
        onError (res) {
            setPortfolios({
                portfolios: [],
                error: "오류 : " + res.message
            });
        }
    });
    return {
        portfolios,
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


/***/ }),

/***/ 7436:
/***/ ((module) => {

module.exports = require("@react-spring/parallax");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,425,930,703], () => (__webpack_exec__(2670)));
module.exports = __webpack_exports__;

})();