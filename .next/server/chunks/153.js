"use strict";
exports.id = 153;
exports.ids = [153];
exports.modules = {

/***/ 1354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BoxInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7844);


const BoxInput = ({ type , name , placeholder , onChange , fontSize , value  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_1__/* .BoxInput */ .Z, {
        fontSize: fontSize,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            type: type,
            name: name,
            defaultValue: value,
            placeholder: placeholder,
            onChange: (e)=>onChange(e)
        })
    });
};


/***/ }),

/***/ 8153:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Write)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4397);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_input_BoxInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1354);
/* harmony import */ var _store_write_Write__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9229);
/* harmony import */ var _api_Post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(837);
/* harmony import */ var _common_button_GradientButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5820);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _post_Markdown_Markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2874);
/* harmony import */ var _util_toast__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7226);
/* harmony import */ var _util_cache__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(648);
/* harmony import */ var _util_interval__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3616);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _store_categories_query__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5006);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2451);
/* harmony import */ var _store_write_atom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(304);
/* harmony import */ var _common_button_style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2792);
/* harmony import */ var _store_post_atom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7481);
/* harmony import */ var _store_user_query__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(339);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_write_Write__WEBPACK_IMPORTED_MODULE_6__, _post_Markdown_Markdown__WEBPACK_IMPORTED_MODULE_10__, _store_categories_query__WEBPACK_IMPORTED_MODULE_14__, jotai__WEBPACK_IMPORTED_MODULE_15__, _store_write_atom__WEBPACK_IMPORTED_MODULE_16__, _store_post_atom__WEBPACK_IMPORTED_MODULE_18__, _store_user_query__WEBPACK_IMPORTED_MODULE_19__]);
([_store_write_Write__WEBPACK_IMPORTED_MODULE_6__, _post_Markdown_Markdown__WEBPACK_IMPORTED_MODULE_10__, _store_categories_query__WEBPACK_IMPORTED_MODULE_14__, jotai__WEBPACK_IMPORTED_MODULE_15__, _store_write_atom__WEBPACK_IMPORTED_MODULE_16__, _store_post_atom__WEBPACK_IMPORTED_MODULE_18__, _store_user_query__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















const MDEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(null, {
    loadableGenerated: {
        modules: [
            "../components/write/Write.tsx -> " + "@uiw/react-md-editor"
        ]
    },
    ssr: false
});
function Write() {
    (0,_store_user_query__WEBPACK_IMPORTED_MODULE_19__/* .useIsOwnerEffect */ .vq)();
    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: visibleMD , 1: setVisibleMD  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { writeform , resetWriteForm , // changeTags,
    changeform , changeformAndName , changeforms , writeApi , setCacheForm ,  } = (0,_store_write_Write__WEBPACK_IMPORTED_MODULE_6__/* .useWriteActions */ .T)();
    const post = (0,jotai__WEBPACK_IMPORTED_MODULE_15__.useAtomValue)(_store_post_atom__WEBPACK_IMPORTED_MODULE_18__/* .postAtom */ .a);
    const { categories , getCategories  } = (0,_store_categories_query__WEBPACK_IMPORTED_MODULE_14__/* .useCategoriesActions */ .n)();
    const [writeUpdateType, setWriteUpdateType] = (0,jotai__WEBPACK_IMPORTED_MODULE_15__.useAtom)(_store_write_atom__WEBPACK_IMPORTED_MODULE_16__/* .writeUpdateTypeAtom */ .R);
    // update인지 write인지 세팅
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const { id  } = router.query;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (id && post && post.post) {
            setWriteUpdateType({
                type: "update",
                id: parseInt(id)
            });
            changeforms({
                title: post.post.title,
                summary: post.post.summary,
                content: post.post.content
            });
        } else {
            setWriteUpdateType({
                ...writeUpdateType,
                type: "write"
            });
        }
    }, [
        id,
        post
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return ()=>{
            setWriteUpdateType({
                type: "",
                id: -1
            });
            resetWriteForm();
        };
    }, []);
    // useref
    const uploadNameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    // usemutation
    const { mutate: writeSubmit  } = (0,react_query__WEBPACK_IMPORTED_MODULE_13__.useMutation)(writeApi, {
        onSuccess (res) {
            getCategories();
            router.push(`/post/${res.id}`).then(()=>(0,_util_toast__WEBPACK_IMPORTED_MODULE_20__/* .createToast */ .Y)("글쓰기"));
        },
        onError (err) {
            console.log(err);
        }
    });
    const { mutate: updateSubmit  } = (0,react_query__WEBPACK_IMPORTED_MODULE_13__.useMutation)(()=>(0,_api_Post__WEBPACK_IMPORTED_MODULE_7__/* .patchUpdateApi */ .rX)(writeUpdateType.id, {
            title: writeform.title,
            summary: writeform.summary,
            content: writeform.content
        }), {
        onSuccess () {
            getCategories();
            router.push(`/post/${writeUpdateType.id}`).then(()=>(0,_util_toast__WEBPACK_IMPORTED_MODULE_20__/* .createToast */ .Y)("글 수정"));
        }
    });
    const uploadMutaion = (0,react_query__WEBPACK_IMPORTED_MODULE_13__.useMutation)(_api_Post__WEBPACK_IMPORTED_MODULE_7__/* .uploadApi */ .aq, {
        onSuccess (data) {
            changeformAndName(data.data.location, "images");
            uploadNameRef.current.value = data.data.originalname;
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setCacheForm(_util_cache__WEBPACK_IMPORTED_MODULE_11__/* ["default"].get */ .Z.get("write"));
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (post.post) {
            setValue(post.post.content);
        }
    }, [
        post
    ]);
    (0,_util_interval__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(savePost, 30000);
    function savePost() {
        _util_cache__WEBPACK_IMPORTED_MODULE_11__/* ["default"].set */ .Z.set("write", writeform);
        (0,_util_toast__WEBPACK_IMPORTED_MODULE_20__/* .createToast */ .Y)("글 저장");
    }
    const setChangeContentValue = (e)=>{
        const info = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(e);
        setValue(info.content);
        changeformAndName(info.content, "content");
    };
    const changeImages = (e)=>{
        const formData = new FormData();
        formData.append("img", e.target.files[0]);
        uploadMutaion.mutate(formData);
    };
    const onClickVisibleMd = ()=>{
        setVisibleMD(!visibleMD);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_3__/* .Write */ .EG, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_3__/* .EditorStyle */ .yX, {
                visible: visibleMD,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_input_BoxInput__WEBPACK_IMPORTED_MODULE_5__/* .BoxInput */ .Z, {
                        placeholder: "제목을 입력하세요",
                        name: "title",
                        fontSize: "3rem",
                        value: writeform.title,
                        onChange: changeform
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_input_BoxInput__WEBPACK_IMPORTED_MODULE_5__/* .BoxInput */ .Z, {
                        placeholder: "한줄 요약을 입력하세요",
                        name: "summary",
                        value: writeform.summary,
                        onChange: changeform
                    }),
                    writeUpdateType.type === "write" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: writeform.category_title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_input_BoxInput__WEBPACK_IMPORTED_MODULE_5__/* .BoxInput */ .Z, {
                                placeholder: "카테고리",
                                name: "category_title",
                                value: writeform.category_title,
                                onChange: changeform
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "category-wrapper",
                                children: categories.categories.map((category)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "category-small",
                                        onClick: ()=>changeformAndName(category.title, "category_title"),
                                        children: [
                                            "#",
                                            category.title
                                        ]
                                    });
                                })
                            })
                        ]
                    }),
                    writeUpdateType.type === "write" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_input_BoxInput__WEBPACK_IMPORTED_MODULE_5__/* .BoxInput */ .Z, {
                        placeholder: "태그 입력 (#으로 분리)",
                        name: "tags",
                        value: writeform.tags,
                        onChange: changeform
                    }),
                    writeUpdateType.type === "write" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_3__/* .ImageInput */ .aG, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: "upload-name",
                                ref: uploadNameRef
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "ex_filename",
                                children: "타이틀 이미지 업로드"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "file",
                                id: "ex_filename",
                                className: "upload-hidden",
                                name: "img",
                                onChange: changeImages
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_button_style__WEBPACK_IMPORTED_MODULE_17__/* .ColorButton */ .Eo, {
                        onClick: onClickVisibleMd,
                        width: "8rem",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: visibleMD ? "미리보기 숨기기" : "미리보기 열기"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDEditor, {
                        height: 700,
                        tabSize: 5,
                        preview: "edit",
                        value: writeform.content,
                        onChange: (e)=>setChangeContentValue(e)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_button_GradientButton__WEBPACK_IMPORTED_MODULE_8__/* .GradientButton */ .O, {
                        onClick: writeUpdateType.type === "write" ? writeSubmit : updateSubmit,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "제출하기"
                        })
                    })
                ]
            }),
            visibleMD && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style__WEBPACK_IMPORTED_MODULE_3__/* .WriteMarkdown */ .HE, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_post_Markdown_Markdown__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    content: value
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EG": () => (/* binding */ Write),
/* harmony export */   "HE": () => (/* binding */ WriteMarkdown),
/* harmony export */   "aG": () => (/* binding */ ImageInput),
/* harmony export */   "yX": () => (/* binding */ EditorStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4691);


