"use strict";
(() => {
var exports = {};
exports.id = 687;
exports.ids = [687];
exports.modules = {

/***/ 3022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cj": () => (/* binding */ postCommentsApi),
/* harmony export */   "Ct": () => (/* binding */ deleteCommentsApi),
/* harmony export */   "OF": () => (/* binding */ getCommentsApi)
/* harmony export */ });
/* harmony import */ var _constants_URL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5539);
/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2131);


const getCommentsApi = async (id)=>{
    return await (0,_methods__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(`${_constants_URL__WEBPACK_IMPORTED_MODULE_0__/* .SERVER_URL */ .LB}/comment/${id}`);
};
const postCommentsApi = async (postId, body)=>{
    return await (0,_methods__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().postToken(`${_constants_URL__WEBPACK_IMPORTED_MODULE_0__/* .SERVER_URL */ .LB}/comment/${postId}`, body);
};
const deleteCommentsApi = async (commentId)=>{
    return await (0,_methods__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().deleteToken(`${_constants_URL__WEBPACK_IMPORTED_MODULE_0__/* .SERVER_URL */ .LB}/comment/${commentId}`);
};


/***/ }),

/***/ 8306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ deleteRecommentsApi),
/* harmony export */   "p": () => (/* binding */ postRecommentsApi)
/* harmony export */ });
/* harmony import */ var _constants_URL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5539);
/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2131);


const postRecommentsApi = async (recommentId, body)=>{
    return await (0,_methods__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().postToken(`${_constants_URL__WEBPACK_IMPORTED_MODULE_0__/* .SERVER_URL */ .LB}/recomment/${recommentId}`, body);
};
const deleteRecommentsApi = async (recommentId)=>{
    return await (0,_methods__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().deleteToken(`${_constants_URL__WEBPACK_IMPORTED_MODULE_0__/* .SERVER_URL */ .LB}/recomment/${recommentId}`);
};


/***/ }),

/***/ 2330:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Comments)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CommentItem_CommentItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6021);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7461);
/* harmony import */ var _store_comment_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8650);
/* harmony import */ var _WriteComment_WriteComment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5116);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CommentItem_CommentItem__WEBPACK_IMPORTED_MODULE_1__, _store_comment_query__WEBPACK_IMPORTED_MODULE_4__, _WriteComment_WriteComment__WEBPACK_IMPORTED_MODULE_5__]);
([_CommentItem_CommentItem__WEBPACK_IMPORTED_MODULE_1__, _store_comment_query__WEBPACK_IMPORTED_MODULE_4__, _WriteComment_WriteComment__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function Comments() {
    const { comments  } = (0,_store_comment_query__WEBPACK_IMPORTED_MODULE_4__/* .useCommentActions */ .K)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_3__/* .CommentDiv */ .Fb, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_3__/* .CommentCountDiv */ .Pd, {
                children: comments && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                    children: [
                        comments.length,
                        " 개의 댓글이 달렸습니다"
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_3__/* .CommentWriteDiv */ .rP, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WriteComment_WriteComment__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    type: "comment"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_3__/* .CommentItemsDiv */ .jX, {
                children: comments && comments.map((comment, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CommentItem_CommentItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        comment: comment,
                        type: "comment"
                    }, index))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fb": () => (/* binding */ CommentDiv),
/* harmony export */   "Pd": () => (/* binding */ CommentCountDiv),
/* harmony export */   "jX": () => (/* binding */ CommentItemsDiv),
/* harmony export */   "rP": () => (/* binding */ CommentWriteDiv)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CommentDiv = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  margin-top: 10rem;
  position: relative;
  width: 100%;
  display: grid;
`;
// 댓글 위 카운트
const CommentCountDiv = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;
  grid-row: 1/2;

  h4 {
    margin: 1.4rem;
    font-size: 2rem;
    font-weight: 800;
    color: black;
  }
`;
// 댓글 기입
const CommentWriteDiv = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;
  grid-row: 2/3;
`;
// 댓글 아이템들
const CommentItemsDiv = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;
  grid-row: 3/4;
`;


/***/ }),

/***/ 6021:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CommentItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8419);
/* harmony import */ var _CommentUser_CommentUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3568);
/* harmony import */ var _DeleteComment_DeleteComment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1931);
/* harmony import */ var _Recomments_Recomments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8647);
/* harmony import */ var _store_comment_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8650);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DeleteComment_DeleteComment__WEBPACK_IMPORTED_MODULE_4__, _Recomments_Recomments__WEBPACK_IMPORTED_MODULE_5__, _store_comment_query__WEBPACK_IMPORTED_MODULE_6__]);
([_DeleteComment_DeleteComment__WEBPACK_IMPORTED_MODULE_4__, _Recomments_Recomments__WEBPACK_IMPORTED_MODULE_5__, _store_comment_query__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function CommentItem({ comment , type  }) {
    const { openId , setOpen  } = (0,_store_comment_query__WEBPACK_IMPORTED_MODULE_6__/* .useCommentActions */ .K)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            comment && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_2__/* .CommentItemDiv */ .OE, {
                type: type,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_2__/* .CommentItemUpperDiv */ ._x, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CommentUser_CommentUser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                user: comment.user,
                                createdAt: comment.createdAt
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DeleteComment_DeleteComment__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                comment: comment,
                                type: type
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_2__/* .CommenItemContentDiv */ .fG, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: comment.content
                        })
                    }),
                    type === "comment" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_2__/* .CommenItemLowerDiv */ .Cc, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_2__/* .OpenTextDiv */ .U7, {
                            onClick: ()=>setOpen({
                                    openId: comment.id
                                }),
                            children: comment.recomments && openId.openId === comment.id ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                children: [
                                    comment.recomments.length,
                                    " 개의 대댓글 / 닫기"
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                children: [
                                    comment.recomments.length,
                                    " 개의 대댓글 / 대댓글 열기"
                                ]
                            })
                        })
                    })
                ]
            }),
            type === "comment" && openId.openId === comment.id && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Recomments_Recomments__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                recomments: comment.recomments
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cc": () => (/* binding */ CommenItemLowerDiv),
/* harmony export */   "OE": () => (/* binding */ CommentItemDiv),
/* harmony export */   "U7": () => (/* binding */ OpenTextDiv),
/* harmony export */   "_x": () => (/* binding */ CommentItemUpperDiv),
/* harmony export */   "fG": () => (/* binding */ CommenItemContentDiv)
/* harmony export */ });
/* unused harmony exports OpenDiv, CommentItemsDiv */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const OpenTextDiv = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  cursor: pointer;
  h4 {
    font-size: 1.2rem;
    font-weight: 800;
    color: #4a00e0;
  }
