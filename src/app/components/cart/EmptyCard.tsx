"use client";

import { useLanguage } from "@/app/lang/LanguageProvider";
import Image from "next/image";
import Link from "next/link";

const EmptyCard = () => {
  const { language } = useLanguage();

  const isEng = language === "ENG";

  return (
    <div className="flex flex-col  items-center justify-center p-3 text-center">
      <div className="relative w-full max-w-[410px] aspect-[1/1] mb-6 -mt-10">
        <Image
          src="/images/cartIllustartion.webp"
          alt={isEng ? "Empty Shopping Cart" : "سلة التسوق فارغة"}
          fill
          className="object-contain"
          priority
        />
      </div>

      <h2 className="text-2xl font-extrabold mb-3 text-[#3D3D3D]">
        {isEng ? "You have nothing in your cart" : "لا يوجد لديك شيء في السلة"}
      </h2>

      <p className="text-[#3D3D3D] text-lg font-extrabold mb-6">
        {isEng
          ? "Start your shopping journey now! Subscribe to our courses and enjoy a unique learning experience."
          : "ابدأ رحلتك التسوقية الآن! اشترك في دوراتنا واستفد من تجربة تعلم فريدة"}
      </p>

      <Link
        href="/?"
        className="w-[330px] h-[54px] px-[24px] py-[14px] bg-[#f7862f] text-white rounded-[22px] font-medium gap-[10px] flex items-center justify-center transition-colors hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
      >
        {isEng ? "Shop Now" : "شراء"}
      </Link>
    </div>
  );
};

export default EmptyCard;
