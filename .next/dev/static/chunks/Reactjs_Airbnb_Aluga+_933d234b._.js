(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Reactjs/Airbnb/Aluga+/services/geminiService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "askAboutListingLocation",
    ()=>askAboutListingLocation,
    "parseSearchQuery",
    ()=>parseSearchQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$google$2f$genai$2f$dist$2f$web$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/@google/genai/dist/web/index.mjs [app-client] (ecmascript)");
;
// Lazy Gemini client – opcional, só se houver API key configurada
const GEMINI_API_KEY = __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_GEMINI_API_KEY || __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.API_KEY;
let ai = null;
const getClient = ()=>{
    if (!GEMINI_API_KEY) {
        // Sem chave, devolvemos null e os consumidores fazem fallback gracioso
        return null;
    }
    if (!ai) {
        ai = new __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$google$2f$genai$2f$dist$2f$web$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleGenAI"]({
            apiKey: GEMINI_API_KEY
        });
    }
    return ai;
};
const parseSearchQuery = async (query)=>{
    const client = getClient();
    if (!client) {
        console.warn("[Gemini] API key não configurada – a pesquisa inteligente será ignorada.");
        return null;
    }
    try {
        const response = await client.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Extract search filters from this user query: "${query}".
      Return JSON with keys: location (string), minPrice (number), maxPrice (number), category (string matching one of: amazing-pools, beachfront, cabins, omg, camping, design, tiny-homes).`,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$google$2f$genai$2f$dist$2f$web$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].OBJECT,
                    properties: {
                        location: {
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$google$2f$genai$2f$dist$2f$web$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].STRING
                        },
                        minPrice: {
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$google$2f$genai$2f$dist$2f$web$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].NUMBER
                        },
                        maxPrice: {
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$google$2f$genai$2f$dist$2f$web$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].NUMBER
                        },
                        category: {
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$google$2f$genai$2f$dist$2f$web$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].STRING
                        }
                    }
                }
            }
        });
        if (response.text) {
            return JSON.parse(response.text);
        }
        return null;
    } catch (error) {
        console.error("Gemini Search Error:", error);
        return null;
    }
};
const askAboutListingLocation = async (question, listing)=>{
    const client = getClient();
    if (!client) {
        console.warn("[Gemini] API key não configurada – fallback de resposta simples.");
        return {
            text: "Informações detalhadas sobre a vizinhança não estão disponíveis no momento. Verifique o mapa e a descrição do anúncio para mais contexto.",
            mapLinks: []
        };
    }
    try {
        const response = await client.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `User is asking about a listing located at ${listing.location} (Lat: ${listing.lat}, Lng: ${listing.lng}). 
      Question: "${question}".
      Provide a helpful, concise answer focusing on nearby places using Google Maps data. 
      If you find specific places, mention their names and rating if available.`,
            config: {
                tools: [
                    {
                        googleMaps: {}
                    }
                ],
                toolConfig: {
                    retrievalConfig: {
                        latLng: {
                            latitude: listing.lat,
                            longitude: listing.lng
                        }
                    }
                }
            }
        });
        const text = response.text;
        const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
        // Extract map links if available
        const mapLinks = [];
        if (groundingChunks) {
            groundingChunks.forEach((chunk)=>{
                if (chunk.web?.uri && chunk.web?.title) {
                    mapLinks.push({
                        title: chunk.web.title,
                        uri: chunk.web.uri
                    });
                }
                if (chunk.maps?.uri && chunk.maps?.title) {
                    mapLinks.push({
                        title: chunk.maps.title,
                        uri: chunk.maps.uri
                    });
                }
            });
        }
        return {
            text,
            mapLinks
        };
    } catch (error) {
        console.error("Gemini Maps Error:", error);
        return {
            text: "Sorry, I couldn't access map data right now.",
            mapLinks: []
        };
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/circle-user.js [app-client] (ecmascript) <export default as UserCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$services$2f$geminiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/services/geminiService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const Navbar = ({ onSearch, isScrolled, onSearchStart, onSearchEnd })=>{
    _s();
    const [searchOpen, setSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSmartSearch = async (e)=>{
        e.preventDefault();
        if (!prompt.trim()) return;
        setLoading(true);
        onSearchStart();
        try {
            const filters = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$services$2f$geminiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSearchQuery"])(prompt);
            if (filters) {
                onSearch(filters);
                setSearchOpen(false);
                setPrompt('');
            }
        } catch (error) {
            console.error("Search failed", error);
        } finally{
            setLoading(false);
            onSearchEnd();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `fixed top-0 w-full z-40 transition-all duration-300 bg-white ${isScrolled ? 'shadow-sm py-4' : 'py-5'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row items-center justify-between gap-3 md:gap-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cursor-pointer",
                                onClick: ()=>window.location.reload(),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1 text-[#FF385C]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 32 32",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            "aria-hidden": "true",
                                            role: "presentation",
                                            focusable: "false",
                                            style: {
                                                display: 'block',
                                                height: '32px',
                                                width: '32px',
                                                fill: 'currentcolor'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 3.162.723 4.691-.237 1.944-1.295 3.644-2.98 4.79-1.488 1.011-3.268 1.536-5.172 1.536-2.848 0-5.44-1.178-7.1-3.218-1.66 2.04-4.252 3.218-7.1 3.218-1.904 0-3.684-.525-5.172-1.536C.167 28.847-.89 27.147-1.128 25.203c-.187-1.529.056-3.1.723-4.691l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C8.537 1.963 9.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.211-.07.124-3.606 6.99-6.953 13.902l-.147.31c-.53 1.272-.716 2.502-.572 3.684.15 1.228.835 2.296 1.928 3.038.971.66 2.115 1.006 3.33 1.006 2.094 0 4.026-.951 5.4-2.658l.412-.533.412.533c1.374 1.707 3.306 2.658 5.4 2.658 1.215 0 2.36-.346 3.33-1.006 1.093-.742 1.778-1.81 1.928-3.038.144-1.182-.042-2.412-.572-3.684l-.147-.31c-3.347-6.912-6.883-13.778-6.953-13.902C18.053 3.539 17.24 3 16 3zm0 20c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"
                                            }, void 0, false, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                                lineNumber: 49,
                                                columnNumber: 215
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                            lineNumber: 49,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-xl hidden lg:block text-[#FF385C]",
                                            children: "airbnb"
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                            lineNumber: 50,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setSearchOpen(true),
                                className: "border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-semibold px-6",
                                            children: "Anywhere"
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center",
                                            children: "Any week"
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hidden sm:block",
                                                    children: "Add guests"
                                                }, void 0, false, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-2 bg-[#FF385C] rounded-full text-white",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row items-center gap-4 font-semibold text-gray-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm cursor-pointer py-3 px-4 rounded-full hover:bg-gray-100 transition hidden md:block",
                                        children: "Airbnb your home"
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                        lineNumber: 73,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cursor-pointer py-3 px-3 rounded-full hover:bg-gray-100 transition hidden md:block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                            lineNumber: 77,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                        lineNumber: 76,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-row items-center gap-3 border-[1px] border-neutral-200 p-4 md:py-1 md:px-2 rounded-full hover:shadow-md transition cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                                lineNumber: 80,
                                                columnNumber: 18
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden md:block",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle$3e$__["UserCircle"], {
                                                    size: 30,
                                                    className: "text-gray-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 20
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                                lineNumber: 81,
                                                columnNumber: 18
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                        lineNumber: 79,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            searchOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-32 animate-in fade-in duration-200",
                onClick: (e)=>{
                    if (e.target === e.currentTarget) setSearchOpen(false);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl w-full max-w-2xl p-6 shadow-2xl mx-4 relative overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                            lineNumber: 96,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSearchOpen(false),
                            className: "absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                lineNumber: 99,
                                columnNumber: 16
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                            lineNumber: 98,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold mb-2 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "text-yellow-500 fill-yellow-500"
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                    lineNumber: 103,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Where to next?"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                            lineNumber: 102,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 mb-6",
                            children: "Describe your dream trip and let AI handle the filters."
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                            lineNumber: 106,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSmartSearch,
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: prompt,
                                    onChange: (e)=>setPrompt(e.target.value),
                                    placeholder: "e.g., I want a beachfront villa in Bali for under $400/night with a pool...",
                                    className: "w-full p-4 pr-14 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black resize-none h-32 text-lg",
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                    lineNumber: 109,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: loading || !prompt.trim(),
                                    className: `absolute bottom-4 right-4 p-3 rounded-full text-white transition-all duration-300 ${loading ? 'bg-gray-300' : 'bg-[#FF385C] hover:scale-105'}`,
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                        lineNumber: 122,
                                        columnNumber: 20
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                        lineNumber: 124,
                                        columnNumber: 20
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                    lineNumber: 116,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                            lineNumber: 108,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex gap-2 flex-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold text-gray-400 uppercase tracking-wider",
                                    children: "Try asking:"
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                    lineNumber: 130,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setPrompt("Cozy cabin in the woods for a weekend getaway"),
                                    className: "text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-gray-700 transition",
                                    children: '"Cozy cabin in the woods"'
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                    lineNumber: 131,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setPrompt("Luxury apartment in New York near Central Park"),
                                    className: "text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-gray-700 transition",
                                    children: '"Luxury apartment in NY"'
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                    lineNumber: 134,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                            lineNumber: 129,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                    lineNumber: 95,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Navbar, "Zx/3FcOt03yi9sdlUq/YJ21jOrM=");
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/constants.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORIES",
    ()=>CATEGORIES,
    "LISTINGS",
    ()=>LISTINGS
]);
const CATEGORIES = [
    {
        id: "trending",
        label: "Trending",
        icon: "Zap"
    },
    {
        id: "amazing-pools",
        label: "Amazing pools",
        icon: "Waves"
    },
    {
        id: "beachfront",
        label: "Beachfront",
        icon: "Palmtree"
    },
    {
        id: "cabins",
        label: "Cabins",
        icon: "Home"
    },
    {
        id: "omg",
        label: "OMG!",
        icon: "Castle"
    },
    {
        id: "tiny-homes",
        label: "Tiny homes",
        icon: "Home"
    },
    {
        id: "design",
        label: "Design",
        icon: "Gem"
    },
    {
        id: "camping",
        label: "Camping",
        icon: "Tent"
    }
];
const LISTINGS = [
    {
        id: "1",
        title: "Luxury Villa with Infinity Pool",
        location: "Bali, Indonesia",
        distance: "9,832 km away",
        dates: "Oct 22 - 27",
        price: 350,
        rating: 4.98,
        images: [
            "https://picsum.photos/id/10/800/600",
            "https://picsum.photos/id/11/800/600",
            "https://picsum.photos/id/12/800/600"
        ],
        category: "amazing-pools",
        lat: -8.409518,
        lng: 115.188919,
        description: "Experience the ultimate tropical getaway in this stunning villa featuring a private infinity pool overlooking the lush jungle.",
        host: {
            name: "Wayan",
            image: "https://picsum.photos/id/64/100/100",
            superhost: true
        }
    },
    {
        id: "2",
        title: "Cozy Alpine A-Frame",
        location: "Dolomites, Italy",
        distance: "4,200 km away",
        dates: "Nov 5 - 12",
        price: 185,
        rating: 4.95,
        images: [
            "https://picsum.photos/id/28/800/600",
            "https://picsum.photos/id/29/800/600"
        ],
        category: "cabins",
        lat: 46.4102,
        lng: 11.8441,
        description: "A perfect retreat for hikers and skiers. Enjoy the fireplace after a long day in the mountains.",
        host: {
            name: "Matteo",
            image: "https://picsum.photos/id/65/100/100",
            superhost: false
        }
    },
    {
        id: "3",
        title: "Modern Beachfront Condo",
        location: "Miami, Florida",
        distance: "1,500 km away",
        dates: "Dec 10 - 17",
        price: 420,
        rating: 4.85,
        images: [
            "https://picsum.photos/id/35/800/600",
            "https://picsum.photos/id/36/800/600"
        ],
        category: "beachfront",
        lat: 25.7617,
        lng: -80.1918,
        description: "Wake up to the sound of waves. Direct beach access and minutes away from the best nightlife.",
        host: {
            name: "Sarah",
            image: "https://picsum.photos/id/66/100/100",
            superhost: true
        }
    },
    {
        id: "4",
        title: "Unique UFO House",
        location: "Joshua Tree, CA",
        distance: "200 km away",
        dates: "Jan 15 - 20",
        price: 299,
        rating: 4.99,
        images: [
            "https://picsum.photos/id/40/800/600",
            "https://picsum.photos/id/41/800/600"
        ],
        category: "omg",
        lat: 34.1347,
        lng: -116.3131,
        description: "Out of this world! Stay in a fully restored Futuro house in the middle of the desert.",
        host: {
            name: "Zorg",
            image: "https://picsum.photos/id/67/100/100",
            superhost: true
        }
    },
    {
        id: "5",
        title: "Secluded Forest Yurt",
        location: "Portland, Oregon",
        distance: "800 km away",
        dates: "Mar 3 - 8",
        price: 120,
        rating: 4.91,
        images: [
            "https://picsum.photos/id/50/800/600",
            "httpsum.photos/id/51/800/600"
        ],
        category: "camping",
        lat: 45.5152,
        lng: -122.6784,
        description: "Glamping at its finest. Heated floors, skylight, and complete silence in the woods.",
        host: {
            name: "River",
            image: "https://picsum.photos/id/68/100/100",
            superhost: false
        }
    },
    {
        id: "6",
        title: "Architectural Masterpiece",
        location: "Copenhagen, Denmark",
        distance: "5,500 km away",
        dates: "Apr 12 - 19",
        price: 550,
        rating: 5.0,
        images: [
            "https://picsum.photos/id/60/800/600",
            "https://picsum.photos/id/61/800/600"
        ],
        category: "design",
        lat: 55.6761,
        lng: 12.5683,
        description: "Stay in an award-winning home featured in multiple design magazines.",
        host: {
            name: "Lars",
            image: "https://picsum.photos/id/69/100/100",
            superhost: true
        }
    },
    {
        id: "7",
        title: "Ocean View Penthouse",
        location: "Cape Town, South Africa",
        distance: "12,000 km away",
        dates: "May 1 - 7",
        price: 310,
        rating: 4.88,
        images: [
            "https://picsum.photos/id/70/800/600",
            "https://picsum.photos/id/71/800/600"
        ],
        category: "amazing-pools",
        lat: -33.9249,
        lng: 18.4241,
        description: "Stunning views of Table Mountain and the ocean. Private rooftop pool.",
        host: {
            name: "Amara",
            image: "https://picsum.photos/id/72/100/100",
            superhost: true
        }
    },
    {
        id: "8",
        title: "Historic Castle Suite",
        location: "Edinburgh, Scotland",
        distance: "5,200 km away",
        dates: "Jun 10 - 15",
        price: 450,
        rating: 4.96,
        images: [
            "https://picsum.photos/id/80/800/600",
            "https://picsum.photos/id/81/800/600"
        ],
        category: "omg",
        lat: 55.9533,
        lng: -3.1883,
        description: "Live like royalty in this 16th-century castle wing. Includes private tour.",
        host: {
            name: "Hamish",
            image: "https://picsum.photos/id/73/100/100",
            superhost: true
        }
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/CategoryBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/constants.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/lucide-react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-client] (ecmascript) <export default as SlidersHorizontal>");
;
;
;
;
const CategoryBar = ({ selected, onSelect, onFilterClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-24 pb-4 px-4 md:px-10 lg:px-20 border-b bg-white sticky top-20 z-30 w-full transition-all",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-row items-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-x-auto no-scrollbar",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row items-center justify-between sm:justify-start sm:gap-8 min-w-max",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].map((cat)=>{
                            // Dynamic Icon Component
                            const IconComponent = __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[cat.icon];
                            const isSelected = selected === cat.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>onSelect(cat.id),
                                className: `
                    flex flex-col items-center justify-center gap-2 p-2 border-b-2 hover:text-neutral-800 transition cursor-pointer min-w-[64px]
                    ${isSelected ? 'border-neutral-800 text-neutral-800' : 'border-transparent text-neutral-500'}
                  `,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                        size: 24,
                                        strokeWidth: isSelected ? 2 : 1.5
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/CategoryBar.tsx",
                                        lineNumber: 34,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-xs ${isSelected ? 'font-medium' : 'font-medium'}`,
                                        children: cat.label
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/CategoryBar.tsx",
                                        lineNumber: 35,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, cat.id, true, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/CategoryBar.tsx",
                                lineNumber: 26,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/CategoryBar.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/CategoryBar.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onFilterClick,
                    className: "hidden md:flex flex-row items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 hover:border-black transition text-xs font-semibold h-[48px] shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/CategoryBar.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Filters"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/CategoryBar.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/CategoryBar.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/CategoryBar.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CategoryBar;
const __TURBOPACK__default__export__ = CategoryBar;
var _c;
__turbopack_context__.k.register(_c, "CategoryBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
;
;
const ListingCard = ({ data, onClick, isWishlisted, onToggleWishlist })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: "col-span-1 cursor-pointer group",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2 w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "aspect-square w-full relative overflow-hidden rounded-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: data.images[0],
                            alt: data.title,
                            className: "object-cover h-full w-full group-hover:scale-105 transition duration-300"
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-3 right-3 cursor-pointer",
                            onClick: onToggleWishlist,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: `transition ${isWishlisted ? 'fill-[#FF385C] text-[#FF385C]' : 'fill-black/50 text-white hover:fill-[#FF385C] hover:text-[#FF385C]'}`,
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                                lineNumber: 26,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row justify-between items-start mt-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-semibold text-sm line-clamp-1",
                            children: data.location
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                            lineNumber: 33,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row items-center gap-1 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                    size: 14,
                                    className: "fill-black"
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                                    lineNumber: 35,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: data.rating
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                                    lineNumber: 36,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                            lineNumber: 34,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-light text-neutral-500 text-sm",
                    children: data.distance
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-light text-neutral-500 text-sm",
                    children: data.dates
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row items-center gap-1 mt-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-semibold text-sm",
                            children: [
                                "$",
                                data.price
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-light text-sm text-neutral-500",
                            children: "night"
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ListingCard;
const __TURBOPACK__default__export__ = ListingCard;
var _c;
__turbopack_context__.k.register(_c, "ListingCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$services$2f$geminiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/services/geminiService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const ListingModal = ({ listing, onClose })=>{
    _s();
    const [question, setQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [chatHistory, setChatHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const chatEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ListingModal.useEffect": ()=>{
            document.body.style.overflow = 'hidden';
            return ({
                "ListingModal.useEffect": ()=>{
                    document.body.style.overflow = 'unset';
                }
            })["ListingModal.useEffect"];
        }
    }["ListingModal.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ListingModal.useEffect": ()=>{
            chatEndRef.current?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }["ListingModal.useEffect"], [
        chatHistory
    ]);
    const handleAsk = async (e)=>{
        e.preventDefault();
        if (!question.trim()) return;
        const userQ = question;
        setQuestion('');
        setChatHistory((prev)=>[
                ...prev,
                {
                    role: 'user',
                    text: userQ
                }
            ]);
        setLoading(true);
        const { text, mapLinks } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$services$2f$geminiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["askAboutListingLocation"])(userQ, listing);
        setLoading(false);
        setChatHistory((prev)=>[
                ...prev,
                {
                    role: 'ai',
                    text,
                    links: mapLinks
                }
            ]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full max-w-5xl h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "absolute top-4 left-4 z-10 bg-white/90 p-2 rounded-full hover:shadow-lg transition",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full md:w-3/5 overflow-y-auto p-0 h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-80 md:h-[400px] bg-gray-200 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: listing.images[0],
                                    className: "w-full h-full object-cover",
                                    alt: "Main"
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                    lineNumber: 52,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-md text-sm font-medium flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 54,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Show all photos"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                    lineNumber: 53,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                            lineNumber: 51,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8 pb-32",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-semibold mb-2",
                                    children: listing.title
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                    lineNumber: 60,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1 font-medium text-black",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    size: 14,
                                                    className: "fill-black"
                                                }, void 0, false, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                listing.rating
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "·"
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "underline font-medium text-black",
                                            children: listing.location
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                    lineNumber: 61,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-b py-6 flex items-center justify-between",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: listing.host.image,
                                                alt: listing.host.name,
                                                className: "w-12 h-12 rounded-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                lineNumber: 71,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-base",
                                                        children: [
                                                            "Hosted by ",
                                                            listing.host.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gray-500 text-sm",
                                                        children: [
                                                            listing.host.superhost ? 'Superhost · ' : '',
                                                            "3 years hosting"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                lineNumber: 72,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                    lineNumber: 69,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-6 border-b",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold mb-3",
                                            children: "About this place"
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 80,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700 leading-relaxed",
                                            children: listing.description
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 81,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                    lineNumber: 79,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold mb-3",
                                            children: "Where you'll be"
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 85,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-48 bg-blue-50 rounded-xl flex items-center justify-center text-blue-400",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        size: 32
                                                    }, void 0, false, {
                                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium mt-2",
                                                        children: "Map Data Protected"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 86,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-gray-500",
                                            children: [
                                                listing.location,
                                                " (Lat: ",
                                                listing.lat,
                                                ", Lng: ",
                                                listing.lng,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 92,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                    lineNumber: 84,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                            lineNumber: 59,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full md:w-2/5 bg-gray-50 border-l h-full flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 border-b bg-white shadow-sm z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl font-bold",
                                                    children: [
                                                        "$",
                                                        listing.price
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 22
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-500",
                                                    children: "night"
                                                }, void 0, false, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 83
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1 text-xs font-semibold text-gray-500 underline",
                                            children: "2 reviews"
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                    lineNumber: 102,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full mt-4 bg-[#FF385C] text-white py-3 rounded-xl font-bold hover:bg-[#E01560] transition",
                                    children: "Reserve"
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                    lineNumber: 106,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-4 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 text-sm text-gray-600 bg-blue-50 p-3 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                            size: 20,
                                            className: "text-blue-600 min-w-[20px]"
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 114,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold text-blue-900 mb-1",
                                                    children: "Gemini Location Expert"
                                                }, void 0, false, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 18
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Ask me anything about the neighborhood! I use Google Maps to find nearby restaurants, transit, and attractions."
                                                }, void 0, false, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 18
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 115,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                chatHistory.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `max-w-[85%] rounded-2xl p-3 text-sm ${msg.role === 'user' ? 'bg-black text-white rounded-br-none' : 'bg-white border rounded-bl-none shadow-sm'}`,
                                            children: [
                                                msg.text,
                                                msg.links && msg.links.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 pt-2 border-t flex flex-col gap-1",
                                                    children: msg.links.map((link, l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: link.uri,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "text-blue-600 hover:underline text-xs flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    size: 10
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                                    lineNumber: 129,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ",
                                                                link.title
                                                            ]
                                                        }, l, true, {
                                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, i, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))),
                                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white border rounded-2xl rounded-bl-none shadow-sm p-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                }, void 0, false, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"
                                                }, void 0, false, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 140,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                        lineNumber: 139,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: chatEndRef
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-white border-t",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleAsk,
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "w-full bg-gray-100 rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-black/10",
                                        placeholder: "What's near here? Is it noisy?",
                                        value: question,
                                        onChange: (e)=>setQuestion(e.target.value),
                                        disabled: loading
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                        lineNumber: 154,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading || !question.trim(),
                                        className: "absolute right-2 top-2 p-1.5 bg-[#FF385C] text-white rounded-full hover:scale-105 transition disabled:bg-gray-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 166,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                        lineNumber: 161,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                lineNumber: 153,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ListingModal, "arxFAR/VHtZW4BihxGQJUELPpwc=");
_c = ListingModal;
const __TURBOPACK__default__export__ = ListingModal;
var _c;
__turbopack_context__.k.register(_c, "ListingModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
;
;
const FilterModal = ({ isOpen, onClose, currentFilters, onApply })=>{
    _s();
    const [minPrice, setMinPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentFilters.minPrice?.toString() || '');
    const [maxPrice, setMaxPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentFilters.maxPrice?.toString() || '');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FilterModal.useEffect": ()=>{
            if (isOpen) {
                setMinPrice(currentFilters.minPrice?.toString() || '');
                setMaxPrice(currentFilters.maxPrice?.toString() || '');
            }
        }
    }["FilterModal.useEffect"], [
        isOpen,
        currentFilters
    ]);
    if (!isOpen) return null;
    const handleApply = ()=>{
        onApply({
            ...currentFilters,
            minPrice: minPrice ? Number(minPrice) : undefined,
            maxPrice: maxPrice ? Number(maxPrice) : undefined
        });
        onClose();
    };
    const handleClear = ()=>{
        setMinPrice('');
        setMaxPrice('');
        onApply({
            ...currentFilters,
            minPrice: undefined,
            maxPrice: undefined
        });
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 animate-in fade-in duration-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full max-w-lg rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-4 border-b",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 hover:bg-gray-100 rounded-full transition",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-bold text-lg",
                            children: "Filters"
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8"
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        " "
                    ]
                }, void 0, true, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold mb-4",
                                children: "Price range"
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-sm mb-6",
                                children: "Nightly prices before fees and taxes"
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border rounded-xl px-3 py-2 flex-1 focus-within:ring-2 focus-within:ring-black",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-gray-500 block",
                                                children: "Minimum"
                                            }, void 0, false, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm mr-1",
                                                        children: "$"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: minPrice,
                                                        onChange: (e)=>setMinPrice(e.target.value),
                                                        className: "w-full outline-none text-sm",
                                                        placeholder: "50"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                                                lineNumber: 66,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-400",
                                        children: "-"
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border rounded-xl px-3 py-2 flex-1 focus-within:ring-2 focus-within:ring-black",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-gray-500 block",
                                                children: "Maximum"
                                            }, void 0, false, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm mr-1",
                                                        children: "$"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: maxPrice,
                                                        onChange: (e)=>setMaxPrice(e.target.value),
                                                        className: "w-full outline-none text-sm",
                                                        placeholder: "1000+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-t flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClear,
                            className: "text-sm font-semibold underline hover:text-gray-600 px-4 py-2",
                            children: "Clear all"
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleApply,
                            className: "bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition",
                            children: "Show places"
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FilterModal, "7FLszZt3IkedfkgVVsbhvZ87ytM=");
_c = FilterModal;
const __TURBOPACK__default__export__ = FilterModal;
var _c;
__turbopack_context__.k.register(_c, "FilterModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
;
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t bg-gray-50 mt-12 hidden md:block",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[2520px] mx-auto xl:px-20 md:px-10 px-4 py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-center text-sm text-gray-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "© 2024 Airbnb Clone, Inc."
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx",
                                lineNumber: 10,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden md:inline",
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx",
                                lineNumber: 11,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hover:underline cursor-pointer",
                                children: "Privacy"
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx",
                                lineNumber: 12,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden md:inline",
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx",
                                lineNumber: 13,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hover:underline cursor-pointer",
                                children: "Terms"
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx",
                                lineNumber: 14,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden md:inline",
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx",
                                lineNumber: 15,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hover:underline cursor-pointer",
                                children: "Sitemap"
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx",
                                lineNumber: 16,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-6 font-semibold mt-4 md:mt-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 cursor-pointer hover:underline",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx",
                                        lineNumber: 20,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "English (US)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx",
                                lineNumber: 19,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cursor-pointer hover:underline",
                                children: "$ USD"
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx",
                                lineNumber: 23,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 cursor-pointer hover:underline",
                                children: [
                                    "Support & Resources ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                        size: 16,
                                        className: "rotate-45"
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx",
                                        lineNumber: 27,
                                        columnNumber: 36
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx",
                                lineNumber: 26,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx",
                lineNumber: 8,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/App.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$CategoryBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/CategoryBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ListingCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ListingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$FilterModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/constants.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
const App = ()=>{
    _s();
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('amazing-pools');
    const [filteredListings, setFilteredListings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LISTINGS"]);
    const [selectedListing, setSelectedListing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [wishlist, setWishlist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Search & Filter State
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isFilterModalOpen, setIsFilterModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Scroll handler for navbar styling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            const handleScroll = {
                "App.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 10);
                }
            }["App.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "App.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["App.useEffect"];
        }
    }["App.useEffect"], []);
    // Load wishlist from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            const savedWishlist = localStorage.getItem('wishlist');
            if (savedWishlist) {
                try {
                    setWishlist(JSON.parse(savedWishlist));
                } catch (error) {
                    console.error('Failed to parse wishlist from localStorage', error);
                }
            }
        }
    }["App.useEffect"], []);
    const toggleWishlist = (e, id)=>{
        e.stopPropagation();
        setWishlist((prev)=>{
            const newWishlist = prev.includes(id) ? prev.filter((item)=>item !== id) : [
                ...prev,
                id
            ];
            localStorage.setItem('wishlist', JSON.stringify(newWishlist));
            return newWishlist;
        });
    };
    // Main Filter Logic
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            let result = __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LISTINGS"];
            // 1. Filter by Category
            if (selectedCategory !== 'trending') {
                result = result.filter({
                    "App.useEffect": (l)=>l.category === selectedCategory
                }["App.useEffect"]);
            }
            // 2. Filter by Search Criteria (AI or Manual)
            if (filters.category) {
                // Best effort text category matching if AI returns it
                const catMatch = filters.category.toLowerCase().replace(' ', '-');
                // If AI suggests a different category than selected, we prioritize AI filter if user searched
                result = result.filter({
                    "App.useEffect": (l)=>l.category.includes(catMatch)
                }["App.useEffect"]);
            }
            if (filters.location) {
                result = result.filter({
                    "App.useEffect": (l)=>l.location.toLowerCase().includes(filters.location.toLowerCase())
                }["App.useEffect"]);
            }
            if (filters.minPrice !== undefined) {
                result = result.filter({
                    "App.useEffect": (l)=>l.price >= filters.minPrice
                }["App.useEffect"]);
            }
            if (filters.maxPrice !== undefined) {
                result = result.filter({
                    "App.useEffect": (l)=>l.price <= filters.maxPrice
                }["App.useEffect"]);
            }
            setFilteredListings(result);
        }
    }["App.useEffect"], [
        selectedCategory,
        filters
    ]);
    const handleSmartSearch = (newFilters)=>{
        // When smart search happens, we update filters
        setFilters(newFilters);
    };
    const handleManualFilterApply = (manualFilters)=>{
        // Merge manual filters with existing filters (e.g. location from search)
        setFilters((prev)=>({
                ...prev,
                minPrice: manualFilters.minPrice,
                maxPrice: manualFilters.maxPrice
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col text-neutral-800 bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onSearch: handleSmartSearch,
                isScrolled: isScrolled,
                onSearchStart: ()=>setIsLoading(true),
                onSearchEnd: ()=>setIsLoading(false)
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 pb-20 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$CategoryBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        selected: selectedCategory,
                        onSelect: (id)=>{
                            setSelectedCategory(id);
                        },
                        onFilterClick: ()=>setIsFilterModalOpen(true)
                    }, void 0, false, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 mt-4",
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8",
                            children: [
                                ...Array(12)
                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-1 flex flex-col gap-2 animate-pulse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-square w-full bg-gray-200 rounded-xl relative overflow-hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                                            lineNumber: 125,
                                            columnNumber: 20
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-4 bg-gray-200 rounded w-2/3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-4 bg-gray-200 rounded w-8"
                                                }, void 0, false, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                                            lineNumber: 126,
                                            columnNumber: 20
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-4 bg-gray-200 rounded w-1/2"
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                                            lineNumber: 130,
                                            columnNumber: 20
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-4 bg-gray-200 rounded w-1/3 mt-1"
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                                            lineNumber: 131,
                                            columnNumber: 20
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, i, true, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                                    lineNumber: 124,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : filteredListings.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-h-[40vh] flex flex-col items-center justify-center text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl font-bold mb-2",
                                    children: "No matches found"
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 max-w-md",
                                    children: "Try adjusting your filters or search query."
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setSelectedCategory('trending');
                                        setFilters({});
                                    },
                                    className: "mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition",
                                    children: "Clear all filters"
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8",
                            children: filteredListings.map((listing)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ListingCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    data: listing,
                                    isWishlisted: wishlist.includes(listing.id),
                                    onToggleWishlist: (e)=>toggleWishlist(e, listing.id),
                                    onClick: ()=>setSelectedListing(listing)
                                }, listing.id, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                                    lineNumber: 152,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isLoading && filteredListings.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed bottom-10 left-1/2 transform -translate-x-1/2 z-30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-neutral-900 hover:scale-105 hover:bg-black text-white px-5 py-3.5 rounded-full font-semibold shadow-xl flex items-center gap-2 transition duration-300 text-sm",
                            children: [
                                "Show map ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                                    lineNumber: 168,
                                    columnNumber: 24
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            selectedListing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ListingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                listing: selectedListing,
                onClose: ()=>setSelectedListing(null)
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                lineNumber: 178,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$FilterModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isFilterModalOpen,
                onClose: ()=>setIsFilterModalOpen(false),
                currentFilters: filters,
                onApply: handleManualFilterApply
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(App, "e7UwgB7HN8d28s67ZjokNOu84KQ=");
_c = App;
const __TURBOPACK__default__export__ = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$App$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/App.tsx [app-client] (ecmascript)");
"use client";
;
;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$App$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Reactjs_Airbnb_Aluga%2B_933d234b._.js.map