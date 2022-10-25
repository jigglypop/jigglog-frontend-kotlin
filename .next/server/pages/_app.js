"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ getTagsApi),
/* harmony export */   "k": () => (/* binding */ getTagApi)
/* harmony export */ });
/* harmony import */ var _constants_URL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5539);
/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2131);


const getTagsApi = async ()=>{
    return await (0,_methods__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(`${_constants_URL__WEBPACK_IMPORTED_MODULE_0__/* .SERVER_URL */ .LB}/tag`);
};
const getTagApi = async (id)=>{
    return await (0,_methods__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(`${_constants_URL__WEBPACK_IMPORTED_MODULE_0__/* .SERVER_URL */ .LB}/tag/${id}` + `/?page=1`);
};


/***/ }),

/***/ 4603:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Auth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_modal_atom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6406);
/* harmony import */ var _common_button_GradientButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5820);
/* harmony import */ var _common_input_GradientInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4320);
/* harmony import */ var _common_modal_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(694);
/* harmony import */ var _common_text_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2053);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6156);
/* harmony import */ var _common_cancel_CancelButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2504);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2451);
/* harmony import */ var _store_login_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4802);
/* harmony import */ var _store_register_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8776);
/* harmony import */ var _store_user_atom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_modal_atom__WEBPACK_IMPORTED_MODULE_2__, _common_modal_Modal__WEBPACK_IMPORTED_MODULE_5__, jotai__WEBPACK_IMPORTED_MODULE_9__, _store_login_query__WEBPACK_IMPORTED_MODULE_10__, _store_register_query__WEBPACK_IMPORTED_MODULE_11__, _store_user_atom__WEBPACK_IMPORTED_MODULE_12__]);
([_store_modal_atom__WEBPACK_IMPORTED_MODULE_2__, _common_modal_Modal__WEBPACK_IMPORTED_MODULE_5__, jotai__WEBPACK_IMPORTED_MODULE_9__, _store_login_query__WEBPACK_IMPORTED_MODULE_10__, _store_register_query__WEBPACK_IMPORTED_MODULE_11__, _store_user_atom__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function Auth() {
    const [modal, setModal] = (0,jotai__WEBPACK_IMPORTED_MODULE_9__.useAtom)(_store_modal_atom__WEBPACK_IMPORTED_MODULE_2__/* .modalAtom */ .h);
    const user = (0,jotai__WEBPACK_IMPORTED_MODULE_9__.useAtomValue)(_store_user_atom__WEBPACK_IMPORTED_MODULE_12__/* .userAtom */ .L);
    const { login , loginform , changeLoginForm  } = (0,_store_login_query__WEBPACK_IMPORTED_MODULE_10__/* .useLoginActions */ .c)();
    const { register , registerform , changeRegisterForm  } = (0,_store_register_query__WEBPACK_IMPORTED_MODULE_11__/* .useRegisterActions */ .A)();
    const onLoginOrRegister = async (e)=>{
        e.preventDefault();
        if (modal.type === "login") {
            await login();
        } else if (modal.type === "register") {
            await register();
        }
    };
    const changeform = (e)=>{
        if (modal.type === "register") {
            changeRegisterForm(e);
        } else {
            changeLoginForm(e);
        }
    };
    const ToggleType = ()=>{
        setModal({
            on: true,
            type: modal.type === "login" ? "register" : "login"
        });
    };
    const onClickCancel = ()=>{
        setModal({
            on: false,
            type: ""
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_modal_Modal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_7__/* .Auth */ .g, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_cancel_CancelButton__WEBPACK_IMPORTED_MODULE_8__/* .CancelButton */ .L, {
                    className: "close",
                    onClick: onClickCancel
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_text_Text__WEBPACK_IMPORTED_MODULE_6__/* .GradientText */ .t, {
                    className: "login-text",
                    children: modal.type === "login" ? "LOGIN" : "REGISTER"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: (e)=>onLoginOrRegister(e),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_input_GradientInput__WEBPACK_IMPORTED_MODULE_4__/* .GradientInput */ .q, {
                            type: "text",
                            name: "username",
                            placeholder: "아이디 입력",
                            onChange: changeform,
                            value: modal.type === "login" ? loginform.username : registerform.username
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_input_GradientInput__WEBPACK_IMPORTED_MODULE_4__/* .GradientInput */ .q, {
                            type: "password",
                            name: "password",
                            placeholder: "비밀번호 입력",
                            onChange: changeform,
                            value: modal.type === "login" ? loginform.password : registerform.password
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "error",
                            children: user.error
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: ToggleType,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "toggle",
                                children: modal.type === "login" ? "아이디 생성하기" : "로그인하기"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_button_GradientButton__WEBPACK_IMPORTED_MODULE_3__/* .GradientButton */ .O, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: modal.type === "login" ? "로그인" : "아이디 생성"
                            })
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ Auth)
/* harmony export */ });
/* unused harmony export KaKao */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5174);


const Auth = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_style_default__WEBPACK_IMPORTED_MODULE_1__/* .FlexCenter */ .L)`
    width: 450px;
    height: 500px;
    background-color: rgba(0, 0, 0, 0.4);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 2rem;
    position: relative;
    color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0);
    flex-direction: column;
    z-index: 10;

    input[type=password] {
        font-family:'Malgun gothic', dotum, sans-serif;

        &::placeholder { 
            font-family: 'NanumSquareL', sans-serif; 
            color: white;
            opacity: 1;
        } 
    }

    .login-text {
        font-size: 6rem;
        font-weight: 800;
        margin: 0;
    }

    form {
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .close {
        color: #C6FFDD;
        background-color: transparent;
        font-size: 2.5rem;
        position: absolute;
        top: 2rem;
        right: 2rem;
    }

    .error {
        margin-top: 2rem;
        color: #ffb3b3;
        font-size: 1.2rem;
        font-weight: 800;
    }

    .toggle {
        margin-top: 2rem;
        color: #b8a8ff;
        font-size: 1.2rem;
        font-weight: 800;
    }
`;
const KaKao = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_style_default__WEBPACK_IMPORTED_MODULE_1__/* .FlexCenter */ .L)`
    width: 4rem;
    height: 4rem;
    background-color: var(--yellow);
    border-radius: 50%;
    box-shadow: 0 0 10px #1d1d1d;
    color: black;
    font-size: 2.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in;
    z-index: 1;

    &:hover {
        box-shadow: 0 0 20px #1d1d1d;
    }


`;


/***/ }),

