"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "better-sqlite3":
/*!*********************************!*\
  !*** external "better-sqlite3" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("better-sqlite3");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5Cgithub%5Cinmo%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cgithub%5Cinmo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5Cgithub%5Cinmo%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cgithub%5Cinmo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_github_inmo_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\github\\\\inmo\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_github_inmo_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDZ2l0aHViJTVDaW5tbyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q2dpdGh1YiU1Q2lubW8maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ1M7QUFDdEY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbm1vLz80MjNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXGdpdGh1YlxcXFxpbm1vXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXGdpdGh1YlxcXFxpbm1vXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5Cgithub%5Cinmo%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cgithub%5Cinmo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_authOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/authOptions */ \"(rsc)/./lib/authOptions.tsx\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_lib_authOptions__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUdXO0FBRTVDLE1BQU1FLFVBQVVGLGdEQUFRQSxDQUFDQyx3REFBV0E7QUFDTyIsInNvdXJjZXMiOlsid2VicGFjazovL2lubW8vLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz9jOGE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBHaXRodWIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCI7XHJcblxyXG5pbXBvcnQgYXV0aE9wdGlvbnMgZnJvbSBcIkAvbGliL2F1dGhPcHRpb25zXCI7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gbmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xyXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XHJcbiJdLCJuYW1lcyI6WyJuZXh0QXV0aCIsImF1dGhPcHRpb25zIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/authOptions.tsx":
