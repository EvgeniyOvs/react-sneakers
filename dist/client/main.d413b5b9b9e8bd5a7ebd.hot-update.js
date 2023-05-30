webpackHotUpdate("main",{

/***/ "./src/shared/Orders/Orders.tsx":
/*!**************************************!*\
  !*** ./src/shared/Orders/Orders.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Orders = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar orders_css_1 = __importDefault(__webpack_require__(/*! ./orders.css */ \"./src/shared/Orders/orders.css\"));\r\nvar Text_1 = __webpack_require__(/*! ../Text */ \"./src/shared/Text/index.ts\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar Card_1 = __webpack_require__(/*! ../Content/Card */ \"./src/shared/Content/Card/index.ts\");\r\nfunction Orders() {\r\n    var _this = this;\r\n    var _a = react_1.default.useState([]), orders = _a[0], setOrders = _a[1];\r\n    react_1.default.useEffect(function () {\r\n        (function () { return __awaiter(_this, void 0, void 0, function () {\r\n            var data;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, axios_1.default.get('http://localhost:3002/items')];\r\n                    case 1:\r\n                        data = (_a.sent()).data;\r\n                        setOrders(data.reduce(function (prev, obj) { return __spreadArray(__spreadArray([], prev, true), obj.items, true); }, []));\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        }); })();\r\n    }, []);\r\n    return (react_1.default.createElement(\"section\", { className: orders_css_1.default.catalog + ' ' + orders_css_1.default.container },\r\n        react_1.default.createElement(\"div\", { className: orders_css_1.default.wrapper },\r\n            react_1.default.createElement(\"div\", { className: orders_css_1.default.title },\r\n                react_1.default.createElement(Text_1.Text, { As: \"h1\", size: 32, color: Text_1.Ecolor.black, weight: 700 }, \"\\u041C\\u043E\\u0438 \\u0437\\u0430\\u043A\\u0430\\u0437\\u044B\"))),\r\n        orders.length > 0\r\n            ? (react_1.default.createElement(react_1.default.Fragment, null,\r\n                react_1.default.createElement(\"div\", { className: orders_css_1.default.wrapper },\r\n                    react_1.default.createElement(\"div\", { className: orders_css_1.default.title },\r\n                        react_1.default.createElement(Text_1.Text, { As: \"h1\", size: 32, color: Text_1.Ecolor.black, weight: 700 }, \"\\u041C\\u043E\\u0438 \\u0437\\u0430\\u043A\\u043B\\u0430\\u0434\\u043A\\u0438\"))),\r\n                react_1.default.createElement(\"div\", { className: orders_css_1.default.cardWrapper }, orders\r\n                    //рендерим крточки фавориты\r\n                    .map(function (item, index) { return (react_1.default.createElement(Card_1.Card, { id: item.id, key: index, title: item.title, price: item.price, imageUrl: item.imageUrl, \r\n                    //отлавливаем состояние фаворит\r\n                    onFavorite: onAddToFavorite })); }))))\r\n            : (react_1.default.createElement(Info\r\n            //меняем данные в заглушке\r\n            , { \r\n                //меняем данные в заглушке\r\n                title: \"У вас нет заказов\", description: \"Вы ничего не добавляли в закладки\", image: smiley }))));\r\n}\r\nexports.Orders = Orders;\r\n\n\n//# sourceURL=webpack:///./src/shared/Orders/Orders.tsx?");

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