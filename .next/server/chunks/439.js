"use strict";
exports.id = 439;
exports.ids = [439];
exports.modules = {

/***/ 1820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CategoryAndTag)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/style/default.ts
var style_default = __webpack_require__(5174);
;// CONCATENATED MODULE: ./src/components/category/style.tsx


const CategoryOuter = external_styled_components_default()(style_default/* FlexCenter */.L)`
  flex-direction: column;
  padding: 5%;
`;
const CategoryTop = (external_styled_components_default()).div`
  position: relative;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 4rem;

  height: 30rem;
  padding: 5rem;
  background-color: rgb(7, 7, 7);
  border-radius: 1rem;
  box-shadow: 0 0 10px black;

  display: grid;
  grid-template-columns: 1fr 1fr;

  .category-left {
    grid-column: 1/2;
    .category-title {
      margin: 0;
      font-family: "BMDOHYEON_ttf";
      font-size: 10rem;
      font-weight: 800;
    }

    .category-name {
      margin: 0;
      font-family: "BMDOHYEON_ttf";
      font-size: 6rem;
      font-weight: 800;
    }
  }

  .category-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;

    grid-column: 2/3;
    height: 8rem;

    .category-item {
      position: relative;
      margin: 0;
      padding: 0;
      font-family: "BMDOHYEON_ttf";
      font-size: 1.5rem;
      font-weight: 800;
      cursor: pointer;
    }
  }

  @media (max-width: 1200px) {
    .category-left {
      .category-title {
        font-size: 8rem;
      }

      .category-name {
        font-size: 4rem;
      }
    }
  }

  @media (max-width: 900px) {
    height: 25rem;

    .category-left {
      .category-title {
        font-size: 6rem;
      }

      .category-name {
        font-size: 5rem;
      }
    }
  }

  @media (max-width: 768px) {
    height: 20rem;

    .category-left {
      grid-column: 1/3;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;
    }
    .category-right {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .category-left {
      .category-title {
        font-size: 4rem;
      }

      .category-name {
        font-size: 2rem;
      }
    }
  }
`;
const CategoryWrapper = (external_styled_components_default()).div`
  position: relative;
  width: 100%;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;

  .infinite-scroll {
    position: relative;
    display: grid;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;

    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .infinite-scroll-component {
    overflow: hidden !important;
  }
  @media (max-width: 1400px) {
    .infinite-scroll {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media (max-width: 1100px) {
    .infinite-scroll {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 700px) {
    .infinite-scroll {
      grid-template-columns: 1fr;
    }
  }
`;

;// CONCATENATED MODULE: ./src/components/posts/style.tsx


const PostItem = external_styled_components_default()(style_default/* FlexCenter */.L)`
  min-width: 28rem;
  height: 35rem;
  border-radius: 1rem;
  margin: 2rem;
  background: rgb(15, 15, 15);
  box-shadow: 0 0 1rem rgb(15, 15, 15);

  .postitem-title {
    font-size: 1.2rem;
    font-weight: 800;
    color: white;
  }

  .postitem-summary {
    font-size: 1.1rem;
    font-weight: 800;
    color: #dfdfdf;
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 20rem 1fr 1fr;
  cursor: pointer;

  img {
    border-radius: 1rem 1rem 0 0;
    grid-row: 1/2;
    grid-column: 1/4;

    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-in;
  }

  .title {
    grid-row: 2/3;
    grid-column: 1/3;
  }

  .under-left {
    padding: 1rem;
    display: flex;
    justify-content: flex-start;
    text-align: center;
    align-items: center;

    grid-row: 3/4;
    grid-column: 1/2;

    .under-item {
      color: #dfdfdf;
      margin: 0.2rem;
      font-size: 1.6rem;
      font-weight: 800;
    }

    .under-text {
      color: #dfdfdf;
      margin: 0.2rem;
      font-size: 1rem;
      font-weight: 800;
    }
  }

  .under-right {
    grid-row: 3/4;
    grid-column: 2/3;
    display: flex;
    justify-content: flex-end;
    text-align: center;
    align-items: center;
    flex-wrap: wrap;

    .under-tag {
      font-family: "BMDOHYEON_ttf";
      font-size: 1rem;
      font-weight: 800;
    }
  }

  &:hover {
    img {
      opacity: 0.2;
    }
  }

  @media (max-width: 700px) {
    grid-template-rows: 10rem 1fr 1fr;

    height: 20rem;
    border-radius: 1rem;
    margin: 1rem;
  }
`;
const PostImage = (external_styled_components_default()).img`
  grid-row: 1/2;
  grid-column: 1/3;

  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/common/text/Text.tsx
var Text = __webpack_require__(2053);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(4259);
// EXTERNAL MODULE: ./src/components/common/avatar/Avatar.tsx + 1 modules
var Avatar = __webpack_require__(195);
;// CONCATENATED MODULE: ./src/components/posts/PostItem.tsx







function PostItem_PostItem({ post  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/post/${post.id}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PostItem, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: post.images
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "title",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Text/* GradientText */.t, {
                            className: "postitem-title",
                            children: post.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "postitem-summary",
                            children: post.summary.slice(0, 30) + "..."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "under-left",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineMessage, {
                            className: "under-item"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "under-text",
                            children: post.comments?.length
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiFillEye, {
                            className: "under-item"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "under-text",
                            children: post.viewcount
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "under-right",
                    children: [
                        post.tags?.map((tag, _)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `/tag/${tag.tag?.id}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Text/* GradientText */.t, {
                                    className: "under-tag",
                                    children: [
                                        "#",
                                        tag.tag?.title
                                    ]
                                })
                            }, tag.tag?.id)),
                        /*#__PURE__*/ jsx_runtime_.jsx(Avatar/* default */.Z, {
                            width: "3rem",
                            height: "3rem",
                            imageUrl: post.user.imageUrl
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-infinite-scroll-component"
var external_react_infinite_scroll_component_ = __webpack_require__(4336);
var external_react_infinite_scroll_component_default = /*#__PURE__*/__webpack_require__.n(external_react_infinite_scroll_component_);
;// CONCATENATED MODULE: ./src/components/category/CategoryAndTag.tsx








function CategoryAndTag({ posts , categories , type , getMorePost  }) {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CategoryOuter, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CategoryTop, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "category-left",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Text/* GradientText */.t, {
                                className: "category-title",
                                children: type === "category" ? "카테고리" : "태그"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Text/* GradientText */.t, {
                                className: "category-name",
                                children: categories.filter((category)=>category.id.toString() === router.query.id)[0]?.title
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "category-right",
                        children: categories.map((category)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: type === "category" ? `/category/${category.id}` : `/tag/${category.id}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Text/* GradientText */.t, {
                                    className: "category-item",
                                    children: [
                                        type === "category" ? " $" : " #",
                                        category.title
                                    ]
                                })
                            }, category.id))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CategoryWrapper, {
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_infinite_scroll_component_default()), {
                    dataLength: posts.length,
                    next: getMorePost,
                    hasMore: true,
                    loader: /*#__PURE__*/ jsx_runtime_.jsx("h3", {}),
                    endMessage: /*#__PURE__*/ jsx_runtime_.jsx("h4", {}),
                    className: "infinite-scroll",
                    children: posts && posts.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(PostItem_PostItem, {
                            post: post
                        }, post.id))
                })
            })
        ]
    });
}


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


/***/ })

};
;