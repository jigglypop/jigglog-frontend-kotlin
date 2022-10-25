"use strict";
exports.id = 874;
exports.ids = [874];
exports.modules = {

/***/ 2874:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Markdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3135);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism_dracula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9503);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism_dracula__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism_dracula__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(727);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6809);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(663);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_1__, remark_gfm__WEBPACK_IMPORTED_MODULE_4__]);
([react_markdown__WEBPACK_IMPORTED_MODULE_1__, remark_gfm__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function Markdown({ content  }) {
    const components = {
        code ({ node , inline , className , children , ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__.Prism, {
                style: (react_syntax_highlighter_dist_cjs_styles_prism_dracula__WEBPACK_IMPORTED_MODULE_2___default()),
                PreTag: "div",
                language: match[1],
                children: String(children).replace(/\n$/, ""),
                ...props
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                className: className ? className : "",
                ...props,
                children: children
            });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_5__/* .PostContent */ .C, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "markdown-body",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
                components: components,
                children: content,
                remarkPlugins: [
                    remark_gfm__WEBPACK_IMPORTED_MODULE_4__["default"]
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ PostContent)
/* harmony export */ });
/* unused harmony export PostContentOrigin */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PostContentOrigin = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  line-height: 2em;
  color: black;
  font-weight: 800;

  code {
    background: linear-gradient(
      45deg,
      #b294ff,
      #57e6e6,
      #feffb8,
      #57e6e6,
      #b294ff,
      #57e6e6
    );
    background-size: 500% auto;
    -webkit-animation: gradient 3s linear infinite;
    animation: gradient 3s linear infinite;
    font-family: "BMDOHEYON_ttf" !important;
    font-weight: 400;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
  hr {
    height: 4px;
    background-color: rgba(0, 0, 0, 0.1);
    border: none;
  }
  strong {
    margin-top: 100px;
  }
  ul {
    margin: 0;
  }
  li {
    font-weight: 100;
  }

  blockquote {
    border-left: 0.5rem solid #bfffe7;
    margin: 2rem 0;
    width: 100%;
    background: rgba(185, 185, 185, 0.1);
    padding: 1rem;

    line-height: 1.4em;
    color: #a5a5a5;
  }

  pre,
  span {
    font-family: "FiraMono-Regular" !important;
    margin-top: 10px;
    font-size: 14px !important;
    width: 60vw;
    overflow-x: hidden;
  }
  table {
    min-width: 45vw;
    margin: 20px;
    background: #f9f9f9;
  }
  thead {
    background: #e2e2e2;
  }
  th,
  tr,
  td {
    border: 2px solid gray;
    color: black;
    padding: 10px;
    min-width: 3rem;
  }
  hr {
    margin-bottom: 30px;
  }

  @media (max-width: 992px) {
    padding: 0 10px 10px 10px;
    line-height: 2em;
    color: black;
    hr {
      margin-bottom: 10px;
    }
    p,
    blockquote,
    pre {
      width: 100%;
    }
    ul {
      padding: 0.5rem;
    }
    li {
      padding: 0.5rem;
    }
    table {
      margin: 20px;
    }
  }
`;
const PostContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(PostContentOrigin)`
  em {
    font-weight: 1000;
    text-decoration: underline;
  }
  code {
    font-family: "NanumSquareL", sans-serif !important;
    position: relative;
  }
  del {
    text-decoration: none;
    color: gray;
  }
`;


/***/ })

};
;