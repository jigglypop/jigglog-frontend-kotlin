(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647],{82567:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resume",function(){return t(74385)}])},72942:function(n,e,t){"use strict";t.d(e,{Z:function(){return a}});var r=t(28598),i=t(1887),o=t.n(i);t(82684);function a(n){var e={title:n.title||"jigglog",description:n.description||"\uc9c0\uae00\ub85c\uadf8\uc5d0 \uc624\uc2e0 \uac83\uc744 \ud658\uc601\ud569\ub2c8\ub2e4",cardImage:""};return(0,r.jsxs)(o(),{children:[(0,r.jsxs)("title",{children:[e.title," | ",e.description]}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/facivon.ico"}),(0,r.jsx)("meta",{name:"google-site-verification",content:"lQSJTzJQx3zqrAtN51Lw8DDLnPjoaEa8xVJMVmmpY6Y"})]})}},44337:function(n,e,t){"use strict";t.d(e,{Z:function(){return u}});var r=t(28598),i=t(70638);function o(){var n=(0,i.Z)(['\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n\n  .title-container {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n  }\n  .title {\n    font-family: "BMDOHYEON_ttf";\n    font-size: 10rem;\n    margin: 0;\n    background: linear-gradient(\n      45deg,\n      #b294ff,\n      #57e6e6,\n      #feffb8,\n      #57e6e6,\n      #b294ff,\n      #57e6e6\n    );\n    color: transparent;\n    background-size: 500% auto;\n    animation: gradient 3s linear infinite;\n    -webkit-background-clip: text;\n  }\n  .text {\n    font-family: "BMDOHYEON_ttf";\n    font-size: 2rem;\n    background: linear-gradient(\n      45deg,\n      #b294ff,\n      #57e6e6,\n      #feffb8,\n      #57e6e6,\n      #b294ff,\n      #57e6e6\n    );\n    color: transparent;\n    background-size: 500% auto;\n    animation: gradient 3s linear infinite;\n    -webkit-background-clip: text;\n  }\n  .error {\n    color: #ff9797;\n    font-family: "BMDOHYEON_ttf";\n    font-size: 1.3rem;\n    font-weight: 800;\n    margin: 0;\n  }\n']);return o=function(){return n},n}var a=t(32584).default.div(o());function u(n){var e=n.error;return(0,r.jsx)(a,{children:(0,r.jsxs)("div",{className:"title-container",children:[(0,r.jsx)("p",{className:"title",children:"404"}),(0,r.jsx)("p",{className:"text",children:"\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4"}),(0,r.jsx)("p",{className:"error",children:e})]})})}},76203:function(n,e,t){"use strict";t.d(e,{Z:function(){return u}});var r=t(28598),i=t(70638);function o(){var n=(0,i.Z)(['\n  z-index: 8;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n\n  .text {\n    font-family: "BMDOHYEON_ttf";\n    color: white;\n  }\n\n  .title-container {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .spinner {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    scale: calc(2);\n  }\n\n  svg {\n    width: 50%;\n    max-width: 10rem;\n    animation: rotate 3.6s linear infinite;\n  }\n\n  circle {\n    fill: none;\n    stroke: white;\n    stroke-width: 8px;\n    stroke-dasharray: 300;\n    animation: outline 2s cubic-bezier(0.77, 0, 0.18, 1) infinite;\n  }\n\n  @keyframes outline {\n    0% {\n      stroke-dashoffset: 0;\n    }\n    50% {\n      stroke-dashoffset: 300;\n    }\n    100% {\n      stroke-dashoffset: 600;\n    }\n  }\n\n  @keyframes rotate {\n    from {\n      transform: rotate(0turn);\n    }\n    to {\n      transform: rotate(-1turn);\n    }\n  }\n']);return o=function(){return n},n}var a=t(32584).default.div(o());function u(){return(0,r.jsx)(a,{children:(0,r.jsx)("div",{className:"title-container",children:(0,r.jsxs)("div",{className:"spinner",children:[(0,r.jsx)("svg",{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("circle",{cx:"50",cy:"50",r:"46"})}),(0,r.jsx)("p",{className:"text",children:"\uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824\uc8fc\uc138\uc694"})]})})})}},44835:function(n,e,t){"use strict";t.d(e,{Z:function(){return g}});var r=t(21967),i=t(37559),o=t(25925),a=t(28598),u=t(91605),c=t(72149),f=t(15032),d=t(21762),s=t(70638),l=t(32584);function m(){var n=(0,s.Z)(['\n  line-height: 2em;\n  color: black;\n  font-weight: 800;\n\n  code {\n    background: linear-gradient(\n      45deg,\n      #b294ff,\n      #57e6e6,\n      #feffb8,\n      #57e6e6,\n      #b294ff,\n      #57e6e6\n    );\n    background-size: 500% auto;\n    -webkit-animation: gradient 3s linear infinite;\n    animation: gradient 3s linear infinite;\n    font-family: "BMDOHEYON_ttf" !important;\n    font-weight: 400;\n    border-radius: 0.5rem;\n    padding: 0.5rem;\n  }\n  hr {\n    height: 4px;\n    background-color: rgba(0, 0, 0, 0.1);\n    border: none;\n  }\n  strong {\n    margin-top: 100px;\n  }\n  ul {\n    margin: 0;\n  }\n  li {\n    font-weight: 100;\n  }\n\n  blockquote {\n    border-left: 0.5rem solid #bfffe7;\n    margin: 2rem 0;\n    width: 100%;\n    background: rgba(185, 185, 185, 0.1);\n    padding: 1rem;\n\n    line-height: 1.4em;\n    color: #a5a5a5;\n  }\n\n  pre,\n  span {\n    font-family: "FiraMono-Regular" !important;\n    margin-top: 10px;\n    font-size: 14px !important;\n    width: 60vw;\n    overflow-x: hidden;\n  }\n  table {\n    min-width: 45vw;\n    margin: 20px;\n    background: #f9f9f9;\n  }\n  thead {\n    background: #e2e2e2;\n  }\n  th,\n  tr,\n  td {\n    border: 2px solid gray;\n    color: black;\n    padding: 10px;\n    min-width: 3rem;\n  }\n  hr {\n    margin-bottom: 30px;\n  }\n\n  @media (max-width: 992px) {\n    padding: 0 10px 10px 10px;\n    line-height: 2em;\n    color: black;\n    hr {\n      margin-bottom: 10px;\n    }\n    p,\n    blockquote,\n    pre {\n      width: 100%;\n    }\n    ul {\n      padding: 0.5rem;\n    }\n    li {\n      padding: 0.5rem;\n    }\n    table {\n      margin: 20px;\n    }\n  }\n']);return m=function(){return n},n}function p(){var n=(0,s.Z)(['\n  em {\n    font-weight: 1000;\n    text-decoration: underline;\n  }\n  code {\n    font-family: "NanumSquareL", sans-serif !important;\n    position: relative;\n  }\n  del {\n    text-decoration: none;\n    color: gray;\n  }\n']);return p=function(){return n},n}var h=l.default.div(m()),x=(0,l.default)(h)(p());function g(n){var e=n.content,t={code:function(n){n.node;var e=n.inline,t=n.className,u=n.children,d=(0,o.Z)(n,["node","inline","className","children"]),s=/language-(\w+)/.exec(t||"");return!e&&s?(0,a.jsx)(f.Z,(0,r.Z)({style:c.Z,PreTag:"div",language:s[1],children:String(u).replace(/\n$/,"")},d)):(0,a.jsx)("code",(0,i.Z)((0,r.Z)({className:t||""},d),{children:u}))}};return(0,a.jsx)(x,{children:(0,a.jsx)("div",{className:"markdown-body",children:(0,a.jsx)(u.D,{components:t,children:e,remarkPlugins:[d.Z]})})})}},42967:function(n,e,t){"use strict";t.d(e,{C2:function(){return E},Dx:function(){return O},Jl:function(){return y},QZ:function(){return D},Xf:function(){return Z},cK:function(){return _},lr:function(){return z},n5:function(){return N}});var r=t(70638),i=t(32584),o=t(61625);function a(){var n=(0,r.Z)(["\n  position: relative;\n  overflow: hidden;\n  padding: 10%;\n  font-size: 150%;\n  @media (max-width: 768px) {\n    padding: 5%;\n  }\n  @media (max-width: 600px) {\n    padding: 1%;\n  }\n"]);return a=function(){return n},n}function u(){var n=(0,r.Z)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n"]);return u=function(){return n},n}function c(){var n=(0,r.Z)([""]);return c=function(){return n},n}function f(){var n=(0,r.Z)(["\n  display: inline-block;\n  -webkit-filter: drop-shadow(3px 3px 2px gray);\n  filter: drop-shadow(3px 3px 2px gray);\n"]);return f=function(){return n},n}function d(){var n=(0,r.Z)(["\n  margin: 10px;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  justify-content: center;\n  height: 45px;\n  width: 45px;\n  border-radius: 50%;\n  text-align: center;\n  border: 1.5px solid #ebebeb;\n\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n"]);return d=function(){return n},n}function s(){var n=(0,r.Z)(['\n  flex-direction: column;\n  p {\n    margin: 1rem;\n    font-family: "BMDOHYEON_ttf";\n    font-size: 6rem;\n    font-weight: 800;\n  }\n']);return s=function(){return n},n}function l(){var n=(0,r.Z)(["\n  @media (max-width: 600px) {\n    display: none;\n  }\n"]);return l=function(){return n},n}function m(){var n=(0,r.Z)(["\n  font-size: 20px;\n  text-align: center;\n  a {\n    padding: 0 6px;\n  }\n"]);return m=function(){return n},n}function p(){var n=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  color: ",";\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 4px;\n  outline: 0;\n"]);return p=function(){return n},n}function h(){var n=(0,r.Z)(['\n  position: relative;\n  width: 100%;\n  flex-direction: column;\n\n  .portfolio-title {\n    margin: 1rem;\n    font-family: "BMDOHYEON_ttf";\n    font-size: 6rem;\n    font-weight: 800;\n  }\n\n  .portfolio-url {\n    margin: 1rem;\n    font-family: "BMDOHYEON_ttf";\n    font-size: 3rem;\n    font-weight: 800;\n  }\n\n  @media (max-width: 1000px) {\n    .portfolio-title {\n      font-size: 5rem;\n    }\n    .portfolio-url {\n      font-size: 2.5rem;\n    }\n  }\n\n  @media (max-width: 768px) {\n    .portfolio-title {\n      font-size: 3rem;\n    }\n    .portfolio-url {\n      font-size: 1.6rem;\n    }\n  }\n']);return h=function(){return n},n}function x(){var n=(0,r.Z)(["\n  font-size: 25px;\n  font-weight: 800;\n  @media (max-width: 600px) {\n    font-size: 20px;\n  }\n"]);return x=function(){return n},n}function g(){var n=(0,r.Z)(["\n  margin: 10px;\n  font-size: 30px;\n  font-weight: 800;\n  @media (max-width: 600px) {\n    font-size: 20px;\n  }\n"]);return g=function(){return n},n}function v(){var n=(0,r.Z)(["\n  margin: 10px;\n  font-size: 15px;\n  font-weight: 800;\n  @media (max-width: 600px) {\n    font-size: 10px;\n  }\n"]);return v=function(){return n},n}function w(){var n=(0,r.Z)(["\n  font-size: 15px;\n  font-weight: 800;\n\n  margin: 5px;\n"]);return w=function(){return n},n}function b(){var n=(0,r.Z)(["\n  padding: 1rem 1rem 4rem;\n  position: relative;\n  width: 100%;\n  .markdown-body {\n    position: relative;\n    width: 100%;\n    color: white;\n    h1 {\n      padding: 1rem;\n      background: white;\n      color: black;\n    }\n    p,\n    li {\n      a {\n        cursor: pointer;\n        text-decoration: none;\n        color: #feffb8;\n      }\n    }\n\n    hr,\n    br {\n      background: #dfdfdf;\n    }\n\n    table {\n      margin: 1rem;\n      width: 100%;\n      background: transparent;\n    }\n    td {\n      color: white;\n    }\n  }\n"]);return b=function(){return n},n}function k(){var n=(0,r.Z)(["\n  /* p,\n  li {\n    font-size: 1.4rem !important;\n    font-weight: 800;\n  } */\n  position: relative;\n  width: 100%;\n"]);return k=function(){return n},n}function j(){var n=(0,r.Z)(["\n  display: flex;\n\n  align-items: center;\n  justify-content: center;\n  .innerIcon {\n  }\n"]);return j=function(){return n},n}var Z=i.default.div(a()),y=i.default.div(u()),z=(0,i.default)(o.L)(c()),N=(i.default.div(f()),i.default.div(d()),(0,i.default)(o.L)(s())),_=(i.default.div(l()),i.default.section(m())),O=(i.default.button(p(),(function(n){return n.theme.color}),(function(n){return n.theme.backgroundColor}),(function(n){return n.theme.color})),(0,i.default)(o.L)(h())),E=(i.default.div(x()),i.default.div(g()),i.default.div(v()),i.default.div(w()),i.default.section(b())),D=(0,i.default)(E)(k());i.default.div(j())},74385:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSP:function(){return j},default:function(){return Z}});var r=t(28598),i=(t(82684),t(72942)),o=t(44337),a=t(76203),u=t(15868),c=t.n(u),f=t(98657),d=t(12579),s=t(44835),l=t(42967);function m(n){var e=n.resume,t=c()(e.content);return(0,r.jsx)(l.Xf,{children:(0,r.jsxs)(l.Jl,{children:[(0,r.jsxs)(l.n5,{children:[(0,r.jsx)(f.Z,{width:"20rem",height:"20rem",imageUrl:e.user.imageUrl,boxShadow:"2px 2px 10px white",className:"manager"}),(0,r.jsx)(d.t,{children:e.user.username})]}),(0,r.jsx)(l.cK,{}),(0,r.jsx)(l.C2,{children:(0,r.jsx)(s.Z,{content:t.content})})]})})}var p=t(46839),h=t(97478),x=t(51224),g=t(45008),v=t(50051),w=t(21669),b=function(){var n=(0,x.Z)((function(){return(0,g.__generator)(this,(function(n){switch(n.label){case 0:return[4,(0,w.Z)().get("".concat(v.LB,"/resume"))];case 1:return[2,n.sent()]}}))}));return function(){return n.apply(this,arguments)}}(),k=(0,p.cn)({resume:null,error:""});k.debugLabel="resume";var j=!0;function Z(){var n=function(){var n=(0,p.b9)(k),e=(0,h.useQuery)(["resume"],(function(){return b()}),{onSuccess:function(e){e.data?n({resume:e.data.data,error:""}):n({resume:null,error:"\uc624\ub958 : "+e.err})}});return{resume:e.data,isSuccess:e.isSuccess,isLoading:e.isLoading,isError:e.isError,error:e.error}}(),e=n.resume,t=n.isSuccess,u=n.isLoading,c=n.isError;return(0,r.jsxs)(r.Fragment,{children:[t&&e.data&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{description:"\uc774\ub825\uc11c"}),(0,r.jsx)(m,{resume:e.data.data})]}),u&&(0,r.jsx)(a.Z,{}),c&&(0,r.jsx)(o.Z,{})]})}},33596:function(){}},function(n){n.O(0,[146,382,774,888,179],(function(){return e=82567,n(n.s=e);var e}));var e=n.O();_N_E=e}]);