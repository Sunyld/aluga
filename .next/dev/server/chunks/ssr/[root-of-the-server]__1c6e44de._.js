module.exports = [
"[externals]/crypto [external] (crypto, cjs, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[externals]/crypto [external] (crypto, cjs)");
    });
});
}),
"[project]/Reactjs/Airbnb/Aluga+/node_modules/https-proxy-agent/dist/index.js [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[root-of-the-server]__ed42b5b0._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/Reactjs/Airbnb/Aluga+/node_modules/https-proxy-agent/dist/index.js [app-ssr] (ecmascript)");
    });
});
}),
"[project]/Reactjs/Airbnb/Aluga+/node_modules/node-fetch/src/index.js [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/1c0dd_node-fetch_src_utils_multipart-parser_58d2782e.js",
  "server/chunks/ssr/1c0dd_0eba0489._.js",
  "server/chunks/ssr/[externals]__561934d4._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/Reactjs/Airbnb/Aluga+/node_modules/node-fetch/src/index.js [app-ssr] (ecmascript)");
    });
});
}),
];