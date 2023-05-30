webpackHotUpdate("main",{

/***/ "./src/shared/Favorites/Favorites.tsx":
/*!********************************************!*\
  !*** ./src/shared/Favorites/Favorites.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Favorites = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar favorites_css_1 = __importDefault(__webpack_require__(/*! ./favorites.css */ \"./src/shared/Favorites/favorites.css\"));\r\nvar Text_1 = __webpack_require__(/*! ../Text */ \"./src/shared/Text/index.ts\");\r\nvar Card_1 = __webpack_require__(/*! ../Content/Card */ \"./src/shared/Content/Card/index.ts\");\r\nvar contentContext_1 = __importDefault(__webpack_require__(/*! ../../_context/contentContext */ \"./src/_context/contentContext.ts\"));\r\nvar Info_1 = __webpack_require__(/*! ../Info */ \"./src/shared/Info/index.ts\");\r\nfunction Favorites() {\r\n    //вытаскиваем из контекста карточки и состояние фаворит\r\n    var _a = react_1.default.useContext(contentContext_1.default), favorites = _a.favorites, onAddToFavorite = _a.onAddToFavorite;\r\n    return (react_1.default.createElement(\"section\", { className: favorites_css_1.default.catalog + ' ' + favorites_css_1.default.container },\r\n        react_1.default.createElement(\"div\", { className: favorites_css_1.default.wrapper },\r\n            react_1.default.createElement(\"div\", { className: favorites_css_1.default.title },\r\n                react_1.default.createElement(Text_1.Text, { As: \"h1\", size: 32, color: Text_1.Ecolor.black, weight: 700 }, \"\\u041C\\u043E\\u0438 \\u0437\\u0430\\u043A\\u043B\\u0430\\u0434\\u043A\\u0438\"))),\r\n        favorites.length > 0\r\n            ? (react_1.default.createElement(\"div\", { className: favorites_css_1.default.cardWrapper }, favorites\r\n                //рендерим крточки фавориты\r\n                .map(function (item, index) { return (react_1.default.createElement(Card_1.Card, { id: item.id, key: index, title: item.title, price: item.price, imageUrl: item.imageUrl, \r\n                //отлавливаем состояние фаворит\r\n                onFavorite: onAddToFavorite })); })))\r\n            : (react_1.default.createElement(Info_1.Info\r\n            //меняем данные в заглушке\r\n            , { \r\n                //меняем данные в заглушке\r\n                title: \"Закладок нет :(\", description: \"Вы ничего не добавляли в закладки\", image: smily }))));\r\n}\r\nexports.Favorites = Favorites;\r\n\n\n//# sourceURL=webpack:///./src/shared/Favorites/Favorites.tsx?");

/***/ }),

/***/ "./src/shared/Favorites/index.ts":
/*!***************************************!*\
  !*** ./src/shared/Favorites/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Favorites */ \"./src/shared/Favorites/Favorites.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Favorites/index.ts?");

/***/ })

})