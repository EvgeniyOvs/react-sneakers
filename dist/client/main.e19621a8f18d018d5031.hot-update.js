webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Orders/orders.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./src/shared/Orders/orders.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".orders__container--2awIl{\\r\\n    padding: 40px 60px;\\r\\n}\\r\\n\\r\\n.orders__cardWrapper--2Ad11{\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(12, 1fr);\\r\\n    gap: 40px;\\r\\n}\\r\\n\\r\\n.orders__wrapper--82NPp{\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    margin-bottom: 30px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"container\": \"orders__container--2awIl\",\n\t\"cardWrapper\": \"orders__cardWrapper--2Ad11\",\n\t\"wrapper\": \"orders__wrapper--82NPp\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/Orders/orders.css?./node_modules/css-loader/dist/cjs.js??ref--6-1");

/***/ }),

/***/ "./src/shared/Orders/Orders.tsx":
/*!**************************************!*\
  !*** ./src/shared/Orders/Orders.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Orders = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar orders_css_1 = __importDefault(__webpack_require__(/*! ./orders.css */ \"./src/shared/Orders/orders.css\"));\r\nvar Text_1 = __webpack_require__(/*! ../Text */ \"./src/shared/Text/index.ts\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nfunction Orders() {\r\n    react_1.default.useEffect(function () {\r\n        var data = axios_1.default.get('http://localhost:3002/items').data;\r\n    });\r\n    return (react_1.default.createElement(\"section\", { className: orders_css_1.default.catalog + ' ' + orders_css_1.default.container },\r\n        react_1.default.createElement(\"div\", { className: orders_css_1.default.wrapper },\r\n            react_1.default.createElement(\"div\", { className: orders_css_1.default.title },\r\n                react_1.default.createElement(Text_1.Text, { As: \"h1\", size: 32, color: Text_1.Ecolor.black, weight: 700 }, \"\\u041C\\u043E\\u0438 \\u0437\\u0430\\u043A\\u0430\\u0437\\u044B\")))));\r\n}\r\nexports.Orders = Orders;\r\n\n\n//# sourceURL=webpack:///./src/shared/Orders/Orders.tsx?");

/***/ }),

/***/ "./src/shared/Orders/index.ts":
/*!************************************!*\
  !*** ./src/shared/Orders/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Orders */ \"./src/shared/Orders/Orders.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Orders/index.ts?");

/***/ }),

/***/ "./src/shared/Orders/orders.css":
/*!**************************************!*\
  !*** ./src/shared/Orders/orders.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./orders.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Orders/orders.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./orders.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Orders/orders.css\",\n      function () {\n        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./orders.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Orders/orders.css\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.i, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/shared/Orders/orders.css?");

/***/ })

})