"use strict";
exports.id = 930;
exports.ids = [930];
exports.modules = {

/***/ 7923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Meta)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Meta({ title , description  }) {
    const meta = {
        title: title || "jigglog",
        description: description || "지글로그에 오신 것을 환영합니다",
        cardImage: ""
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                children: [
                    meta.title,
                    " | ",
                    meta.description
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "shortcut icon",
                href: "/facivon.ico"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "google-site-verification",
                content: "lQSJTzJQx3zqrAtN51Lw8DDLnPjoaEa8xVJMVmmpY6Y"
            })
        ]
    });
}


/***/ }),

/***/ 492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ NotFound_NotFound)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/common/notfound/style.tsx

const NotFound = (external_styled_components_default()).div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  .title-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .title {
    font-family: "BMDOHYEON_ttf";
    font-size: 10rem;
    margin: 0;
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
  }
  .text {
    font-family: "BMDOHYEON_ttf";
    font-size: 2rem;
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
  }
  .error {
    color: #ff9797;
    font-family: "BMDOHYEON_ttf";
    font-size: 1.3rem;
    font-weight: 800;
    margin: 0;
  }
`;

;// CONCATENATED MODULE: ./src/components/common/notfound/NotFound.tsx


function NotFound_NotFound({ error  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(NotFound, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "title-container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "title",
                    children: "404"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text",
                    children: "오류가 발생했습니다"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "error",
                    children: error
                })
            ]
        })
    });
}


/***/ }),

/***/ 8145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Spinner_Spinner)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/common/spinner/style.tsx

// spinner
const Spinner = (external_styled_components_default()).div`
  z-index: 8;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  .text {
    font-family: "BMDOHYEON_ttf";
    color: white;
  }

  .title-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .spinner {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    scale: calc(2);
  }

  svg {
    width: 50%;
    max-width: 10rem;
    animation: rotate 3.6s linear infinite;
  }

  circle {
    fill: none;
    stroke: white;
    stroke-width: 8px;
    stroke-dasharray: 300;
    animation: outline 2s cubic-bezier(0.77, 0, 0.18, 1) infinite;
  }

  @keyframes outline {
    0% {
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dashoffset: 300;
    }
    100% {
      stroke-dashoffset: 600;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0turn);
    }
    to {
      transform: rotate(-1turn);
    }
  }
`;

;// CONCATENATED MODULE: ./src/components/common/spinner/Spinner.tsx


function Spinner_Spinner() {
    return /*#__PURE__*/ jsx_runtime_.jsx(Spinner, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "title-container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "spinner",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        viewBox: "0 0 100 100",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                            cx: "50",
                            cy: "50",
                            r: "46"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text",
                        children: "잠시만 기다려주세요"
                    })
                ]
            })
        })
    });
}


/***/ })

};
;