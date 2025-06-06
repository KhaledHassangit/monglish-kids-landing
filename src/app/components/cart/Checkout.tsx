"use client";
import { useLanguage } from "@/app/lang/LanguageProvider";
import Image from "next/image";
import { useState } from "react";
import EnrollmentForm from "./enrollmentform";

const Checkout = () => {
  const { language } = useLanguage();
  const isEng = language === "ENG";
  const dir = isEng ? "rtl" : "ltr";

  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);

  const [discountCode, setDiscountCode] = useState("");
  const subtotal = 240;
  const shipping = 0;
  const total = 480;

  return (
    <div className="mx-auto space-y-4" dir={dir}>
      <div className="bg-white shadow-[0_0_15px_rgba(0,0,0,0.05)] rounded-[22px] p-8">
        <div
          className={`flex items-center justify-${
            isEng ? "start" : "end"
          } space-x-2 ${isEng ? "" : "space-x-reverse"} mb-4`}
        >
          <span className="text-[#06111d] font-semibold ">
            {isEng ? "?Have a discount code" : "لديك كود خصم ؟"}
          </span>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder={isEng ? "Enter discount code" : "أدخل كود الخصم"}
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            className={`w-full placeholder:text-xs bg-[#e4ebf3] rounded-[22px] px-4 py-5 text-gray-500 ${
              isEng ? "text-left" : "text-right"
            }`}
          />
          <button
            className={`absolute ${
              isEng ? "right-1" : "left-1"
            } top-1/2 transform -translate-y-1/2 bg-[#F47D21]
            text-white px-8 py-4 cursor-pointer rounded-[22px] font-semibold text-sm`}
          >
            {isEng ? "Apply" : "تطبيق"}
          </button>
        </div>
      </div>

      {/* Pricing Summary */}
      <div className="bg-white shadow-[0_0_15px_rgba(0,0,0,0.05)] rounded-[22px] p-8">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <span className="font-bold text-[#06111d] text-left">
              ${subtotal}
            </span>
            <span className="text-[#06111d] font-bold text-right">
              {isEng ? "Subtotal" : "قيمة السلة"}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-bold text-[#06111d] text-left">
              ${shipping}
            </span>
            <span className="text-[#06111d] font-bold text-right">
              {isEng ? "Friends/Family Discounts" : "خصومات  الأصدقاء/العائلة"}
            </span>
          </div>

          <hr className="border-gray-200" />

          <div className="flex justify-between items-center text-lg font-bold">
            <span className="text-[#06111d] font-extrabold text-left">
              ${total}
            </span>
            <span className="text-right text-[#06111d] font-extrabold">
              {isEng ? "Total Amount" : "إجمالي المبلغ"}
            </span>
          </div>
        </div>

        <button
          onClick={() => setShowEnrollmentForm(true)}
          className="w-full bg-[#FF9D52] hover:bg-[#F47D21] cursor-pointer text-white font-semibold py-4 px-4 rounded-[22px] mt-12 transition-colors"
        >
          {isEng ? "Confirm Purchase" : "تأكيد الشراء"}
        </button>
      </div>

      {/* Payment Methods */}
      <div className="space-y-6">
        {/* Tamara */}
        <div className="bg-white shadow-[0_0_15px_rgba(0,0,0,0.05)] rounded-[22px] p-0 overflow-hidden">
          <div className="bg-[#d9d9d9] p-4 rounded-t-[22px] rounded-b-[24px] flex items-center gap-5 justify-end">
            <span className="font-extrabold  whitespace-nowrap  text-lg text-[#3D3D3D] text-right">
              {isEng ? "Installments with Tamara!" : "!التقسيط مع تمارا"}
            </span>
            <div className="relative  w-[100px] h-[50px] flex-shrink-0">
              <Image
                src="/images/tamara.svg"
                alt={isEng ? "Tamara Payment" : "تمارا"}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="p-8 pt-6">
            <div
              className={`grid ${
                isEng ? "grid-cols-2" : "grid-cols-2"
              } gap-6 mb-6`}
            >
              {/* UAE Dirham */}
              <div className="text-center">
                <div
                  className="font-extrabold whitespace-nowrap  text-xl text-[#3D3D3D] mb-3"
                  style={{ textAlign: isEng ? "left" : "right" }}
                >
                  {isEng ? "UAE Dirham" : "الدرهم الإماراتي"}
                </div>
                <ul
                  className={`text-sm text-black font-semibold leading-relaxed space-y-2.5 ${
                    isEng ? "text-left" : "text-right"
                  }`}
                >
                  <li>
                    {isEng
                      ? "Installments available from 100 to 3000"
                      : "(من 100 إلى 3000) متاح عبر التقسيط"}
                  </li>
                  <li>
                    {isEng
                      ? "Cash payment available from 3000 to 10,000"
                      : "(من 3000 إلى 10,000) متاح عبر الدفع النقدي"}
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <div
                  className="font-extrabold  whitespace-nowrap text-xl text-[#3D3D3D] mb-3"
                  style={{ textAlign: isEng ? "left" : "right" }}
                >
                  {isEng ? "Saudi Riyal" : "الريال السعودي"}
                </div>
                <ul
                  className={`text-sm text-black font-semibold leading-relaxed space-y-2.5 ${
                    isEng ? "text-left" : "text-right"
                  }`}
                >
                  <li>
                    {isEng
                      ? "Installments available from 100 to 2500"
                      : "(من 100 إلى 2500) متاح عبر التقسيط"}
                  </li>
                  <li>
                    {isEng
                      ? "Cash payment available from 2500 to 17500"
                      : "(من 2500 إلى 17500) متاح عبر الدفع النقدي"}
                  </li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => setShowEnrollmentForm(true)}
              className="w-full border-[1.5px] border-[#F47D21] text-[#F47D21] hover:bg-orange-50 font-bold py-4 px-4 rounded-[22px] transition-colors"
            >
              {isEng ? "Start Now" : "ابدأ الآن"}
            </button>
          </div>
        </div>

        {/* Tabby */}
        <div className="bg-white shadow-[0_0_15px_rgba(0,0,0,0.05)] rounded-[22px] p-0 overflow-hidden">
          <div className="bg-[#d9d9d9] p-4 rounded-t-[22px] rounded-b-[24px] flex items-center gap-5 justify-end">
            <span className="font-extrabold text-lg text-[#3D3D3D] text-right">
              {isEng ? "Installments with Tabby!" : "!التقسيط مع تابي"}
            </span>
            <div className="relative w-[100px] h-[50px] flex-shrink-0">
              <Image
                src="/images/tabby.svg"
                alt={isEng ? "Tabby Payment" : "تابي"}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="p-8 pt-6">
            <div
              className={`grid ${
                isEng ? "grid-cols-1" : "grid-cols-1"
              } gap-6 mb-6`}
            >
              {/* UAE Dirham */}
              <div className="text-center">
                <div
                  className="font-extrabold text-xl text-[#3D3D3D] mb-3"
                  style={{ textAlign: isEng ? "left" : "right" }}
                >
                  {isEng ? "UAE Dirham" : "الدرهم الإماراتي"}
                </div>
                <ul
                  className={`text-sm text-black font-semibold leading-relaxed space-y-1.5 ${
                    isEng ? "text-left" : "text-right"
                  }`}
                >
                  <li>
                    {isEng
                      ? "Available now from 500 to 3000 installments"
                      : "(من 500 إلى 3000) متاح الان بنظام التقسيط"}
                  </li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => setShowEnrollmentForm(true)}
              className="w-full border-[1.5px] border-[#F47D21] text-[#F47D21] hover:bg-orange-50 font-bold py-4 px-4 rounded-[22px] transition-colors"
            >
              {isEng ? "Start Now" : "ابدأ الآن"}
            </button>
          </div>
        </div>
      </div>

      <EnrollmentForm
        isOpen={showEnrollmentForm}
        onClose={() => setShowEnrollmentForm(false)}
      />
    </div>
  );
};

export default Checkout;
