"use strict";
exports.id = 565;
exports.ids = [565];
exports.modules = {

/***/ 2504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ CancelButton_CancelButton)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/common/cancel/style.tsx

const CancelButton = (external_styled_components_default()).button`
    position: relative;
    font-size: 2rem;
    transition: all 0.3s ease-in-out;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    &:hover {
        transform: rotate(360deg);
        cursor: pointer;
    }
`;

;// CONCATENATED MODULE: ./src/components/common/cancel/CancelButton.tsx



const CancelButton_CancelButton = ({ className , onClick  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(CancelButton, {
        className: className ? className : "",
        onClick: onClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdCancel, {})
    });
};


/***/ }),

/***/ 3470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ GradientIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9558);
/* harmony import */ var _util_JQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3703);




const GradientIcon = ({ children , text , className , onClick , id  })=>{
    const { 0: isHover , 1: setIsHover  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const iconRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const OverEvent = ()=>{
        setIsHover(true);
    };
    const OutEvent = ()=>{
        setIsHover(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_util_JQuery__WEBPACK_IMPORTED_MODULE_3__.$)(iconRef.current).on("mouseover", OverEvent);
        (0,_util_JQuery__WEBPACK_IMPORTED_MODULE_3__.$)(iconRef.current).on("mouseout", OutEvent);
        return ()=>{
            (0,_util_JQuery__WEBPACK_IMPORTED_MODULE_3__.$)(iconRef.current).remove("mouseover", OverEvent);
            (0,_util_JQuery__WEBPACK_IMPORTED_MODULE_3__.$)(iconRef.current).remove("mouseout", OutEvent);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_2__/* .GradientIconOuter */ .pJ, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_2__/* .GradientIcon */ .cN, {
                className: `gradient-icon ${className ? className : ""}`,
                ref: iconRef,
                onClick: onClick,
                id: id,
                children: [
                    children,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_2__/* .GradientBorder */ .mt, {
                        isHover: isHover
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_2__/* .GradientToolTip */ .FJ, {
                isHover: isHover,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: text
                })
            })
        ]
    });
};


/***/ }),

/***/ 9558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FJ": () => (/* binding */ GradientToolTip),
/* harmony export */   "cN": () => (/* binding */ GradientIcon),
/* harmony export */   "mt": () => (/* binding */ GradientBorder),
/* harmony export */   "n6": () => (/* binding */ AvatarToolTip),
/* harmony export */   "pJ": () => (/* binding */ GradientIconOuter)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GradientIconOuter = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;
  display: flex;
  flex-direction: column;
`;
const GradientIcon = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
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
  justify-content: center;
  align-items: center;
  text-align: center;

  background: transparent;
  overflow: hidden;
  cursor: pointer;

  margin: 0.2rem;
`;
const GradientBorder = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  ${(props)=>props.isHover ? "" : "visibility: hidden;"}

  @keyframes gradient {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
  margin-top: 185%;
  width: 100%;
  height: 100%;

  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-color: white;

  cursor: pointer;
`;
const GradientToolTip = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  ${(props)=>props.isHover ? "" : "visibility: hidden;"}

  @keyframes gradient {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);

  margin-top: 5rem;
  width: 9rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-color: black;

  border-radius: 0.4rem;
  box-shadow: 0 0 10px #1d1d1d;
  cursor: pointer;
  z-index: 10;

  p {
    color: white;
    font-size: 1.2rem;
    font-weight: 800;
  }
`;
const AvatarToolTip = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  ${(props)=>props.isHover ? "" : "visibility: hidden;"}

  @keyframes gradient {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);

  margin-top: 5rem;
  width: 10rem;
  height: 10rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-color: black;

  border-radius: 0.4rem;
  box-shadow: 0 0 10px #1d1d1d;
  cursor: pointer;

  p {
    color: white;
    font-size: 1.2rem;
    margin: 0.6rem;
    font-weight: 800;
  }
`;


/***/ })

};
;