/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/storefront-headers.js":
/*!**************************************!*\
  !*** ./src/js/storefront-headers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchProducts: () => (/* binding */ fetchProducts)\n/* harmony export */ });\nasync function fetchProducts(query, variables = {}) {\n  const storeDomain = 'psblakemore.myshopify.com';\n  const accessToken = '7b1397956030eb432a08b2595b5c731c';\n\n  try {\n    const response = await fetch(`https://${storeDomain}/api/2024-10/graphql.json`, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'X-Shopify-Storefront-Access-Token': accessToken,\n      },\n      body: JSON.stringify({ query, variables }),\n    });\n\n    const data = await response.json();\n\n    if (!response.ok) {\n      throw new Error(data.errors ? data.errors[0].message : 'Failed to fetch products');\n    }\n\n    return data.data;\n    \n  } catch (error) {\n    console.error(error.message);\n  }\n}\n\n//# sourceURL=webpack://code/./src/js/storefront-headers.js?");

/***/ }),

/***/ "./src/js/storefront-products.js":
/*!***************************************!*\
  !*** ./src/js/storefront-products.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storefront_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storefront-headers */ \"./src/js/storefront-headers.js\");\n\n\n// On load, set HTML container and attribute that holds the collection handle\nwindow.onload = (event) => {\n  const fetchedProductsWrapper = document.getElementById('storefront--products');\n  if (fetchedProductsWrapper) {\n    const collectionHandle = fetchedProductsWrapper.dataset.collectionHandle;\n\n    fetchProductsByCollection(collectionHandle)\n      .then(renderProducts)\n      .catch((error) => {\n        console.error('Error fetching products:', error);\n        fetchedProductsWrapper.innerHTML = `<p>Failed to fetch products.</p>`;\n      });\n  }\n};\n\n// Set up GraphQL query with collection handle\nasync function fetchProductsByCollection(collectionHandle) {\n  const query = `\n    query GetProducts ($handle: String!) {\n      collectionByHandle(handle: $handle) {\n        products(first: 10) {\n          edges {\n            node {\n              id\n              title\n              handle\n              description\n              images(first: 1) {\n                edges {\n                  node {\n                    src\n                    altText\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  `;\n\n  const variables = { \n    handle: collectionHandle\n  };\n\n  return (0,_storefront_headers__WEBPACK_IMPORTED_MODULE_0__.fetchProducts)(query, variables).then((data) => data.collectionByHandle.products.edges);\n}\n\n// Accepts fetched products, loops through and renders them out\nfunction renderProducts(products) {\n  const featuredProductsContainer = document.getElementById('storefront--products');\n  featuredProductsContainer.innerHTML = '';\n\n  if (products) {\n    products.forEach(({ node: product }) => {\n      const productHtml = `\n      <div class=\"product--card\">\n        <img src=\"${product.images.edges[0]?.node.src}\" alt=\"${product.images.edges[0]?.node.altText}\" width=\"200\" height=\"auto\" />\n        <h3>${product.title}</h3>\n        <p>${product.description}</p>\n        <a href=\"/products/${product.handle}\">View Product</a>\n      </div>\n    `;\n      featuredProductsContainer.innerHTML += productHtml;\n    });\n  }\n}\n\n\n//# sourceURL=webpack://code/./src/js/storefront-products.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/storefront-products.js");
/******/ 	
/******/ })()
;