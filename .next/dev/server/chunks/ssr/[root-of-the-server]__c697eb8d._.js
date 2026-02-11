module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Reactjs/Airbnb/Aluga+/services/geminiService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "askAboutListingLocation",
    ()=>askAboutListingLocation,
    "parseSearchQuery",
    ()=>parseSearchQuery
]);
async function parseSearchQuery(prompt) {
    const text = (prompt || '').toLowerCase();
    const filters = {};
    // preços: "under $400", "below 400"
    const priceMatch = text.match(/(?:under|below|less than)\s*\$?(\d{2,6})/i) || text.match(/\$\s?(\d{2,6})/i);
    if (priceMatch) {
        const value = parseInt(priceMatch[1], 10);
        if (!Number.isNaN(value)) filters.maxPrice = value;
    }
    // guests: "for 2 guests", "2 guests"
    const guestsMatch = text.match(/(\d{1,2})\s*(?:guests|people|persons)/i);
    if (guestsMatch) filters.guests = parseInt(guestsMatch[1], 10);
    // location: "in Maputo", "in mozambique"
    const inMatch = text.match(/in\s+([a-zà-ÿ\s]{2,40})/i);
    if (inMatch) {
        const place = inMatch[1].trim();
        if (place) filters.location = place;
    }
    // category keywords (basic mapping)
    const categories = {
        'beach': 'beachfront',
        'beachfront': 'beachfront',
        'pool': 'amazing-pools',
        'piscina': 'amazing-pools',
        'cabin': 'cabins',
        'cabins': 'cabins',
        'tiny': 'tiny-homes',
        'design': 'design',
        'camp': 'camping',
        'camping': 'camping',
        'event': 'trending',
        'events': 'trending',
        'logistic': 'trending',
        'logistics': 'trending'
    };
    for (const k of Object.keys(categories)){
        if (text.includes(k)) {
            filters.category = categories[k];
            break;
        }
    }
    // keywords: remaining words longer than 3 chars that are not stop words
    const stop = new Set([
        'i',
        'want',
        'a',
        'an',
        'the',
        'for',
        'with',
        'and',
        'in',
        'on',
        'to',
        'of',
        'under',
        'below',
        'less',
        'than'
    ]);
    const words = text.split(/[^\p{L}\d]+/u).filter(Boolean).map((w)=>w.trim()).filter((w)=>w.length > 2 && !stop.has(w));
    if (words.length > 0) filters.keywords = words.slice(0, 6);
    // If no meaningful filters parsed, return null to indicate fallback to normal search
    if (Object.keys(filters).length === 0) return null;
    return filters;
}
async function askAboutListingLocation(question, listing) {
    const text = `Informações automáticas sobre a vizinhança de "${listing.title}" não estão disponíveis neste ambiente. Consulte o mapa e a descrição do anúncio para mais detalhes.`;
    const mapLinks = [];
    return {
        text,
        mapLinks
    };
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/circle-user.js [app-ssr] (ecmascript) <export default as UserCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/services/geminiService.ts [app-ssr] (ecmascript)");
;
;
;
;
const Navbar = ({ onSearch, isScrolled, onSearchStart, onSearchEnd })=>{
    const [searchOpen, setSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSmartSearch = async (e)=>{
        e.preventDefault();
        if (!prompt.trim()) return;
        setLoading(true);
        onSearchStart();
        try {
            const filters = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseSearchQuery"])(prompt);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `fixed top-0 w-full z-40 transition-all duration-300 bg-white ${isScrolled ? 'shadow-sm py-4' : 'py-5'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row items-center justify-between gap-3 md:gap-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cursor-pointer",
                                onClick: ()=>window.location.reload(),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1 text-[#FF585D]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-xl hidden lg:block text-[#FF585D]",
                                            children: "Aluga+"
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setSearchOpen(true),
                                className: "border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-semibold px-6",
                                            children: "Anywhere"
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center",
                                            children: "Any week"
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm pl-6 pr-2 text-[#484848] flex flex-row items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hidden sm:block",
                                                    children: "Add guests"
                                                }, void 0, false, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-2 bg-[#FF585D] rounded-full text-white",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row items-center gap-4 font-semibold text-[#484848]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm cursor-pointer py-3 px-4 rounded-full hover:bg-black/5 transition hidden md:block",
                                        children: "Airbnb your home"
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                        lineNumber: 73,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cursor-pointer py-3 px-3 rounded-full hover:bg-black/5 transition hidden md:block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-row items-center gap-3 border-[1px] border-neutral-200 p-4 md:py-1 md:px-2 rounded-full hover:shadow-md transition cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                className: "text-[#484848]"
                                            }, void 0, false, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                                lineNumber: 80,
                                                columnNumber: 18
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden md:block",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle$3e$__["UserCircle"], {
                                                    size: 30,
                                                    className: "text-[#484848]"
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
            searchOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/60 flex items-start justify-center pt-32 animate-in fade-in duration-200",
                onClick: (e)=>{
                    if (e.target === e.currentTarget) setSearchOpen(false);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl w-full max-w-2xl p-6 shadow-2xl mx-4 relative overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                            lineNumber: 96,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSearchOpen(false),
                            className: "absolute top-4 right-4 p-2 hover:bg-black/5 rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold mb-2 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#484848] mb-6",
                            children: "Describe your dream trip and let AI handle the filters."
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                            lineNumber: 106,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSmartSearch,
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: prompt,
                                    onChange: (e)=>setPrompt(e.target.value),
                                    placeholder: "e.g., I want a beachfront villa in Bali for under $400/night with a pool...",
                                    className: "w-full p-4 pr-14 bg-white rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#FF585D]/40 resize-none h-32 text-lg text-[#484848]",
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                    lineNumber: 109,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: loading || !prompt.trim(),
                                    className: `absolute bottom-4 right-4 p-3 rounded-full text-white transition-all duration-300 ${loading ? 'bg-[#484848]/40' : 'bg-[#FF585D] hover:scale-105'}`,
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                        lineNumber: 122,
                                        columnNumber: 20
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex gap-2 flex-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold text-[#484848]/60 uppercase tracking-wider",
                                    children: "Try asking:"
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                    lineNumber: 130,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setPrompt("Cozy cabin in the woods for a weekend getaway"),
                                    className: "text-sm bg-black/5 hover:bg-black/10 px-3 py-1 rounded-full text-[#484848] transition",
                                    children: '"Cozy cabin in the woods"'
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx",
                                    lineNumber: 131,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setPrompt("Luxury apartment in New York near Central Park"),
                                    className: "text-sm bg-black/5 hover:bg-black/10 px-3 py-1 rounded-full text-[#484848] transition",
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
const __TURBOPACK__default__export__ = Navbar;
}),
"[project]/Reactjs/Airbnb/Aluga+/constants.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    },
    // Imóveis adicionais (foco Moçambique)
    {
        id: "9",
        title: "Casa T3 com quintal em Maputo",
        location: "Bairro da Coop, Maputo",
        distance: "Próximo ao centro",
        dates: "Disponível este mês",
        price: 90,
        rating: 4.7,
        images: [
            "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
            "https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg"
        ],
        category: "tiny-homes",
        lat: -25.9667,
        lng: 32.5833,
        description: "Casa T3 murada, com quintal amplo, ideal para famílias em Maputo. Próxima de transportes e escolas.",
        host: {
            name: "Helena",
            image: "https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg",
            superhost: true
        }
    },
    {
        id: "10",
        title: "Apartamento moderno na Polana",
        location: "Polana, Maputo",
        distance: "Vista para a baía",
        dates: "Disponível todo o ano",
        price: 110,
        rating: 4.8,
        images: [
            "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
            "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg"
        ],
        category: "design",
        lat: -25.9661,
        lng: 32.5965,
        description: "Apartamento T2 com varanda e vista mar, internet rápida e garagem. Perfeito para estadias de negócios.",
        host: {
            name: "Rui",
            image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
            superhost: false
        }
    },
    {
        id: "11",
        title: "Quarto mobilado para estudante",
        location: "Matola, Maputo",
        distance: "15 minutos da cidade",
        dates: "A partir de Março",
        price: 45,
        rating: 4.5,
        images: [
            "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg",
            "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
        ],
        category: "rooms",
        lat: -25.9622,
        lng: 32.4589,
        description: "Quarto individual com cama, roupeiro e secretária. Ambiente calmo, ideal para estudantes.",
        host: {
            name: "Carlos",
            image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
            superhost: false
        }
    },
    {
        id: "12",
        title: "Vivenda em condomínio fechado",
        location: "Matola Rio, Maputo",
        distance: "Acesso fácil à EN4",
        dates: "Fins de semana e feriados",
        price: 130,
        rating: 4.9,
        images: [
            "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
            "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg"
        ],
        category: "trending",
        lat: -25.995,
        lng: 32.45,
        description: "Vivenda espaçosa com jardim e zona de braai, ideal para famílias e eventos pequenos.",
        host: {
            name: "Quinta Rio",
            image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
            superhost: true
        }
    },
    // Logística
    {
        id: "13",
        title: "Camião 7T para mudanças",
        location: "Maputo e arredores",
        distance: "Cobertura regional",
        dates: "Reserva por dia",
        price: 150,
        rating: 4.9,
        images: [
            "https://images.pexels.com/photos/6169052/pexels-photo-6169052.jpeg",
            "https://images.pexels.com/photos/6169055/pexels-photo-6169055.jpeg"
        ],
        category: "camping",
        lat: -25.95,
        lng: 32.6,
        description: "Camião fechado de 7 toneladas com equipa para carregamento e descarga. Ideal para mudanças completas.",
        host: {
            name: "Transporte Maputo",
            image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
            superhost: true
        }
    },
    {
        id: "14",
        title: "Serviço de mudanças leve",
        location: "Cidade de Maputo",
        distance: "Cobertura urbana",
        dates: "Todos os dias da semana",
        price: 80,
        rating: 4.6,
        images: [
            "https://images.pexels.com/photos/7464709/pexels-photo-7464709.jpeg",
            "https://images.pexels.com/photos/5025669/pexels-photo-5025669.jpeg"
        ],
        category: "rooms",
        lat: -25.97,
        lng: 32.58,
        description: "Carrinha fechada para pequenas mudanças e entregas de móveis e eletrodomésticos.",
        host: {
            name: "Logística Rápida",
            image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
            superhost: false
        }
    },
    {
        id: "15",
        title: "Transporte de carga refrigerada",
        location: "Maputo · Beira · Nampula",
        distance: "Várias províncias",
        dates: "Por orçamento",
        price: 260,
        rating: 4.7,
        images: [
            "https://images.pexels.com/photos/6169043/pexels-photo-6169043.jpeg",
            "https://images.pexels.com/photos/6169044/pexels-photo-6169044.jpeg"
        ],
        category: "design",
        lat: -25.96,
        lng: 32.58,
        description: "Serviço de transporte de produtos frescos com camiões refrigerados, ideal para negócios alimentares.",
        host: {
            name: "FreshCargo",
            image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
            superhost: true
        }
    },
    {
        id: "16",
        title: "Aluguer de camião basculante",
        location: "Zona industrial de Maputo",
        distance: "Serviços pontuais",
        dates: "Seg–Sáb",
        price: 190,
        rating: 4.4,
        images: [
            "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg",
            "https://images.pexels.com/photos/2199294/pexels-photo-2199294.jpeg"
        ],
        category: "omg",
        lat: -25.96,
        lng: 32.55,
        description: "Camião basculante para obras e transporte de areia, pedra e entulho.",
        host: {
            name: "ConstruLog",
            image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
            superhost: false
        }
    },
    // Eventos
    {
        id: "17",
        title: "Salão para casamentos até 300 pessoas",
        location: "Matola Rio, Maputo",
        distance: "Acesso pela EN4",
        dates: "Fins de semana e feriados",
        price: 400,
        rating: 4.9,
        images: [
            "https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg",
            "https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg"
        ],
        category: "trending",
        lat: -25.99,
        lng: 32.47,
        description: "Salão amplo com estacionamento e espaço exterior para fotografias. Ideal para casamentos grandes.",
        host: {
            name: "Quinta Azul",
            image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
            superhost: true
        }
    },
    {
        id: "18",
        title: "Espaço para workshops e formações",
        location: "Centro da Beira",
        distance: "Próximo a serviços",
        dates: "Seg–Sáb",
        price: 120,
        rating: 4.5,
        images: [
            "https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg",
            "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg"
        ],
        category: "design",
        lat: -19.8436,
        lng: 34.8389,
        description: "Sala climatizada com projetor e internet, ideal para formações, reuniões e pequenos eventos corporativos.",
        host: {
            name: "Centro Negócios Beira",
            image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
            superhost: false
        }
    },
    {
        id: "19",
        title: "Quinta para eventos ao ar livre",
        location: "Boane, Maputo",
        distance: "Área verde ampla",
        dates: "Por marcação",
        price: 350,
        rating: 4.8,
        images: [
            "https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg",
            "https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg"
        ],
        category: "camping",
        lat: -26.04,
        lng: 32.35,
        description: "Quinta com jardins, piscina e tenda para festas. Ideal para casamentos, festas privadas e eventos corporativos.",
        host: {
            name: "Quinta Verde",
            image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
            superhost: true
        }
    },
    {
        id: "20",
        title: "Espaço para conferências",
        location: "Baixa de Maputo",
        distance: "Zona empresarial",
        dates: "Durante a semana",
        price: 180,
        rating: 4.4,
        images: [
            "https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg",
            "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg"
        ],
        category: "tiny-homes",
        lat: -25.9692,
        lng: 32.5732,
        description: "Auditório equipado com som, projeção e cadeiras confortáveis, pronto para conferências e lançamentos.",
        host: {
            name: "Maputo Business Center",
            image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
            superhost: false
        }
    }
];
}),
"[project]/Reactjs/Airbnb/Aluga+/components/CategoryBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$constants$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/constants.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/lucide-react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-ssr] (ecmascript) <export default as SlidersHorizontal>");
;
;
;
;
const CategoryBar = ({ selected, onSelect, onFilterClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-24 pb-4 px-4 md:px-10 lg:px-20 border-b bg-white sticky top-20 z-30 w-full transition-all",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-row items-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-x-auto no-scrollbar",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row items-center justify-between sm:justify-start sm:gap-8 min-w-max",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$constants$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORIES"].map((cat)=>{
                            // Dynamic Icon Component
                            const IconComponent = __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[cat.icon];
                            const isSelected = selected === cat.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>onSelect(cat.id),
                                className: `
                    flex flex-col items-center justify-center gap-2 p-2 border-b-2 hover:text-neutral-800 transition cursor-pointer min-w-[64px]
                    ${isSelected ? 'border-neutral-800 text-neutral-800' : 'border-transparent text-neutral-500'}
                  `,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                        size: 24,
                                        strokeWidth: isSelected ? 2 : 1.5
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/CategoryBar.tsx",
                                        lineNumber: 34,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onFilterClick,
                    className: "hidden md:flex flex-row items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 hover:border-black transition text-xs font-semibold h-[48px] shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
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
const __TURBOPACK__default__export__ = CategoryBar;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/product/FavoriteButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FavoriteButton",
    ()=>FavoriteButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const STORAGE_KEY = "wishlist";
function FavoriteButton({ listingId, size = 22, className }) {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }, [
        listingId
    ]);
    const toggle = (e)=>{
        e?.stopPropagation();
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: toggle,
        "aria-pressed": active,
        "aria-label": active ? "Remover dos favoritos" : "Adicionar aos favoritos",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center rounded-full bg-white/90 p-1.5 shadow-sm hover:scale-105 transition", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
            style: {
                width: size,
                height: size
            },
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("transition", active ? "fill-[#FF585D] text-[#FF585D]" : "fill-transparent text-[#484848]")
        }, void 0, false, {
            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/product/FavoriteButton.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/product/FavoriteButton.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$product$2f$FavoriteButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/product/FavoriteButton.tsx [app-ssr] (ecmascript)");
;
;
;
;
const ListingCard = ({ data, onClick, isWishlisted, onToggleWishlist })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleClick = ()=>{
        onClick();
        router.push(`/produto/${data.id}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: handleClick,
        className: "col-span-1 cursor-pointer group",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2 w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "aspect-square w-full relative overflow-hidden rounded-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: data.images[0],
                            alt: data.title,
                            className: "object-cover h-full w-full group-hover:scale-105 transition duration-300"
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-3 right-3 cursor-pointer",
                            onClick: onToggleWishlist,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$product$2f$FavoriteButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FavoriteButton"], {
                                listingId: data.id
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row justify-between items-start mt-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-semibold text-sm line-clamp-1 text-[#484848]",
                            children: data.location
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row items-center gap-1 text-sm text-[#484848]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                    size: 14,
                                    className: "fill-[#484848]"
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: data.rating
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-light text-neutral-500 text-sm",
                    children: data.distance
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-light text-neutral-500 text-sm",
                    children: data.dates
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row items-center gap-1 mt-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-semibold text-sm text-[#484848]",
                            children: [
                                "$",
                                data.price
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-light text-sm text-neutral-500",
                            children: "night"
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ListingCard;
}),
"[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-ssr] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/bot.js [app-ssr] (ecmascript) <export default as Bot>");
;
;
;
// Stub local para evitar dependência de serviço externo (Gemini)
// Mantém a UX do chat, mas com resposta fixa.
const askAboutListingLocation = async (question, listing)=>{
    const text = `Informações automáticas sobre a vizinhança de "${listing.title}" não estão disponíveis neste ambiente. Consulte o mapa e a descrição do anúncio para mais detalhes.`;
    return {
        text,
        mapLinks: []
    };
};
const ListingModal = ({ listing, onClose })=>{
    const [question, setQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [chatHistory, setChatHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const chatEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.body.style.overflow = 'hidden';
        return ()=>{
            document.body.style.overflow = 'unset';
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        chatEndRef.current?.scrollIntoView({
            behavior: 'smooth'
        });
    }, [
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
        const { text, mapLinks } = await askAboutListingLocation(userQ, listing);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full max-w-5xl h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "absolute top-4 left-4 z-10 bg-white/90 p-2 rounded-full hover:shadow-lg transition",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full md:w-3/5 overflow-y-auto p-0 h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-80 md:h-[400px] bg-black/5 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: listing.images[0],
                                    className: "w-full h-full object-cover",
                                    alt: "Main"
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                    lineNumber: 61,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-md text-sm font-medium flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Show all photos"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                    lineNumber: 62,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                            lineNumber: 60,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8 pb-32",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-semibold mb-2",
                                    children: listing.title
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                    lineNumber: 69,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-4 text-sm text-[#484848] mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1 font-medium text-[#484848]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    size: 14,
                                                    className: "fill-[#484848]"
                                                }, void 0, false, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                listing.rating
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "·"
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "underline font-medium text-black",
                                            children: listing.location
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                    lineNumber: 70,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-b py-6 flex items-center justify-between",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: listing.host.image,
                                                alt: listing.host.name,
                                                className: "w-12 h-12 rounded-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                lineNumber: 80,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-base text-[#484848]",
                                                        children: [
                                                            "Hosted by ",
                                                            listing.host.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-[#484848]/80",
                                                        children: [
                                                            listing.host.superhost ? 'Superhost · ' : '',
                                                            "3 years hosting"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                lineNumber: 81,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                    lineNumber: 78,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-6 border-b",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold mb-3",
                                            children: "About this place"
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 89,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "leading-relaxed text-[#484848]",
                                            children: listing.description
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 90,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                    lineNumber: 88,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold mb-3",
                                            children: "Where you'll be"
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 94,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-48 rounded-xl flex items-center justify-center bg-black/5 text-[#484848]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        size: 32
                                                    }, void 0, false, {
                                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium mt-2",
                                                        children: "Map Data Protected"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 95,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-[#484848]/80",
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
                                            lineNumber: 101,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                    lineNumber: 93,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                            lineNumber: 68,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full md:w-2/5 bg-[#FFFFFF] border-l h-full flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 border-b bg-white shadow-sm z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl font-bold text-[#484848]",
                                                    children: [
                                                        "$",
                                                        listing.price
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 22
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#484848]/80",
                                                    children: "night"
                                                }, void 0, false, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 98
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1 text-xs font-semibold text-[#484848]/80 underline",
                                            children: "2 reviews"
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                    lineNumber: 111,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full mt-4 bg-[#FF585D] text-white py-3 rounded-xl font-bold hover:bg-[#ff6f72] transition",
                                    children: "Reserve"
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                    lineNumber: 115,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-4 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 text-sm text-[#484848] bg-black/5 p-3 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                            size: 20,
                                            className: "text-[#FF585D] min-w-[20px]"
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 123,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold mb-1 text-[#484848]",
                                                    children: "Gemini Location Expert"
                                                }, void 0, false, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 18
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Ask me anything about the neighborhood! I use Google Maps to find nearby restaurants, transit, and attractions."
                                                }, void 0, false, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 18
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 124,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                chatHistory.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `max-w-[85%] rounded-2xl p-3 text-sm ${msg.role === 'user' ? 'bg-[#484848] text-white rounded-br-none' : 'bg-white border rounded-bl-none shadow-sm text-[#484848]'}`,
                                            children: [
                                                msg.text,
                                                msg.links && msg.links.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 pt-2 border-t flex flex-col gap-1",
                                                    children: msg.links.map((link, l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: link.uri,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "text-[#FF585D] hover:underline text-xs flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    size: 10
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                                    lineNumber: 138,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ",
                                                                link.title
                                                            ]
                                                        }, l, true, {
                                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, i, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))),
                                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white border rounded-2xl rounded-bl-none shadow-sm p-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 rounded-full animate-bounce bg-[#484848]"
                                                }, void 0, false, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 rounded-full animate-bounce delay-100 bg-[#484848]"
                                                }, void 0, false, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 rounded-full animate-bounce delay-200 bg-[#484848]"
                                                }, void 0, false, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 149,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                        lineNumber: 148,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: chatEndRef
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-white border-t",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleAsk,
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "w-full rounded-full py-3 pl-4 pr-12 text-sm bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#FF585D]/40 text-[#484848]",
                                        placeholder: "What's near here? Is it noisy?",
                                        value: question,
                                        onChange: (e)=>setQuestion(e.target.value),
                                        disabled: loading
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                        lineNumber: 163,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading || !question.trim(),
                                        className: "absolute right-2 top-2 p-1.5 bg-[#FF585D] text-white rounded-full hover:scale-105 transition disabled:bg-[#484848]/40",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                            lineNumber: 175,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                        lineNumber: 170,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                                lineNumber: 162,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ListingModal;
}),
"[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
;
;
;
const FilterModal = ({ isOpen, onClose, currentFilters, onApply })=>{
    const [minPrice, setMinPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(currentFilters.minPrice?.toString() || '');
    const [maxPrice, setMaxPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(currentFilters.maxPrice?.toString() || '');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            setMinPrice(currentFilters.minPrice?.toString() || '');
            setMaxPrice(currentFilters.maxPrice?.toString() || '');
        }
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 animate-in fade-in duration-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full max-w-lg rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-4 border-b",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 hover:bg-black/5 rounded-full transition",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-bold text-lg",
                            children: "Filters"
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold mb-4 text-[#484848]",
                                children: "Price range"
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm mb-6 text-[#484848]",
                                children: "Nightly prices before fees and taxes"
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border rounded-xl px-3 py-2 flex-1 focus-within:ring-2 focus-within:ring-[#FF585D]/40",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-[#484848] block",
                                                children: "Minimum"
                                            }, void 0, false, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm mr-1",
                                                        children: "$"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[#484848]/60",
                                        children: "-"
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border rounded-xl px-3 py-2 flex-1 focus-within:ring-2 focus-within:ring-[#FF585D]/40",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-[#484848] block",
                                                children: "Maximum"
                                            }, void 0, false, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm mr-1",
                                                        children: "$"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-t flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClear,
                            className: "text-sm font-semibold underline text-[#484848] hover:text-[#484848]/80 px-4 py-2",
                            children: "Clear all"
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleApply,
                            className: "bg-[#FF585D] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#ff6f72] transition",
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
const __TURBOPACK__default__export__ = FilterModal;
}),
"[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-ssr] (ecmascript) <export default as ArrowUp>");
;
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t bg-[#FFFFFF] mt-12 hidden md:block",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[2520px] mx-auto xl:px-20 md:px-10 px-4 py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-center text-sm text-[#484848]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "© 2024 Airbnb Clone, Inc."
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx",
                                lineNumber: 10,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden md:inline",
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx",
                                lineNumber: 11,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hover:underline cursor-pointer",
                                children: "Privacy"
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx",
                                lineNumber: 12,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden md:inline",
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx",
                                lineNumber: 13,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hover:underline cursor-pointer",
                                children: "Terms"
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx",
                                lineNumber: 14,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden md:inline",
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx",
                                lineNumber: 15,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-6 font-semibold mt-4 md:mt-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 cursor-pointer hover:underline",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cursor-pointer hover:underline",
                                children: "$ USD"
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx",
                                lineNumber: 23,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 cursor-pointer hover:underline",
                                children: [
                                    "Support & Resources ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
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
const __TURBOPACK__default__export__ = Footer;
}),
"[project]/Reactjs/Airbnb/Aluga+/App.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$CategoryBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/CategoryBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ListingCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/ListingCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ListingModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/ListingModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$FilterModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/FilterModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$constants$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/constants.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/map.js [app-ssr] (ecmascript) <export default as Map>");
;
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
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('amazing-pools');
    const [filteredListings, setFilteredListings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$constants$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LISTINGS"]);
    const [selectedListing, setSelectedListing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [wishlist, setWishlist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Search & Filter State
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isFilterModalOpen, setIsFilterModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Scroll handler for navbar styling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    // Load wishlist from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedWishlist = localStorage.getItem('wishlist');
        if (savedWishlist) {
            try {
                setWishlist(JSON.parse(savedWishlist));
            } catch (error) {
                console.error('Failed to parse wishlist from localStorage', error);
            }
        }
    }, []);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let result = __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$constants$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LISTINGS"];
        // 1. Filter by Category
        if (selectedCategory !== 'trending') {
            result = result.filter((l)=>l.category === selectedCategory);
        }
        // 2. Filter by Search Criteria (AI or Manual)
        if (filters.category) {
            // Best effort text category matching if AI returns it
            const catMatch = filters.category.toLowerCase().replace(' ', '-');
            // If AI suggests a different category than selected, we prioritize AI filter if user searched
            result = result.filter((l)=>l.category.includes(catMatch));
        }
        if (filters.location) {
            result = result.filter((l)=>l.location.toLowerCase().includes(filters.location.toLowerCase()));
        }
        if (filters.minPrice !== undefined) {
            result = result.filter((l)=>l.price >= filters.minPrice);
        }
        if (filters.maxPrice !== undefined) {
            result = result.filter((l)=>l.price <= filters.maxPrice);
        }
        setFilteredListings(result);
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col text-neutral-800 bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onSearch: handleSmartSearch,
                isScrolled: isScrolled,
                onSearchStart: ()=>setIsLoading(true),
                onSearchEnd: ()=>setIsLoading(false)
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 pb-20 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$CategoryBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 mt-4",
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8",
                            children: [
                                ...Array(12)
                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-1 flex flex-col gap-2 animate-pulse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-square w-full bg-gray-200 rounded-xl relative overflow-hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                                            lineNumber: 125,
                                            columnNumber: 20
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-4 bg-gray-200 rounded w-2/3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-4 bg-gray-200 rounded w-1/2"
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                                            lineNumber: 130,
                                            columnNumber: 20
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        }, ("TURBOPACK compile-time value", void 0)) : filteredListings.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-h-[40vh] flex flex-col items-center justify-center text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl font-bold mb-2",
                                    children: "No matches found"
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "max-w-md text-[#484848]",
                                    children: "Try adjusting your filters or search query."
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setSelectedCategory('trending');
                                        setFilters({});
                                    },
                                    className: "mt-6 px-6 py-3 bg-[#FF585D] text-white rounded-lg hover:bg-[#ff6f72] transition",
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
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8",
                            children: filteredListings.map((listing)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ListingCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    !isLoading && filteredListings.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed bottom-10 left-1/2 transform -translate-x-1/2 z-30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-neutral-900 hover:scale-105 hover:bg-black text-white px-5 py-3.5 rounded-full font-semibold shadow-xl flex items-center gap-2 transition duration-300 text-sm",
                            children: [
                                "Show map ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            selectedListing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ListingModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                listing: selectedListing,
                onClose: ()=>setSelectedListing(null)
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/App.tsx",
                lineNumber: 178,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$FilterModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
const __TURBOPACK__default__export__ = App;
}),
"[project]/Reactjs/Airbnb/Aluga+/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$App$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/App.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$App$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c697eb8d._.js.map