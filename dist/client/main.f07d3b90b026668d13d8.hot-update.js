webpackHotUpdate("main",{

/***/ "./src/shared/AppComponent/AppComponent.tsx":
/*!**************************************************!*\
  !*** ./src/shared/AppComponent/AppComponent.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AppComponent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Drawer_1 = __webpack_require__(/*! ../Drawer */ \"./src/shared/Drawer/index.ts\");\r\nvar Layout_1 = __webpack_require__(/*! ../Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ../Header */ \"./src/shared/Header/index.ts\");\r\n__webpack_require__(/*! ../../img/sneakers/1.jpg */ \"./src/img/sneakers/1.jpg\");\r\n__webpack_require__(/*! ../../img/sneakers/2.png */ \"./src/img/sneakers/2.png\");\r\n__webpack_require__(/*! ../../img/sneakers/3.jpg */ \"./src/img/sneakers/3.jpg\");\r\n__webpack_require__(/*! ../../img/sneakers/4.jpg */ \"./src/img/sneakers/4.jpg\");\r\n__webpack_require__(/*! ../../img/sneakers/5.jpg */ \"./src/img/sneakers/5.jpg\");\r\n__webpack_require__(/*! ../../img/sneakers/6.jpg */ \"./src/img/sneakers/6.jpg\");\r\n__webpack_require__(/*! ../../img/sneakers/7.jpg */ \"./src/img/sneakers/7.jpg\");\r\n__webpack_require__(/*! ../../img/sneakers/8.jpg */ \"./src/img/sneakers/8.jpg\");\r\n__webpack_require__(/*! ../../img/sneakers/9.jpg */ \"./src/img/sneakers/9.jpg\");\r\n__webpack_require__(/*! ../../img/sneakers/10.jpg */ \"./src/img/sneakers/10.jpg\");\r\n__webpack_require__(/*! ../../img/sneakers/11.jpg */ \"./src/img/sneakers/11.jpg\");\r\n__webpack_require__(/*! ../../img/sneakers/12.jpg */ \"./src/img/sneakers/12.jpg\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\r\nvar Home_1 = __webpack_require__(/*! ../Home */ \"./src/shared/Home/index.ts\");\r\nvar Favorites_1 = __webpack_require__(/*! ../Favorites */ \"./src/shared/Favorites/index.ts\");\r\nvar contentContext_1 = __importDefault(__webpack_require__(/*! ../../_context/contentContext */ \"./src/_context/contentContext.ts\"));\r\nvar Orders_1 = __webpack_require__(/*! ../Orders */ \"./src/shared/Orders/index.ts\");\r\nfunction AppComponent() {\r\n    var _this = this;\r\n    //заполняем хуки\r\n    var _a = react_1.default.useState([]), items = _a[0], setItems = _a[1];\r\n    var _b = react_1.default.useState(false), cartOpened = _b[0], setCartOpened = _b[1];\r\n    var _c = react_1.default.useState([]), cartItems = _c[0], setCartItems = _c[1];\r\n    var _d = react_1.default.useState([]), favorites = _d[0], setFavorites = _d[1];\r\n    var _e = react_1.default.useState(''), searchValue = _e[0], setSearchValue = _e[1];\r\n    var _f = react_1.default.useState(true), isLoading = _f[0], setIsLoading = _f[1];\r\n    //отлавливаем загрузку всех стэйтов\r\n    react_1.default.useEffect(function () {\r\n        function FetchData() {\r\n            return __awaiter(this, void 0, void 0, function () {\r\n                var cartResponse, favoritesResponse, itemsResponse;\r\n                return __generator(this, function (_a) {\r\n                    switch (_a.label) {\r\n                        case 0: return [4 /*yield*/, axios_1.default.get('http://localhost:3002/cart')];\r\n                        case 1:\r\n                            cartResponse = _a.sent();\r\n                            return [4 /*yield*/, axios_1.default.get('http://localhost:3002/favorites')];\r\n                        case 2:\r\n                            favoritesResponse = _a.sent();\r\n                            return [4 /*yield*/, axios_1.default.get('http://localhost:3002/items')];\r\n                        case 3:\r\n                            itemsResponse = _a.sent();\r\n                            setIsLoading(false);\r\n                            setCartItems(cartResponse.data);\r\n                            setFavorites(favoritesResponse.data);\r\n                            setItems(itemsResponse.data);\r\n                            return [2 /*return*/];\r\n                    }\r\n                });\r\n            });\r\n        }\r\n        FetchData();\r\n    }, []);\r\n    //добавляем в корзину карточки\r\n    var onAddToCart = function (obj) { return __awaiter(_this, void 0, void 0, function () {\r\n        var data_1, error_1;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    _a.trys.push([0, 4, , 5]);\r\n                    if (!cartItems.find(function (cartObj) { return Number(cartObj.id) === Number(obj.id); })) return [3 /*break*/, 1];\r\n                    setCartItems(function (prev) { return prev.filter(function (item) { return Number(item.id) !== Number(obj.id); }); });\r\n                    return [3 /*break*/, 3];\r\n                case 1: return [4 /*yield*/, axios_1.default.post('http://localhost:3002/cart', obj)];\r\n                case 2:\r\n                    data_1 = (_a.sent()).data;\r\n                    setCartItems(function (prev) { return __spreadArray(__spreadArray([], prev, true), [data_1], false); });\r\n                    _a.label = 3;\r\n                case 3: return [3 /*break*/, 5];\r\n                case 4:\r\n                    error_1 = _a.sent();\r\n                    return [3 /*break*/, 5];\r\n                case 5: return [2 /*return*/];\r\n            }\r\n        });\r\n    }); };\r\n    //добавляем карточку в фавориты\r\n    var onAddToFavorite = function (obj) { return __awaiter(_this, void 0, void 0, function () {\r\n        var data_2, error_2;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    _a.trys.push([0, 4, , 5]);\r\n                    if (!favorites.find(function (vafObj) { return Number(vafObj.id) === Number(obj.id); })) return [3 /*break*/, 1];\r\n                    axios_1.default.delete(\"http://localhost:3002/favorites/\".concat(obj.id));\r\n                    setFavorites(function (prev) { return prev.filter(function (item) { return Number(item.id) !== Number(obj.id); }); });\r\n                    return [3 /*break*/, 3];\r\n                case 1: return [4 /*yield*/, axios_1.default.post('http://localhost:3002/favorites', obj)];\r\n                case 2:\r\n                    data_2 = (_a.sent()).data;\r\n                    setFavorites(function (prev) { return __spreadArray(__spreadArray([], prev, true), [data_2], false); });\r\n                    _a.label = 3;\r\n                case 3: return [3 /*break*/, 5];\r\n                case 4:\r\n                    error_2 = _a.sent();\r\n                    alert('Не удалось добавить в закладки');\r\n                    return [3 /*break*/, 5];\r\n                case 5: return [2 /*return*/];\r\n            }\r\n        });\r\n    }); };\r\n    //удаляем карточку из корзины\r\n    var onRemoveItem = function (id) {\r\n        axios_1.default.delete(\"http://localhost:3002/cart/\".concat(id));\r\n        setCartItems(function (prev) { return prev.filter(function (item) { return item.id !== id; }); });\r\n    };\r\n    //определяем изменение в инпуте\r\n    var onChangeSearchInput = function (event) {\r\n        setSearchValue(event.target.value);\r\n    };\r\n    //определяем есть ли добавленые карточки в корзине\r\n    var isItemAdded = function (id) {\r\n        return cartItems.some(function (obj) { return Number(obj.id) === Number(id); });\r\n    };\r\n    //определяем есть ли добавленые карточки в фаворитах\r\n    var isItemFavorite = function (id) {\r\n        return favorites.some(function (obj) { return Number(obj.id) === Number(id); });\r\n    };\r\n    return (\r\n    //передаем данные через контекст\r\n    react_1.default.createElement(contentContext_1.default.Provider, { value: {\r\n            items: items,\r\n            cartItems: cartItems,\r\n            favorites: favorites,\r\n            isItemAdded: isItemAdded,\r\n            onAddToFavorite: onAddToFavorite,\r\n            isItemFavorite: isItemFavorite,\r\n            setCartOpened: setCartOpened,\r\n            setCartItems: setCartItems,\r\n            onAddToCart: onAddToCart,\r\n        } },\r\n        react_1.default.createElement(\"div\", { className: \"wrapper\" },\r\n            react_1.default.createElement(\"div\", null,\r\n                react_1.default.createElement(Drawer_1.Drawer, { onClose: function () { return setCartOpened(false); }, items: cartItems, onRemove: onRemoveItem, opened: cartOpened })),\r\n            react_1.default.createElement(Layout_1.Layout, null,\r\n                react_1.default.createElement(Header_1.Header, { onClickCart: function () { return setCartOpened(true); } }),\r\n                react_1.default.createElement(\"main\", null,\r\n                    react_1.default.createElement(react_router_dom_1.Routes, null,\r\n                        react_1.default.createElement(react_router_dom_1.Route, { path: \"/\", element: \r\n                            //передаем в Хоме все свойства\r\n                            react_1.default.createElement(Home_1.Home, { items: items, searchValue: searchValue, setSearchValue: setSearchValue, onChangeSearchInput: onChangeSearchInput, onAddToFavorite: onAddToFavorite, onAddToCart: onAddToCart, \r\n                                //передаем состояние карточек\r\n                                cartItems: cartItems, \r\n                                //передаем состояние загрузки\r\n                                isLoading: isLoading }) }),\r\n                        react_1.default.createElement(react_router_dom_1.Route, { path: \"/favorites\", element: \r\n                            //добавляем роут на фавориты\r\n                            react_1.default.createElement(Favorites_1.Favorites, null) }),\r\n                        react_1.default.createElement(react_router_dom_1.Route, { path: \"/orders\", element: \r\n                            //добавляем роут на заказы\r\n                            react_1.default.createElement(Orders_1.Orders, null) })))))));\r\n}\r\nexports.AppComponent = AppComponent;\r\n\n\n//# sourceURL=webpack:///./src/shared/AppComponent/AppComponent.tsx?");

/***/ }),

