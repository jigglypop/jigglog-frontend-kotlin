"use strict";
exports.id = 430;
exports.ids = [430];
exports.modules = {

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

/***/ 9233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C2": () => (/* binding */ PostContent),
/* harmony export */   "Dx": () => (/* binding */ Title),
/* harmony export */   "Jl": () => (/* binding */ RPInnerWrapper),
/* harmony export */   "QZ": () => (/* binding */ RPPostContent),
/* harmony export */   "Xf": () => (/* binding */ RPWrapper),
/* harmony export */   "cK": () => (/* binding */ SocialInformation),
/* harmony export */   "lr": () => (/* binding */ Carousel),
/* harmony export */   "n5": () => (/* binding */ User)
/* harmony export */ });
/* unused harmony exports ItemWrapper, CircleWrapper, ClearMobile, Button, NameTitle, NameSmallTitle, NameEmail, PrintTitle, IconWrapper */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5174);


const RPWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;
  overflow: hidden;
  padding: 10%;
  font-size: 150%;
  @media (max-width: 768px) {
    padding: 5%;
  }
  @media (max-width: 600px) {
    padding: 1%;
  }
`;
const RPInnerWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Carousel = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_style_default__WEBPACK_IMPORTED_MODULE_1__/* .FlexCenter */ .L)``;
const ItemWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: inline-block;
  -webkit-filter: drop-shadow(3px 3px 2px gray);
  filter: drop-shadow(3px 3px 2px gray);
`;
const CircleWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  margin: 10px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  text-align: center;
  border: 1.5px solid #ebebeb;

  svg {
    width: 20px;
    height: 20px;
  }
`;
const User = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_style_default__WEBPACK_IMPORTED_MODULE_1__/* .FlexCenter */ .L)`
  flex-direction: column;
  p {
    margin: 1rem;
    font-family: "BMDOHYEON_ttf";
    font-size: 6rem;
    font-weight: 800;
  }
`;
const ClearMobile = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  @media (max-width: 600px) {
    display: none;
  }
`;
const SocialInformation = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
  font-size: 20px;
  text-align: center;
  a {
    padding: 0 6px;
  }
`;
const Button = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  display: flex;
  align-items: center;
  color: ${({ theme: { color  }  })=>color};
  background-color: ${({ theme: { backgroundColor  }  })=>backgroundColor};
  border: 1px solid ${({ theme: { color  }  })=>color};
  border-radius: 4px;
  outline: 0;
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_style_default__WEBPACK_IMPORTED_MODULE_1__/* .FlexCenter */ .L)`
  position: relative;
  width: 100%;
  flex-direction: column;

  .portfolio-title {
    margin: 1rem;
    font-family: "BMDOHYEON_ttf";
    font-size: 6rem;
    font-weight: 800;
  }

  .portfolio-url {
    margin: 1rem;
    font-family: "BMDOHYEON_ttf";
    font-size: 3rem;
    font-weight: 800;
  }

  @media (max-width: 1000px) {
    .portfolio-title {
      font-size: 5rem;
    }
    .portfolio-url {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    .portfolio-title {
      font-size: 3rem;
    }
    .portfolio-url {
      font-size: 1.6rem;
    }
  }
`;
const NameTitle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  font-size: 25px;
  font-weight: 800;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
const NameSmallTitle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  margin: 10px;
  font-size: 30px;
  font-weight: 800;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
const NameEmail = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  margin: 10px;
  font-size: 15px;
  font-weight: 800;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;
const PrintTitle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  font-size: 15px;
  font-weight: 800;

  margin: 5px;
`;
const PostContent = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
  padding: 1rem 1rem 4rem;
  position: relative;
  width: 100%;
  .markdown-body {
    position: relative;
    width: 100%;
    color: white;
    h1 {
      padding: 1rem;
      background: white;
      color: black;
    }
    p,
    li {
      a {
        cursor: pointer;
        text-decoration: none;
        color: #feffb8;
      }
    }

    hr,
    br {
      background: #dfdfdf;
    }

    table {
      margin: 1rem;
      width: 100%;
      background: transparent;
    }
    td {
      color: white;
    }
  }
`;
const RPPostContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(PostContent)`
  /* p,
  li {
    font-size: 1.4rem !important;
    font-weight: 800;
  } */
  position: relative;
  width: 100%;
`;
const IconWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;

  align-items: center;
  justify-content: center;
  .innerIcon {
  }
`;


/***/ }),

/***/ 5174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ FlexCenter)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FlexCenter = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;


/***/ })

};
;