/***/ 942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ ColorButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2792);


const ColorButton = ({ children , onClick , color , fontColor , width  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_1__/* .ColorButton */ .Eo, {
        type: "submit",
        onClick: onClick,
        color: color,
        fontColor: fontColor,
        width: width,
        children: children
    });
};


/***/ }),

/***/ 1523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ AvatarIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9558);
/* harmony import */ var _util_JQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3703);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);





const AvatarIcon = ({ children , username , onLogout  })=>{
    const { 0: isHover , 1: setIsHover  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const iconRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const tooltipRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const OverEvent = ()=>{
        setIsHover(true);
    };
    const OutEvent = ()=>{
        setIsHover(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_util_JQuery__WEBPACK_IMPORTED_MODULE_4__.$)(iconRef.current).on("mouseover", OverEvent);
        (0,_util_JQuery__WEBPACK_IMPORTED_MODULE_4__.$)(tooltipRef.current).on("mouseover", OverEvent);
        (0,_util_JQuery__WEBPACK_IMPORTED_MODULE_4__.$)(iconRef.current).on("mouseout", OutEvent);
        (0,_util_JQuery__WEBPACK_IMPORTED_MODULE_4__.$)(tooltipRef.current).on("mouseout", OutEvent);
        return ()=>{
            (0,_util_JQuery__WEBPACK_IMPORTED_MODULE_4__.$)(iconRef.current).remove("mouseover", OverEvent);
            (0,_util_JQuery__WEBPACK_IMPORTED_MODULE_4__.$)(tooltipRef.current).remove("mouseover", OverEvent);
            (0,_util_JQuery__WEBPACK_IMPORTED_MODULE_4__.$)(iconRef.current).remove("mouseout", OutEvent);
            (0,_util_JQuery__WEBPACK_IMPORTED_MODULE_4__.$)(tooltipRef.current).remove("mouseout", OutEvent);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_2__/* .GradientIconOuter */ .pJ, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_2__/* .GradientIcon */ .cN, {
                className: "Avatar-icon",
                ref: iconRef,
                children: [
                    children,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_2__/* .GradientBorder */ .mt, {
                        isHover: isHover
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_2__/* .AvatarToolTip */ .n6, {
                isHover: isHover,
                ref: tooltipRef,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "tooltip-item username-tooltip",
                        children: username
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/write",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "tooltip-item write-tooltip",
                            children: "글쓰기"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "tooltip-item logout-tooltip",
                        onClick: onLogout,
                        children: "로그아웃"
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 4320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ GradientInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7844);


const GradientInput = ({ type , name , placeholder , onChange , value  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_1__/* .GradientInput */ .q, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            type: type,
            name: name,
            placeholder: placeholder,
            onChange: (e)=>onChange(e),
            value: value
        })
    });
};


/***/ }),

/***/ 694:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_modal_atom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6406);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2451);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4293);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_modal_atom__WEBPACK_IMPORTED_MODULE_2__, jotai__WEBPACK_IMPORTED_MODULE_3__]);
([_store_modal_atom__WEBPACK_IMPORTED_MODULE_2__, jotai__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function Modal({ children  }) {
    const modal = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtomValue)(_store_modal_atom__WEBPACK_IMPORTED_MODULE_2__/* .modalAtom */ .h);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_4__/* .Modal */ .u, {
        modal: modal.on,
        children: children
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5174);


const Modal = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_style_default__WEBPACK_IMPORTED_MODULE_1__/* .FlexCenter */ .L)`
    ${(props)=>props.modal ? "" : "display: none;"}
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.8);
    z-index: 10;
`;


/***/ }),

