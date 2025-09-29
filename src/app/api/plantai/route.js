// src/app/plantai/route.js
import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

// ⬅️ 1. تأكد من تهيئة المفتاح بشكل صحيح
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY, 
});

// ⬅️ 2. تحديد دور النموذج (System Instruction)
const SYSTEM_INSTRUCTION = "أنت خبير نباتات ذكي ومفيد جداً. مهمتك هي الإجابة على أسئلة المستخدمين حول العناية بالنباتات، تشخيص الأمراض النباتية، وتقديم نصائح لزراعة صحية. ردودك يجب أن تكون دقيقة وودودة.";


export async function POST(request) {
  try {
    const { message } = await request.json();

    // ⬅️ 3. إنشاء جلسة دردشة وإضافة التوجيهات
    const chat = ai.chats.create({
      model: "gemini-2.5-flash", // يمكنك استخدام gemini-2.5-flash لسرعة الرد
      config: {
        systemInstruction: SYSTEM_INSTRUCTION, // إضافة دور الخبير هنا
      },
      // إذا كنت تريد الحفاظ على سياق الدردشة الطويل، أضف السجل هنا.
      // لكن حاليًا، نركز على الرد على رسالة واحدة.
    });

    const response = await chat.sendMessage({ message });
    
    // تأكد من أن الرد يتم استخراجه بشكل صحيح
    const reply = response.text;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Gemini API Error:', error);
    // إرسال رسالة خطأ واضحة
    return NextResponse.json({ error: 'حدث خطأ أثناء الاتصال بخبير النبات. (تحقق من مفتاح API)' }, { status: 500 });
  }
}