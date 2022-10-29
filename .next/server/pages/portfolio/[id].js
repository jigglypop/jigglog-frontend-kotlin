"use strict";
(() => {
var exports = {};
exports.id = 309;
exports.ids = [309];
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

/***/ 1692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ carousel)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/common/carousel/style.tsx

const CarouselDot = (external_styled_components_default()).li`
    position: relative;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        cursor: pointer;
        border: none;
    }
    .dot-white {
        background: var(--white);
    }
    .dot-gray {
        background: var(--gray3);
    }
    h4 {
        visibility: hidden;
    }
`;
const Carousel = (external_styled_components_default()).div`
    position: relative;
    width: 60vw;
    display: flex;
    justify-content: center;
    align-items: center;

    .carouselInner {
        position: relative;
        width: 60vw;
        height: 50rem;
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 0 0 10px black;
    }
    .carousels {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition: all 0.3s ease-in;
    }

    .carousel {
        width: 60vw;
        height: 50rem;
        object-fit: cover;
    }

    .carouselButton {
        position: absolute;
        width: 80vw;
        bottom: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 768px) {
        .carouselInner {
            height: 40rem;
        }
        .carousel {
            height: 40rem;
        }
    }
    @media (max-width: 600px) {
        .carouselInner {
            height: 30rem;
        }
        .carousel {
            height: 30rem;
        }
    }
`;

;// CONCATENATED MODULE: ./src/components/common/carousel/index.tsx



const carousel_Carousel = ({ imageUrls  })=>{
    // carousel의 ref
    const carouselRef = (0,external_react_.useRef)(null);
    // 현재 선택된 index 값
    const { 0: currentIdx , 1: setCurrentIdx  } = (0,external_react_.useState)(0);
    const onClick = (index)=>{
        setCurrentIdx(index);
    };
    // currentIdx가 바뀔 때
    (0,external_react_.useEffect)(()=>{
        // const carouselWidth = 40;
        const width = 60;
        const transform = `translateX(-${currentIdx * width}vw)`;
        if (carouselRef.current) {
            carouselRef.current.style.transform = transform;
        }
    }, [
        currentIdx
    ]);
    (0,external_react_.useEffect)(()=>{
        const interval = setInterval(()=>{
            setCurrentIdx((currentIdx)=>(currentIdx + 1) % imageUrls.length);
        }, 2000);
        return ()=>{
            clearInterval(interval);
        };
    }, [
        currentIdx
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Carousel, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "carouselInner",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    ref: carouselRef,
                    className: "carousels",
                    children: imageUrls.map((imageUrl, index)=>/*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: index === 0 ? imageUrl.title : imageUrl.title.replace(".png", `${index + 1}.png`),
                            className: "carousel",
                            id: "imgc1",
                            loading: "lazy"
                        }, index))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "carouselButton",
                children: imageUrls.map((_, index)=>/*#__PURE__*/ jsx_runtime_.jsx(CarouselDot, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: index === currentIdx ? "dot-white" : "dot-gray",
                            id: `btn${index}`,
                            onClick: ()=>onClick(index),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: index
                            })
                        })
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const carousel = (carousel_Carousel);


/***/ }),

/***/ 7200:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Portfolio)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1692);
/* harmony import */ var _common_text_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2053);
/* harmony import */ var _post_Markdown_Markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2874);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9233);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_post_Markdown_Markdown__WEBPACK_IMPORTED_MODULE_5__]);
_post_Markdown_Markdown__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function Portfolio({ portfolio  }) {
    const info = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(portfolio.content);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_6__/* .RPWrapper */ .Xf, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_6__/* .RPInnerWrapper */ .Jl, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_6__/* .Title */ .Dx, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_text_Text__WEBPACK_IMPORTED_MODULE_4__/* .GradientText */ .t, {
                            className: "portfolio-title",
                            children: portfolio.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: portfolio.site,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_text_Text__WEBPACK_IMPORTED_MODULE_4__/* .GradientText */ .t, {
                                className: "portfolio-url",
                                children: portfolio.site
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_6__/* .Carousel */ .lr, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_carousel__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        imageUrls: portfolio.imageurls
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_6__/* .RPPostContent */ .QZ, {
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

/***/ 3086:
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
/* harmony import */ var _components_common_meta_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7923);
/* harmony import */ var _api_Portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6705);
/* harmony import */ var _store_portfolio_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5973);
/* harmony import */ var _components_resume_portfolio_portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7200);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_common_spinner_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8145);
/* harmony import */ var _components_common_notfound_NotFound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(492);
/* harmony import */ var _api_Category__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5425);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_portfolio_query__WEBPACK_IMPORTED_MODULE_4__, _components_resume_portfolio_portfolio__WEBPACK_IMPORTED_MODULE_5__]);
([_store_portfolio_query__WEBPACK_IMPORTED_MODULE_4__, _components_resume_portfolio_portfolio__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function PortfolioPage({ id  }) {
    const { portfolio , isSuccess , isLoading , isError , error  } = (0,_store_portfolio_query__WEBPACK_IMPORTED_MODULE_4__/* .usePortfolioEffect */ .Z)(id);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            isSuccess && portfolio && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_meta_Meta__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        description: portfolio?.title + " | " + portfolio?.summary
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_resume_portfolio_portfolio__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        portfolio: portfolio
                    })
                ]
            }),
            isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_spinner_Spinner__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            isError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_notfound_NotFound__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
        ]
    });
}
const getServerSideProps = async ({ params  })=>{
    const id = params?.id;
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClient();
    await Promise.all([
        queryClient.prefetchQuery([
            "portfolio",
            id
        ], ()=>(0,_api_Portfolio__WEBPACK_IMPORTED_MODULE_3__/* .getPortfolioApi */ ._)(id)),
        queryClient.prefetchQuery([
            "categories"
        ], _api_Category__WEBPACK_IMPORTED_MODULE_9__/* .getCategoriesApi */ .B), 
    ]);
    return {
        props: {
            dehydratedState: (0,react_query__WEBPACK_IMPORTED_MODULE_6__.dehydrate)(queryClient),
            id: id
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PortfolioPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2058:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ portfolioAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const portfolioAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({
    portfolio: null,
    error: ""
});
portfolioAtom.debugLabel = "portfolio";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5973:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ usePortfolioEffect)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_Portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6705);
/* harmony import */ var _atom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2058);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__, _atom__WEBPACK_IMPORTED_MODULE_3__]);
([jotai__WEBPACK_IMPORTED_MODULE_0__, _atom__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const usePortfolioEffect = (id)=>{
    const [portfolio, setPortfolio] = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.useAtom)(_atom__WEBPACK_IMPORTED_MODULE_3__/* .portfolioAtom */ .a);
    const { data , isSuccess , isLoading , isError , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)("portfolio", ()=>(0,_api_Portfolio__WEBPACK_IMPORTED_MODULE_2__/* .getPortfolioApi */ ._)(id), {
        // staleTime: 1000,
        onSuccess (res) {
            setPortfolio({
                portfolio: res,
                error: ""
            });
        },
        onError (res) {
            setPortfolio({
                portfolio: null,
                error: "오류 : " + res.message
            });
        }
    });
    return {
        portfolio: data,
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
var __webpack_exports__ = __webpack_require__.X(0, [425,930,874,430], () => (__webpack_exec__(3086)));
module.exports = __webpack_exports__;

})();