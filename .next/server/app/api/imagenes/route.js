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
exports.id = "app/api/imagenes/route";
exports.ids = ["app/api/imagenes/route"];
exports.modules = {

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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

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

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fimagenes%2Froute&page=%2Fapi%2Fimagenes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fimagenes%2Froute.js&appDir=C%3A%5Cgithub%5Cinmo%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cgithub%5Cinmo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fimagenes%2Froute&page=%2Fapi%2Fimagenes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fimagenes%2Froute.js&appDir=C%3A%5Cgithub%5Cinmo%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cgithub%5Cinmo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_github_inmo_app_api_imagenes_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/imagenes/route.js */ \"(rsc)/./app/api/imagenes/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/imagenes/route\",\n        pathname: \"/api/imagenes\",\n        filename: \"route\",\n        bundlePath: \"app/api/imagenes/route\"\n    },\n    resolvedPagePath: \"C:\\\\github\\\\inmo\\\\app\\\\api\\\\imagenes\\\\route.js\",\n    nextConfigOutput,\n    userland: C_github_inmo_app_api_imagenes_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/imagenes/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZpbWFnZW5lcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGaW1hZ2VuZXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZpbWFnZW5lcyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDZ2l0aHViJTVDaW5tbyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q2dpdGh1YiU1Q2lubW8maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ0Y7QUFDM0U7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbm1vLz9iYTQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXGdpdGh1YlxcXFxpbm1vXFxcXGFwcFxcXFxhcGlcXFxcaW1hZ2VuZXNcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2ltYWdlbmVzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvaW1hZ2VuZXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2ltYWdlbmVzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcZ2l0aHViXFxcXGlubW9cXFxcYXBwXFxcXGFwaVxcXFxpbWFnZW5lc1xcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvaW1hZ2VuZXMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fimagenes%2Froute&page=%2Fapi%2Fimagenes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fimagenes%2Froute.js&appDir=C%3A%5Cgithub%5Cinmo%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cgithub%5Cinmo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/imagenes/route.js":
/*!***********************************!*\
  !*** ./app/api/imagenes/route.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _util_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/util/db */ \"(rsc)/./util/db.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs */ \"fs\");\n\n\n\n\n\n\nconst db = (0,_util_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/**\r\n * GET - Obtener imágenes de una propiedad específica\r\n */ async function GET(req) {\n    try {\n        const url = new URL(req.url);\n        const propiedadId = url.searchParams.get(\"propiedadId\");\n        if (!propiedadId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                status: \"400\",\n                message: \"Propiedad no especificada\"\n            });\n        }\n        const stmt = db.prepare(\"SELECT * FROM imagenes WHERE propiedadId = ?\");\n        const final_result = stmt.all(propiedadId);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            status: \"200\",\n            final_result\n        });\n    } catch (error) {\n        console.error(\"❌ Error en la API GET:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            status: \"500\",\n            message: \"Error interno del servidor.\"\n        });\n    }\n}\n/**\r\n * POST - Agregar imágenes a una propiedad (soporta múltiples imágenes)\r\n */ async function POST(req) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)();\n        if (!session || !session.user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                status: \"403\",\n                message: \"Unauthorized\"\n            });\n        }\n        const form = await req.formData();\n        const propiedadId = form.get(\"propiedadId\");\n        const files = form.getAll(\"imagen\"); // Obtiene todas las imágenes seleccionadas\n        if (!propiedadId || files.length === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                status: \"400\",\n                message: \"Datos incompletos\"\n            });\n        }\n        // Validar que la propiedad exista\n        const propiedadStmt = db.prepare(\"SELECT id FROM propiedades WHERE id = ?\");\n        const propiedad = propiedadStmt.get(propiedadId);\n        if (!propiedad) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                status: \"404\",\n                message: \"Propiedad no encontrada\"\n            });\n        }\n        // Crear carpeta de uploads si no existe\n        const uploadDir = path__WEBPACK_IMPORTED_MODULE_4__.join(process.cwd(), \"public/uploads\");\n        if (!fs__WEBPACK_IMPORTED_MODULE_5__.existsSync(uploadDir)) {\n            await (0,fs_promises__WEBPACK_IMPORTED_MODULE_3__.mkdir)(uploadDir, {\n                recursive: true\n            });\n        }\n        // Procesar y guardar cada imagen\n        const urls = [];\n        for (const file of files){\n            const bytes = await file.arrayBuffer();\n            const buffer = Buffer.from(bytes);\n            const fileName = `${Date.now()}-${file.name.replace(/\\s/g, \"_\")}`;\n            const filePath = path__WEBPACK_IMPORTED_MODULE_4__.join(uploadDir, fileName);\n            // Escribir imagen en el sistema de archivos\n            await (0,fs_promises__WEBPACK_IMPORTED_MODULE_3__.writeFile)(filePath, buffer);\n            const imageUrl = `/uploads/${fileName}`;\n            urls.push(imageUrl);\n            // Guardar referencia en la base de datos\n            const stmt = db.prepare(\"INSERT INTO imagenes (propiedadId, url, descripcion) VALUES (?, ?, ?)\");\n            stmt.run(propiedadId, imageUrl, \"Imagen de la propiedad\");\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            status: \"200\",\n            message: \"Im\\xe1genes registradas correctamente\",\n            urls\n        });\n    } catch (error) {\n        console.error(\"❌ Error en la API POST:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            status: \"500\",\n            message: \"Error interno del servidor.\"\n        });\n    }\n}\n/**\r\n * DELETE - Eliminar una imagen\r\n */ async function DELETE(req) {\n    try {\n        const { id } = await req.json();\n        if (!id) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                status: \"400\",\n                message: \"ID de imagen no especificado\"\n            });\n        }\n        // Obtener la URL de la imagen antes de eliminarla\n        const stmt = db.prepare(\"SELECT url FROM imagenes WHERE id = ?\");\n        const imagen = stmt.get(id);\n        if (imagen) {\n            // Eliminar archivo físico del servidor\n            const filePath = path__WEBPACK_IMPORTED_MODULE_4__.join(process.cwd(), \"public\", imagen.url);\n            if (fs__WEBPACK_IMPORTED_MODULE_5__.existsSync(filePath)) {\n                fs__WEBPACK_IMPORTED_MODULE_5__.unlinkSync(filePath);\n            }\n        }\n        // Eliminar referencia de la base de datos\n        const deleteStmt = db.prepare(\"DELETE FROM imagenes WHERE id = ?\");\n        deleteStmt.run(id);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            status: \"200\",\n            message: \"Imagen eliminada correctamente\"\n        });\n    } catch (error) {\n        console.error(\"❌ Error al eliminar la imagen:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            status: \"500\",\n            message: \"Error interno del servidor.\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTtZQUFPQyxTQUFTO1FBQThCO0lBQ25GO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbm1vLy4vYXBwL2FwaS9pbWFnZW5lcy9yb3V0ZS5qcz81NzM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXREQiBmcm9tIFwiQC91dGlsL2RiXCI7XHJcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgeyB3cml0ZUZpbGUsIG1rZGlyIH0gZnJvbSBcImZzL3Byb21pc2VzXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuXHJcbmNvbnN0IGRiID0gZ2V0REIoKTtcclxuXHJcbi8qKlxyXG4gKiBHRVQgLSBPYnRlbmVyIGltw6FnZW5lcyBkZSB1bmEgcHJvcGllZGFkIGVzcGVjw61maWNhXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcS51cmwpO1xyXG4gICAgY29uc3QgcHJvcGllZGFkSWQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInByb3BpZWRhZElkXCIpO1xyXG5cclxuICAgIGlmICghcHJvcGllZGFkSWQpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3RhdHVzOiBcIjQwMFwiLCBtZXNzYWdlOiBcIlByb3BpZWRhZCBubyBlc3BlY2lmaWNhZGFcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdG10ID0gZGIucHJlcGFyZShcIlNFTEVDVCAqIEZST00gaW1hZ2VuZXMgV0hFUkUgcHJvcGllZGFkSWQgPSA/XCIpO1xyXG4gICAgY29uc3QgZmluYWxfcmVzdWx0ID0gc3RtdC5hbGwocHJvcGllZGFkSWQpO1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN0YXR1czogXCIyMDBcIiwgZmluYWxfcmVzdWx0IH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwi4p2MIEVycm9yIGVuIGxhIEFQSSBHRVQ6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN0YXR1czogXCI1MDBcIiwgbWVzc2FnZTogXCJFcnJvciBpbnRlcm5vIGRlbCBzZXJ2aWRvci5cIiB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQT1NUIC0gQWdyZWdhciBpbcOhZ2VuZXMgYSB1bmEgcHJvcGllZGFkIChzb3BvcnRhIG3Dumx0aXBsZXMgaW3DoWdlbmVzKVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKCk7XHJcbiAgICBpZiAoIXNlc3Npb24gfHwgIXNlc3Npb24udXNlcikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdGF0dXM6IFwiNDAzXCIsIG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcS5mb3JtRGF0YSgpO1xyXG4gICAgY29uc3QgcHJvcGllZGFkSWQgPSBmb3JtLmdldChcInByb3BpZWRhZElkXCIpO1xyXG4gICAgY29uc3QgZmlsZXMgPSBmb3JtLmdldEFsbChcImltYWdlblwiKTsgLy8gT2J0aWVuZSB0b2RhcyBsYXMgaW3DoWdlbmVzIHNlbGVjY2lvbmFkYXNcclxuXHJcbiAgICBpZiAoIXByb3BpZWRhZElkIHx8IGZpbGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdGF0dXM6IFwiNDAwXCIsIG1lc3NhZ2U6IFwiRGF0b3MgaW5jb21wbGV0b3NcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWYWxpZGFyIHF1ZSBsYSBwcm9waWVkYWQgZXhpc3RhXHJcbiAgICBjb25zdCBwcm9waWVkYWRTdG10ID0gZGIucHJlcGFyZShcIlNFTEVDVCBpZCBGUk9NIHByb3BpZWRhZGVzIFdIRVJFIGlkID0gP1wiKTtcclxuICAgIGNvbnN0IHByb3BpZWRhZCA9IHByb3BpZWRhZFN0bXQuZ2V0KHByb3BpZWRhZElkKTtcclxuICAgIGlmICghcHJvcGllZGFkKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN0YXR1czogXCI0MDRcIiwgbWVzc2FnZTogXCJQcm9waWVkYWQgbm8gZW5jb250cmFkYVwiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWFyIGNhcnBldGEgZGUgdXBsb2FkcyBzaSBubyBleGlzdGVcclxuICAgIGNvbnN0IHVwbG9hZERpciA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcInB1YmxpYy91cGxvYWRzXCIpO1xyXG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKHVwbG9hZERpcikpIHtcclxuICAgICAgYXdhaXQgbWtkaXIodXBsb2FkRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcm9jZXNhciB5IGd1YXJkYXIgY2FkYSBpbWFnZW5cclxuICAgIGNvbnN0IHVybHMgPSBbXTtcclxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xyXG4gICAgICBjb25zdCBieXRlcyA9IGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKTtcclxuICAgICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYnl0ZXMpO1xyXG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGAke0RhdGUubm93KCl9LSR7ZmlsZS5uYW1lLnJlcGxhY2UoL1xccy9nLCBcIl9cIil9YDtcclxuICAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4odXBsb2FkRGlyLCBmaWxlTmFtZSk7XHJcblxyXG4gICAgICAvLyBFc2NyaWJpciBpbWFnZW4gZW4gZWwgc2lzdGVtYSBkZSBhcmNoaXZvc1xyXG4gICAgICBhd2FpdCB3cml0ZUZpbGUoZmlsZVBhdGgsIGJ1ZmZlcik7XHJcbiAgICAgIGNvbnN0IGltYWdlVXJsID0gYC91cGxvYWRzLyR7ZmlsZU5hbWV9YDtcclxuICAgICAgdXJscy5wdXNoKGltYWdlVXJsKTtcclxuXHJcbiAgICAgIC8vIEd1YXJkYXIgcmVmZXJlbmNpYSBlbiBsYSBiYXNlIGRlIGRhdG9zXHJcbiAgICAgIGNvbnN0IHN0bXQgPSBkYi5wcmVwYXJlKFwiSU5TRVJUIElOVE8gaW1hZ2VuZXMgKHByb3BpZWRhZElkLCB1cmwsIGRlc2NyaXBjaW9uKSBWQUxVRVMgKD8sID8sID8pXCIpO1xyXG4gICAgICBzdG10LnJ1bihwcm9waWVkYWRJZCwgaW1hZ2VVcmwsIFwiSW1hZ2VuIGRlIGxhIHByb3BpZWRhZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdGF0dXM6IFwiMjAwXCIsIG1lc3NhZ2U6IFwiSW3DoWdlbmVzIHJlZ2lzdHJhZGFzIGNvcnJlY3RhbWVudGVcIiwgdXJscyB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIuKdjCBFcnJvciBlbiBsYSBBUEkgUE9TVDpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3RhdHVzOiBcIjUwMFwiLCBtZXNzYWdlOiBcIkVycm9yIGludGVybm8gZGVsIHNlcnZpZG9yLlwiIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERFTEVURSAtIEVsaW1pbmFyIHVuYSBpbWFnZW5cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUocmVxKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFpZCkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdGF0dXM6IFwiNDAwXCIsIG1lc3NhZ2U6IFwiSUQgZGUgaW1hZ2VuIG5vIGVzcGVjaWZpY2Fkb1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9idGVuZXIgbGEgVVJMIGRlIGxhIGltYWdlbiBhbnRlcyBkZSBlbGltaW5hcmxhXHJcbiAgICBjb25zdCBzdG10ID0gZGIucHJlcGFyZShcIlNFTEVDVCB1cmwgRlJPTSBpbWFnZW5lcyBXSEVSRSBpZCA9ID9cIik7XHJcbiAgICBjb25zdCBpbWFnZW4gPSBzdG10LmdldChpZCk7XHJcblxyXG4gICAgaWYgKGltYWdlbikge1xyXG4gICAgICAvLyBFbGltaW5hciBhcmNoaXZvIGbDrXNpY28gZGVsIHNlcnZpZG9yXHJcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwicHVibGljXCIsIGltYWdlbi51cmwpO1xyXG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcclxuICAgICAgICBmcy51bmxpbmtTeW5jKGZpbGVQYXRoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEVsaW1pbmFyIHJlZmVyZW5jaWEgZGUgbGEgYmFzZSBkZSBkYXRvc1xyXG4gICAgY29uc3QgZGVsZXRlU3RtdCA9IGRiLnByZXBhcmUoXCJERUxFVEUgRlJPTSBpbWFnZW5lcyBXSEVSRSBpZCA9ID9cIik7XHJcbiAgICBkZWxldGVTdG10LnJ1bihpZCk7XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3RhdHVzOiBcIjIwMFwiLCBtZXNzYWdlOiBcIkltYWdlbiBlbGltaW5hZGEgY29ycmVjdGFtZW50ZVwiIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwi4p2MIEVycm9yIGFsIGVsaW1pbmFyIGxhIGltYWdlbjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3RhdHVzOiBcIjUwMFwiLCBtZXNzYWdlOiBcIkVycm9yIGludGVybm8gZGVsIHNlcnZpZG9yLlwiIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZ2V0REIiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiTmV4dFJlc3BvbnNlIiwid3JpdGVGaWxlIiwibWtkaXIiLCJwYXRoIiwiZnMiLCJkYiIsIkdFVCIsInJlcSIsInVybCIsIlVSTCIsInByb3BpZWRhZElkIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwianNvbiIsInN0YXR1cyIsIm1lc3NhZ2UiLCJzdG10IiwicHJlcGFyZSIsImZpbmFsX3Jlc3VsdCIsImFsbCIsImVycm9yIiwiY29uc29sZSIsIlBPU1QiLCJzZXNzaW9uIiwidXNlciIsImZvcm0iLCJmb3JtRGF0YSIsImZpbGVzIiwiZ2V0QWxsIiwibGVuZ3RoIiwicHJvcGllZGFkU3RtdCIsInByb3BpZWRhZCIsInVwbG9hZERpciIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZXhpc3RzU3luYyIsInJlY3Vyc2l2ZSIsInVybHMiLCJmaWxlIiwiYnl0ZXMiLCJhcnJheUJ1ZmZlciIsImJ1ZmZlciIsIkJ1ZmZlciIsImZyb20iLCJmaWxlTmFtZSIsIkRhdGUiLCJub3ciLCJuYW1lIiwicmVwbGFjZSIsImZpbGVQYXRoIiwiaW1hZ2VVcmwiLCJwdXNoIiwicnVuIiwiREVMRVRFIiwiaWQiLCJpbWFnZW4iLCJ1bmxpbmtTeW5jIiwiZGVsZXRlU3RtdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/imagenes/route.js\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fimagenes%2Froute&page=%2Fapi%2Fimagenes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fimagenes%2Froute.js&appDir=C%3A%5Cgithub%5Cinmo%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cgithub%5Cinmo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();