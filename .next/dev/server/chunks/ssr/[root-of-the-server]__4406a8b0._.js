module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx'\n\nUnterminated string constant");
e.code = 'MODULE_UNPARSABLE';
throw e;
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
"[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryTabs",
    ()=>CategoryTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/lucide-react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const DESKTOP_CATEGORIES = [
    {
        id: "imoveis",
        label: "Imóveis",
        icon: "Home"
    },
    {
        id: "logistica",
        label: "Logística",
        icon: "Truck"
    },
    {
        id: "eventos",
        label: "Eventos",
        icon: "CalendarDays"
    }
];
function CategoryTabs({ value, onChange, onOpenFilter }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sticky top-[4.25rem] z-30 border-b bg-white/80 backdrop-blur",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-2 md:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "no-scrollbar flex flex-1 gap-4 overflow-x-auto",
                    children: DESKTOP_CATEGORIES.map((cat)=>{
                        const Icon = __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[cat.icon];
                        const active = value === cat.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>onChange(cat.id),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex min-w-[90px] flex-col items-center gap-1 border-b-2 px-1 pb-2 text-xs font-medium text-neutral-500 transition", active ? "border-neutral-900 text-neutral-900" : "border-transparent hover:text-neutral-800"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-5 w-5", active ? "text-neutral-900" : "text-neutral-500")
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                                    lineNumber: 50,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: cat.label
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                                    lineNumber: 56,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, cat.id, true, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                            lineNumber: 39,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: onOpenFilter,
                    className: "hidden items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-xs font-semibold text-neutral-800 shadow-sm hover:border-neutral-900 md:inline-flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.SlidersHorizontal, {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        "Filtros"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/mobile/BottomNavbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomNavbar",
    ()=>BottomNavbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-ssr] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User2$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/user-round.js [app-ssr] (ecmascript) <export default as User2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function BottomNavbar({ active, onChange, hidden }) {
    if (hidden) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white/95 px-6 pb-5 pt-2 shadow-[0_-6px_18px_rgba(15,23,42,0.05)] md:hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-md items-center justify-between gap-8 text-xs font-medium",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
                    label: "Home",
                    active: active === "home",
                    onClick: ()=>onChange("home")
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/BottomNavbar.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"],
                    label: "Filtro",
                    active: active === "filter",
                    onClick: ()=>onChange("filter")
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/BottomNavbar.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User2$3e$__["User2"],
                    label: "Perfil",
                    active: active === "profile",
                    onClick: ()=>onChange("profile")
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/BottomNavbar.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/BottomNavbar.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/BottomNavbar.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
function NavItem({ icon: Icon, label, active, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-1 flex-col items-center gap-1 rounded-full px-3 py-1.5 transition", active ? "text-neutral-900" : "text-neutral-500"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-9 items-center justify-center rounded-full border text-sm", active ? "border-neutral-900 bg-neutral-900 text-white shadow-sm" : "border-transparent bg-neutral-100"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/BottomNavbar.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/BottomNavbar.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/BottomNavbar.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/BottomNavbar.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/ui/sheet.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetOverlay",
    ()=>SheetOverlay,
    "SheetPortal",
    ()=>SheetPortal,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const Sheet = __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const SheetTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const SheetClose = __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"];
const SheetPortal = __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"];
const SheetOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-40 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/sheet.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SheetOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const SheetContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, side = "bottom", children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/sheet.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed z-50 flex w-full flex-col rounded-t-3xl bg-white p-4 shadow-lg outline-none", "data-[state=open]:animate-in data-[state=closed]:animate-out", side === "bottom" && "inset-x-0 bottom-0 data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom", className),
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mb-3 h-1 w-12 rounded-full bg-neutral-200"
                    }, void 0, false, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/sheet.tsx",
                        lineNumber: 48,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/sheet.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/sheet.tsx",
        lineNumber: 35,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SheetContent.displayName = "SheetContent";
const SheetHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mb-2 flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/sheet.tsx",
        lineNumber: 59,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
SheetHeader.displayName = "SheetHeader";
const SheetTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-base font-semibold leading-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/sheet.tsx",
        lineNumber: 73,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SheetTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
const SheetDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-neutral-500", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/sheet.tsx",
        lineNumber: 85,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SheetDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
;
}),
"[project]/Reactjs/Airbnb/Aluga+/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-white", {
    variants: {
        variant: {
            default: "bg-neutral-900 text-white hover:bg-black",
            outline: "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100",
            ghost: "bg-transparent text-neutral-900 hover:bg-neutral-100 hover:text-neutral-900",
            subtle: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
        },
        size: {
            default: "h-10 px-4 py-2",
            icon: "h-9 w-9",
            lg: "h-11 px-5",
            sm: "h-9 px-3"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/button.tsx",
        lineNumber: 43,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterSheet",
    ()=>FilterSheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/ui/sheet.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function FilterSheet({ open, onOpenChange, category, value, onChange, onApply }) {
    const handleField = (field, v)=>{
        onChange({
            ...value,
            [field]: field === "precoMin" || field === "precoMax" ? v ? Number(v) : undefined : v || undefined
        });
    };
    const clearAll = ()=>onChange({
            tipo: undefined,
            subTipo: undefined,
            precoMin: undefined,
            precoMax: undefined,
            localizacao: undefined
        });
    const applyAndClose = ()=>{
        onApply();
        onOpenChange(false);
    };
    const renderCategoryOptions = ()=>{
        if (category === "imoveis") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldGroup, {
                        label: "Finalidade",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OptionPill, {
                                label: "Aluguer",
                                active: value.tipo === "aluguer",
                                onClick: ()=>handleField("tipo", "aluguer")
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OptionPill, {
                                label: "Venda",
                                active: value.tipo === "venda",
                                onClick: ()=>handleField("tipo", "venda")
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldGroup, {
                        label: "Tipo de imóvel",
                        children: [
                            "Casa",
                            "Quarto",
                            "Apartamento",
                            "Loja",
                            "Escritório",
                            "Contentor"
                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OptionPill, {
                                label: t,
                                active: value.subTipo === t.toLowerCase(),
                                onClick: ()=>handleField("subTipo", t.toLowerCase())
                            }, t, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
                                lineNumber: 80,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true);
        }
        if (category === "logistica") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldGroup, {
                label: "Serviço de logística",
                children: [
                    "Camiões",
                    "Carga",
                    "Mudanças"
                ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OptionPill, {
                        label: t,
                        active: value.subTipo === t.toLowerCase(),
                        onClick: ()=>handleField("subTipo", t.toLowerCase())
                    }, t, false, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
                        lineNumber: 97,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldGroup, {
            label: "Tipo de espaço para eventos",
            children: [
                "Salões",
                "Quintas",
                "Workshops"
            ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OptionPill, {
                    label: t,
                    active: value.subTipo === t.toLowerCase(),
                    onClick: ()=>handleField("subTipo", t.toLowerCase())
                }, t, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
                    lineNumber: 111,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sheet"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetContent"], {
            side: "bottom",
            className: "max-h-[85vh] pb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetHeader"], {
                    className: "mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetTitle"], {
                        children: "Filtrar resultados"
                    }, void 0, false, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-5 overflow-y-auto pb-3",
                    children: [
                        renderCategoryOptions(),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldGroup, {
                            label: "Preço (MZN)",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                        label: "Mínimo",
                                        type: "number",
                                        value: value.precoMin ?? "",
                                        onChange: (e)=>handleField("precoMin", e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                        label: "Máximo",
                                        type: "number",
                                        value: value.precoMax ?? "",
                                        onChange: (e)=>handleField("precoMax", e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldGroup, {
                            label: "Localização",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                placeholder: "Ex: Maputo, Matola, Beira...",
                                value: value.localizacao ?? "",
                                onChange: (e)=>handleField("localizacao", e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 flex items-center justify-between gap-3 border-t pt-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: clearAll,
                            className: "text-xs font-semibold text-neutral-500 underline",
                            children: "Limpar tudo"
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            className: "flex-1 rounded-full text-sm font-semibold",
                            onClick: applyAndClose,
                            children: "Filtrar resultados"
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
            lineNumber: 124,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
function FieldGroup({ label, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xs font-semibold uppercase tracking-wide text-neutral-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: children
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, this);
}
function OptionPill({ label, active, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-full border px-3 py-1 text-xs font-medium transition", active ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-900"),
        children: label
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
}
function Input({ label, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "flex flex-1 flex-col gap-1 text-xs font-medium text-neutral-600",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
                lineNumber: 229,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-9 rounded-full border border-neutral-200 px-3 text-xs font-normal text-neutral-800 outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/5", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx",
        lineNumber: 228,
        columnNumber: 5
    }, this);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListingStoryCard",
    ()=>ListingStoryCard
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
function ListingStoryCard({ data, isWishlisted, onToggleWishlist }) {
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const handlePrev = ()=>{
        setIndex((prev)=>prev === 0 ? data.images.length - 1 : prev - 1);
    };
    const handleNext = ()=>{
        setIndex((prev)=>prev === data.images.length - 1 ? 0 : prev + 1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "flex min-h-[calc(100vh-4.5rem)] flex-col justify-between pb-20 pt-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex h-[340px] w-full overflow-hidden rounded-3xl bg-neutral-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: data.images[index],
                                alt: data.title,
                                className: "h-full w-full flex-shrink-0 object-cover"
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": "Favorito",
                                onClick: onToggleWishlist,
                                className: "absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-5 w-5 transition", isWishlisted ? "fill-red-500 text-red-500" : "fill-transparent text-white")
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute inset-x-3 top-3 flex gap-1",
                                children: data.images.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1 rounded-full bg-white/40", i <= index && "bg-white")
                                    }, i, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            data.images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handlePrev,
                                        className: "absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 px-2 py-2 text-white backdrop-blur-sm",
                                        children: "‹"
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleNext,
                                        className: "absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 px-2 py-2 text-white backdrop-blur-sm",
                                        children: "›"
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1 px-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-base font-semibold text-neutral-900",
                                children: data.title
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-medium uppercase tracking-wide text-neutral-500",
                                children: data.location
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-neutral-600",
                                children: data.description.length > 120 ? data.description.slice(0, 120) + "..." : data.description
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex items-center justify-between px-1 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold text-neutral-900",
                                children: [
                                    new Intl.NumberFormat("pt-MZ", {
                                        style: "currency",
                                        currency: "MZN",
                                        maximumFractionDigits: 0
                                    }).format(data.price),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-normal text-neutral-500",
                                        children: [
                                            " ",
                                            "/ dia"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-neutral-500",
                                children: [
                                    data.distance,
                                    " · ",
                                    data.dates
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-neutral-500",
                        children: [
                            "Anunciado por",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-neutral-800",
                                children: data.host.name
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserProfile",
    ()=>UserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-ssr] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/store.js [app-ssr] (ecmascript) <export default as Store>");
"use client";
;
;
function UserProfile() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex min-h-[calc(100vh-4.5rem)] flex-col gap-6 pb-20 pt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 px-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-2xl font-bold text-white",
                        children: "SA"
                    }, void 0, false, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-lg font-semibold text-neutral-900",
                                children: "Seu Aluga+ Profile"
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                                lineNumber: 13,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-neutral-500",
                                children: "Gerir anúncios, favoritos e conta"
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden rounded-2xl bg-white shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileItem, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"],
                        label: "Meus anúncios"
                    }, void 0, false, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileItem, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
                        label: "Favoritos"
                    }, void 0, false, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileItem, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
                        label: "Configurações"
                    }, void 0, false, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileItem, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"],
                        label: "Ajuda"
                    }, void 0, false, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileItem, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"],
                        label: "Sair",
                        danger: true,
                        borderBottom: false
                    }, void 0, false, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function ProfileItem({ icon: Icon, label, danger, borderBottom = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: `flex w-full items-center justify-between px-4 py-3 text-sm ${borderBottom ? "border-b border-neutral-100" : ""}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-700",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `text-left ${danger ? "font-semibold text-red-600" : "text-neutral-800"}`,
                    children: label
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/constants.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LISTINGS",
    ()=>LISTINGS
]);
const LISTINGS = [
    {
        id: "1",
        title: "Casa T3 com quintal em Maputo",
        location: "Bairro da Coop, Maputo",
        distance: "Próximo ao centro",
        dates: "Disponível este mês",
        price: 2500,
        rating: 4.8,
        images: [
            "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
            "https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg",
            "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
        ],
        category: "casa",
        domain: "imoveis",
        lat: -25.9667,
        lng: 32.5833,
        description: "Casa T3 murada, com quintal amplo para famílias, água e energia incluídas. Próxima de transportes e escolas.",
        host: {
            name: "Helena",
            image: "https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg",
            superhost: true
        }
    },
    {
        id: "2",
        title: "Quarto mobilado para estudante",
        location: "Matola, Maputo",
        distance: "15 min da cidade",
        dates: "Disponível a partir de Março",
        price: 1500,
        rating: 4.6,
        images: [
            "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg",
            "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
        ],
        category: "quarto",
        domain: "imoveis",
        lat: -25.9622,
        lng: 32.4589,
        description: "Quarto individual com cama, roupeiro e secretária. Ambiente calmo, ideal para estudantes ou jovens profissionais.",
        host: {
            name: "Carlos",
            image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
            superhost: false
        }
    },
    {
        id: "3",
        title: "Camião de 7 toneladas para mudanças",
        location: "Maputo e arredores",
        distance: "Cobertura regional",
        dates: "Reserva por dia",
        price: 4500,
        rating: 4.9,
        images: [
            "https://images.pexels.com/photos/6169052/pexels-photo-6169052.jpeg",
            "https://images.pexels.com/photos/6169055/pexels-photo-6169055.jpeg"
        ],
        category: "caminhao",
        domain: "logistica",
        lat: -25.95,
        lng: 32.6,
        description: "Camião fechado de 7 toneladas com equipa para carregamento e descarga. Ideal para mudanças completas de casa ou escritório.",
        host: {
            name: "Transporte Maputo",
            image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
            superhost: true
        }
    },
    {
        id: "4",
        title: "Serviço de mudanças leve",
        location: "Cidade de Maputo",
        distance: "Cobertura urbana",
        dates: "Todos os dias da semana",
        price: 2000,
        rating: 4.7,
        images: [
            "https://images.pexels.com/photos/7464709/pexels-photo-7464709.jpeg",
            "https://images.pexels.com/photos/5025669/pexels-photo-5025669.jpeg"
        ],
        category: "mudancas",
        domain: "logistica",
        lat: -25.97,
        lng: 32.58,
        description: "Carrinha fechada para pequenas mudanças, entrega de móveis e eletrodomésticos com segurança.",
        host: {
            name: "Logística Rápida",
            image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
            superhost: false
        }
    },
    {
        id: "5",
        title: "Salão para casamentos até 300 pessoas",
        location: "Matola Rio, Maputo",
        distance: "Acesso pela EN4",
        dates: "Fins de semana e feriados",
        price: 12000,
        rating: 4.9,
        images: [
            "https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg",
            "https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg"
        ],
        category: "salao",
        domain: "eventos",
        lat: -25.99,
        lng: 32.47,
        description: "Salão amplo com estacionamento, cozinha de apoio e espaço exterior para fotografias. Ideal para casamentos e grandes eventos.",
        host: {
            name: "Quinta Azul",
            image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
            superhost: true
        }
    },
    {
        id: "6",
        title: "Espaço para workshops e formações",
        location: "Centro da Cidade, Beira",
        distance: "Próximo a serviços",
        dates: "Segunda a sábado",
        price: 3500,
        rating: 4.5,
        images: [
            "https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg",
            "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg"
        ],
        category: "workshop",
        domain: "eventos",
        lat: -19.8436,
        lng: 34.8389,
        description: "Sala climatizada com projetor, cadeiras e internet para formações, reuniões e pequenos eventos corporativos.",
        host: {
            name: "Centro Negócios Beira",
            image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
            superhost: false
        }
    }
];
}),
"[project]/Reactjs/Airbnb/Aluga+/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$desktop$2f$CategoryTabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$mobile$2f$BottomNavbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/mobile/BottomNavbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$mobile$2f$FilterSheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$mobile$2f$ListingStoryCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$mobile$2f$UserProfile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$constants$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/constants.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function HomePage() {
    const [mainCategory, setMainCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("imoveis");
    const [searchText, setSearchText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [wishlist, setWishlist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mobileTab, setMobileTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("home");
    const [filterOpen, setFilterOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [filterState, setFilterState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const filteredListings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let list = __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$constants$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LISTINGS"];
        list = list.filter((l)=>{
            if (mainCategory === "imoveis") return l.domain === "imoveis";
            if (mainCategory === "logistica") return l.domain === "logistica";
            return l.domain === "eventos";
        });
        if (searchText.trim()) {
            const q = searchText.toLowerCase();
            list = list.filter((l)=>l.title.toLowerCase().includes(q) || l.location.toLowerCase().includes(q) || l.description.toLowerCase().includes(q));
        }
        if (filterState.localizacao) {
            const loc = filterState.localizacao.toLowerCase();
            list = list.filter((l)=>l.location.toLowerCase().includes(loc));
        }
        if (typeof filterState.precoMin === "number") {
            list = list.filter((l)=>l.price >= filterState.precoMin);
        }
        if (typeof filterState.precoMax === "number") {
            list = list.filter((l)=>l.price <= filterState.precoMax);
        }
        return list;
    }, [
        mainCategory,
        searchText,
        filterState
    ]);
    const [mobileIndex, setMobileIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const currentMobileListing = filteredListings[mobileIndex];
    const toggleWishlist = (id)=>{
        setWishlist((prev)=>prev.includes(id) ? prev.filter((x)=>x !== id) : [
                ...prev,
                id
            ]);
    };
    const handleApplyFilters = ()=>{
        if (mobileTab === "filter") {
            setMobileTab("home");
        }
    };
    const contentDesktop = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "hidden md:block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$desktop$2f$CategoryTabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CategoryTabs"], {
                value: mainCategory,
                onChange: setMainCategory,
                onOpenFilter: ()=>setFilterOpen(true)
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto max-w-6xl px-4 pb-10 pt-4 md:px-6 lg:px-8",
                children: filteredListings.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex min-h-[40vh] flex-col items-center justify-center text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg font-semibold",
                            children: "Nenhum anúncio encontrado para estes filtros."
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-sm text-neutral-500",
                            children: "Ajuste os filtros ou a pesquisa para ver mais opções."
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                    lineNumber: 91,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
                    children: filteredListings.map((listing)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: listing.images[0],
                                    alt: listing.title,
                                    className: "h-52 w-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1 px-3 pb-3 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "line-clamp-1 text-sm font-semibold text-neutral-900",
                                            children: listing.title
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium uppercase tracking-wide text-neutral-500",
                                            children: listing.location
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                                            lineNumber: 115,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-neutral-900",
                                            children: [
                                                new Intl.NumberFormat("pt-MZ", {
                                                    style: "currency",
                                                    currency: "MZN",
                                                    maximumFractionDigits: 0
                                                }).format(listing.price),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-normal text-neutral-500",
                                                    children: [
                                                        " ",
                                                        "/ dia"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                                            lineNumber: 118,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, listing.id, true, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                            lineNumber: 102,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                    lineNumber: 100,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
    const contentMobile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "block md:hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mx-auto max-w-md px-4 pb-4 pt-2",
            children: [
                mobileTab === "home" && currentMobileListing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$mobile$2f$ListingStoryCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ListingStoryCard"], {
                    data: currentMobileListing,
                    isWishlisted: wishlist.includes(currentMobileListing.id),
                    onToggleWishlist: ()=>toggleWishlist(currentMobileListing.id)
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                    lineNumber: 142,
                    columnNumber: 11
                }, this),
                mobileTab === "profile" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$mobile$2f$UserProfile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserProfile"], {}, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                    lineNumber: 148,
                    columnNumber: 37
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
            lineNumber: 140,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {
                onSearch: setSearchText
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            contentDesktop,
            contentMobile,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$mobile$2f$FilterSheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FilterSheet"], {
                open: filterOpen,
                onOpenChange: (open)=>{
                    setFilterOpen(open);
                },
                category: mainCategory,
                value: filterState,
                onChange: setFilterState,
                onApply: handleApplyFilters
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$mobile$2f$BottomNavbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BottomNavbar"], {
                active: mobileTab,
                onChange: (tab)=>{
                    if (tab === "filter") {
                        setFilterOpen(true);
                    }
                    setMobileTab(tab);
                },
                hidden: filterOpen
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4406a8b0._.js.map