/***/ "./src/shared/AppComponent/index.ts":
/*!******************************************!*\
  !*** ./src/shared/AppComponent/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./AppComponent */ \"./src/shared/AppComponent/AppComponent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/AppComponent/index.ts?");

/***/ }),

/***/ "./src/shared/Drawer/Drawer.tsx":
/*!**************************************!*\
  !*** ./src/shared/Drawer/Drawer.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Drawer = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar drawer_css_1 = __importDefault(__webpack_require__(/*! ./drawer.css */ \"./src/shared/Drawer/drawer.css\"));\r\nvar Text_1 = __webpack_require__(/*! ../Text */ \"./src/shared/Text/index.ts\");\r\nvar Arrow_1 = __webpack_require__(/*! ../Icons/Arrow */ \"./src/shared/Icons/Arrow.tsx\");\r\nvar ButtonRemove_1 = __webpack_require__(/*! ../Icons/ButtonRemove */ \"./src/shared/Icons/ButtonRemove.tsx\");\r\nvar empty_box_jpg_1 = __importDefault(__webpack_require__(/*! ../../img/empty_box.jpg */ \"./src/img/empty_box.jpg\"));\r\nvar order_complete_png_1 = __importDefault(__webpack_require__(/*! ../../img/order_complete.png */ \"./src/img/order_complete.png\"));\r\nvar Info_1 = __webpack_require__(/*! ../Info */ \"./src/shared/Info/index.ts\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar useCart_1 = __webpack_require__(/*! ../../_hooks/useCart */ \"./src/_hooks/useCart.ts\");\r\nvar delay = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };\r\nfunction Drawer(props) {\r\n    var _this = this;\r\n    var _a = (0, useCart_1.useCart)(), cartItems = _a.cartItems, setCartItems = _a.setCartItems, totalPrice = _a.totalPrice;\r\n    var _b = react_1.default.useState(true), isLoading = _b[0], setIsLoading = _b[1];\r\n    //определяем состояние корзины\r\n    var _c = react_1.default.useState(false), isOrderComplete = _c[0], setOrderIsComplete = _c[1];\r\n    //меняем id заказа\r\n    var _d = react_1.default.useState(null), orderId = _d[0], setOrderId = _d[1];\r\n    //очищаем корзину через контекст\r\n    var onClickOrder = function () { return __awaiter(_this, void 0, void 0, function () {\r\n        var data, i, item, e_1;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    _a.trys.push([0, 7, , 8]);\r\n                    return [4 /*yield*/, axios_1.default.post('http://localhost:3002/orders', { items: cartItems })];\r\n                case 1:\r\n                    data = (_a.sent()).data;\r\n                    setOrderId(data.id);\r\n                    console.log(data);\r\n                    setOrderIsComplete(true);\r\n                    //очищаем визально добавление в корзину и корзину\r\n                    setCartItems([]);\r\n                    i = 0;\r\n                    _a.label = 2;\r\n                case 2:\r\n                    if (!(i < cartItems.length)) return [3 /*break*/, 6];\r\n                    item = cartItems[i];\r\n                    return [4 /*yield*/, axios_1.default.delete('http://localhost:3002/cart/' + item.id)];\r\n                case 3:\r\n                    _a.sent();\r\n                    return [4 /*yield*/, delay(1000)];\r\n                case 4:\r\n                    _a.sent();\r\n                    _a.label = 5;\r\n                case 5:\r\n                    i++;\r\n                    return [3 /*break*/, 2];\r\n                case 6: return [3 /*break*/, 8];\r\n                case 7:\r\n                    e_1 = _a.sent();\r\n                    alert('Не удалось создать заказ');\r\n                    return [3 /*break*/, 8];\r\n                case 8: return [2 /*return*/];\r\n            }\r\n        });\r\n    }); };\r\n    return (react_1.default.createElement(\"div\", { className: drawer_css_1.default.overlay },\r\n        react_1.default.createElement(\"div\", { className: drawer_css_1.default.drawer },\r\n            react_1.default.createElement(\"div\", { className: drawer_css_1.default.cartTitle },\r\n                react_1.default.createElement(Text_1.Text, { As: 'h2', size: 24, color: Text_1.Ecolor.black, weight: 700 }, \"\\u041A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0430\"),\r\n                react_1.default.createElement(\"div\", { className: drawer_css_1.default.remove, onClick: props.onClose },\r\n                    react_1.default.createElement(ButtonRemove_1.ButtonRemove, null))),\r\n            props.items.length > 0\r\n                //если в корзине есть карточки рендерим их, если нет заглушку инфо\r\n                ? (react_1.default.createElement(\"div\", { className: drawer_css_1.default.drawerWrapper },\r\n                    react_1.default.createElement(\"div\", { className: drawer_css_1.default.items }, props.items.map(function (obj, index) { return (react_1.default.createElement(\"div\", { className: drawer_css_1.default.cartItem, key: index },\r\n                        react_1.default.createElement(\"div\", { style: { backgroundImage: \"url(\".concat(obj.imageUrl, \")\") }, className: drawer_css_1.default.cartItemImg }),\r\n                        react_1.default.createElement(\"div\", { className: drawer_css_1.default.descr },\r\n                            react_1.default.createElement(\"div\", { className: drawer_css_1.default.title },\r\n                                react_1.default.createElement(Text_1.Text, { As: 'p', size: 16, color: Text_1.Ecolor.black, weight: 400 }, obj.title)),\r\n                            react_1.default.createElement(\"div\", null,\r\n                                react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.Ecolor.black, weight: 700 },\r\n                                    obj.price,\r\n                                    \" \\u0440\\u0443\\u0431.\"))),\r\n                        react_1.default.createElement(\"div\", { onClick: function () { return props.onRemove(obj.id); }, className: drawer_css_1.default.remove },\r\n                            react_1.default.createElement(ButtonRemove_1.ButtonRemove, null)))); })),\r\n                    react_1.default.createElement(\"div\", { className: drawer_css_1.default.count },\r\n                        react_1.default.createElement(\"ul\", { className: drawer_css_1.default.countList },\r\n                            react_1.default.createElement(\"li\", { className: drawer_css_1.default.countItem },\r\n                                react_1.default.createElement(Text_1.Text, { size: 16, color: Text_1.Ecolor.black }, \"\\u0418\\u0442\\u043E\\u0433\\u043E:\"),\r\n                                react_1.default.createElement(\"div\", { className: drawer_css_1.default.dashed }),\r\n                                react_1.default.createElement(Text_1.Text, { size: 16, color: Text_1.Ecolor.black, weight: 700 },\r\n                                    totalPrice,\r\n                                    \" \\u0440\\u0443\\u0431.\")),\r\n                            react_1.default.createElement(\"li\", { className: drawer_css_1.default.countItem },\r\n                                react_1.default.createElement(Text_1.Text, { size: 16, color: Text_1.Ecolor.black }, \"\\u041D\\u0430\\u043B\\u043E\\u0433 5%:\"),\r\n                                react_1.default.createElement(\"div\", { className: drawer_css_1.default.dashed }),\r\n                                react_1.default.createElement(Text_1.Text, { size: 16, color: Text_1.Ecolor.black, weight: 700 },\r\n                                    Math.round(totalPrice * 0.05),\r\n                                    \" \\u0440\\u0443\\u0431.\"))),\r\n                        react_1.default.createElement(\"button\", { onClick: onClickOrder, className: drawer_css_1.default.countBtn },\r\n                            \"\\u041E\\u0444\\u043E\\u0440\\u043C\\u0438\\u0442\\u044C \\u0437\\u0430\\u043A\\u0430\\u0437\",\r\n                            react_1.default.createElement(\"span\", { className: drawer_css_1.default.arrow },\r\n                                react_1.default.createElement(Arrow_1.Arrow, null))))))\r\n                : (react_1.default.createElement(Info_1.Info\r\n                //меняем данные в заглушке\r\n                , { \r\n                    //меняем данные в заглушке\r\n                    title: isOrderComplete ? \"Заказ оформлен\" : \"Корзина пустая\", description: isOrderComplete ? \"\\u0412\\u0430\\u0448 \\u0437\\u0430\\u043A\\u0430\\u0437 \\u2116\".concat(orderId, \" \\u0441\\u043A\\u043E\\u0440\\u043E \\u0431\\u0443\\u0434\\u0435\\u0442 \\u043F\\u0435\\u0440\\u0435\\u0434\\u0430\\u043D \\u043A\\u0443\\u0440\\u044C\\u0435\\u0440\\u0441\\u043A\\u043E\\u0439 \\u0434\\u043E\\u0441\\u0442\\u0430\\u0432\\u043A\\u0435\") : \"Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ\", image: isOrderComplete ? order_complete_png_1.default : empty_box_jpg_1.default })))));\r\n}\r\nexports.Drawer = Drawer;\r\n\n\n//# sourceURL=webpack:///./src/shared/Drawer/Drawer.tsx?");

/***/ }),

/***/ "./src/shared/Drawer/index.ts":
/*!************************************!*\
  !*** ./src/shared/Drawer/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Drawer */ \"./src/shared/Drawer/Drawer.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Drawer/index.ts?");

/***/ })

})