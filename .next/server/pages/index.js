"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ThreeOuter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@react-three/fiber"
const fiber_namespaceObject = require("@react-three/fiber");
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Three/style.tsx

const ThreeWrapper = (external_styled_components_default()).div`
  top: 0;
  left: 0;
  /* background: linear-gradient(to right, #8e2de2, #4a00e0); */
  width: 100vw;
  height: 100vh;
`;
const Tag = (external_styled_components_default()).div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in;
  position: fixed;

  background: rgba(22, 22, 22, 0.2);
  top: 100px;
  right: 100px;
  line-height: 1.5rem;
  font-size: 12px;

  width: 40rem;
  min-width: 5rem;
  height: 20rem;

  color: white;
  box-shadow: 0 0 20px var(--black);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 0 10px #1d1d1d;
  z-index: 15;

  h1 {
    font-size: 26px;
    font-weight: 800;
    margin: 20px;
  }
  h3 {
    font-size: 12px;
    font-weight: 800;
    margin: 2px;
    padding: 0;
  }
  h2 {
    font-size: 12px;
    margin: 10px;
    font-weight: 600;
    text-shadow: 0 0 10px white;
  }

  &.isWide {
    display: none;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
const MainTitle = (external_styled_components_default()).div`
  position: absolute;
  justify-content: center;
  text-align: center;
  background: rgba(22, 22, 22, 0.6);

  width: 50rem;
  min-width: 5rem;
  height: 20rem;

  border-radius: 10px;
  padding: 30px;
  --webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 5;
  box-shadow: 0 0 30px rgb(30, 30, 30);

  .main-title {
    margin: 1rem;
    position: relative;
    font-family: "BMDOHYEON_ttf";
    font-size: 8rem;
    font-weight: 800;
  }

  .main-description {
    margin: 1rem;
    position: relative;
    font-family: "BMDOHYEON_ttf";
    font-size: 1.2rem;
    font-weight: 800;
  }
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 600px) {
    width: 25rem;
    height: 15rem;

    .main-title {
      font-size: 3em;
      font-weight: 800;
    }
    .main-description {
      font-size: 0.8rem;
    }
  }
`;

;// CONCATENATED MODULE: external "@react-three/drei"
const drei_namespaceObject = require("@react-three/drei");
;// CONCATENATED MODULE: ./src/components/Three/Progress/style.tsx

const Progress = (external_styled_components_default()).div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h6 {
    margin-bottom: 5px;
    font-size: 12px;
    font-weight: 800;
  }

  .progress-bar {
    overflow: hidden;
    position: relative;
    padding: 5px 0;
    width: 200px;
    height: 35px;
    transition: all 0.3s ease-in;

    .progress-color {
      position: absolute;
      z-index: 2;
      top: 50%;
      transform: translate(${(props)=>props.ratio + "px"}, -50%);
      width: 200px;
      height: 15px;
      background: linear-gradient(45deg, #8e2de2, #4a00e0);
      box-shadow: 0 0 10px #4a00e0;
    }
    .progress-gray {
      position: absolute;
      z-index: 1;
      transform: translateY(-50%);
      top: 50%;
      width: 200px;
      height: 15px;
      background: #1d1d1d;
    }
  }
`;

;// CONCATENATED MODULE: ./src/components/Three/Progress/index.tsx



function Progress_Progress({ progress  }) {
    const ratio = -200 + Math.ceil(progress * 2);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: progress !== 101 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Progress, {
            ratio: ratio,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "progress-bar",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "progress-color"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "progress-gray"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                    className: "progress-number",
                    children: [
                        "3D모델 임포트",
                        " ",
                        (progress - 0.01).toFixed(2).replace("-", ""),
                        " %"
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: external "@react-spring/three"
const three_namespaceObject = require("@react-spring/three");
// EXTERNAL MODULE: ./node_modules/three/examples/jsm/loaders/GLTFLoader.js
var GLTFLoader = __webpack_require__(1217);
// EXTERNAL MODULE: ./node_modules/three/examples/jsm/loaders/DRACOLoader.js
var DRACOLoader = __webpack_require__(2854);
// EXTERNAL MODULE: external "three"
var external_three_ = __webpack_require__(2248);
// EXTERNAL MODULE: ./src/constants/URL.ts
var URL = __webpack_require__(5539);
;// CONCATENATED MODULE: ./src/components/Three/util/gltf.tsx






// gltf 가져오기 커스컴 훅
const useGltf = (url)=>{
    const { 0: model , 1: setModel  } = (0,external_react_.useState)();
    const { 0: progress , 1: setProgress  } = (0,external_react_.useState)(1);
    const { 0: error , 1: setError  } = (0,external_react_.useState)();
    (0,external_react_.useMemo)(()=>{
        const dracoLoader = new DRACOLoader/* DRACOLoader */._();
        dracoLoader.setDecoderPath("https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/");
        dracoLoader.preload();
        const gltf = new GLTFLoader/* GLTFLoader */.E();
        gltf.setDRACOLoader(dracoLoader);
        gltf.load(`${URL/* S3_URL */.C7 + url}`, (e)=>{
            setModel(e);
            setProgress(101);
        }, (xhr)=>{
            setProgress(xhr.loaded / 100);
        }, (error)=>{
            setError(error);
        });
    }, [
        url
    ]);
    let mixer;
    if (model?.animations.length) {
        mixer = new external_three_.AnimationMixer(model.scene);
        model.animations.forEach((clip)=>{
            const action = mixer.clipAction(clip);
            action.play();
        });
    }
    (0,fiber_namespaceObject.useFrame)((_, delta)=>{
        mixer?.update(delta);
    });
    model?.scene.traverse((child)=>{
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            child.material.side = external_three_.FrontSide;
        }
    });
    return {
        model,
        setModel,
        progress,
        error
    };
};

// EXTERNAL MODULE: ./src/util/JQuery.ts + 1 modules
var JQuery = __webpack_require__(3703);
;// CONCATENATED MODULE: ./src/components/Three/model/Earth.tsx








// 지구
const Earth = ({ setProgress  })=>{
    const { model , progress  } = useGltf("/earth/scene.gltf");
    const { 0: isSmall , 1: setIsSmall  } = (0,external_react_.useState)(false);
    const setSmallOrBigWidth = ()=>{
        if (document.documentElement.scrollWidth <= 600) {
            setIsSmall(true);
        } else {
            setIsSmall(false);
        }
    };
    (0,external_react_.useEffect)(()=>{
        setSmallOrBigWidth();
        window.onresize = ()=>{
            setSmallOrBigWidth();
        };
    }, []);
    (0,external_react_.useEffect)(()=>{
        setProgress(progress);
    }, [
        progress
    ]);
    const { 0: active , 1: setActive  } = (0,external_react_.useState)(0);
    const { spring  } = (0,three_namespaceObject.useSpring)({
        spring: active,
        config: {
            mass: 5,
            tension: 400,
            friction: 50,
            precision: 0.0001
        }
    });
    (0,external_react_.useEffect)(()=>{
        document.body.style.cursor = active ? "pointer" : "auto";
    }, [
        active
    ]);
    const scale = spring.to([
        0,
        isSmall ? 30 : 40
    ], [
        isSmall ? 30 : 40,
        200
    ]);
    const onClick = ()=>{
        (0,JQuery.$)(".header-resume-button").get().click();
    };
    const onPointHover = ()=>{
        setActive(1);
        const tag = document.getElementById("earth-tag");
        tag?.classList.remove("isWide");
    };
    const onPointOut = ()=>{
        setActive(0);
        const tag = document.getElementById("earth-tag");
        tag?.classList.add("isWide");
    };
    const mesh = (0,external_react_.useRef)();
    (0,fiber_namespaceObject.useFrame)(()=>{
        if (mesh.current) {
            mesh.current.rotation.z += 0.01;
            mesh.current.rotation.y += 0.01;
        }
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("group", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(drei_namespaceObject.Html, {
                    zIndexRange: [
                        100,
                        10
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(three_namespaceObject.a.mesh, {
                    ref: mesh,
                    onClick: ()=>onClick(),
                    onPointerOver: ()=>onPointHover(),
                    onPointerOut: ()=>onPointOut(),
                    "scale-x": scale,
                    "scale-y": scale,
                    "scale-z": scale,
                    receiveShadow: true,
                    castShadow: true,
                    children: model && /*#__PURE__*/ jsx_runtime_.jsx("primitive", {
                        object: model.scene
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Three/model/Star.tsx




// 별
const Star = ({ setProgress  })=>{
    const { model , progress  } = useGltf("/star/scene.gltf");
    const mesh = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        setProgress(progress);
    }, [
        progress
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("group", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(three_namespaceObject.a.mesh, {
                scale: [
                    0.2,
                    0.2,
                    0.2
                ],
                ref: mesh,
                receiveShadow: true,
                castShadow: true,
                children: model && /*#__PURE__*/ jsx_runtime_.jsx("primitive", {
                    object: model.scene
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Three/model/style.tsx

const blink = external_styled_components_.keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;
const SmallTag = (external_styled_components_default()).div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background: rgba(22, 22, 22, 0.2); */
  font-size: 8px;
  font-weight: 800;
  min-width: 50px;
  position: relative;
  height: 30px;
  width: 200px;

  /* -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px); */
  border-radius: 15px;
  padding: 10px;
  /* box-shadow: 0 0 10px #1d1d1d; */

  .categoryset-text {
    font-size: 1rem;
    transition: all 0.3s ease-in;
    animation: ${blink} 1s infinite;
    cursor: pointer;
  }

  &:hover {
    .categoryset-text {
      font-size: 1.2rem;
    }
  }
`;
const InnerText = (external_styled_components_default()).p`
  color: white;
  font-size: 500px;
  text-shadow: 0 0 10px;
  margin-bottom: 40px;
`;
const Line = (external_styled_components_default()).p`
  background-color: white;
  width: 30px;
  height: 2px;

  margin-right: 10px;
  margin-bottom: 40px;

  opacity: 0.5;
`;

// EXTERNAL MODULE: ./src/constants/constants.ts
var constants = __webpack_require__(1493);
;// CONCATENATED MODULE: ./src/components/Three/model/CategoryStarSet.tsx







function CategoryStarSet({ categorySet  }) {
    const { 0: geometry  } = (0,external_react_.useState)(()=>new external_three_.SphereGeometry(1, 32, 32));
    const xyzMap = (i)=>{
        const obj = [
            [
                1,
                1,
                1
            ],
            [
                1,
                1,
                -1
            ],
            [
                1,
                -1,
                1
            ],
            [
                1,
                -1,
                -1
            ],
            [
                -1,
                1,
                1
            ],
            [
                -1,
                1,
                -1
            ],
            [
                -1,
                -1,
                1
            ],
            [
                -1,
                -1,
                -1
            ], 
        ];
        return obj[i % 8];
    };
    const data = (0,external_react_.useMemo)(()=>{
        return new Array(categorySet.length).fill([]).map((_, i)=>({
                x: Math.random() * 25 + xyzMap(i)[0] * (25 + i * 10),
                y: Math.random() * 25 + xyzMap(i)[1] * (25 + i * 10),
                z: Math.random() * 25 + xyzMap(i)[2] * (25 + i * 10),
                s: 0.5
            }));
    }, [
        categorySet
    ]);
    const onClick = (i)=>{
        (0,JQuery.$)(`.sidebar-category-${categorySet[i].id}-button`).get().click();
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: data.map((props, i)=>/*#__PURE__*/ jsx_runtime_.jsx("group", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("mesh", {
                    position: [
                        props.x,
                        props.y,
                        props.z
                    ],
                    scale: [
                        props.s,
                        props.s,
                        props.s
                    ],
                    geometry: geometry,
                    receiveShadow: true,
                    castShadow: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(drei_namespaceObject.Html, {
                            zIndexRange: [
                                2,
                                0
                            ],
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SmallTag, {
                                onClick: ()=>onClick(i),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Line, {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InnerText, {
                                        className: "categoryset-text",
                                        children: [
                                            categorySet[i].title,
                                            " ",
                                            `(${categorySet[i].posts})`
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(drei_namespaceObject.Sphere, {
                            args: [
                                1.5,
                                100,
                                100
                            ],
                            children: /*#__PURE__*/ jsx_runtime_.jsx("meshBasicMaterial", {
                                color: [
                                    constants/* COLORS */.DM[i % 10][0],
                                    constants/* COLORS */.DM[i % 10][1],
                                    constants/* COLORS */.DM[i % 10][2], 
                                ],
                                toneMapped: false
                            })
                        })
                    ]
                })
            }, i))
    });
}

;// CONCATENATED MODULE: ./src/components/Three/model/Outer.tsx




// 별
const Outer = ({ setProgress  })=>{
    const { model , progress  } = useGltf("/gallaxy/scene.gltf");
    const mesh = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        setProgress(progress);
    }, [
        progress
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("group", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(three_namespaceObject.a.mesh, {
                scale: [
                    0.2,
                    0.2,
                    0.2
                ],
                ref: mesh,
                receiveShadow: true,
                castShadow: true,
                children: model && /*#__PURE__*/ jsx_runtime_.jsx("primitive", {
                    object: model.scene
                })
            })
        })
    });
};

// EXTERNAL MODULE: ./src/components/common/text/Text.tsx
var Text = __webpack_require__(2053);
;// CONCATENATED MODULE: ./src/components/Three/model/CategoryLight.tsx




function CategoryLight({ categorySet  }) {
    const { 0: geometry  } = (0,external_react_.useState)(()=>new external_three_.SphereGeometry(1, 32, 32));
    const xyzMap = (i)=>{
        const obj = [
            [
                1,
                1,
                1
            ],
            [
                1,
                1,
                -1
            ],
            [
                1,
                -1,
                1
            ],
            [
                1,
                -1,
                -1
            ],
            [
                -1,
                1,
                1
            ],
            [
                -1,
                1,
                -1
            ],
            [
                -1,
                -1,
                1
            ],
            [
                -1,
                -1,
                -1
            ], 
        ];
        return obj[i % 8];
    };
    const data = (0,external_react_.useMemo)(()=>{
        return new Array(categorySet.length).fill([]).map((_, i)=>({
                x: Math.random() * 15 + xyzMap(i)[0] * (15 + i * 10),
                y: Math.random() * 15 + xyzMap(i)[1] * (15 + i * 10),
                z: Math.random() * 15 + xyzMap(i)[2] * (15 + i * 10),
                s: 1
            }));
    }, [
        categorySet
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: data.map((props, i)=>/*#__PURE__*/ jsx_runtime_.jsx("group", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("mesh", {
                    position: [
                        props.x,
                        props.y,
                        props.z
                    ],
                    scale: [
                        props.s,
                        props.s,
                        props.s
                    ],
                    children: /*#__PURE__*/ jsx_runtime_.jsx("spotLight", {
                        intensity: 0.2,
                        color: constants/* COLORSLIGHT */.o4[i % 10]
                    })
                })
            }, i))
    });
}

;// CONCATENATED MODULE: external "@react-three/postprocessing"
const postprocessing_namespaceObject = require("@react-three/postprocessing");
;// CONCATENATED MODULE: ./src/components/Three/ThreeOuter.tsx














function ThreeOuter({ categorySet  }) {
    const { 0: progress , 1: setProgress  } = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        (0,JQuery.$)("html").css("overflow", "hidden");
        return ()=>{
            (0,JQuery.$)("html").css("overflow", "scroll");
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ThreeWrapper, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainTitle, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Text/* GradientText */.t, {
                        className: "main-title",
                        children: "JIGGLOG"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Text/* GradientText */.t, {
                        className: "main-description",
                        children: "JIGGLOG에 오신 것을 환영합니다"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Progress_Progress, {
                        progress: progress
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Tag, {
                className: "isWide",
                id: "earth-tag",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "JIGGLYPOP"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "무언가 만드는 것을 좋아합니다"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "REACT 프론트 엔드에 관심이 많고 VUE, ANGULAR를 모두 사용합니다."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "DJANGO, express, nest.js, spring boot 백엔드도 다룹니다."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "3D 웹에 관심이 많으며 항상 프로젝트를 쉬지 않고 합니다."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Text/* GradientText */.t, {
                        children: "행성을 클릭하면 이력서 페이지로 이동합니다."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(fiber_namespaceObject.Canvas, {
                camera: {
                    position: [
                        100,
                        10,
                        10
                    ],
                    far: 10000
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(drei_namespaceObject.OrbitControls, {
                        minDistance: 60,
                        maxDistance: 100
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(drei_namespaceObject.Stars, {
                        saturation: 10,
                        count: 1000
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Earth, {
                        setProgress: setProgress
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Star, {
                        setProgress: setProgress
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Outer, {
                        setProgress: setProgress
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("fog", {
                        attach: "fog",
                        args: [
                            "#030303",
                            15,
                            120
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(CategoryStarSet, {
                        categorySet: categorySet
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(CategoryLight, {
                        categorySet: categorySet
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("color", {
                        attach: "background",
                        args: [
                            "#010101"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Earth, {
                        setProgress: setProgress
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(postprocessing_namespaceObject.EffectComposer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(postprocessing_namespaceObject.Bloom, {
                            mipmapBlur: true,
                            luminanceThreshold: 1,
                            radius: 0.7
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

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

/***/ 4472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Responsive)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/common/responsive/style.ts

const ResponsiveBlock = (external_styled_components_default()).div`
    width: 1300px;

    @media (max-width: 1024px) {
        width: 768px;
    }

    @media (max-width: 768px) {
        position: relative;
        width: 100vw;
        overflow: hidden;
    }
`;

;// CONCATENATED MODULE: ./src/components/common/responsive/Responsive.tsx



function Responsive({ children , ...rest }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(ResponsiveBlock, {
        ...rest,
        children: children
    });
}


/***/ }),

/***/ 441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5425);
/* harmony import */ var _components_common_meta_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7923);
/* harmony import */ var _components_common_responsive_Responsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4472);
/* harmony import */ var _components_Three_ThreeOuter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2325);
/* harmony import */ var _store_categories_atom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3160);
/* harmony import */ var _util_toJson__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1216);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_1__, _store_categories_atom__WEBPACK_IMPORTED_MODULE_7__]);
([jotai__WEBPACK_IMPORTED_MODULE_1__, _store_categories_atom__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









// import { EffectComposer, Bloom } from "@react-three/postprocessing";
function App() {
    const categories = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtomValue)(_store_categories_atom__WEBPACK_IMPORTED_MODULE_7__/* .categoriesAtom */ .m);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_common_responsive_Responsive__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_meta_Meta__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Three_ThreeOuter__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                categorySet: categories.categories
            })
        ]
    });
}
const getServerSideProps = async ({ params  })=>{
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient();
    await queryClient.prefetchQuery([
        "categories"
    ], _api_Category__WEBPACK_IMPORTED_MODULE_3__/* .getCategoriesApi */ .B);
    return {
        props: {
            dehydratedState: (0,_util_toJson__WEBPACK_IMPORTED_MODULE_8__/* .toJson */ .Q)(queryClient)
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3160:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ categoriesAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const categoriesAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({
    categories: [],
    error: ""
});
categoriesAtom.debugLabel = "categories";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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

/***/ 2248:
/***/ ((module) => {

module.exports = require("three");

/***/ }),

/***/ 2451:
/***/ ((module) => {

module.exports = import("jotai");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [828,425,703,191], () => (__webpack_exec__(441)));
module.exports = __webpack_exports__;

})();