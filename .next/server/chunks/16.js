"use strict";
exports.id = 16;
exports.ids = [16];
exports.modules = {

/***/ 4691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bl": () => (/* binding */ PostLeft),
/* harmony export */   "HW": () => (/* binding */ Comments),
/* harmony export */   "SO": () => (/* binding */ Post),
/* harmony export */   "UA": () => (/* binding */ PostRight),
/* harmony export */   "jc": () => (/* binding */ MarkdownStyle),
/* harmony export */   "s6": () => (/* binding */ PostPage)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PostPage = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  font-family: "NanumBarunGothicSubset" !important;
  position: relative;
  width: 100%;
  height: 100%;
`;
const Comments = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;
  width: 100%;
  margin-bottom: 20vh;
`;
const Post = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  /* position: relative; */
  font-size: 160%;
  width: 100%;
  height: 100%;
  z-index: 1;
  padding-top: 50px;
  border-radius: 10px;

  background-color: #ffffff;

  display: grid;
  grid-template-columns: 2fr 5fr 2fr;

  .post-title {
    position: relative;
    font-size: 6rem;
    font-weight: 800;
    margin: 0 0 1rem 0;
  }

  .post-width {
    position: relative;
    width: 100%;

    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    overflow: hidden;
  }

  .post-image {
    position: relative;

    width: 100%;
    height: 30rem;
    object-fit: cover;
  }

  .post-under {
    position: relative;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .user-profile {
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-size: 1.2rem;
        font-weight: 800;
      }
    }

    .owner-under {
      display: flex;
      justify-content: center;
      align-items: center;

      .owner-outer {
        margin: 0.5rem;
      }

      .owner-item {
        font-size: 2.5rem;
        margin: 0.5rem;
      }
    }
  }
  .post-tags {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    p {
      font-size: 1.2rem;
      font-weight: 800;
      background-color: #1d1d1d;
      padding: 1rem;
      color: white;
      margin: 0.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 0 0.5rem #1d1d1d;
    }

    .post-tag {
      cursor: pointer;
      transition: all 0.3s ease-in;

      &:hover {
        color: #dbdbdb;
      }
    }
  }

  @media (max-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
  }

  @media (max-width: 768px) {
    .post-title {
      font-size: 4rem;
    }
    .post-tags {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .post-title {
      font-size: 3rem;
    }
  }
`;
const MarkdownStyle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;
  width: 95%;
  grid-column: 2/3;

  .markdown-body {
    min-height: 50rem;

    pre {
      div {
        border-radius: 1rem;
        padding: 1rem;
        width: 100vw;

        code {
          span {
            font-family: "Source Sans Pro", "Noto Sans KR", "Roboto",
              "Open Sans", Arial, sans-serif;
            font-size: 1.6rem;
          }
        }
      }
    }
  }

  .post-owner {
    position: relative;
    width: 100%;
    margin-top: 20rem;
    display: flex;
    align-items: flex-start;

    .user-profile {
      display: flex;

      margin-bottom: 5rem;
    }

    .user-summary {
      h3 {
        margin: 1rem;
        font-size: 4rem;
        font-weight: 800;
      }

      p {
        margin: 1rem;
        font-size: 2rem;
        font-weight: 800;
      }
    }
    border-bottom: 2px solid #e6e6e6;
  }

  @media (max-width: 992px) {
    .post-owner {
      width: 100%;
      .user-summary {
        h3 {
          font-size: 3rem;
        }
        p {
          font-size: 2rem;
        }
      }
    }
  }

  @media (max-width: 600px) {
    .post-owner {
      .user-summary {
        h3 {
          font-size: 2.5rem;
        }
        p {
          font-size: 1.5rem;
        }
      }
    }
  }
`;
const PostLeft = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: sticky;
  grid-column: 1/2;
  margin-top: 100vh;
  margin-right: 2rem;
`;
const PostRight = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: sticky;
  grid-column: 3/4;
  margin-top: 100vh;
  margin-left: 2rem;
`;


/***/ }),

/***/ 7481:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ postAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const postAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({
    post: null,
    error: ""
});
postAtom.debugLabel = "post";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;