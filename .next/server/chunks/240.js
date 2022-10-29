"use strict";
exports.id = 240;
exports.ids = [240];
exports.modules = {

/***/ 2361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EB": () => (/* binding */ postRegisterApi),
/* harmony export */   "Hh": () => (/* binding */ getCheckApi),
/* harmony export */   "kj": () => (/* binding */ postLoginApi)
/* harmony export */ });
/* harmony import */ var _constants_URL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5539);
/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2131);


const getCheckApi = async ()=>{
    return await (0,_methods__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().getToken(`${_constants_URL__WEBPACK_IMPORTED_MODULE_0__/* .SERVER_URL */ .LB}/auth/check`);
};
const postLoginApi = async (body)=>{
    return await (0,_methods__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().post(`${_constants_URL__WEBPACK_IMPORTED_MODULE_0__/* .SERVER_URL */ .LB}/auth/login`, body);
};
const postRegisterApi = async (body)=>{
    return await (0,_methods__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().post(`${_constants_URL__WEBPACK_IMPORTED_MODULE_0__/* .SERVER_URL */ .LB}/auth/register`, body);
};


/***/ }),

/***/ 837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MZ": () => (/* binding */ getPostApi),
/* harmony export */   "Vu": () => (/* binding */ deletePostApi),
/* harmony export */   "aq": () => (/* binding */ uploadApi),
/* harmony export */   "ih": () => (/* binding */ postWriteApi),
/* harmony export */   "rX": () => (/* binding */ patchUpdateApi)
/* harmony export */ });
/* unused harmony export getPostsApi */
/* harmony import */ var _constants_URL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5539);
/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2131);