/*!*****************************!*\
  !*** ./lib/authOptions.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/util/db */ \"(rsc)/./util/db.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _app_api_db_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/api/db/functions */ \"(rsc)/./app/api/db/functions.js\");\n\n\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n\nconst db = (0,_util_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                username: {\n                    label: \"Usuario\",\n                    type: \"text\",\n                    placeholder: \"usuario\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                const stmt = db.prepare(\"SELECT * FROM usuario WHERE username = ?\");\n                const check = stmt.get(credentials?.username);\n                if (!check) {\n                    return null;\n                }\n                const valid = await bcrypt.compare(credentials?.password, check.password);\n                if (valid) {\n                    const user = {\n                        id: check.id_usuario,\n                        name: check.username\n                    };\n                    return user;\n                } else {\n                    return null;\n                }\n            }\n        })\n    ],\n    callbacks: {\n        jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n            }\n            return token;\n        },\n        session ({ session, token }) {\n            session.user.id = token.id;\n            session.user.rol = (0,_app_api_db_functions__WEBPACK_IMPORTED_MODULE_2__.GetRole)(session.user?.name);\n            return session;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authOptions);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aE9wdGlvbnMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRThCO0FBQzRCO0FBQzFELE1BQU1FLFNBQVNDLG1CQUFPQSxDQUFDLHNCQUFRO0FBRWtCO0FBV2pELE1BQU1FLEtBQUtMLG9EQUFLQTtBQUNULE1BQU1NLGNBQStCO0lBQzFDQyxXQUFXO1FBQ1ROLDJFQUFXQSxDQUFDO1lBQ1ZPLE1BQU07WUFFTkMsYUFBYTtnQkFDWEMsVUFBVTtvQkFBRUMsT0FBTztvQkFBV0MsTUFBTTtvQkFBUUMsYUFBYTtnQkFBVTtnQkFDbkVDLFVBQVU7b0JBQUVILE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRyxXQUFVTixXQUFXLEVBQUVPLEdBQUc7Z0JBQzlCLE1BQU1DLE9BQU9aLEdBQUdhLE9BQU8sQ0FBQztnQkFDeEIsTUFBTUMsUUFBYUYsS0FBS0csR0FBRyxDQUFDWCxhQUFhQztnQkFDekMsSUFBSSxDQUFDUyxPQUFPO29CQUNSLE9BQU87Z0JBQ1g7Z0JBRUEsTUFBTUUsUUFBUSxNQUFNbkIsT0FBT29CLE9BQU8sQ0FDaENiLGFBQWFLLFVBQ2JLLE1BQU1MLFFBQVE7Z0JBR2hCLElBQUlPLE9BQU87b0JBQ1QsTUFBTUUsT0FBTzt3QkFBRUMsSUFBSUwsTUFBTU0sVUFBVTt3QkFBRWpCLE1BQU1XLE1BQU1ULFFBQVE7b0JBQUM7b0JBQzFELE9BQU9hO2dCQUNULE9BQU87b0JBQ0wsT0FBTztnQkFDVDtZQUNGO1FBQ0Y7S0FDRDtJQUNERyxXQUFXO1FBQ1RDLEtBQUksRUFBRUMsS0FBSyxFQUFFTCxJQUFJLEVBQUU7WUFDakIsSUFBSUEsTUFBTTtnQkFDUkssTUFBTUosRUFBRSxHQUFHRCxLQUFLQyxFQUFFO1lBQ3BCO1lBQ0EsT0FBT0k7UUFDVDtRQUNBQyxTQUFRLEVBQUVBLE9BQU8sRUFBRUQsS0FBSyxFQUFFO1lBQ3hCQyxRQUFRTixJQUFJLENBQUNDLEVBQUUsR0FBR0ksTUFBTUosRUFBRTtZQUMxQkssUUFBUU4sSUFBSSxDQUFDTyxHQUFHLEdBQUcxQiw4REFBT0EsQ0FBQ3lCLFFBQVFOLElBQUksRUFBRWY7WUFDekMsT0FBT3FCO1FBQ1Q7SUFDRjtBQUNGLEVBQUU7QUFFRixpRUFBZXZCLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbm1vLy4vbGliL2F1dGhPcHRpb25zLnRzeD9hMWZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IEdpdGh1YiBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIjtcclxuaW1wb3J0IGdldERCIGZyb20gXCJAL3V0aWwvZGJcIjtcclxuaW1wb3J0IENyZWRlbnRpYWxzIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XHJcbmNvbnN0IGJjcnlwdCA9IHJlcXVpcmUoXCJiY3J5cHRcIik7XHJcblxyXG5pbXBvcnQgeyBHZXRSb2xlIH0gZnJvbSBcIkAvYXBwL2FwaS9kYi9mdW5jdGlvbnNcIjtcclxuZGVjbGFyZSBtb2R1bGUgXCJuZXh0LWF1dGhcIiB7XHJcbiAgaW50ZXJmYWNlIFNlc3Npb24ge1xyXG4gICAgdXNlcjoge1xyXG4gICAgICBpZDogYW55O1xyXG4gICAgICBuYW1lPzogYW55IDtcclxuICAgICAgZW1haWw/OiBzdHJpbmcgO1xyXG4gICAgICByb2w/OiBhbnk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5jb25zdCBkYiA9IGdldERCKCk7XHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ3JlZGVudGlhbHMoe1xyXG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXHJcblxyXG4gICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgIHVzZXJuYW1lOiB7IGxhYmVsOiBcIlVzdWFyaW9cIiwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcInVzdWFyaW9cIiB9LFxyXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9LFxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xyXG4gICAgICAgIGNvbnN0IHN0bXQgPSBkYi5wcmVwYXJlKFwiU0VMRUNUICogRlJPTSB1c3VhcmlvIFdIRVJFIHVzZXJuYW1lID0gP1wiKTtcclxuICAgICAgICBjb25zdCBjaGVjazogYW55ID0gc3RtdC5nZXQoY3JlZGVudGlhbHM/LnVzZXJuYW1lKTtcclxuICAgICAgICBpZiAoIWNoZWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmFsaWQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShcclxuICAgICAgICAgIGNyZWRlbnRpYWxzPy5wYXNzd29yZCxcclxuICAgICAgICAgIGNoZWNrLnBhc3N3b3JkXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgICAgICBjb25zdCB1c2VyID0geyBpZDogY2hlY2suaWRfdXN1YXJpbywgbmFtZTogY2hlY2sudXNlcm5hbWUgfTtcclxuICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgand0KHsgdG9rZW4sIHVzZXIgfSkge1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIHRva2VuLmlkID0gdXNlci5pZDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9LFxyXG4gICAgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWQ7XHJcbiAgICAgIHNlc3Npb24udXNlci5yb2wgPSBHZXRSb2xlKHNlc3Npb24udXNlcj8ubmFtZSk7XHJcbiAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aE9wdGlvbnM7XHJcbiJdLCJuYW1lcyI6WyJnZXREQiIsIkNyZWRlbnRpYWxzIiwiYmNyeXB0IiwicmVxdWlyZSIsIkdldFJvbGUiLCJkYiIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwidXNlcm5hbWUiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwicmVxIiwic3RtdCIsInByZXBhcmUiLCJjaGVjayIsImdldCIsInZhbGlkIiwiY29tcGFyZSIsInVzZXIiLCJpZCIsImlkX3VzdWFyaW8iLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInNlc3Npb24iLCJyb2wiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/authOptions.tsx\n");