`;
const OpenDiv = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: none;
  &.isopen {
    display: inline;
  }
`;
// 댓글 아이템들
const CommentItemsDiv = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;
  grid-row: 3/4;
`;
// 댓글 아이템 위
const CommentItemUpperDiv = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;

  padding: 10px;
  grid-column: 1/3;
  grid-row: 1/2;
  padding: 10px;
  border-top: 2px solid #e6e6e6;

  h4 {
    font-size: 10px;
    font-weight: 800;
    color: gray;
  }

  .cancel {
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
// 댓글 컨텐츠
const CommenItemContentDiv = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;
  grid-column: 1/3;
  grid-row: 2/3;
  padding: 10px;

  h4 {
    font-size: 1.4rem;
    font-weight: 800;
    color: black;
  }
`;
// 댓글 아래
const CommenItemLowerDiv = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;
  grid-column: 1/3;
  grid-row: 3/4;
  padding: 10px;
`;
// 외부
const CommentItemDiv = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;
  display: grid;
  background-color: ${(props)=>props.type === "comment" ? "white" : "rgba(0, 0, 0, 0.05)"};
  grid-template-columns: 1fr 1fr;
  grid-template-rows: ${(props)=>props.type === "comment" ? "10rem 1fr 1fr" : "10rem 1fr"};
  margin: 1%;
`;


/***/ }),

/***/ 3568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CommentUser)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/util/date.ts
var date = __webpack_require__(2466);
// EXTERNAL MODULE: ./src/components/common/avatar/Avatar.tsx + 1 modules
var Avatar = __webpack_require__(195);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/comment/CommentUser/style.tsx

const CommentUserDiv = (external_styled_components_default()).div`
  position: relative;
  margin-top: 4rem;
  margin-bottom: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  flex-direction: column;

  h4 {
    font-size: 13px;
    font-weight: 800;
    color: black;
  }

  .user-item {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 1.2rem;
      font-weight: 800;
      color: black;
    }
  }

  .user-inner-item {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    .user-name {
      margin: 0;
      padding: 0;
      font-size: 1.6rem;
      font-weight: 800;
    }
    .user-created-at {
      color: #c4c4c4;
    }
  }
`;

;// CONCATENATED MODULE: ./src/components/comment/CommentUser/CommentUser.tsx





