webpackHotUpdate("main",{

/***/ "./src/shared/Orders/Orders.tsx":
/*!**************************************!*\
  !*** ./src/shared/Orders/Orders.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Orders = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar orders_css_1 = __importDefault(__webpack_require__(/*! ./orders.css */ \"./src/shared/Orders/orders.css\"));\r\nvar Text_1 = __webpack_require__(/*! ../Text */ \"./src/shared/Text/index.ts\");\r\nfunction Orders() {\r\n    react_1.default.useEffect();\r\n    return (react_1.default.createElement(\"section\", { className: orders_css_1.default.catalog + ' ' + orders_css_1.default.container },\r\n        react_1.default.createElement(\"div\", { className: orders_css_1.default.wrapper },\r\n            react_1.default.createElement(\"div\", { className: orders_css_1.default.title },\r\n                react_1.default.createElement(Text_1.Text, { As: \"h1\", size: 32, color: Text_1.Ecolor.black, weight: 700 }, \"\\u041C\\u043E\\u0438 \\u0437\\u0430\\u043A\\u0430\\u0437\\u044B\")))));\r\n}\r\nexports.Orders = Orders;\r\n\n\n//# sourceURL=webpack:///./src/shared/Orders/Orders.tsx?");

/***/ }),

/***/ "./src/shared/Orders/index.ts":
/*!************************************!*\
  !*** ./src/shared/Orders/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Orders */ \"./src/shared/Orders/Orders.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Orders/index.ts?");

/***/ })

})