const Write = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;
  font-size: 160%;
  width: 100%;
  height: 100%;
  z-index: 1;
  padding: 50px;
  border-radius: 10px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 #0001, 0 6px 20px 0 #0001;

  display: grid;
  grid-template-columns: 1fr 1fr;

  .mdeditor-wrapper {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: scroll;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
const WriteMarkdown = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_post_style__WEBPACK_IMPORTED_MODULE_1__/* .MarkdownStyle */ .jc)`
  position: relative;
  margin: 1rem;
  grid-column: 2/3;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;

  @media (max-width: 800px) {
    display: none;
  }
`;
const EditorStyle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  margin: 1rem;
  grid-column: ${(props)=>props.visible ? "1/2" : "1/3"};
  button {
    margin: 1rem 0;
  }

  .category-wrapper {
    position: relative;
    display: flex;
    flex-wrap: wrap;

    .category-small {
      margin: 0.5rem;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
`;
const ImageInput = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  margin: 1rem;
  &input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  label {
    display: inline-block;
    margin: 1rem;
    padding: 1rem;
    background-color: #fdfdfd;
    cursor: pointer;
    border: 1px solid #ebebeb;
    border-bottom-color: #e2e2e2;
    border-radius: 0.25em;
    color: #fff;
    background-color: #1d1d1d;
    box-shadow: 0 0 1rem #1d1d1d;
    border: none;
    font-size: 1.2rem;
  }

  .upload-name {
    display: inline-block;
    padding: 1rem;
    background-color: #f5f5f5;
    border: 1px solid #ebebeb;
    border-bottom-color: #e2e2e2;
    border-radius: 0.25em;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .upload-hidden {
    display: none;
  }
`;


/***/ }),