function CommentUser({ user , createdAt  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(CommentUserDiv, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "user-item",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Avatar/* default */.Z, {
                    boxShadow: "2px 2px 10px white",
                    width: "6rem",
                    height: "6rem",
                    className: "manager",
                    imageUrl: user ? user.imageUrl : ""
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "user-inner-item",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "user-name",
                            children: user && user.username
                        }),
                        createdAt && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "user-created-at",
                            children: (0,date/* dateStringFormat */.W)(new Date(createdAt))
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 1931:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DeleteComment)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7599);
/* harmony import */ var _store_comment_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8650);
/* harmony import */ var _common_cancel_CancelButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2504);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2451);
/* harmony import */ var _store_user_atom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_comment_query__WEBPACK_IMPORTED_MODULE_3__, jotai__WEBPACK_IMPORTED_MODULE_5__, _store_user_atom__WEBPACK_IMPORTED_MODULE_6__]);
([_store_comment_query__WEBPACK_IMPORTED_MODULE_3__, jotai__WEBPACK_IMPORTED_MODULE_5__, _store_user_atom__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function DeleteComment({ comment , type  }) {
    const { onGoRemoveComment , onGoRemoveRecomment  } = (0,_store_comment_query__WEBPACK_IMPORTED_MODULE_3__/* .useCommentActions */ .K)();
    const user = (0,jotai__WEBPACK_IMPORTED_MODULE_5__.useAtomValue)(_store_user_atom__WEBPACK_IMPORTED_MODULE_6__/* .userAtom */ .L);
    const onRemove = (commentId)=>{
        if (type === "comment") {
            onGoRemoveComment(commentId);
        } else if (type === "recomment") {
            onGoRemoveRecomment(commentId);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_2__/* .DeleteWrapperDiv */ .$, {
        children: user && user.user && comment.user && (comment.user.id === user.user.id || user.user.id === 1) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_cancel_CancelButton__WEBPACK_IMPORTED_MODULE_4__/* .CancelButton */ .L, {
            className: "delete-button",
            onClick: ()=>onRemove(comment.id)
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ DeleteWrapperDiv)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

// 댓글 아이템 위
const DeleteWrapperDiv = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  text-align: center;
  align-items: center;

  .delete-button {
    color: #1d1d1d;
    background-color: transparent;
    font-size: 2.5rem;
    position: absolute;
    top: 2rem;
    right: 2rem;
  }

  .errormsg {
    font-size: 10px;
    font-weight: 800;
    color: #ff416c;
  }
`;


/***/ }),

/***/ 8647:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Recomments)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CommentItem_CommentItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6021);
/* harmony import */ var _WriteComment_WriteComment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5116);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4704);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CommentItem_CommentItem__WEBPACK_IMPORTED_MODULE_2__, _WriteComment_WriteComment__WEBPACK_IMPORTED_MODULE_3__]);
([_CommentItem_CommentItem__WEBPACK_IMPORTED_MODULE_2__, _WriteComment_WriteComment__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function Recomments({ recomments  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_4__/* .RecommentDiv */ .al, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_4__/* .RecommentWriteDiv */ .Wl, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WriteComment_WriteComment__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    type: "recomment"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_4__/* .RecommentItemsDiv */ .K5, {
                children: recomments && recomments.map((recomment, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CommentItem_CommentItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        comment: recomment,
                        type: "recomment"
                    }, index))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K5": () => (/* binding */ RecommentItemsDiv),
/* harmony export */   "Wl": () => (/* binding */ RecommentWriteDiv),
/* harmony export */   "al": () => (/* binding */ RecommentDiv)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const RecommentDiv = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;
  display: grid;
`;
const RecommentWriteDiv = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;
`;
const RecommentItemsDiv = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;
`;


/***/ }),

/***/ 5116:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ WriteComment)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_comment_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8650);
/* harmony import */ var _store_commentuser_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7439);
/* harmony import */ var _store_user_atom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var _store_user_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(339);
/* harmony import */ var _common_avatar_Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(195);
/* harmony import */ var _common_button_BlackButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8902);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6930);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_1__, _store_comment_query__WEBPACK_IMPORTED_MODULE_3__, _store_commentuser_query__WEBPACK_IMPORTED_MODULE_4__, _store_user_atom__WEBPACK_IMPORTED_MODULE_5__, _store_user_query__WEBPACK_IMPORTED_MODULE_6__]);
([jotai__WEBPACK_IMPORTED_MODULE_1__, _store_comment_query__WEBPACK_IMPORTED_MODULE_3__, _store_commentuser_query__WEBPACK_IMPORTED_MODULE_4__, _store_user_atom__WEBPACK_IMPORTED_MODULE_5__, _store_user_query__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function WriteComment({ type  }) {
    const user = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtomValue)(_store_user_atom__WEBPACK_IMPORTED_MODULE_5__/* .userAtom */ .L);
    // const { login, changeLoginForm } = useLoginActions();
    const { commentUserform , commentUser , changeCommentUserForm  } = (0,_store_commentuser_query__WEBPACK_IMPORTED_MODULE_4__/* .useCommentUserActions */ .a)();
    const { commentLogout  } = (0,_store_user_query__WEBPACK_IMPORTED_MODULE_6__/* .useUserActions */ ._y)();
    const { error , onChangeComment , onSubmitComment , onSubmitRecomment  } = (0,_store_comment_query__WEBPACK_IMPORTED_MODULE_3__/* .useCommentActions */ .K)();
    const onLogout = (e)=>{
        e.preventDefault();
        commentLogout();
    };
    // 로그인 상태에서 댓글 작성
    const submitAndComment = async (e)=>{
        e.preventDefault();
        if (type === "comment") {
            await onSubmitComment();
        } else if (type === "recomment") {
            await onSubmitRecomment();
        }
    };
    // 비로그인 상태에서 댓글 작성
    const submitRegisterAndComment = async (e)=>{
        e.preventDefault();
        return new Promise(commentUser).then(()=>submitAndComment(e));
    // await commentUser();
    // await submitAndComment(e);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_9__/* .WriteCommentDiv */ .D1, {
        onSubmit: (e)=>user.user ? submitAndComment(e) : submitRegisterAndComment(e),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_9__/* .LeftDiv */ .sL, {
                children: user.user ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_9__/* .UserDiv */ .eH, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "user",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_avatar_Avatar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                boxShadow: "2px 2px 10px white",
                                width: "4rem",
                                height: "4rem",
                                className: "manager",
                                imageUrl: user.user.imageUrl
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "button",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_button_BlackButton__WEBPACK_IMPORTED_MODULE_8__/* .BlackButton */ .h, {
                                    onClick: (e)=>onLogout(e),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "로그아웃"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_button_BlackButton__WEBPACK_IMPORTED_MODULE_8__/* .BlackButton */ .h, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "등록"
                                    })
                                })
                            ]
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_9__/* .SmallTextDiv */ .zu, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            autoComplete: "off",
                            value: commentUserform.username,
                            name: "username",
                            placeholder: "닉네임",
                            onChange: (e)=>changeCommentUserForm(e)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            autoComplete: "off",
                            value: commentUserform.password,
                            name: "password",
                            type: "password",
                            placeholder: "비밀번호",
                            onChange: (e)=>changeCommentUserForm(e)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_button_BlackButton__WEBPACK_IMPORTED_MODULE_8__/* .BlackButton */ .h, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "등록"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_9__/* .RightDiv */ .yS, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        autoComplete: "content",
                        className: "writecomment-textarea",
                        name: "content",
                        placeholder: "댓글 내용을 입력하세요",
                        onChange: (e)=>onChangeComment(e)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "errormsg",
                        children: error
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D1": () => (/* binding */ WriteCommentDiv),
/* harmony export */   "eH": () => (/* binding */ UserDiv),
/* harmony export */   "sL": () => (/* binding */ LeftDiv),
/* harmony export */   "yS": () => (/* binding */ RightDiv),
/* harmony export */   "zu": () => (/* binding */ SmallTextDiv)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const WriteCommentDiv = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().form)`
  background: rgba(0, 0, 0, 0.05);
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 4fr;

  h4 {
    font-size: 13px;
    font-weight: 800;
    color: black;
  }
`;
const SmallTextDiv = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  flex-direction: column;

  input {
    margin: 0.5rem 0.5rem 0.5rem 0;
    font-size: 1.2rem;
    outline: none;
    width: 100%;
    background-color: white;
    padding: 10px;
    border: none;
    color: black;
  }

  input[type="password"] {
    font-family: "Malgun gothic", dotum, sans-serif;

    &::placeholder {
      font-family: "NanumSquareL", sans-serif;
      color: white;
      opacity: 1;
    }
  }
