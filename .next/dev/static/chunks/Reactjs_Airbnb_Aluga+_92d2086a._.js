(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-white", {
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
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-full border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF585D] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/input.tsx",
        lineNumber: 10,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/ui/search-bar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchBar",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/ui/input.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function SearchBar({ placeholder, onSearch, className }) {
    _s();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        const trimmed = value.trim();
        if (!trimmed) return;
        onSearch(trimmed);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                className: "h-4 w-4 text-neutral-500"
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/search-bar.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                value: value,
                onChange: (e)=>setValue(e.target.value),
                placeholder: placeholder,
                className: "h-8 flex-1 border-0 bg-transparent text-sm outline-none placeholder:text-neutral-400"
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/search-bar.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "submit",
                size: "sm",
                className: "hidden rounded-full px-3 text-xs font-semibold md:inline-flex",
                children: "Pesquisar"
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/search-bar.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/search-bar.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(SearchBar, "dBtK6I2q1m3rcfzPBa0nrbv/iCI=");
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-[#FF585D] text-white hover:bg-[#ff6f74] focus:ring-[#FF585D]",
            outline: "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 focus:ring-neutral-300",
            subtle: "border-transparent bg-[#FF585D]/10 text-[#FF585D] focus:ring-[#FF585D]/40"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/badge.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/ui/navigation-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavigationMenu",
    ()=>NavigationMenu,
    "NavigationMenuContent",
    ()=>NavigationMenuContent,
    "NavigationMenuItem",
    ()=>NavigationMenuItem,
    "NavigationMenuList",
    ()=>NavigationMenuList,
    "NavigationMenuTrigger",
    ()=>NavigationMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@radix-ui/react-navigation-menu'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const NavigationMenu = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavigationMenuPrimitive.Root, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-40 flex max-w-none items-center justify-between", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/navigation-menu.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = NavigationMenu;
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
const NavigationMenuList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavigationMenuPrimitive.List, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-1 items-center gap-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/navigation-menu.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = NavigationMenuList;
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const NavigationMenuTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavigationMenuPrimitive.Trigger, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center gap-1 rounded-full border border-transparent bg-transparent px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF585D]", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                className: "h-3 w-3"
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/navigation-menu.tsx",
                lineNumber: 48,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/navigation-menu.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = NavigationMenuTrigger;
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
const NavigationMenuContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavigationMenuPrimitive.Content, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute left-1/2 top-full z-50 mt-2 w-[260px] -translate-x-1/2 rounded-2xl border border-neutral-200 bg-white p-3 shadow-lg", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/navigation-menu.tsx",
        lineNumber: 58,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = NavigationMenuContent;
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "NavigationMenu$React.forwardRef");
__turbopack_context__.k.register(_c1, "NavigationMenu");
__turbopack_context__.k.register(_c2, "NavigationMenuList$React.forwardRef");
__turbopack_context__.k.register(_c3, "NavigationMenuList");
__turbopack_context__.k.register(_c4, "NavigationMenuTrigger$React.forwardRef");
__turbopack_context__.k.register(_c5, "NavigationMenuTrigger");
__turbopack_context__.k.register(_c6, "NavigationMenuContent$React.forwardRef");
__turbopack_context__.k.register(_c7, "NavigationMenuContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/ui/dropdown-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@radix-ui/react-dropdown-menu'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownMenuPrimitive.Portal, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownMenuPrimitive.Content, {
            ref: ref,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[200px] overflow-hidden rounded-2xl border border-neutral-200 bg-white p-1.5 text-sm text-neutral-800 shadow-lg focus:outline-none", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/dropdown-menu.tsx",
            lineNumber: 14,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/dropdown-menu.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = DropdownMenuContent;
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownMenuPrimitive.Item, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-pointer select-none items-center rounded-xl px-3 py-2 text-sm outline-none focus:bg-neutral-100", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/dropdown-menu.tsx",
        lineNumber: 32,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = DropdownMenuItem;
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownMenuPrimitive.Separator, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("my-1 h-px bg-neutral-200", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/dropdown-menu.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = DropdownMenuSeparator;
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "DropdownMenuContent$React.forwardRef");
__turbopack_context__.k.register(_c1, "DropdownMenuContent");
__turbopack_context__.k.register(_c2, "DropdownMenuItem$React.forwardRef");
__turbopack_context__.k.register(_c3, "DropdownMenuItem");
__turbopack_context__.k.register(_c4, "DropdownMenuSeparator$React.forwardRef");
__turbopack_context__.k.register(_c5, "DropdownMenuSeparator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/ui/avatar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar,
    "AvatarFallback",
    ()=>AvatarFallback,
    "AvatarImage",
    ()=>AvatarImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@radix-ui/react-avatar'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const Avatar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarPrimitive.Root, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-neutral-200", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/avatar.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Avatar;
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarPrimitive.Image, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("aspect-square h-full w-full object-cover", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/avatar.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = AvatarImage;
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarPrimitive.Fallback, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-full w-full items-center justify-center bg-neutral-300 text-sm font-semibold text-white", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/avatar.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = AvatarFallback;
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Avatar$React.forwardRef");
__turbopack_context__.k.register(_c1, "Avatar");
__turbopack_context__.k.register(_c2, "AvatarImage$React.forwardRef");
__turbopack_context__.k.register(_c3, "AvatarImage");
__turbopack_context__.k.register(_c4, "AvatarFallback$React.forwardRef");
__turbopack_context__.k.register(_c5, "AvatarFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle2$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/circle-user-round.js [app-client] (ecmascript) <export default as UserCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$search$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/ui/search-bar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/ui/navigation-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/ui/avatar.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Header({ onSearch }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-40 border-b bg-white/80 backdrop-blur",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-4 py-3 md:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationMenu"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationMenuList"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationMenuItem"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "subtle",
                                            className: "rounded-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold tracking-wide",
                                                children: "Aluga"
                                            }, void 0, false, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                                                lineNumber: 33,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                                            lineNumber: 32,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-extrabold text-neutral-900",
                                            children: "+"
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationMenuItem"], {
                                className: "hidden flex-1 justify-center md:flex",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full max-w-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$search$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchBar"], {
                                        placeholder: "Procure por casa, camião, espaço de eventos...",
                                        onSearch: onSearch
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationMenuItem"], {
                                className: "ml-auto flex items-center gap-2 md:gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm hover:bg-neutral-100",
                                        "aria-label": "Notificações",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-2 py-1 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-100",
                                                    "aria-label": "Perfil do utilizador",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                            className: "h-8 w-8",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                                children: "SA"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                                                            lineNumber: 66,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle2$3e$__["UserCircle2"], {
                                                            className: "hidden h-5 w-5 text-neutral-500 md:block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                                                            lineNumber: 69,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                                                lineNumber: 60,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                align: "end",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        children: "Meu perfil"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        children: "Meus anúncios"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        children: "Favoritos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        className: "text-red-600",
                                                        children: "Terminar sessão"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 pb-3 md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$search$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchBar"], {
                    placeholder: "Pesquisar em Aluga+",
                    onSearch: onSearch
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@radix-ui/react-tabs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const Tabs = TabsPrimitive.Root;
const TabsList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsPrimitive.List, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center rounded-full bg-neutral-100 p-1 text-neutral-500", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/tabs.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = TabsList;
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsPrimitive.Trigger, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex min-w-[80px] items-center justify-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition data-[state=active]:bg-white data-[state=active]:text-neutral-900 data-[state=active]:shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/tabs.tsx",
        lineNumber: 26,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = TabsTrigger;
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsPrimitive.Content, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-2 focus-visible:outline-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/tabs.tsx",
        lineNumber: 41,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = TabsContent;
TabsContent.displayName = TabsPrimitive.Content.displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "TabsList$React.forwardRef");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger$React.forwardRef");
__turbopack_context__.k.register(_c3, "TabsTrigger");
__turbopack_context__.k.register(_c4, "TabsContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/ui/popover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popover",
    ()=>Popover,
    "PopoverContent",
    ()=>PopoverContent,
    "PopoverTrigger",
    ()=>PopoverTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@radix-ui/react-popover'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, align = "end", sideOffset = 8, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PopoverPrimitive.Portal, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PopoverPrimitive.Content, {
            ref: ref,
            align: align,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 w-[280px] rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-lg outline-none", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/popover.tsx",
            lineNumber: 14,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/popover.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = PopoverContent;
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "PopoverContent$React.forwardRef");
__turbopack_context__.k.register(_c1, "PopoverContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectItem",
    ()=>SelectItem,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@radix-ui/react-select'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectPrimitive.Trigger, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full items-center justify-between gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-800 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF585D]", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectPrimitive.Icon, {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-3 w-3 text-neutral-500"
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/select.tsx",
                    lineNumber: 24,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/select.tsx",
                lineNumber: 23,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/select.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = SelectTrigger;
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectPrimitive.Portal, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectPrimitive.Content, {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[180px] overflow-hidden rounded-2xl border border-neutral-200 bg-white text-xs text-neutral-800 shadow-lg", position === "popper" && "data-[side=bottom]:animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=top]:animate-in data-[side=top]:slide-in-from-bottom-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectPrimitive.ScrollUpButton, {
                    className: "flex items-center justify-center py-1 text-neutral-500",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                        className: "h-3 w-3"
                    }, void 0, false, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/select.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/select.tsx",
                    lineNumber: 46,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectPrimitive.Viewport, {
                    className: "p-1",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/select.tsx",
                    lineNumber: 49,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectPrimitive.ScrollDownButton, {
                    className: "flex items-center justify-center py-1 text-neutral-500",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "h-3 w-3"
                    }, void 0, false, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/select.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/select.tsx",
                    lineNumber: 52,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/select.tsx",
            lineNumber: 35,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/select.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = SelectContent;
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectPrimitive.Item, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-pointer select-none items-center rounded-xl px-2.5 py-1.5 text-xs outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mr-2 inline-flex h-3 w-3 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectPrimitive.ItemIndicator, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-3 w-3 text-[#FF585D]"
                    }, void 0, false, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/select.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/select.tsx",
                    lineNumber: 73,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/select.tsx",
                lineNumber: 72,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectPrimitive.ItemText, {
                children: children
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/select.tsx",
                lineNumber: 77,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/select.tsx",
        lineNumber: 64,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = SelectItem;
SelectItem.displayName = SelectPrimitive.Item.displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "SelectTrigger$React.forwardRef");
__turbopack_context__.k.register(_c1, "SelectTrigger");
__turbopack_context__.k.register(_c2, "SelectContent$React.forwardRef");
__turbopack_context__.k.register(_c3, "SelectContent");
__turbopack_context__.k.register(_c4, "SelectItem$React.forwardRef");
__turbopack_context__.k.register(_c5, "SelectItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/ui/slider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Slider",
    ()=>Slider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@radix-ui/react-slider'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const Slider = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SliderPrimitive.Root, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full touch-none select-none items-center", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SliderPrimitive.Track, {
                className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-neutral-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SliderPrimitive.Range, {
                    className: "absolute h-full bg-[#FF585D]"
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/slider.tsx",
                    lineNumber: 18,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/slider.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SliderPrimitive.Thumb, {
                className: "block h-4 w-4 rounded-full border border-white bg-[#FF585D] shadow outline-none focus-visible:ring-2 focus-visible:ring-[#FF585D]/60"
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/slider.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            props.max && props.max > 0 && props.defaultValue && props.defaultValue.length === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SliderPrimitive.Thumb, {
                className: "block h-4 w-4 rounded-full border border-white bg-[#FF585D] shadow outline-none focus-visible:ring-2 focus-visible:ring-[#FF585D]/60"
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/slider.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/slider.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Slider;
Slider.displayName = SliderPrimitive.Root.displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Slider$React.forwardRef");
__turbopack_context__.k.register(_c1, "Slider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryTabs",
    ()=>CategoryTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/ui/slider.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const priceMin = 0;
const priceMax = 20000;
function CategoryTabs({ value, onChange, filter, onFilterChange }) {
    const sliderValue = [
        filter.precoMin ?? priceMin,
        filter.precoMax ?? priceMax
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sticky top-[4.25rem] z-30 border-b bg-white/80 backdrop-blur",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 md:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                    value: value,
                    onValueChange: (val)=>onChange(val),
                    className: "flex-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                        className: "no-scrollbar flex w-full justify-start gap-1 overflow-x-auto bg-transparent p-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabWithIcon, {
                                value: "imoveis",
                                label: "Imóveis",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabWithIcon, {
                                value: "logistica",
                                label: "Logística",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"]
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabWithIcon, {
                                value: "eventos",
                                label: "Eventos",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"]
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                className: "hidden items-center gap-2 rounded-full border-neutral-300 text-xs font-semibold text-neutral-800 md:inline-flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    "Filtros"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                            align: "end",
                            className: "w-72 text-xs",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] font-semibold uppercase tracking-wide text-neutral-500",
                                                children: "Tipo"
                                            }, void 0, false, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                            placeholder: "Todos os tipos"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "todos",
                                                                children: "Todos"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                                                                lineNumber: 82,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "primario",
                                                                children: "Principal"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-[11px] text-neutral-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold uppercase tracking-wide",
                                                        children: "Preço (MZN)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            sliderValue[0],
                                                            " - ",
                                                            sliderValue[1]
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                                min: priceMin,
                                                max: priceMax,
                                                step: 500,
                                                value: sliderValue,
                                                onValueChange: ([min, max])=>onFilterChange({
                                                        precoMin: min,
                                                        precoMax: max
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = CategoryTabs;
function TabWithIcon({ value, label, icon: Icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
        value: value,
        className: "flex min-w-[96px] flex-col items-center gap-1 rounded-none border-b-2 border-transparent px-1 pb-2 text-[11px] text-neutral-500 data-[state=active]:border-neutral-900 data-[state=active]:bg-transparent data-[state=active]:text-neutral-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_c1 = TabWithIcon;
var _c, _c1;
__turbopack_context__.k.register(_c, "CategoryTabs");
__turbopack_context__.k.register(_c1, "TabWithIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/ui/toggle-group.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToggleGroup",
    ()=>ToggleGroup,
    "ToggleGroupItem",
    ()=>ToggleGroupItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@radix-ui/react-toggle-group'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const ToggleGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleGroupPrimitive.Root, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/toggle-group.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = ToggleGroup;
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
const ToggleGroupItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleGroupPrimitive.Item, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex flex-col items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium text-neutral-500 data-[state=on]:text-neutral-900", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/toggle-group.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = ToggleGroupItem;
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ToggleGroup$React.forwardRef");
__turbopack_context__.k.register(_c1, "ToggleGroup");
__turbopack_context__.k.register(_c2, "ToggleGroupItem$React.forwardRef");
__turbopack_context__.k.register(_c3, "ToggleGroupItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/mobile/BottomNavbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomNavbar",
    ()=>BottomNavbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User2$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/user-round.js [app-client] (ecmascript) <export default as User2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/ui/toggle-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function BottomNavbar({ active, onChange, hidden }) {
    if (hidden) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white/95 px-6 pb-5 pt-2 shadow-[0_-6px_18px_rgba(15,23,42,0.05)] md:hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-md items-center justify-center text-xs font-medium",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroup"], {
                type: "single",
                value: active,
                onValueChange: (val)=>val && onChange(val),
                className: "w-full justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                        value: "home",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
                        label: "Home"
                    }, void 0, false, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/BottomNavbar.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                        value: "filter",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"],
                        label: "Filtro"
                    }, void 0, false, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/BottomNavbar.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                        value: "profile",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User2$3e$__["User2"],
                        label: "Perfil"
                    }, void 0, false, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/BottomNavbar.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/BottomNavbar.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/BottomNavbar.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/BottomNavbar.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = BottomNavbar;
function NavItem({ value, icon: Icon, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
        value: value,
        className: "flex flex-1 flex-col items-center gap-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-9 items-center justify-center rounded-full border text-sm data-[state=on]:border-neutral-900 data-[state=on]:bg-neutral-900 data-[state=on]:text-white", "border-transparent bg-neutral-100 text-neutral-500"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/BottomNavbar.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/BottomNavbar.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "data-[state=on]:text-neutral-900",
                children: label
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/BottomNavbar.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/BottomNavbar.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c1 = NavItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "BottomNavbar");
__turbopack_context__.k.register(_c1, "NavItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/ui/sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const Sheet = __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const SheetTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const SheetClose = __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const SheetPortal = __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const SheetOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-40 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/sheet.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c = SheetOverlay;
SheetOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const SheetContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = ({ className, side = "bottom", children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/sheet.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed z-50 flex w-full flex-col rounded-t-3xl bg-white p-4 shadow-lg outline-none", "data-[state=open]:animate-in data-[state=closed]:animate-out", side === "bottom" && "inset-x-0 bottom-0 data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom", className),
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c2 = SheetContent;
SheetContent.displayName = "SheetContent";
const SheetHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mb-2 flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/sheet.tsx",
        lineNumber: 59,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = SheetHeader;
SheetHeader.displayName = "SheetHeader";
const SheetTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-base font-semibold leading-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/sheet.tsx",
        lineNumber: 73,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = SheetTitle;
SheetTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const SheetDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-neutral-500", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/sheet.tsx",
        lineNumber: 85,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = SheetDescription;
SheetDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "SheetOverlay");
__turbopack_context__.k.register(_c1, "SheetContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "SheetContent");
__turbopack_context__.k.register(_c3, "SheetHeader");
__turbopack_context__.k.register(_c4, "SheetTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "SheetTitle");
__turbopack_context__.k.register(_c6, "SheetDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx'\n\nUnterminated string constant");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/Reactjs/Airbnb/Aluga+/components/ui/carousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Carousel",
    ()=>Carousel,
    "CarouselContent",
    ()=>CarouselContent,
    "CarouselItem",
    ()=>CarouselItem,
    "CarouselNext",
    ()=>CarouselNext,
    "CarouselPrevious",
    ()=>CarouselPrevious
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'embla-carousel-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
;
const CarouselContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    api: undefined,
    orientation: "horizontal"
});
const Carousel = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = _s(({ className, children, orientation = "horizontal", ...props }, ref)=>{
    _s();
    const [emblaRef, api] = useEmblaCarousel({
        axis: orientation === "horizontal" ? "x" : "y",
        dragFree: false,
        loop: false
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselContext.Provider, {
        value: {
            api,
            orientation
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className),
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: emblaRef,
                className: "overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex", orientation === "horizontal" ? "-ml-2" : "-mt-2 flex-col"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/carousel.tsx",
                    lineNumber: 35,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/carousel.tsx",
                lineNumber: 34,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/carousel.tsx",
            lineNumber: 33,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/carousel.tsx",
        lineNumber: 32,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "MiH4Z7TkwMqJFXUMZWrRc3gM3a0=", false, function() {
    return [
        useEmblaCarousel
    ];
})), "MiH4Z7TkwMqJFXUMZWrRc3gM3a0=", false, function() {
    return [
        useEmblaCarousel
    ];
});
_c1 = Carousel;
Carousel.displayName = "Carousel";
const CarouselContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/carousel.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CarouselContent;
CarouselContent.displayName = "CarouselContent";
const CarouselItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("min-w-0 flex-[0_0_100%] pl-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/carousel.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CarouselItem;
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = /*#__PURE__*/ _s1(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = _s1(({ className, children, ...props }, ref)=>{
    _s1();
    const { api, orientation } = __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](CarouselContext);
    const handleClick = ()=>{
        api?.scrollPrev();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        type: "button",
        onClick: handleClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm", orientation === "horizontal" ? "left-3 top-1/2 -translate-y-1/2" : "left-1/2 top-3 -translate-x-1/2", className),
        ...props,
        children: children ?? "‹"
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/carousel.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "cnJ1id59XfJwiiE6h8cn71+kPUk=")), "cnJ1id59XfJwiiE6h8cn71+kPUk=");
_c7 = CarouselPrevious;
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = /*#__PURE__*/ _s2(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = _s2(({ className, children, ...props }, ref)=>{
    _s2();
    const { api, orientation } = __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](CarouselContext);
    const handleClick = ()=>{
        api?.scrollNext();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        type: "button",
        onClick: handleClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm", orientation === "horizontal" ? "right-3 top-1/2 -translate-y-1/2" : "bottom-3 left-1/2 -translate-x-1/2", className),
        ...props,
        children: children ?? "›"
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/carousel.tsx",
        lineNumber: 116,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "cnJ1id59XfJwiiE6h8cn71+kPUk=")), "cnJ1id59XfJwiiE6h8cn71+kPUk=");
_c9 = CarouselNext;
CarouselNext.displayName = "CarouselNext";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Carousel$React.forwardRef");
__turbopack_context__.k.register(_c1, "Carousel");
__turbopack_context__.k.register(_c2, "CarouselContent$React.forwardRef");
__turbopack_context__.k.register(_c3, "CarouselContent");
__turbopack_context__.k.register(_c4, "CarouselItem$React.forwardRef");
__turbopack_context__.k.register(_c5, "CarouselItem");
__turbopack_context__.k.register(_c6, "CarouselPrevious$React.forwardRef");
__turbopack_context__.k.register(_c7, "CarouselPrevious");
__turbopack_context__.k.register(_c8, "CarouselNext$React.forwardRef");
__turbopack_context__.k.register(_c9, "CarouselNext");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/ui/progress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@radix-ui/react-progress'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const Progress = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, value, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressPrimitive.Root, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative h-1 w-full overflow-hidden rounded-full bg-white/30", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressPrimitive.Indicator, {
            className: "h-full w-full flex-1 bg-white transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/progress.tsx",
            lineNumber: 17,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/progress.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Progress;
Progress.displayName = ProgressPrimitive.Root.displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Progress$React.forwardRef");
__turbopack_context__.k.register(_c1, "Progress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListingStoryCard",
    ()=>ListingStoryCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/ui/carousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/ui/progress.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ListingStoryCard({ data, isWishlisted, onToggleWishlist }) {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "flex min-h-[calc(100vh-4.5rem)] flex-col justify-between pb-20 pt-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-[340px] w-full overflow-hidden rounded-3xl bg-neutral-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Carousel"], {
                                className: "h-full w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselContent"], {
                                        children: data.images.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselItem"], {
                                                className: "h-[340px]",
                                                onFocus: ()=>setIndex(i),
                                                onMouseDown: ()=>setIndex(i),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: src,
                                                    alt: data.title,
                                                    className: "h-full w-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 19
                                                }, this)
                                            }, src, false, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                                lineNumber: 38,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    data.images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselPrevious"], {}, void 0, false, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                                lineNumber: 54,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselNext"], {}, void 0, false, {
                                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": "Favorito",
                                onClick: onToggleWishlist,
                                className: "absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-5 w-5 transition", isWishlisted ? "fill-red-500 text-red-500" : "fill-transparent text-white")
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute inset-x-3 top-3 flex gap-1",
                                children: data.images.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                        value: i < index ? 100 : i === index ? 60 : 0
                                    }, i, false, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1 px-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-base font-semibold text-neutral-900",
                                children: data.title
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-medium uppercase tracking-wide text-neutral-500",
                                children: data.location
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-neutral-600",
                                children: data.description.length > 120 ? data.description.slice(0, 120) + "..." : data.description
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex items-center justify-between px-1 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold text-neutral-900",
                                children: [
                                    new Intl.NumberFormat("pt-MZ", {
                                        style: "currency",
                                        currency: "MZN",
                                        maximumFractionDigits: 0
                                    }).format(data.price),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-normal text-neutral-500",
                                        children: [
                                            " ",
                                            "/ dia"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-neutral-500",
                                children: [
                                    data.distance,
                                    " · ",
                                    data.dates
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-neutral-500",
                        children: [
                            "Anunciado por",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-neutral-800",
                                children: data.host.name
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(ListingStoryCard, "x2oTrUAHknTo02Ld7gcDOqaxQ8E=");
_c = ListingStoryCard;
var _c;
__turbopack_context__.k.register(_c, "ListingStoryCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/card.tsx",
        lineNumber: 8,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mb-2 flex flex-col gap-1", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/card.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-semibold leading-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/card.tsx",
        lineNumber: 35,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-1", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/card.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardContent;
CardContent.displayName = "CardContent";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/ui/separator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@radix-ui/react-separator'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const Separator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeparatorPrimitive.Root, {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 bg-neutral-200", orientation === "horizontal" ? "h-px w-full" : "h-full w-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/ui/separator.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Separator;
Separator.displayName = SeparatorPrimitive.Root.displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Separator$React.forwardRef");
__turbopack_context__.k.register(_c1, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserProfile",
    ()=>UserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/lucide-react/dist/esm/icons/store.js [app-client] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/ui/separator.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function UserProfile() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex min-h-[calc(100vh-4.5rem)] flex-col gap-6 pb-20 pt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 px-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                        className: "h-16 w-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                            className: "bg-[#FF585D] text-xl font-bold text-white",
                            children: "SA"
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-lg font-semibold text-neutral-900",
                                children: "Seu Aluga+ Profile"
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-neutral-500",
                                children: "Gerir anúncios, favoritos e conta"
                            }, void 0, false, {
                                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "mx-2 rounded-2xl p-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileItem, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"],
                            label: "Meus anúncios"
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileItem, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
                            label: "Favoritos"
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileItem, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
                            label: "Configurações"
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileItem, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"],
                            label: "Ajuda"
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileItem, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"],
                            label: "Sair",
                            danger: true
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = UserProfile;
function ProfileItem({ icon: Icon, label, danger }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: "flex w-full items-center justify-between px-4 py-3 text-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-700",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `text-left ${danger ? "font-semibold text-red-600" : "text-neutral-800"}`,
                    children: label
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c1 = ProfileItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "UserProfile");
__turbopack_context__.k.register(_c1, "ProfileItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Reactjs/Airbnb/Aluga+/constants.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/layout/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$desktop$2f$CategoryTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/desktop/CategoryTabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$mobile$2f$BottomNavbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/mobile/BottomNavbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$mobile$2f$FilterSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/mobile/FilterSheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$mobile$2f$ListingStoryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/mobile/ListingStoryCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$mobile$2f$UserProfile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/components/mobile/UserProfile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Reactjs/Airbnb/Aluga+/constants.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function HomePage() {
    _s();
    const [mainCategory, setMainCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("imoveis");
    const [searchText, setSearchText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [wishlist, setWishlist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mobileTab, setMobileTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const [filterOpen, setFilterOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [filterState, setFilterState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const filteredListings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomePage.useMemo[filteredListings]": ()=>{
            let list = __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LISTINGS"];
            list = list.filter({
                "HomePage.useMemo[filteredListings]": (l)=>{
                    if (mainCategory === "imoveis") return l.domain === "imoveis";
                    if (mainCategory === "logistica") return l.domain === "logistica";
                    return l.domain === "eventos";
                }
            }["HomePage.useMemo[filteredListings]"]);
            if (searchText.trim()) {
                const q = searchText.toLowerCase();
                list = list.filter({
                    "HomePage.useMemo[filteredListings]": (l)=>l.title.toLowerCase().includes(q) || l.location.toLowerCase().includes(q) || l.description.toLowerCase().includes(q)
                }["HomePage.useMemo[filteredListings]"]);
            }
            if (filterState.localizacao) {
                const loc = filterState.localizacao.toLowerCase();
                list = list.filter({
                    "HomePage.useMemo[filteredListings]": (l)=>l.location.toLowerCase().includes(loc)
                }["HomePage.useMemo[filteredListings]"]);
            }
            if (typeof filterState.precoMin === "number") {
                list = list.filter({
                    "HomePage.useMemo[filteredListings]": (l)=>l.price >= filterState.precoMin
                }["HomePage.useMemo[filteredListings]"]);
            }
            if (typeof filterState.precoMax === "number") {
                list = list.filter({
                    "HomePage.useMemo[filteredListings]": (l)=>l.price <= filterState.precoMax
                }["HomePage.useMemo[filteredListings]"]);
            }
            return list;
        }
    }["HomePage.useMemo[filteredListings]"], [
        mainCategory,
        searchText,
        filterState
    ]);
    const [mobileIndex, setMobileIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
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
    const contentDesktop = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "hidden md:block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$desktop$2f$CategoryTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CategoryTabs"], {
                value: mainCategory,
                onChange: setMainCategory,
                filter: {
                    precoMin: filterState.precoMin,
                    precoMax: filterState.precoMax
                },
                onFilterChange: (next)=>setFilterState((prev)=>({
                            ...prev,
                            precoMin: next.precoMin,
                            precoMax: next.precoMax
                        }))
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto max-w-6xl px-4 pb-10 pt-4 md:px-6 lg:px-8",
                children: filteredListings.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex min-h-[40vh] flex-col items-center justify-center text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg font-semibold",
                            children: "Nenhum anúncio encontrado para estes filtros."
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-sm text-neutral-500",
                            children: "Ajuste os filtros ou a pesquisa para ver mais opções."
                        }, void 0, false, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
                    children: filteredListings.map((listing)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: listing.images[0],
                                    alt: listing.title,
                                    className: "h-52 w-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                                    lineNumber: 116,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1 px-3 pb-3 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "line-clamp-1 text-sm font-semibold text-neutral-900",
                                            children: listing.title
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                                            lineNumber: 122,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium uppercase tracking-wide text-neutral-500",
                                            children: listing.location
                                        }, void 0, false, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-neutral-900",
                                            children: [
                                                new Intl.NumberFormat("pt-MZ", {
                                                    style: "currency",
                                                    currency: "MZN",
                                                    maximumFractionDigits: 0
                                                }).format(listing.price),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-normal text-neutral-500",
                                                    children: [
                                                        " ",
                                                        "/ dia"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                                    lineNumber: 121,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, listing.id, true, {
                            fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                            lineNumber: 112,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                    lineNumber: 110,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
    const contentMobile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "block md:hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mx-auto max-w-md px-4 pb-4 pt-2",
            children: [
                mobileTab === "home" && currentMobileListing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$mobile$2f$ListingStoryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListingStoryCard"], {
                    data: currentMobileListing,
                    isWishlisted: wishlist.includes(currentMobileListing.id),
                    onToggleWishlist: ()=>toggleWishlist(currentMobileListing.id)
                }, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                    lineNumber: 152,
                    columnNumber: 11
                }, this),
                mobileTab === "profile" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$mobile$2f$UserProfile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserProfile"], {}, void 0, false, {
                    fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                    lineNumber: 158,
                    columnNumber: 37
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
            lineNumber: 150,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                onSearch: setSearchText
            }, void 0, false, {
                fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            contentDesktop,
            contentMobile,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$mobile$2f$FilterSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterSheet"], {
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
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Reactjs$2f$Airbnb$2f$Aluga$2b2f$components$2f$mobile$2f$BottomNavbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomNavbar"], {
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
                lineNumber: 180,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Reactjs/Airbnb/Aluga+/app/page.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_s(HomePage, "mA1iSJXuD8/ZTLpC9u2FzzenDDg=");
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Reactjs_Airbnb_Aluga%2B_92d2086a._.js.map