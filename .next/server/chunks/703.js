"use strict";
exports.id = 703;
exports.ids = [703];
exports.modules = {

/***/ 3703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ $),
  "$$": () => (/* binding */ $$)
});

// UNUSED EXPORTS: getPixelNumber

;// CONCATENATED MODULE: ./src/util/regex.ts
// regex
const getRegex = (tag, text)=>{
    const regex = new RegExp(tag, "g");
    const datas = text.match(regex) || [];
    return datas;
};
const isTag = (text)=>{
    const Tag = "[a-zA-Z-0-9:s]";
    const openTag = `<(${Tag})+>`;
    return getRegex(`${openTag}`, text);
};
const isOuter = (text)=>{
    const Tag = "[a-zA-Z-0-9:s]";
    return getRegex(`<(${Tag})+>.*?</(${Tag})+>`, text);
};

;// CONCATENATED MODULE: ./src/util/JQuery.ts

const setCSSProperty = ($element, attr, value)=>{
    if (attr === "length" || attr === "parentRule" || attr === "item" || attr === "setProperty" || attr === "removeProperty" || attr === "getPropertyPriority" || attr === "getPropertyValue") {
        return;
    }
    $element.style[attr] = value;
};
const $ = (element)=>{
    let $El = null;
    if (typeof element === "string") {
        if (isOuter(element) && isOuter(element).length !== 0) {
            const tag = isTag(element);
            let temp = "";
            if (tag && tag[0]) {
                temp = tag[0].replace(/<|>/g, "");
            }
            $El = document.createElement(`${temp}`);
        } else {
            $El = document.querySelector(element);
        }
    } else if (element instanceof HTMLElement) {
        $El = element;
    }
    const Arguments = {
        append ($target) {
            if ($El instanceof HTMLElement) {
                $target.appendChild($El);
            }
        },
        get () {
            if ($El) {
                return $El;
            } else {
                $El = document.createElement("div");
                return $El;
            }
        },
        // css valuable 가져오기, 세팅하기(value를 넣으면 세팅함)
        val (key, value) {
            if (!value) {
                if (typeof element === "string") {
                    const $El = this.get();
                    if ($El instanceof HTMLElement) {
                        const result = getComputedStyle($El).getPropertyValue(key);
                        if (!result) {
                            return null;
                        }
                        return result;
                    } else {
                        return null;
                    }
                } else if (element instanceof HTMLElement) {
                    const result1 = getComputedStyle(element).getPropertyValue(key);
                    if (!result1) {
                        return null;
                    }
                    return result1;
                }
                return null;
            } else {
                if (typeof element === "string") {
                    const $El1 = this.get();
                    if ($El1 instanceof HTMLElement) {
                        $El1.style.setProperty(key, value);
                    } else {
                        return null;
                    }
                } else if (element instanceof HTMLElement) {
                    element.style.setProperty(key, value);
                } else {
                    return null;
                }
            }
        },
        on (type, cb) {
            const $element = this.get();
            if ($element === null) {
                return;
            }
            $element.addEventListener(type, cb);
            return {
                ...Arguments
            };
        },
        remove (type, cb) {
            const $element = this.get();
            if ($element === null) {
                return;
            }
            $element.removeEventListener(type, cb);
            return {
                ...Arguments
            };
        },
        ready (cb) {
            if (element === document) {
                cb();
            }
        },
        css (attr, value) {
            const $element = this.get();
            if ($element === null) {
                return;
            }
            setCSSProperty($element, attr, value);
            return {
                ...Arguments
            };
        },
        addClass (className) {
            $El?.classList.add(className);
            return {
                ...Arguments
            };
        },
        toggleClass (className) {
            $El?.classList.toggle(className);
            return {
                ...Arguments
            };
        },
        removeClass (className) {
            $El?.classList.remove(className);
            return {
                ...Arguments
            };
        }
    };
    return {
        ...Arguments
    };
};
// 쿼리 셀렉터 여러개
const $$ = (element)=>{
    return {
        get () {
            return document.querySelectorAll(element);
        },
        on (type, cb) {
            const $elements = this.get();
            $elements.forEach(($el)=>$el.addEventListener(type, cb));
        },
        css (attr, value) {
            const $elements = this.get();
            $elements.forEach(($el)=>setCSSProperty($el, attr, value));
        }
    };
};
// 픽셀을 넘버로
const getPixelNumber = (value)=>{
    return Number(value.replace("px", ""));
};


/***/ })

};
;