`;
const UserDiv = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: grid;
  grid-template-rows: 1fr 2fr;
  grid-template-columns: 1fr 1fr;

  .user {
    display: flex;
    align-items: center;
    justify-content: center;

    grid-row: 1/2;
    grid-column: 1/3;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    grid-row: 2/3;
    grid-column: 1/3;

    button {
      padding: 1rem;
    }
  }
`;
const LeftDiv = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  grid-column: 1/2;
`;
const RightDiv = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  grid-column: 2/3;

  h4 {
    font-size: 1.2rem;
    font-weight: 800;
    color: #4a00e0;
  }
  textarea {
    font-size: 1.2rem;
    outline: none;
    margin: 1rem;
    height: 20vh;
    width: 95%;
    padding: 1rem;
    box-sizing: border-box;
    background-color: white;
    border: none;
  }
`;


/***/ }),

/***/ 9684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_PrintButton)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-icons/bi"
const bi_namespaceObject = require("react-icons/bi");
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/common/PrintButton/styled.tsx

const Button = (external_styled_components_default()).button`
    border-radius: 50%;
    border: none;
    width: 45px;
    height: 45px;
    margin: 5px;
    background-color: #141414;
    transition: all 0.5s ease-in-out;
    box-shadow: 0 0 7px black;

    .link-inner {
        color: white;
        width: 30px;
        height: 30px;
    }
`;

;// CONCATENATED MODULE: ./src/components/common/PrintButton/index.tsx




const PrintButton = ()=>{
    const printPage = (0,external_react_.useCallback)(()=>{
        global.print();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(Button, {
        type: "button",
        onClick: printPage,
        children: /*#__PURE__*/ jsx_runtime_.jsx(bi_namespaceObject.BiPrinter, {
            className: "link-inner"
        })
    });
};
/* harmony default export */ const common_PrintButton = (PrintButton);


/***/ }),

/***/ 8902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ BlackButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2792);


const BlackButton = ({ children , onClick  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_1__/* .BlackButton */ .hO, {
        type: "submit",
        onClick: onClick,
        children: children
    });
};


/***/ }),