/***/ }),

/***/ "(rsc)/./app/api/db/functions.js":
/*!*********************************!*\
  !*** ./app/api/db/functions.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GetRole: () => (/* binding */ GetRole)\n/* harmony export */ });\n/* harmony import */ var _util_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/util/db */ \"(rsc)/./util/db.js\");\n\nfunction GetRole(id) {\n    const db = (0,_util_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const stmt = db.prepare(\"SELECT rol FROM usuario WHERE username = ?\");\n    try {\n        const result = stmt.get(id);\n        return result.rol;\n    } catch (error) {\n        console.error(\"Error al obtener el rol:\", error);\n        throw error;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2RiL2Z1bmN0aW9ucy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QjtBQUV2QixTQUFTQyxRQUFRQyxFQUFFO0lBQ3RCLE1BQU1DLEtBQUtILG9EQUFLQTtJQUNoQixNQUFNSSxPQUFPRCxHQUFHRSxPQUFPLENBQUM7SUFFeEIsSUFBSTtRQUNBLE1BQU1DLFNBQVNGLEtBQUtHLEdBQUcsQ0FBQ0w7UUFDeEIsT0FBT0ksT0FBT0UsR0FBRztJQUVyQixFQUFFLE9BQU9DLE9BQU87UUFDWkMsUUFBUUQsS0FBSyxDQUFDLDRCQUE0QkE7UUFDMUMsTUFBTUE7SUFDVjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW5tby8uL2FwcC9hcGkvZGIvZnVuY3Rpb25zLmpzPzBlY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldERCIGZyb20gXCJAL3V0aWwvZGJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRSb2xlKGlkKSB7XHJcbiAgICBjb25zdCBkYiA9IGdldERCKCk7XHJcbiAgICBjb25zdCBzdG10ID0gZGIucHJlcGFyZShcIlNFTEVDVCByb2wgRlJPTSB1c3VhcmlvIFdIRVJFIHVzZXJuYW1lID0gP1wiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN0bXQuZ2V0KGlkKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0LnJvbFxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIG9idGVuZXIgZWwgcm9sOlwiLCBlcnJvcik7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImdldERCIiwiR2V0Um9sZSIsImlkIiwiZGIiLCJzdG10IiwicHJlcGFyZSIsInJlc3VsdCIsImdldCIsInJvbCIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/db/functions.js\n");

/***/ }),