/***/ 9283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Toast)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/common/toast/style.tsx

const ToastDiv = (external_styled_components_default()).div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 20;
  min-width: 200px;
  color: white;

  .toast {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    box-shadow: 0 0 20px var(--black);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    font-size: 1.3rem;
    font-weight: 800;
    border-radius: 5px;
    padding: 20px 40px;
    margin: 0.5rem;

    strong {
      color: var(--text-picker);
    }
  }
`;

;// CONCATENATED MODULE: ./src/components/common/toast/Toast.tsx



function Toast() {
    return /*#__PURE__*/ jsx_runtime_.jsx(ToastDiv, {
        id: "toasts"
    });
}


/***/ }),

/***/ 6911:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Delete)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_modal_atom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6406);
/* harmony import */ var _common_modal_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(694);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4045);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2451);
/* harmony import */ var _store_user_atom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var _common_button_ColorButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(942);
/* harmony import */ var _store_delete_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1528);
/* harmony import */ var _store_categories_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5006);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_modal_atom__WEBPACK_IMPORTED_MODULE_2__, _common_modal_Modal__WEBPACK_IMPORTED_MODULE_3__, jotai__WEBPACK_IMPORTED_MODULE_5__, _store_user_atom__WEBPACK_IMPORTED_MODULE_6__, _store_delete_query__WEBPACK_IMPORTED_MODULE_8__, _store_categories_query__WEBPACK_IMPORTED_MODULE_9__, jotai_utils__WEBPACK_IMPORTED_MODULE_10__]);
([_store_modal_atom__WEBPACK_IMPORTED_MODULE_2__, _common_modal_Modal__WEBPACK_IMPORTED_MODULE_3__, jotai__WEBPACK_IMPORTED_MODULE_5__, _store_user_atom__WEBPACK_IMPORTED_MODULE_6__, _store_delete_query__WEBPACK_IMPORTED_MODULE_8__, _store_categories_query__WEBPACK_IMPORTED_MODULE_9__, jotai_utils__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function Delete() {
    const setModal = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_10__.useUpdateAtom)(_store_modal_atom__WEBPACK_IMPORTED_MODULE_2__/* .modalAtom */ .h);
    const user = (0,jotai__WEBPACK_IMPORTED_MODULE_5__.useAtomValue)(_store_user_atom__WEBPACK_IMPORTED_MODULE_6__/* .userAtom */ .L);
    const deleteActions = (0,_store_delete_query__WEBPACK_IMPORTED_MODULE_8__/* .useDeleteActions */ .r)();
    const categoriesActions = (0,_store_categories_query__WEBPACK_IMPORTED_MODULE_9__/* .useCategoriesActions */ .n)();
    const { deletePost  } = deleteActions;
    const { getCategories  } = categoriesActions;
    const onClickCancel = ()=>{
        setModal({
            on: false,
            type: "login"
        });
    };
    const onDelete = ()=>{
        deletePost();
        getCategories();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_modal_Modal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_4__/* .Delete */ .H, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "upper",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "delete-text",
                        children: "포스트를 정말 삭제하시겠습니까?"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "under",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_button_ColorButton__WEBPACK_IMPORTED_MODULE_7__/* .ColorButton */ .E, {
                            color: "white",
                            onClick: onClickCancel,
                            fontColor: "black",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "취소"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_button_ColorButton__WEBPACK_IMPORTED_MODULE_7__/* .ColorButton */ .E, {
                            color: "#ffc0c0",
                            fontColor: "black",
                            onClick: onDelete,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "삭제"
                            })
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ Delete)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5174);


const Delete = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_style_default__WEBPACK_IMPORTED_MODULE_1__/* .FlexCenter */ .L)`
  width: 450px;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 2rem;
  position: relative;
  color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0);
  flex-direction: column;
  z-index: 10;

  .upper {
    .delete-text {
      font-size: 2rem;
      font-weight: 800;
      margin: 0;
    }
  }

  .under {
    position: relative;
    padding: 2rem 3rem 0 3rem;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
`;


/***/ }),

/***/ 8654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4333);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8098);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8866);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_gi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7865);
/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_cg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1111);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_modal_atom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6406);
/* harmony import */ var _util_JQuery__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(3703);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_icon_GradientIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3470);
/* harmony import */ var _common_avatar_Avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(195);
/* harmony import */ var _common_icon_AvatarIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1523);
/* harmony import */ var _common_text_Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2053);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(1493);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2451);
/* harmony import */ var _store_categories_atom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3160);
/* harmony import */ var _store_user_atom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(15);
/* harmony import */ var _store_user_query__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(339);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2752);
/* harmony import */ var _store_tags_query__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1476);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_modal_atom__WEBPACK_IMPORTED_MODULE_8__, jotai__WEBPACK_IMPORTED_MODULE_15__, _store_categories_atom__WEBPACK_IMPORTED_MODULE_16__, _store_user_atom__WEBPACK_IMPORTED_MODULE_17__, _store_user_query__WEBPACK_IMPORTED_MODULE_18__, jotai_utils__WEBPACK_IMPORTED_MODULE_19__, _store_tags_query__WEBPACK_IMPORTED_MODULE_20__]);
([_store_modal_atom__WEBPACK_IMPORTED_MODULE_8__, jotai__WEBPACK_IMPORTED_MODULE_15__, _store_categories_atom__WEBPACK_IMPORTED_MODULE_16__, _store_user_atom__WEBPACK_IMPORTED_MODULE_17__, _store_user_query__WEBPACK_IMPORTED_MODULE_18__, jotai_utils__WEBPACK_IMPORTED_MODULE_19__, _store_tags_query__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);























function Header() {
    const { 0: isLeft , 1: setIsLeft  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const setModal = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_19__.useUpdateAtom)(_store_modal_atom__WEBPACK_IMPORTED_MODULE_8__/* .modalAtom */ .h);
    const user = (0,jotai__WEBPACK_IMPORTED_MODULE_15__.useAtomValue)(_store_user_atom__WEBPACK_IMPORTED_MODULE_17__/* .userAtom */ .L);
    const categories = (0,jotai__WEBPACK_IMPORTED_MODULE_15__.useAtomValue)(_store_categories_atom__WEBPACK_IMPORTED_MODULE_16__/* .categoriesAtom */ .m);
    const { getTags  } = (0,_store_tags_query__WEBPACK_IMPORTED_MODULE_20__/* .useTagsActions */ .M)();
    const { logout  } = (0,_store_user_query__WEBPACK_IMPORTED_MODULE_18__/* .useUserActions */ ._y)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
    const setModalAndInit = ()=>{
        setModal({
            on: true,
            type: "login"
        });
    };
    const OpenLeft = ()=>{
        setIsLeft(true);
    };
    const toggleLeft = ()=>{
        setIsLeft(!isLeft);
    };
    const hambergerUp = lodash__WEBPACK_IMPORTED_MODULE_9__.debounce(OpenLeft, 100);
    const isOutside = lodash__WEBPACK_IMPORTED_MODULE_9__.debounce((e)=>{
        if (!e.target?.closest(".slider-all") && !e.target?.closest(".GiHamburgerMenu")) {
            setIsLeft(false);
        }
    }, 200);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getTags();
        document.addEventListener("mouseover", isOutside);
        return ()=>{
            document.removeEventListener("mouseover", isOutside);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (router.pathname.split("/")[1] === "post") {
            (0,_util_JQuery__WEBPACK_IMPORTED_MODULE_21__.$)(".slider-all").css("boxShadow", "");
        }
    }, [
        router
    ]);
    const onPush = (url)=>{
        router.push(url);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .h4, {
                isLeft: isLeft,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_2__/* .HeaderInner */ .AB, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_gi__WEBPACK_IMPORTED_MODULE_4__.GiHamburgerMenu, {
                                    className: "header-icon GiHamburgerMenu",
                                    onClick: ()=>toggleLeft(),
                                    onMouseEnter: (e)=>hambergerUp(e)
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__.RiMoonClearLine, {
                                    className: "header-icon RiMoonClearLine"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "header-jigglog",
                                children: "JIGGLOG"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_2__/* .HeaderInner */ .AB, {
                        children: [
                            user && user.user ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_icon_AvatarIcon__WEBPACK_IMPORTED_MODULE_12__/* .AvatarIcon */ .f, {
                                username: user.user.username,
                                onLogout: logout,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_avatar_Avatar__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    width: "4rem",
                                    height: "4rem",
                                    imageUrl: user.user.imageUrl,
                                    boxShadow: "2px 2px 10px white",
                                    className: "manager"
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_icon_GradientIcon__WEBPACK_IMPORTED_MODULE_10__/* .GradientIcon */ .c, {
                                text: "로그인",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__.RiFileUserLine, {
                                    className: "header-icon RiFileUserLine",
                                    onClick: ()=>setModalAndInit()
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_icon_GradientIcon__WEBPACK_IMPORTED_MODULE_10__/* .GradientIcon */ .c, {
                                text: "포트폴리오",
                                onClick: ()=>onPush("/portfolios"),
                                className: "header-portfolio-button",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_5__.CgFileDocument, {
                                    className: "header-icon CgFileDocument"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_icon_GradientIcon__WEBPACK_IMPORTED_MODULE_10__/* .GradientIcon */ .c, {
                                text: "이력서",
                                onClick: ()=>onPush("/resume"),
                                className: "header-resume-button",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__.HiOutlineDocumentReport, {
                                    className: "header-icon HiOutlineDocumentReport"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_2__/* .SideBar */ .Ke, {
                isLeft: isLeft,
                className: "slider-all",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_text_Text__WEBPACK_IMPORTED_MODULE_13__/* .GradientText */ .t, {
                        className: "category-title",
                        children: "카테고리"
                    }),
                    categories.categories.map((category, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_2__/* .SideBarItem */ .xZ, {
                            color: _constants_constants__WEBPACK_IMPORTED_MODULE_22__/* .COLORS */ .DM[i % 10],
                            onClick: ()=>onPush(`/category/${category.id}`),
                            className: `sidebar-category-${category.id}-button`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "sidebar-item sidebar-box",
                                    children: category.posts
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "sidebar-item",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: category.title
                                    })
                                })
                            ]
                        }, category.id))
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AB": () => (/* binding */ HeaderInner),
/* harmony export */   "Ke": () => (/* binding */ SideBar),
/* harmony export */   "h4": () => (/* binding */ Header),
/* harmony export */   "xZ": () => (/* binding */ SideBarItem)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5174);


const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_style_default__WEBPACK_IMPORTED_MODULE_1__/* .FlexCenter */ .L)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;

  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  box-shadow: 0 0 20px var(--black);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  padding: 20px;
  width: 100%;
  padding-left: ${(props)=>props.isLeft ? "20rem" : "0"};
  height: 5rem;
  justify-content: space-between;
  transition: all 0.3s ease-in;
  font-weight: 800;

  p {
    font-size: 1.4rem;
    border: 0.5rem;
    font-weight: 800;
    margin: 0.5rem;
  }

  @media (max-width: 600px) {
    padding-left: 0;
    .header-jigglog {
      display: none;
    }
  }
`;
const SideBar = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_style_default__WEBPACK_IMPORTED_MODULE_1__/* .FlexCenter */ .L)`
  padding-top: 2rem;
  flex-direction: column;
  justify-content: flex-start;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;

  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  box-shadow: 0 0 20px var(--black);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  width: 20rem;
  height: 100%;
  transform: ${(props)=>props.isLeft ? "translateX(0)" : "translateX(-20rem)"};
  transition: all 0.3s ease-in;
  font-weight: 800;

  .category-title {
    font-family: "BMDOHYEON_ttf";
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 2rem;
    border-bottom: 2px solid #dedede;
  }

  p {
    font-size: 1.2rem;
    border: 0.5rem;
    font-weight: 800;
    padding: 0.5rem;
    margin: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in;
  }

  @media (max-width: 600px) {
    top: 5rem;
    width: 16rem;

    p {
      font-size: 1rem;
      margin: 0.1rem;
      padding: 0.2rem 0.2rem;
      border-bottom: 0.15rem solid #b5b5b5;
      padding-bottom: 0.5rem;
      transform: all 0.3s ease-in;

      &.hover {
        opacity: 0.5;
      }
    }
  }
`;
const HeaderInner = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_style_default__WEBPACK_IMPORTED_MODULE_1__/* .FlexCenter */ .L)`
  .header-icon {
    cursor: pointer;
    font-size: 2.2rem;
    margin: 1rem;
    transition: all 0.3s ease-in;
  }
`;
const SideBarItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_style_default__WEBPACK_IMPORTED_MODULE_1__/* .FlexCenter */ .L)`
  position: relative;
  width: 100%;
  justify-content: flex-start;
  padding: 0.5rem 2rem;

  .sidebar-box {
    width: 3rem;
    height: 3rem;
    background-color: ${(props)=>props.color};
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: black;
    font-size: 1.2rem;
    font-weight: 800;
    box-shadow: 0 0 5px ${(props)=>props.color};
    transition: all 0.3s ease-in;
  }

  p {
    font-size: 1.1rem;
    font-weight: 800;
  }

  &:hover {
    .sidebar-box {
      box-shadow: 0 0 20px ${(props)=>props.color};
    }
  }

  @media (max-width: 600px) {
    .sidebar-box {
      display: none;
    }
  }
`;


