import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#f5f0e6] text-center px-4">
      <h1 className="text-4xl font-bold text-green-800 mb-2">نبتة 🌱</h1>
      <p className="text-gray-700 mb-8">منصتك الذكية لاقتناء النباتات والعناية بها</p>

      <Link href="/plantai" className="w-full max-w-xs py-3 mb-3 rounded-lg bg-green-700 text-white font-medium text-center block">
        🤖 خبير النبات (AI Plant)
      </Link>

      <Link href="/stores" className="w-full max-w-xs py-3 mb-3 rounded-lg bg-green-500 text-white font-medium text-center block">
        🛍 قائمة متاجر نبتة
      </Link>

      <Link href="/map" className="w-full max-w-xs py-3 mb-3 rounded-lg bg-green-400 text-white font-medium text-center block">
        📍 خريطة المشاتل
      </Link>

      <Link href="/support" className="w-full max-w-xs py-3 mb-3 rounded-lg bg-green-300 text-white font-medium text-center block">
        💬 اسأل نبتة (خدمة العملاء)
      </Link>
    </div>
  );
}