/***/ 4513:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ IsOwner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var _store_user_atom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9140);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_1__, _store_user_atom__WEBPACK_IMPORTED_MODULE_2__]);
([jotai__WEBPACK_IMPORTED_MODULE_1__, _store_user_atom__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function IsOwner({ children  }) {
    const user = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtomValue)(_store_user_atom__WEBPACK_IMPORTED_MODULE_2__/* .userAtom */ .L);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_3__/* .isOwner */ .m, {
        isOwner: user?.user?.id === 1,
        children: children
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ isOwner)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const isOwner = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    position: relative;
    ${(props)=>props.isOwner ? "" : "display: none;"}
`;


/***/ }),

/***/ 6811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Buttons_CopyButton)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(4259);
// EXTERNAL MODULE: ./src/components/post/Buttons/style.tsx
var style = __webpack_require__(7413);
;// CONCATENATED MODULE: external "react-copy-to-clipboard"
const external_react_copy_to_clipboard_namespaceObject = require("react-copy-to-clipboard");
// EXTERNAL MODULE: ./src/util/toast.ts
var toast = __webpack_require__(7226);
;// CONCATENATED MODULE: ./src/components/post/Buttons/CopyButton.tsx






const CopyButton = ()=>{
    const onClick = ()=>{
        (0,toast/* createToast */.Y)("링크 복사");
    };
    const { 0: url , 1: setUrl  } = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        setUrl(window.location.href);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_copy_to_clipboard_namespaceObject.CopyToClipboard, {
        text: url,
        children: /*#__PURE__*/ jsx_runtime_.jsx(style/* LinkButton */.Qj, {
            onClick: onClick,
            children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineLink, {
                className: "link-inner"
            })
        })
    });
};
/* harmony default export */ const Buttons_CopyButton = (CopyButton);


/***/ }),

/***/ 8317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8098);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7413);




const KakaoShareButton = ({ title , image  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        createKakaoButton();
    }, []);
    const createKakaoButton = ()=>{
        // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
        if (window) {
            let Window = window;
            if (Window.Kakao) {
                const kakao = Window.Kakao;
                // 중복 initialization 방지
                if (!kakao.isInitialized()) {
                    // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
                    kakao.init("ff408d7503485d500776f4baafb4c66f");
                }
                kakao.Link.createDefaultButton({
                    container: "#kakao-link-btn",
                    objectType: "feed",
                    content: {
                        title: title,
                        description: "#jigglog",
                        imageUrl: image,
                        link: {
                            mobileWebUrl: window.location.href,
                            webUrl: window.location.href
                        }
                    },
                    social: {
                        likeCount: 0,
                        commentCount: 0
                    },
                    buttons: [
                        {
                            title: "웹으로 보기",
                            link: {
                                mobileWebUrl: window.location.href,
                                webUrl: window.location.href
                            }
                        },
                        {
                            title: "앱으로 보기",
                            link: {
                                mobileWebUrl: window.location.href,
                                webUrl: window.location.href
                            }
                        }, 
                    ]
                });
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "kakao-share-button",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_3__/* .KakaoButton */ .im, {
            id: "kakao-link-btn",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.RiKakaoTalkLine, {
                className: "kakao-inner"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KakaoShareButton);


/***/ }),

/***/ 3188:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Buttons)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_PrintButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9684);
/* harmony import */ var _CopyButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6811);
/* harmony import */ var _KakaoShareButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8317);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(924);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_im__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7413);
/* harmony import */ var _common_icon_GradientIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3470);
/* harmony import */ var _common_isOwner_isOwner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4513);
/* harmony import */ var _util_JQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3703);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_isOwner_isOwner__WEBPACK_IMPORTED_MODULE_9__]);
_common_isOwner_isOwner__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function Buttons({ post  }) {
    // 답
    const { 0: codes , 1: setCodes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: ems , 1: setEms  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: dels , 1: setDels  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const toggleCodes = ()=>{
        setCodes(!codes);
    };
    const toggleEms = ()=>{
        setEms(!ems);
    };
    const toggleDels = ()=>{
        setDels(!dels);
    };
    // 마크다운 색 바꾸기
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_util_JQuery__WEBPACK_IMPORTED_MODULE_10__.$$)("em").css("visibility", ems ? "hidden" : "visible");
        (0,_util_JQuery__WEBPACK_IMPORTED_MODULE_10__.$$)("code").css("visibility", codes ? "hidden" : "visible");
        (0,_util_JQuery__WEBPACK_IMPORTED_MODULE_10__.$$)("del").css("visibility", dels ? "hidden" : "visible");
    }, [
        codes,
        ems,
        dels
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_7__/* .Visible */ .zv, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_isOwner_isOwner__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_7__/* .WarpVisible */ .eN, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_icon_GradientIcon__WEBPACK_IMPORTED_MODULE_8__/* .GradientIcon */ .c, {
                            onClick: toggleCodes,
                            className: "link-outer color",
                            id: "answer",
                            text: "코드 토글",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_7__/* .defaultButton */ .fM, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdTexture, {
                                    className: "link-inner default-icon"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_icon_GradientIcon__WEBPACK_IMPORTED_MODULE_8__/* .GradientIcon */ .c, {
                            onClick: toggleEms,
                            className: "link-outer color",
                            id: "lines",
                            text: "밑줄 토글",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_7__/* .defaultButton */ .fM, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdFormatColorText, {
                                    className: "link-inner default-icon"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_icon_GradientIcon__WEBPACK_IMPORTED_MODULE_8__/* .GradientIcon */ .c, {
                            onClick: toggleDels,
                            className: "link-outer",
                            id: "dels",
                            text: "라인 블록",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_7__/* .defaultButton */ .fM, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_6__.ImTextColor, {
                                    className: "link-inner default-icon"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_7__/* .WarpVisibleUnder */ .Cq, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_icon_GradientIcon__WEBPACK_IMPORTED_MODULE_8__/* .GradientIcon */ .c, {
                        text: "카카오톡 공유",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_KakaoShareButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            title: post.title,
                            image: post.images
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_icon_GradientIcon__WEBPACK_IMPORTED_MODULE_8__/* .GradientIcon */ .c, {
                        text: "URL주소 복사",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CopyButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_icon_GradientIcon__WEBPACK_IMPORTED_MODULE_8__/* .GradientIcon */ .c, {
                        text: "글전체 프린트",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_PrintButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cq": () => (/* binding */ WarpVisibleUnder),
/* harmony export */   "Qj": () => (/* binding */ LinkButton),
/* harmony export */   "eN": () => (/* binding */ WarpVisible),
/* harmony export */   "fM": () => (/* binding */ defaultButton),
/* harmony export */   "im": () => (/* binding */ KakaoButton),
/* harmony export */   "zv": () => (/* binding */ Visible)
/* harmony export */ });
/* unused harmony exports PrintTitle, ClearMobile */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const defaultButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  border-radius: 50%;
  border: none;
  width: 45px;
  height: 45px;
  margin: 5px;
  background-color: #141414;
  transition: all 0.5s ease-in-out;
  box-shadow: 0 0 7px black;
  cursor: pointer;

  .link-inner {
    color: white;
    width: 30px;
    height: 30px;
  }
`;
const KakaoButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(defaultButton)`
  .kakao-inner {
    color: white;
    width: 30px;
    height: 30px;
  }
`;
const LinkButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(defaultButton)`
  .link-inner {
    color: white;
    width: 30px;
    height: 30px;
  }
`;
const PrintTitle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  font-size: 15px;
  font-weight: 800;
  margin: 5px;
  text-shadow: 3px 3px 30px white;
`;
const ClearMobile = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  @media (max-width: 600px) {
    display: none;
  }
`;
const Visible = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: sticky;
  top: 15rem;
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-columns: 2fr 1fr 1fr;
  margin-left: 10rem;

  @media (max-width: 992px) {
    display: none;
  }
`;
const WarpVisible = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  grid-column: 1/2;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1200px) {
    display: none;
  }
`;
const WarpVisibleUnder = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  grid-column: 2/3;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1200px) {
    display: none;
  }
`;


/***/ }),

/***/ 4462:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Post)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4691);
/* harmony import */ var _Markdown_Markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2874);
/* harmony import */ var _common_avatar_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(195);
/* harmony import */ var _util_date__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2466);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8098);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8547);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_gr__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_icon_GradientIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3470);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _comment_Comment_Comments__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2330);
/* harmony import */ var _Toc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9224);
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3188);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2451);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2752);
/* harmony import */ var _store_user_atom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15);
/* harmony import */ var _store_modal_atom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6406);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Markdown_Markdown__WEBPACK_IMPORTED_MODULE_4__, _comment_Comment_Comments__WEBPACK_IMPORTED_MODULE_10__, _Buttons__WEBPACK_IMPORTED_MODULE_12__, jotai__WEBPACK_IMPORTED_MODULE_13__, jotai_utils__WEBPACK_IMPORTED_MODULE_14__, _store_user_atom__WEBPACK_IMPORTED_MODULE_15__, _store_modal_atom__WEBPACK_IMPORTED_MODULE_16__]);
([_Markdown_Markdown__WEBPACK_IMPORTED_MODULE_4__, _comment_Comment_Comments__WEBPACK_IMPORTED_MODULE_10__, _Buttons__WEBPACK_IMPORTED_MODULE_12__, jotai__WEBPACK_IMPORTED_MODULE_13__, jotai_utils__WEBPACK_IMPORTED_MODULE_14__, _store_user_atom__WEBPACK_IMPORTED_MODULE_15__, _store_modal_atom__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















function Post({ post  }) {
    const info = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(post.content);
    const user = (0,jotai__WEBPACK_IMPORTED_MODULE_13__.useAtomValue)(_store_user_atom__WEBPACK_IMPORTED_MODULE_15__/* .userAtom */ .L);
    const setModal = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_14__.useUpdateAtom)(_store_modal_atom__WEBPACK_IMPORTED_MODULE_16__/* .modalAtom */ .h);
    const onDelete = ()=>{
        setModal({
            on: true,
            type: "delete"
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.querySelector("body").style.backgroundColor = "white";
        return ()=>{
            document.querySelector("body").style.backgroundColor = "#111518";
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_3__/* .Post */ .SO, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_3__/* .PostLeft */ .Bl, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    post: post
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_3__/* .MarkdownStyle */ .jc, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "post-title",
                        children: post.title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "post-under",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "user-profile",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_avatar_Avatar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        imageUrl: post.user.imageUrl,
                                        className: "manager"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: post.user.username
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "user-profile",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: (0,_util_date__WEBPACK_IMPORTED_MODULE_17__/* .dateStringFormat */ .W)(new Date(post.createdAt))
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "post-under",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "post-tags",
                                children: post && post.tags && post.tags.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        href: `/tag/${tag.id}`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "post-tag",
                                            children: [
                                                "#",
                                                tag.title,
                                                " "
                                            ]
                                        }, tag.id)
                                    }, tag.id))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: user.user && user.user.id === 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "owner-under",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_icon_GradientIcon__WEBPACK_IMPORTED_MODULE_8__/* .GradientIcon */ .c, {
                                            text: "업데이트",
                                            className: "owner-outer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                href: `/update/${post.id}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_7__.GrUpgrade, {
                                                    className: "owner-item"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_icon_GradientIcon__WEBPACK_IMPORTED_MODULE_8__/* .GradientIcon */ .c, {
                                            text: "삭제하기",
                                            className: "owner-outer",
                                            onClick: onDelete,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__.RiDeleteBin5Fill, {
                                                className: "owner-item"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "post-width",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "post-image",
                            src: post.images
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown_Markdown__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        content: info.content
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "post-owner",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "user-profile",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_avatar_Avatar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    width: "80px",
                                    height: "80px",
                                    imageUrl: post.user.imageUrl,
                                    className: "manager"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "user-summary",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: post.user.username
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: post.user.email
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_3__/* .Comments */ .HW, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_comment_Comment_Comments__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_3__/* .PostRight */ .UA, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Toc__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Toc)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/post/Toc/style.tsx

const VisibleTable = (external_styled_components_default()).div`
  position: sticky;
  display: block;
  top: 20vh;
  align-items: center;
  text-align: center;
  border-left: 0.4rem solid rgba(0, 0, 0, 0.4);

  @media (max-width: 992px) {
    display: none;
  }
`;
const TocItemDiv = (external_styled_components_default()).div`
  display: block;
  margin-right: 20px;
  padding-left: 10px;
  font-size: 10px;
  text-align: left;
  cursor: pointer;

  h4 {
    color: rgb(150, 150, 150);
    font-size: 1.2rem;
    font-weight: 800;
    transition: all 0.5s ease-in-out;
  }

  &.isintersect h4 {
    color: black;
    font-size: 1.4rem;
    padding: 0.5em 0 0.5em;
  }
`;

;// CONCATENATED MODULE: ./src/components/post/Toc/index.tsx



function Toc() {
    // 여기
    const { 0: tocEls , 1: setTocEls  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        const tocItems = document.querySelectorAll("h1, h2");
        tocItems.forEach((tocitem, index)=>{
            tocitem.classList.add(`toctextlink${index}`);
        });
        setTocEls(tocItems);
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    const tocitemall = document.querySelectorAll(".tocitem");
                    tocitemall.forEach((items)=>items.classList.remove("isintersect"));
                    const entryId = entry.target.className.replace("toctextlink", "");
                    const tocItem = document.querySelector(`#tocitem${entryId}`);
                    const toctextitem = document.querySelector(`.toctextlink${entryId}`);
                    if (tocItem && toctextitem) {
                        tocItem.classList.add("isintersect");
                    }
                }
            });
        });
        if (tocItems) {
            tocItems.forEach((tocEl)=>{
                observer.observe(tocEl);
            });
        }
        return ()=>observer && observer.disconnect();
    }, []);
    // 스크롤하기
    const onClick = (e)=>{
        const targettext = document.querySelector(`.toctextlink${e.currentTarget.id.replace("tocitem", "")}`);
        if (targettext) {
            window.scrollTo({
                top: targettext.offsetTop - 200,
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(VisibleTable, {
        children: tocEls && [
            ...tocEls
        ].map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(TocItemDiv, {
                className: `tocitem ${item.innerText}`,
                id: `tocitem${index}`,
                onClick: (e)=>onClick(e),
                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                    children: item.innerText
                })
            }, index))
    });
}