/***/ }),

/***/ 3835:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalOuter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_modal_atom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6406);
/* harmony import */ var _auth_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4603);
/* harmony import */ var _delete_Delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6911);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_1__, _store_modal_atom__WEBPACK_IMPORTED_MODULE_3__, _auth_Auth__WEBPACK_IMPORTED_MODULE_4__, _delete_Delete__WEBPACK_IMPORTED_MODULE_5__]);
([jotai__WEBPACK_IMPORTED_MODULE_1__, _store_modal_atom__WEBPACK_IMPORTED_MODULE_3__, _auth_Auth__WEBPACK_IMPORTED_MODULE_4__, _delete_Delete__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function ModalOuter() {
    const modal = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtomValue)(_store_modal_atom__WEBPACK_IMPORTED_MODULE_3__/* .modalAtom */ .h);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            (modal.type === "register" || modal.type === "login") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_auth_Auth__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            modal.type === "delete" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_delete_Delete__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_global_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5755);
/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6645);
/* harmony import */ var _components_common_toast_Toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9283);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jotai_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_user_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(339);
/* harmony import */ var _store_categories_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5006);
/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8654);
/* harmony import */ var _components_modalouter_ModalOuter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3835);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai_devtools__WEBPACK_IMPORTED_MODULE_7__, _store_user_query__WEBPACK_IMPORTED_MODULE_9__, _store_categories_query__WEBPACK_IMPORTED_MODULE_10__, _components_header_Header__WEBPACK_IMPORTED_MODULE_11__, _components_modalouter_ModalOuter__WEBPACK_IMPORTED_MODULE_12__]);
([jotai_devtools__WEBPACK_IMPORTED_MODULE_7__, _store_user_query__WEBPACK_IMPORTED_MODULE_9__, _store_categories_query__WEBPACK_IMPORTED_MODULE_10__, _components_header_Header__WEBPACK_IMPORTED_MODULE_11__, _components_modalouter_ModalOuter__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















// const Header = dynamic(import("../components/header/Header"), {
//   loading: () => <div>LOADING</div>,
//   ssr: false,
// });
// const ModalOuter = dynamic(import("../components/modalouter/ModalOuter"), {
//   loading: () => <div>LOADING</div>,
//   ssr: false,
// });
const AtomsDevtools = ({ children  })=>{
    (0,jotai_devtools__WEBPACK_IMPORTED_MODULE_7__.useAtomsDevtools)("demo");
    return children;
};
function UserQueryEffect({ children  }) {
    (0,_store_categories_query__WEBPACK_IMPORTED_MODULE_10__/* .useCategoriesEffect */ .S)();
    (0,_store_user_query__WEBPACK_IMPORTED_MODULE_9__/* .useUserQueryEffect */ .cr)();
    return children;
}
function MyApp({ Component , pageProps  }) {
    const { 0: queryClient  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(()=>new react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClient());
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AtomsDevtools, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClientProvider, {
            client: queryClient,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_query__WEBPACK_IMPORTED_MODULE_6__.Hydrate, {
                state: pageProps.dehydratedState,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(UserQueryEffect, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                rel: "shortcut icon",
                                href: "/images/favicon.ico"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
                            theme: _style_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme */ .r,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style_global_styles__WEBPACK_IMPORTED_MODULE_2__/* .GlobalStyle */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header_Header__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modalouter_ModalOuter__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                    ...pageProps
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_toast_Toast__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                            ]
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ deleteAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const deleteAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({
    id: -1
});
deleteAtom.debugLabel = "delete";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1528:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ useDeleteActions)
/* harmony export */ });
/* harmony import */ var _util_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7226);
/* harmony import */ var _modal_atom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6406);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var _user_atom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _atom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61);
/* harmony import */ var _api_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(837);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modal_atom__WEBPACK_IMPORTED_MODULE_0__, jotai__WEBPACK_IMPORTED_MODULE_1__, _user_atom__WEBPACK_IMPORTED_MODULE_2__, _atom__WEBPACK_IMPORTED_MODULE_4__, jotai_utils__WEBPACK_IMPORTED_MODULE_8__]);
([_modal_atom__WEBPACK_IMPORTED_MODULE_0__, jotai__WEBPACK_IMPORTED_MODULE_1__, _user_atom__WEBPACK_IMPORTED_MODULE_2__, _atom__WEBPACK_IMPORTED_MODULE_4__, jotai_utils__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function useDeleteActions() {
    const setModal = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_8__.useUpdateAtom)(_modal_atom__WEBPACK_IMPORTED_MODULE_0__/* .modalAtom */ .h);
    const [deleteform, setDeleteForm] = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtom)(_atom__WEBPACK_IMPORTED_MODULE_4__/* .deleteAtom */ .p);
    const [user, setUser] = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtom)(_user_atom__WEBPACK_IMPORTED_MODULE_2__/* .userAtom */ .L);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    // 삭제할 아이디 세팅
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        const { id  } = router.query;
        if (id) {
            setDeleteForm({
                id: parseInt(id)
            });
        }
    }, []);
    const { mutate , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)(_api_Post__WEBPACK_IMPORTED_MODULE_5__/* .deletePostApi */ .Vu, {
        onSuccess () {
            setDeleteForm({
                id: -1
            });
            setModal({
                on: false,
                type: ""
            });
            router.push("/");
            (0,_util_toast__WEBPACK_IMPORTED_MODULE_9__/* .createToast */ .Y)("글 삭제");
        },
        onError (res) {
            setUser({
                ...user,
                error: "오류 : " + res.message
            });
        }
    });
    const deletePost = async ()=>{
        if (user.user && user.user.id === 1 && deleteform.id !== -1) {
            mutate(deleteform);
        }
    };
    return {
        deletePost,
        isLoading
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1518:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ loginFormAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const loginFormAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({
    username: "",
    password: ""
});
loginFormAtom.debugLabel = "login";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4802:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ useLoginActions)
/* harmony export */ });
/* harmony import */ var _api_Auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2361);
/* harmony import */ var _util_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7226);
/* harmony import */ var _modal_atom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6406);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var _atom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1518);
/* harmony import */ var _user_atom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modal_atom__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_2__, _atom__WEBPACK_IMPORTED_MODULE_3__, _user_atom__WEBPACK_IMPORTED_MODULE_4__, jotai_utils__WEBPACK_IMPORTED_MODULE_6__]);
([_modal_atom__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_2__, _atom__WEBPACK_IMPORTED_MODULE_3__, _user_atom__WEBPACK_IMPORTED_MODULE_4__, jotai_utils__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function useLoginActions() {
    const setModal = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_6__.useUpdateAtom)(_modal_atom__WEBPACK_IMPORTED_MODULE_1__/* .modalAtom */ .h);
    const [loginform, setLoginForm] = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useAtom)(_atom__WEBPACK_IMPORTED_MODULE_3__/* .loginFormAtom */ .n);
    const [user, setUser] = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useAtom)(_user_atom__WEBPACK_IMPORTED_MODULE_4__/* .userAtom */ .L);
    const { mutate , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)(_api_Auth__WEBPACK_IMPORTED_MODULE_0__/* .postLoginApi */ .kj, {
        onSuccess (res) {
            if (res.data) {
                localStorage.setItem("token", res.headers.token);
                setUser({
                    error: "",
                    user: {
                        ...res.data.data
                    }
                });
                setLoginForm({
                    username: "",
                    password: ""
                });
                setModal({
                    on: false,
                    type: ""
                });
                (0,_util_toast__WEBPACK_IMPORTED_MODULE_7__/* .createToast */ .Y)("로그인");
            } else {
                setUser({
                    ...user,
                    error: "오류 : " + res.err
                });
            }
        }
    });
    const changeLoginForm = (e)=>{
        setLoginForm({
            ...loginform,
            [e.target.name]: e.target.value
        });
    };
    const initializeAuth = ()=>{
        setUser({
            ...user,
            error: ""
        });
    };
    const login = async ()=>{
        mutate(loginform);
    };
    return {
        login,
        loginform,
        changeLoginForm,
        initializeAuth,
        isLoading
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ tagsAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const tagsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({
    tags: [],
    error: ""
});
tagsAtom.debugLabel = "tags";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1476:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ useTagsActions)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
/* harmony import */ var _api_Tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6563);
/* harmony import */ var _atom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9847);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__, _atom__WEBPACK_IMPORTED_MODULE_2__]);
([jotai__WEBPACK_IMPORTED_MODULE_0__, _atom__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function useTagsActions() {
    const [tags, setTags] = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.useAtom)(_atom__WEBPACK_IMPORTED_MODULE_2__/* .tagsAtom */ .q);
    const getTags = async ()=>{
        const tagsResponse = await (0,_api_Tag__WEBPACK_IMPORTED_MODULE_1__/* .getTagsApi */ .R)();
        if (tagsResponse.status === 200) {
            setTags({
                error: "",
                tags: [
                    ...tagsResponse.data.data.filter((category)=>category.title !== "resume"), 
                ]
            });
        } else {
            setTags({
                ...tags,
                error: tagsResponse.err
            });
        }
    };
    return {
        getTags
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 5755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ GlobalStyle)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: external "styled-normalize"
const external_styled_normalize_namespaceObject = require("styled-normalize");
;// CONCATENATED MODULE: ./src/style/global-styles.ts


const GlobalStyle = external_styled_components_.createGlobalStyle`
  @font-face {
    font-family: "NanumSquareL";
    src: url("/fonts/NanumSquareL.ttf") format("truetype");
  }

  @font-face {
    font-family: "NanumBarunGothicSubset";
    src: url("/fonts/NanumBarunGothic.ttf") format("truetype");
  }

  @font-face {
    font-family: "BMDOHYEON_ttf";
    src: url("/fonts/BMDOHYEON_ttf.ttf") format("truetype");
  }

  @font-face {
    font-family: "Consolas";
    src: url("/fonts/Consolas.ttf");
  }
  @font-face {
    font-family: "FiraMono-Regular";
    src: url("/fonts/FiraMono-Regular.ttf");
  }
  ${external_styled_normalize_namespaceObject.normalize}

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    overflow-x: hidden;
  }

  body {
    position: relative;
    margin-top: 50px;

    /* 넓이와 높이 */
    --slider-width: 150px;
    --text-pastel-black-dark: #353535;
    --text-black-dark: #000000;
    --text-white-dark: #FFFFFF;
    --body-background-dark: rgb(17, 21, 24);
    --header-background-dark: white;
    --header-gradient-picker: linear-gradient(45deg,#8e2de2,#4a00e0);
    --glass-picker: rgba(18, 255, 247, 0.8);
    --shadow-picker: 0 0 20px #219A95;

    /* 기본 백그라운드 */
    background: var(--body-background-dark);
    /* 스크롤 */
    ::-webkit-scrollbar {
      width: 1.5rem;
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
      background-color: black;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  * {
    font-family: 'NanumSquareL', sans-serif;
  }

  p, h1, h2, h3, h4, h5, h6 {
    font-family: 'NanumSquareL', sans-serif;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  .next-link {
    cursor: pointer
  }

  input {
    border: none;
    border-right: 0px;
    border-top: 0px;
    border-left: 0px;
    border-bottom: 0px;
  }

  input:focus {
    outline:none;
  }

  button, button:focus{ 	
    border: none;
    outline: none;
  }

`;


/***/ }),

/***/ 6645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ theme)
/* harmony export */ });
const theme = {
    breakPoint: "769px",
    colors: {
        black: "#1e1f1d",
        yellow: "#edb83c",
        orange: "#eb7952",
        gray: "#6e6e6e",
        gray_background: "#f5f5f5"
    }
};


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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

/***/ 7865:
/***/ ((module) => {

module.exports = require("react-icons/cg");

/***/ }),

/***/ 8866:
/***/ ((module) => {

module.exports = require("react-icons/gi");

/***/ }),

/***/ 1111:
/***/ ((module) => {

module.exports = require("react-icons/hi");

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

/***/ 7387:
/***/ ((module) => {

module.exports = import("jotai/devtools");;

/***/ }),

/***/ 2752:
/***/ ((module) => {

module.exports = import("jotai/utils");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,42,686,240,703,569,235,191], () => (__webpack_exec__(2957)));
module.exports = __webpack_exports__;

})();