const getPostsApi = async ()=>{
    return await Api().get(`${SERVER_URL}/post` + `/?page=1`);
};
const getPostApi = async (id)=>{
    return await (0,_methods__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(`${_constants_URL__WEBPACK_IMPORTED_MODULE_0__/* .SERVER_URL */ .LB}/post/${id}`);
};
const postWriteApi = async (body)=>{
    return await (0,_methods__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().postToken(`${_constants_URL__WEBPACK_IMPORTED_MODULE_0__/* .SERVER_URL */ .LB}/post`, body);
};
const patchUpdateApi = async (id, body)=>{
    return await (0,_methods__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().patchToken(`${_constants_URL__WEBPACK_IMPORTED_MODULE_0__/* .SERVER_URL */ .LB}/post/${id}`, body);
};
const deletePostApi = async (body)=>{
    return await (0,_methods__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().deleteToken(`${_constants_URL__WEBPACK_IMPORTED_MODULE_0__/* .SERVER_URL */ .LB}/post/${body.id}`);
};
const uploadApi = async (body)=>{
    return await (0,_methods__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().postUpload(`${_constants_URL__WEBPACK_IMPORTED_MODULE_0__/* .SERVER_URL */ .LB}/upload`, body);
};


/***/ }),

/***/ 2792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Eo": () => (/* binding */ ColorButton),
/* harmony export */   "OQ": () => (/* binding */ GradientButton),
/* harmony export */   "hO": () => (/* binding */ BlackButton)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GradientButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
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
  flex-direction: row;

  width: 100%;
  height: 50px;
  margin: 1.5rem;
  border-radius: 2px;
  padding: 1.4rem 2rem 1.6rem;
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
  animation: gradient 3s linear infinite;
  cursor: pointer;

  p {
    color: #1d1d1d;
    font-size: 1.2rem;
    font-weight: 800;
    background: transparent;
  }
`;
const BlackButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0.5rem;
  width: 6rem;
  height: 4rem;
  border-radius: 2px;
  background: #1d1d1d;
  box-shadow: 0 0 10px #1d1d1d;
  cursor: pointer;
  transition: all 0.3s ease-in;

  p {
    color: white;
    font-size: 1rem;
    font-weight: 800;
    background: transparent;
  }

  &:hover {
    box-shadow: 0 0 20px #1d1d1d;
  }
`;
const ColorButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0.5rem;
  width: ${(props)=>props.width ? props.width : "100%"};
  height: 5rem;
  border-radius: 2px;
  background: ${(props)=>props.color ? props.color : "#1d1d1d"};
  box-shadow: 0 0 10px #1d1d1d;
  cursor: pointer;
  transition: all 0.3s ease-in;

  p {
    color: ${(props)=>props.fontColor ? props.fontColor : "white"};
    font-size: 1rem;
    font-weight: 800;
    background: transparent;
  }

  &:hover {
    box-shadow: 0 0 20px #1d1d1d;
  }
`;


/***/ }),

/***/ 6406:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ modalAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const modalAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({
    on: false,
    type: ""
});
modalAtom.debugLabel = "modal";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ userAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const userAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({
    user: null,
    error: ""
});
userAtom.debugLabel = "user";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 339:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_y": () => (/* binding */ useUserActions),
/* harmony export */   "cr": () => (/* binding */ useUserQueryEffect),
/* harmony export */   "vq": () => (/* binding */ useIsOwnerEffect)
/* harmony export */ });
/* harmony import */ var _api_Auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2361);
/* harmony import */ var _modal_atom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6406);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var _atom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7226);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2752);
/* harmony import */ var _util_cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modal_atom__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_2__, _atom__WEBPACK_IMPORTED_MODULE_3__, jotai_utils__WEBPACK_IMPORTED_MODULE_7__]);
([_modal_atom__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_2__, _atom__WEBPACK_IMPORTED_MODULE_3__, jotai_utils__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function useUserQueryEffect() {
    const setModal = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_7__.useUpdateAtom)(_modal_atom__WEBPACK_IMPORTED_MODULE_1__/* .modalAtom */ .h);
    const [user, setUser] = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useAtom)(_atom__WEBPACK_IMPORTED_MODULE_3__/* .userAtom */ .L);
    const { mutate , data , isError , error , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_api_Auth__WEBPACK_IMPORTED_MODULE_0__/* .getCheckApi */ .Hh, {
        onSuccess (res) {
            setUser({
                error: "",
                user: {
                    ...res
                }
            });
            setModal({
                on: false,
                type: ""
            });
        },
        onError (err) {
            setUser({
                ...user,
                error: "오류 : " + err.message
            });
        }
    });
    // 라이프사이클
    // 체크 로직
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (_util_cache__WEBPACK_IMPORTED_MODULE_8__/* ["default"].get */ .Z.get("token")) {
            mutate();
        }
    }, []);
    return {
        check: mutate,
        data,
        isError,
        error,
        isLoading
    };
}
function useUserActions() {
    const setModal = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_7__.useUpdateAtom)(_modal_atom__WEBPACK_IMPORTED_MODULE_1__/* .modalAtom */ .h);
    const setUser = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_7__.useUpdateAtom)(_atom__WEBPACK_IMPORTED_MODULE_3__/* .userAtom */ .L);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const logout = async ()=>{
        localStorage.clear();
        setUser({
            error: "",
            user: null
        });
        setModal({
            on: false,
            type: ""
        });
        router.push("/");
        (0,_util_toast__WEBPACK_IMPORTED_MODULE_9__/* .createToast */ .Y)("로그아웃 ");
    };
    const commentLogout = async ()=>{
        localStorage.clear();
        setUser({
            error: "",
            user: null
        });
        setModal({
            on: false,
            type: ""
        });
        (0,_util_toast__WEBPACK_IMPORTED_MODULE_9__/* .createToast */ .Y)("로그아웃 ");
    };
    return {
        logout,
        commentLogout
    };
}
// write, update 권한 체크
function useIsOwnerEffect() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const user = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useAtomValue)(_atom__WEBPACK_IMPORTED_MODULE_3__/* .userAtom */ .L);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (user.user) {
            if (user.user.id !== 1) {
                router.push("/");
            }
        } else {
            router.push("/");
        }
    }, [
        user
    ]);
    return {
        user
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ createToast)
/* harmony export */ });
// 토스트
const createToast = (message, notSetPrefix)=>{
    // toasts아이디 셀렉트 하고 새로 div 만들어서 appendchild(2000초 후에 없어짐)
    const toasts = document.querySelector("#toasts");
    const note = document.createElement("div");
    note.classList.add("toast");
    note.innerHTML = `<strong class="strong">${message}</strong> ${!notSetPrefix ? "완료" : ""}!`;
    toasts?.appendChild(note);
    setTimeout(()=>{
        note.remove();
    }, 2000);
};


/***/ })

};
;