/***/ }),

/***/ 9034:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_meta_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7923);
/* harmony import */ var _store_post_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4269);
/* harmony import */ var _components_post_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4462);
/* harmony import */ var _components_post_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4691);
/* harmony import */ var _store_comment_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8650);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_Post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(837);
/* harmony import */ var _util_toJson__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1216);
/* harmony import */ var _api_Category__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5425);
/* harmony import */ var _components_common_spinner_Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8145);
/* harmony import */ var _components_common_notfound_NotFound__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(492);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2451);
/* harmony import */ var _store_post_atom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7481);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_post_query__WEBPACK_IMPORTED_MODULE_2__, _components_post_Post__WEBPACK_IMPORTED_MODULE_3__, _store_comment_query__WEBPACK_IMPORTED_MODULE_5__, jotai__WEBPACK_IMPORTED_MODULE_12__, _store_post_atom__WEBPACK_IMPORTED_MODULE_13__]);
([_store_post_query__WEBPACK_IMPORTED_MODULE_2__, _components_post_Post__WEBPACK_IMPORTED_MODULE_3__, _store_comment_query__WEBPACK_IMPORTED_MODULE_5__, jotai__WEBPACK_IMPORTED_MODULE_12__, _store_post_atom__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function PostPage({ id  }) {
    const { getComments  } = (0,_store_comment_query__WEBPACK_IMPORTED_MODULE_5__/* .useCommentActions */ .K)();
    const { postData , isSuccess , isLoading , error  } = (0,_store_post_query__WEBPACK_IMPORTED_MODULE_2__/* .usePostEffect */ .Y)(id);
    const [post] = (0,jotai__WEBPACK_IMPORTED_MODULE_12__.useAtom)(_store_post_atom__WEBPACK_IMPORTED_MODULE_13__/* .postAtom */ .a);
    (0,_store_comment_query__WEBPACK_IMPORTED_MODULE_5__/* .useCommentEffect */ .j)(getComments, postData);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_post_style__WEBPACK_IMPORTED_MODULE_4__/* .PostPage */ .s6, {
        children: [
            isSuccess && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_meta_Meta__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        description: postData?.title + " | " + postData?.summary
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_post_Post__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        post: postData
                    })
                ]
            }),
            isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_spinner_Spinner__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_notfound_NotFound__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                error: post.error
            })
        ]
    });
}
const getServerSideProps = async ({ params  })=>{
    const id = params?.id;
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClient();
    await Promise.all([
        queryClient.prefetchQuery([
            "post",
            id
        ], ()=>(0,_api_Post__WEBPACK_IMPORTED_MODULE_7__/* .getPostApi */ .MZ)(id)),
        queryClient.prefetchQuery([
            "categories"
        ], _api_Category__WEBPACK_IMPORTED_MODULE_9__/* .getCategoriesApi */ .B), 
    ]);
    return {
        props: {
            dehydratedState: (0,_util_toJson__WEBPACK_IMPORTED_MODULE_8__/* .toJson */ .Q)(queryClient),
            id: id
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2380:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ln": () => (/* binding */ commentsOpenAtom),
/* harmony export */   "SY": () => (/* binding */ commentsAtom),
/* harmony export */   "v0": () => (/* binding */ commentFormAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const commentFormAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({
    content: ""
});
commentFormAtom.debugLabel = "comment_form";
const commentsOpenAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({
    openId: 0
});
commentsOpenAtom.debugLabel = "comments_open";
const commentsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({
    comments: null,
    error: ""
});
commentsAtom.debugLabel = "comments";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8650:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ useCommentActions),
/* harmony export */   "j": () => (/* binding */ useCommentEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_Comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3022);
/* harmony import */ var _api_Recomment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8306);
/* harmony import */ var _util_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7226);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_JQuery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3703);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2451);
/* harmony import */ var _post_atom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7481);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2752);
/* harmony import */ var _atom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2380);
/* harmony import */ var _user_atom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15);
/* harmony import */ var _login_atom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1518);
/* harmony import */ var _register_atom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3323);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_4__, _post_atom__WEBPACK_IMPORTED_MODULE_5__, jotai_utils__WEBPACK_IMPORTED_MODULE_7__, _atom__WEBPACK_IMPORTED_MODULE_8__, _user_atom__WEBPACK_IMPORTED_MODULE_9__, _login_atom__WEBPACK_IMPORTED_MODULE_10__, _register_atom__WEBPACK_IMPORTED_MODULE_11__]);
([jotai__WEBPACK_IMPORTED_MODULE_4__, _post_atom__WEBPACK_IMPORTED_MODULE_5__, jotai_utils__WEBPACK_IMPORTED_MODULE_7__, _atom__WEBPACK_IMPORTED_MODULE_8__, _user_atom__WEBPACK_IMPORTED_MODULE_9__, _login_atom__WEBPACK_IMPORTED_MODULE_10__, _register_atom__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const useCommentActions = ()=>{
    const [commentform, setCommentForm] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_atom__WEBPACK_IMPORTED_MODULE_8__/* .commentFormAtom */ .v0);
    const [comments, setComments] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_atom__WEBPACK_IMPORTED_MODULE_8__/* .commentsAtom */ .SY);
    const [openId, setOpenId] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_atom__WEBPACK_IMPORTED_MODULE_8__/* .commentsOpenAtom */ .Ln);
    const post = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtomValue)(_post_atom__WEBPACK_IMPORTED_MODULE_5__/* .postAtom */ .a);
    const user = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtomValue)(_user_atom__WEBPACK_IMPORTED_MODULE_9__/* .userAtom */ .L);
    const setLoginForm = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useSetAtom)(_login_atom__WEBPACK_IMPORTED_MODULE_10__/* .loginFormAtom */ .n);
    const [registerform, setRegisterForm] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_register_atom__WEBPACK_IMPORTED_MODULE_11__/* .registerFormAtom */ .W);
    const { mutate: getComments  } = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation)(_api_Comment__WEBPACK_IMPORTED_MODULE_1__/* .getCommentsApi */ .OF, {
        onSuccess (res) {
            setComments({
                error: "",
                comments: res
            });
        },
        onError (res) {
            setComments({
                ...comments,
                error: res.message
            });
        }
    });
    const setOpen = (_openId)=>{
        if (_openId.openId === openId.openId) {
            setOpenId({
                openId: 0
            });
        } else {
            setOpenId(_openId);
        }
    };
    const onChangeComment = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((0,lodash__WEBPACK_IMPORTED_MODULE_3__.debounce)((e)=>{
        setCommentForm({
            ...commentform,
            [e.target.name]: e.target.value
        });
    }, 500), []);
    // comment 집어넣기
    const { mutate: onSubmitComment  } = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation)(()=>(0,_api_Comment__WEBPACK_IMPORTED_MODULE_1__/* .postCommentsApi */ .Cj)(post.post.id, commentform), {
        onSuccess () {
            (0,_util_toast__WEBPACK_IMPORTED_MODULE_12__/* .createToast */ .Y)("댓글 등록");
            getComments(post.post.id);
            setCommentForm({
                content: ""
            });
            const textArea = (0,_util_JQuery__WEBPACK_IMPORTED_MODULE_13__.$)(".writecomment-textarea").get();
            textArea.value = "";
        },
        onError (res) {
            setComments({
                ...comments,
                error: res.message
            });
        }
    });
    const { mutate: onSubmitRecomment  } = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation)(()=>(0,_api_Recomment__WEBPACK_IMPORTED_MODULE_2__/* .postRecommentsApi */ .p)(openId.openId, commentform), {
        onSuccess () {
            (0,_util_toast__WEBPACK_IMPORTED_MODULE_12__/* .createToast */ .Y)("대댓글 등록");
            getComments(post.post.id);
            setCommentForm({
                content: ""
            });
            const textArea = (0,_util_JQuery__WEBPACK_IMPORTED_MODULE_13__.$)(".writecomment-textarea").get();
            textArea.value = "";
        },
        onError (res) {
            setComments({
                ...comments,
                error: res.message
            });
        }
    });
    const { mutate: onGoRemoveRecomment  } = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation)((commentId)=>(0,_api_Recomment__WEBPACK_IMPORTED_MODULE_2__/* .deleteRecommentsApi */ .Z)(commentId), {
        onSuccess () {
            (0,_util_toast__WEBPACK_IMPORTED_MODULE_12__/* .createToast */ .Y)("대댓글 삭제");
            getComments(post.post.id);
        }
    });
    const { mutate: onGoRemoveComment  } = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation)((recommentId)=>(0,_api_Comment__WEBPACK_IMPORTED_MODULE_1__/* .deleteCommentsApi */ .Ct)(recommentId), {
        onSuccess () {
            (0,_util_toast__WEBPACK_IMPORTED_MODULE_12__/* .createToast */ .Y)("댓글 삭제");
            getComments(post.post.id);
        }
    });
    return {
        error: comments.error,
        comments: comments.comments,
        commentform,
        openId,
        user,
        setOpen,
        getComments,
        onChangeComment,
        onSubmitComment,
        onSubmitRecomment,
        onGoRemoveComment,
        onGoRemoveRecomment
    };
};
function useCommentEffect(getComments, post) {
    const setCommentForm = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_7__.useResetAtom)(_atom__WEBPACK_IMPORTED_MODULE_8__/* .commentFormAtom */ .v0);
    const setComments = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_7__.useResetAtom)(_atom__WEBPACK_IMPORTED_MODULE_8__/* .commentsAtom */ .SY);
    const setOpenId = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_7__.useResetAtom)(_atom__WEBPACK_IMPORTED_MODULE_8__/* .commentsOpenAtom */ .Ln);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (post) {
            getComments(post.id);
        }
    }, [
        post
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return ()=>{
            setCommentForm();
            setComments();
            setOpenId();
        };
    }, []);
    return {};
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 397:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ commentUserFormAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const commentUserFormAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({
    username: "",
    password: ""
});
commentUserFormAtom.debugLabel = "commentuser";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7439:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useCommentUserActions)
/* harmony export */ });
/* harmony import */ var _modal_atom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6406);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var _user_atom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2361);
/* harmony import */ var _atom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(397);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modal_atom__WEBPACK_IMPORTED_MODULE_0__, jotai__WEBPACK_IMPORTED_MODULE_1__, _user_atom__WEBPACK_IMPORTED_MODULE_2__, _atom__WEBPACK_IMPORTED_MODULE_5__]);
([_modal_atom__WEBPACK_IMPORTED_MODULE_0__, jotai__WEBPACK_IMPORTED_MODULE_1__, _user_atom__WEBPACK_IMPORTED_MODULE_2__, _atom__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function useCommentUserActions() {
    const [_, setModal] = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtom)(_modal_atom__WEBPACK_IMPORTED_MODULE_0__/* .modalAtom */ .h);
    const [commentUserform, setCommentUserForm] = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtom)(_atom__WEBPACK_IMPORTED_MODULE_5__/* .commentUserFormAtom */ .q);
    const [user, setUser] = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtom)(_user_atom__WEBPACK_IMPORTED_MODULE_2__/* .userAtom */ .L);
    const { mutate , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)(_api_Auth__WEBPACK_IMPORTED_MODULE_4__/* .postCommentUserApi */ .OJ, {
        onSuccess (res) {
            setUser({
                error: "",
                user: {
                    ...res
                }
            });
            setCommentUserForm({
                username: "",
                password: ""
            });
            setModal({
                on: false,
                type: ""
            });
        },
        onError (res) {
            setUser({
                ...user,
                error: "오류 : " + res.message
            });
        }
    });
    const changeCommentUserForm = (e)=>{
        setCommentUserForm({
            ...commentUserform,
            [e.target.name]: e.target.value
        });
    };
    const initializeAuth = ()=>{
        setUser({
            ...user,
            error: ""
        });
    };
    const commentUser = async ()=>{
        mutate(commentUserform);
    };
    return {
        commentUser,
        commentUserform,
        changeCommentUserForm,
        initializeAuth,
        isLoading
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ dateStringFormat)
/* harmony export */ });
function leftPad(value) {
    if (value >= 10) return value;
    return `0${value}`;
}
function dateStringFormat(d) {
    d.setHours(d.getHours());
    return [
        d.getFullYear() + "년 ",
        leftPad(d.getMonth() + 1) + "월 ",
        leftPad(d.getDate()) + "일 ",
        d.getHours() + "시 ",
        d.getMinutes() + "분 ", 
    ].join(" ");
}


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

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

/***/ 4259:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 8547:
/***/ ((module) => {

module.exports = require("react-icons/gr");

/***/ }),

/***/ 924:
/***/ ((module) => {

module.exports = require("react-icons/im");

/***/ }),

/***/ 4041:
/***/ ((module) => {

module.exports = require("react-icons/md");

/***/ }),

/***/ 8098:
/***/ ((module) => {

module.exports = require("react-icons/ri");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,425,930,874,195,240,703,16,235,853], () => (__webpack_exec__(9034)));
module.exports = __webpack_exports__;

})();