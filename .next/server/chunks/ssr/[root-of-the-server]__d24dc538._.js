module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Documents/GitHub/NABTA/nabta/src/app/plantai/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlantAI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$NABTA$2f$nabta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/NABTA/nabta/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$NABTA$2f$nabta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/NABTA/nabta/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function PlantAI() {
    const [userMsg, setUserMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$NABTA$2f$nabta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""); // تعريف المتغير
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$NABTA$2f$nabta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$NABTA$2f$nabta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // إرسال الرسالة للـ API
    const sendMessage = async ()=>{
        if (!userMsg.trim()) return;
        setLoading(true);
        // إضافة رسالة المستخدم للشات
        setMessages((prev)=>[
                ...prev,
                {
                    sender: "user",
                    text: userMsg
                }
            ]);
        try {
            const res = await fetch("/api/plantai", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: userMsg
                })
            });
            const data = await res.json();
            // إضافة رد الذكاء
            setMessages((prev)=>[
                    ...prev,
                    {
                        sender: "ai",
                        text: data.reply || "ما قدرت أفهم سؤالك 🌱"
                    }
                ]);
        } catch (error) {
            setMessages((prev)=>[
                    ...prev,
                    {
                        sender: "ai",
                        text: "صار خطأ، جرّب مره ثانية 🚨"
                    }
                ]);
        }
        setUserMsg(""); // مسح النص
        setLoading(false);
    };
    // زر الكاميرا (يخلي المستخدم يختار صورة)
    const openCamera = ()=>{
        alert("📷 ميزة الكاميرا لسه تحتاج ربط بخاصية تحليل الصور.");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$NABTA$2f$nabta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            backgroundColor: "#f9f6f1",
            color: "#2f4f2f",
            fontFamily: "Arial, sans-serif",
            minHeight: "100vh",
            padding: "20px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$NABTA$2f$nabta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    textAlign: "center",
                    color: "#2e7d32"
                },
                children: "🌱 خبير النبات الذكي"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/NABTA/nabta/src/app/plantai/page.jsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$NABTA$2f$nabta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    backgroundColor: "#ffffff",
                    border: "2px solid #c5e1a5",
                    borderRadius: "10px",
                    padding: "15px",
                    maxWidth: "600px",
                    margin: "20px auto",
                    height: "400px",
                    overflowY: "auto"
                },
                children: messages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$NABTA$2f$nabta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            textAlign: msg.sender === "user" ? "right" : "left",
                            color: msg.sender === "user" ? "#1b5e20" : "#33691e",
                            backgroundColor: msg.sender === "user" ? "#e6ee9c" : "#c5e1a5",
                            padding: "10px",
                            borderRadius: "8px",
                            margin: "8px 0",
                            maxWidth: "80%"
                        },
                        children: msg.text
                    }, i, false, {
                        fileName: "[project]/Documents/GitHub/NABTA/nabta/src/app/plantai/page.jsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/NABTA/nabta/src/app/plantai/page.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$NABTA$2f$nabta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "10px",
                    maxWidth: "600px",
                    margin: "auto"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$NABTA$2f$nabta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: userMsg,
                        onChange: (e)=>setUserMsg(e.target.value),
                        placeholder: "اكتب مشكلتك مع النبتة...",
                        style: {
                            flex: 1,
                            padding: "10px",
                            borderRadius: "8px",
                            border: "1px solid #c5e1a5",
                            fontSize: "16px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/NABTA/nabta/src/app/plantai/page.jsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$NABTA$2f$nabta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: sendMessage,
                        disabled: loading,
                        style: {
                            backgroundColor: "#2e7d32",
                            color: "#fff",
                            border: "none",
                            borderRadius: "8px",
                            padding: "10px 15px",
                            cursor: "pointer"
                        },
                        children: loading ? "..." : "إرسال"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/NABTA/nabta/src/app/plantai/page.jsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$NABTA$2f$nabta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: openCamera,
                        style: {
                            backgroundColor: "#81c784",
                            color: "#fff",
                            border: "none",
                            borderRadius: "8px",
                            padding: "10px 15px",
                            cursor: "pointer"
                        },
                        children: "📷"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/NABTA/nabta/src/app/plantai/page.jsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/NABTA/nabta/src/app/plantai/page.jsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/NABTA/nabta/src/app/plantai/page.jsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/NABTA/nabta/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Documents/GitHub/NABTA/nabta/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Documents/GitHub/NABTA/nabta/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/Documents/GitHub/NABTA/nabta/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Documents/GitHub/NABTA/nabta/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d24dc538._.js.map