/***/ "(rsc)/./util/db.js":
/*!********************!*\
  !*** ./util/db.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getDB)\n/* harmony export */ });\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! better-sqlite3 */ \"better-sqlite3\");\n\nlet db;\nfunction getDB() {\n    if (!db) {\n        db = new better_sqlite3__WEBPACK_IMPORTED_MODULE_0__(\"inmobiliaria.db\");\n        db.pragma(\"foreign_keys = ON\");\n        // Tabla de usuarios con rol\n        db.prepare(`\r\n      CREATE TABLE IF NOT EXISTS usuario (\r\n          id_usuario TEXT PRIMARY KEY,\r\n          rol INTEGER,\r\n          username TEXT UNIQUE NOT NULL,\r\n          password TEXT NOT NULL\r\n      );\r\n    `).run();\n        // Tabla de propiedades conectada con usuario mediante FK id_usuario\n        db.prepare(`\r\n      CREATE TABLE IF NOT EXISTS propiedades (\r\n          id INTEGER PRIMARY KEY AUTOINCREMENT,\r\n          address TEXT NOT NULL,\r\n          price REAL NOT NULL,\r\n          size REAL NOT NULL,\r\n          bedrooms INTEGER NOT NULL,\r\n          description TEXT NOT NULL,\r\n          typeId INTEGER,\r\n          latitude REAL,\r\n          longitude REAL,\r\n          id_usuario TEXT,\r\n          FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario) ON DELETE CASCADE\r\n      );\r\n    `).run();\n        // Tabla de imágenes\n        db.prepare(`\r\n      CREATE TABLE IF NOT EXISTS imagenes (\r\n          id INTEGER PRIMARY KEY AUTOINCREMENT,\r\n          propiedadId INTEGER,\r\n          url TEXT NOT NULL,\r\n          descripcion TEXT,\r\n          FOREIGN KEY (propiedadId) REFERENCES propiedades(id) ON DELETE CASCADE\r\n      );\r\n    `).run();\n        // Tabla de roles\n        db.prepare(`\r\n      CREATE TABLE IF NOT EXISTS roles (\r\n          id_rol INTEGER PRIMARY KEY AUTOINCREMENT,\r\n          nombre TEXT NOT NULL\r\n      );\r\n    `).run();\n    }\n    return db;\n}\n// Ejecutar automáticamente para crear la base de datos si no existe\ngetDB();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlsL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXNDO0FBRXRDLElBQUlDO0FBRVcsU0FBU0M7SUFDdEIsSUFBSSxDQUFDRCxJQUFJO1FBQ1BBLEtBQUssSUFBSUQsMkNBQVFBLENBQUM7UUFDbEJDLEdBQUdFLE1BQU0sQ0FBQztRQUVWLDRCQUE0QjtRQUM1QkYsR0FBR0csT0FBTyxDQUFDLENBQUM7Ozs7Ozs7SUFPWixDQUFDLEVBQUVDLEdBQUc7UUFFTixvRUFBb0U7UUFDcEVKLEdBQUdHLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7OztJQWNaLENBQUMsRUFBRUMsR0FBRztRQUVOLG9CQUFvQjtRQUNwQkosR0FBR0csT0FBTyxDQUFDLENBQUM7Ozs7Ozs7O0lBUVosQ0FBQyxFQUFFQyxHQUFHO1FBRU4saUJBQWlCO1FBQ2pCSixHQUFHRyxPQUFPLENBQUMsQ0FBQzs7Ozs7SUFLWixDQUFDLEVBQUVDLEdBQUc7SUFDUjtJQUNBLE9BQU9KO0FBQ1Q7QUFFQSxvRUFBb0U7QUFDcEVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW5tby8uL3V0aWwvZGIuanM/MTBiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YWJhc2UgZnJvbSBcImJldHRlci1zcWxpdGUzXCI7XHJcblxyXG5sZXQgZGI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREQigpIHtcclxuICBpZiAoIWRiKSB7XHJcbiAgICBkYiA9IG5ldyBEYXRhYmFzZShcImlubW9iaWxpYXJpYS5kYlwiKTtcclxuICAgIGRiLnByYWdtYShcImZvcmVpZ25fa2V5cyA9IE9OXCIpO1xyXG5cclxuICAgIC8vIFRhYmxhIGRlIHVzdWFyaW9zIGNvbiByb2xcclxuICAgIGRiLnByZXBhcmUoYFxyXG4gICAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyB1c3VhcmlvIChcclxuICAgICAgICAgIGlkX3VzdWFyaW8gVEVYVCBQUklNQVJZIEtFWSxcclxuICAgICAgICAgIHJvbCBJTlRFR0VSLFxyXG4gICAgICAgICAgdXNlcm5hbWUgVEVYVCBVTklRVUUgTk9UIE5VTEwsXHJcbiAgICAgICAgICBwYXNzd29yZCBURVhUIE5PVCBOVUxMXHJcbiAgICAgICk7XHJcbiAgICBgKS5ydW4oKTtcclxuXHJcbiAgICAvLyBUYWJsYSBkZSBwcm9waWVkYWRlcyBjb25lY3RhZGEgY29uIHVzdWFyaW8gbWVkaWFudGUgRksgaWRfdXN1YXJpb1xyXG4gICAgZGIucHJlcGFyZShgXHJcbiAgICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHByb3BpZWRhZGVzIChcclxuICAgICAgICAgIGlkIElOVEVHRVIgUFJJTUFSWSBLRVkgQVVUT0lOQ1JFTUVOVCxcclxuICAgICAgICAgIGFkZHJlc3MgVEVYVCBOT1QgTlVMTCxcclxuICAgICAgICAgIHByaWNlIFJFQUwgTk9UIE5VTEwsXHJcbiAgICAgICAgICBzaXplIFJFQUwgTk9UIE5VTEwsXHJcbiAgICAgICAgICBiZWRyb29tcyBJTlRFR0VSIE5PVCBOVUxMLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb24gVEVYVCBOT1QgTlVMTCxcclxuICAgICAgICAgIHR5cGVJZCBJTlRFR0VSLFxyXG4gICAgICAgICAgbGF0aXR1ZGUgUkVBTCxcclxuICAgICAgICAgIGxvbmdpdHVkZSBSRUFMLFxyXG4gICAgICAgICAgaWRfdXN1YXJpbyBURVhULFxyXG4gICAgICAgICAgRk9SRUlHTiBLRVkgKGlkX3VzdWFyaW8pIFJFRkVSRU5DRVMgdXN1YXJpbyhpZF91c3VhcmlvKSBPTiBERUxFVEUgQ0FTQ0FERVxyXG4gICAgICApO1xyXG4gICAgYCkucnVuKCk7XHJcblxyXG4gICAgLy8gVGFibGEgZGUgaW3DoWdlbmVzXHJcbiAgICBkYi5wcmVwYXJlKGBcclxuICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgaW1hZ2VuZXMgKFxyXG4gICAgICAgICAgaWQgSU5URUdFUiBQUklNQVJZIEtFWSBBVVRPSU5DUkVNRU5ULFxyXG4gICAgICAgICAgcHJvcGllZGFkSWQgSU5URUdFUixcclxuICAgICAgICAgIHVybCBURVhUIE5PVCBOVUxMLFxyXG4gICAgICAgICAgZGVzY3JpcGNpb24gVEVYVCxcclxuICAgICAgICAgIEZPUkVJR04gS0VZIChwcm9waWVkYWRJZCkgUkVGRVJFTkNFUyBwcm9waWVkYWRlcyhpZCkgT04gREVMRVRFIENBU0NBREVcclxuICAgICAgKTtcclxuICAgIGApLnJ1bigpO1xyXG5cclxuICAgIC8vIFRhYmxhIGRlIHJvbGVzXHJcbiAgICBkYi5wcmVwYXJlKGBcclxuICAgICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgcm9sZXMgKFxyXG4gICAgICAgICAgaWRfcm9sIElOVEVHRVIgUFJJTUFSWSBLRVkgQVVUT0lOQ1JFTUVOVCxcclxuICAgICAgICAgIG5vbWJyZSBURVhUIE5PVCBOVUxMXHJcbiAgICAgICk7XHJcbiAgICBgKS5ydW4oKTtcclxuICB9XHJcbiAgcmV0dXJuIGRiO1xyXG59XHJcblxyXG4vLyBFamVjdXRhciBhdXRvbcOhdGljYW1lbnRlIHBhcmEgY3JlYXIgbGEgYmFzZSBkZSBkYXRvcyBzaSBubyBleGlzdGVcclxuZ2V0REIoKTtcclxuIl0sIm5hbWVzIjpbIkRhdGFiYXNlIiwiZGIiLCJnZXREQiIsInByYWdtYSIsInByZXBhcmUiLCJydW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./util/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5Cgithub%5Cinmo%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cgithub%5Cinmo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();