/***/ 9229:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ useWriteActions)
/* harmony export */ });
/* harmony import */ var _api_Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(837);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var _atom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(304);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_1__, _atom__WEBPACK_IMPORTED_MODULE_2__, jotai_utils__WEBPACK_IMPORTED_MODULE_3__]);
([jotai__WEBPACK_IMPORTED_MODULE_1__, _atom__WEBPACK_IMPORTED_MODULE_2__, jotai_utils__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function useWriteActions() {
    const [writeform, setWriteForm] = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtom)(_atom__WEBPACK_IMPORTED_MODULE_2__/* .writeFormAtom */ .N);
    const resetWriteForm = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_3__.useResetAtom)(_atom__WEBPACK_IMPORTED_MODULE_2__/* .writeFormAtom */ .N);
    const changeform = (e)=>{
        setWriteForm({
            ...writeform,
            [e.target.name]: e.target.value
        });
    };
    // const changeTags: IChangeTags = (e) => {
    //   const tagArray = e.target.value
    //     .split("#")
    //     .filter((item: string) => item !== "");
    //   setWriteForm({ ...writeform, ["tags"]: tagArray });
    // };
    const changeformAndName = (value, name)=>{
        setWriteForm({
            ...writeform,
            [name]: value
        });
    };
    const changeforms = ({ title , summary , content  })=>{
        setWriteForm({
            ...writeform,
            title: title,
            summary: summary,
            content: content
        });
    };
    const getform = ()=>{
        return writeform;
    };
    const setCacheForm = (form)=>{
        setWriteForm({
            ...form
        });
    };
    const writeApi = async ()=>{
        const { data  } = await (0,_api_Post__WEBPACK_IMPORTED_MODULE_0__/* .postWriteApi */ .ih)(writeform);
        return data;
    };
    return {
        writeform,
        writeApi,
        getform,
        setCacheForm,
        setWriteForm,
        changeform,
        changeforms,
        resetWriteForm,
        changeformAndName
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 304:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ writeFormAtom),
/* harmony export */   "R": () => (/* binding */ writeUpdateTypeAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const writeFormAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({
    title: "",
    summary: "",
    content: "",
    images: "",
    user: "",
    category_title: "",
    tags: ""
});
writeFormAtom.debugLabel = "write";
const writeUpdateTypeAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({
    type: "",
    id: -1
});
writeUpdateTypeAtom.debugLabel = "write_update";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useInterval = (callback, delay)=>{
    const savedCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        savedCallback.current = callback;
    }, [
        callback
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const executeCallback = ()=>{
            savedCallback.current();
        };
        const timerId = setInterval(executeCallback, delay);
        return ()=>clearInterval(timerId);
    }, []);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInterval);


/***/ })

};
;