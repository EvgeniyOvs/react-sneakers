webpackHotUpdate("main",{

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nvar LogoButton_1 = __webpack_require__(/*! ../Icons/LogoButton */ \"./src/shared/Icons/LogoButton.tsx\");\r\nvar Text_1 = __webpack_require__(/*! ../Text */ \"./src/shared/Text/index.ts\");\r\nvar BasketButton_1 = __webpack_require__(/*! ../Icons/BasketButton */ \"./src/shared/Icons/BasketButton.tsx\");\r\nvar FavoriteButton_1 = __webpack_require__(/*! ../Icons/FavoriteButton */ \"./src/shared/Icons/FavoriteButton.tsx\");\r\nvar UserButton_1 = __webpack_require__(/*! ../Icons/UserButton */ \"./src/shared/Icons/UserButton.tsx\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\r\nvar contentContext_1 = __importDefault(__webpack_require__(/*! ../../_context/contentContext */ \"./src/_context/contentContext.ts\"));\r\n// props: { onClickCart: () => void; }\r\nfunction Header(props) {\r\n    var cartItems = react_1.default.useContext(contentContext_1.default).cartItems;\r\n    //вытаскиваем сумму ил массива карточек в корзине\r\n    var totalPrice = cartItems.reduce(function (sum, obj) { return obj.price + sum; }, 0);\r\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header + ' ' + header_css_1.default.container },\r\n        react_1.default.createElement(react_router_dom_1.Link, { to: \"/\" },\r\n            react_1.default.createElement(\"div\", { className: header_css_1.default.headerLeft },\r\n                react_1.default.createElement(\"div\", { className: header_css_1.default.logo },\r\n                    react_1.default.createElement(LogoButton_1.LogoButton, null)),\r\n                react_1.default.createElement(\"div\", { className: header_css_1.default.headerInfo },\r\n                    react_1.default.createElement(Text_1.Text, { As: \"h3\", size: 20, color: Text_1.Ecolor.black, weight: 700 }, \"REACT SNEAKERS\"),\r\n                    react_1.default.createElement(Text_1.Text, { As: \"p\", size: 14, color: Text_1.Ecolor.grey9D }, \"\\u041C\\u0430\\u0433\\u0430\\u0437\\u0438\\u043D \\u043B\\u0443\\u0447\\u0448\\u0438\\u0445 \\u043A\\u0440\\u043E\\u0441\\u0441\\u043E\\u0432\\u043E\\u043A\")))),\r\n        react_1.default.createElement(\"ul\", { className: header_css_1.default.basketList },\r\n            react_1.default.createElement(\"li\", { onClick: props.onClickCart, className: header_css_1.default.basketItem },\r\n                react_1.default.createElement(\"div\", { className: header_css_1.default.basketLogo },\r\n                    react_1.default.createElement(BasketButton_1.BasketButton, null)),\r\n                react_1.default.createElement(\"div\", { className: header_css_1.default.count },\r\n                    react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.Ecolor.grey5C, weight: 600 }, \"1205 \\u0440\\u0443\\u0431.\"))),\r\n            react_1.default.createElement(\"li\", { className: header_css_1.default.basketItem },\r\n                react_1.default.createElement(react_router_dom_1.Link, { to: \"/favorites\" },\r\n                    react_1.default.createElement(\"div\", { className: header_css_1.default.favoritButton },\r\n                        react_1.default.createElement(FavoriteButton_1.FavoriteButton, null)))),\r\n            react_1.default.createElement(\"li\", { className: header_css_1.default.basketItem },\r\n                react_1.default.createElement(\"div\", { className: header_css_1.default.userButton },\r\n                    react_1.default.createElement(UserButton_1.UserButton, null))))));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ })

})