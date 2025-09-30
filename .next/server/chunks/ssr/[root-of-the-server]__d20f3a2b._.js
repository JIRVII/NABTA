module.exports = [
"[project]/Documents/GitHub/NABTA/nabta/.next-internal/server/app/plantai/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Documents/GitHub/NABTA/nabta/src/app/favicon.ico.mjs { IMAGE => \"[project]/Documents/GitHub/NABTA/nabta/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/GitHub/NABTA/nabta/src/app/favicon.ico.mjs { IMAGE => \"[project]/Documents/GitHub/NABTA/nabta/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/Documents/GitHub/NABTA/nabta/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/GitHub/NABTA/nabta/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Documents/GitHub/NABTA/nabta/src/app/plantai/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$NABTA$2f$nabta$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/NABTA/nabta/node_modules/next/server.js [app-rsc] (ecmascript)");
;
async function POST(req) {
    try {
        const body = await req.json();
        const userMessage = body.message;
        if (!userMessage) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$NABTA$2f$nabta$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "لم يتم إرسال رسالة."
            }, {
                status: 400
            });
        }
        // 🔑 استدعاء Google Generative AI API
        const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + process.env.GOOGLE_API_KEY, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: userMessage
                            }
                        ]
                    }
                ]
            })
        });
        const data = await res.json();
        // 🔎 استخراج الرد من Google
        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "لم أتمكن من توليد رد حالياً.";
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$NABTA$2f$nabta$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
            reply
        });
    } catch (error) {
        console.error("API Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$NABTA$2f$nabta$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "خطأ في الخادم."
        }, {
            status: 500
        });
    }
}
const res = await fetch("/api/plantai", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        message: userMsg
    })
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/Documents/GitHub/NABTA/nabta/src/app/plantai/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/GitHub/NABTA/nabta/src/app/plantai/page.jsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d20f3a2b._.js.map