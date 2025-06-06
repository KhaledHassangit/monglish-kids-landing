"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../../lang/LanguageProvider';

interface TitleProps {
  ItemsLength?: number;
}

const CartTitle = ({ ItemsLength = 0 }: TitleProps) => {
  const { language } = useLanguage();
  const isEng = language === "ENG";
  const cartTextAlign = isEng ? "text-left" : "text-right";

  return (
    <div
      className={`flex flex-col md:flex-row md:flex-wrap justify-between items-start md:items-center gap-4 w-full`}
      dir={isEng ? "rtl" : "ltr"}
    >
      <h2 className={`font-extrabold text-xl sm:text-2xl md:text-3xl text-[#3D3D3D] w-full md:w-auto ${cartTextAlign} ${ItemsLength > 0 ? 'md:flex-[1_0_100%]' : ''}`}>
        {isEng ? "Shopping Cart" : "سلة المشتريات"}
      </h2>

      {ItemsLength > 0 ? (
        <div className={`flex ${isEng ? 'flex-row' : 'flex-row-reverse'} flex-wrap items-center gap-2 w-full md:w-auto`}>
          <p className="font-extrabold text-sm sm:text-xl text-[#3D3D3D] whitespace-nowrap">
            {isEng ? "?Facing any payment issues" : "تواجه أي مشكلة في الدفع؟"}
          </p>

          <Link
            href="/customer-service"
            className={`flex items-center justify-center gap-2 font-semibold bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-[22px] text-sm sm:text-md hover:bg-gray-100 transition-colors whitespace-nowrap ${isEng ? 'flex-row' : 'flex-row-reverse'}`}
          >
            <Image
              src="/images/Whatsapp.svg"
              alt={isEng ? "WhatsApp" : "واتساب"}
              width={16}
              height={16}
              className="w-4 h-4"
            />
            {isEng ? "Customer Service" : "خدمة العملاء"}
          </Link>
        </div>
      ) : (
        <div className="hidden md:block" style={{ width: '150px' }}></div>
      )}
    </div>
  );
};

export default CartTitle;