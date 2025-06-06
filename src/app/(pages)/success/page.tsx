"use client"
import { useLanguage } from "@/app/lang/LanguageProvider";
import Container from "@/app/utils/Container";
import { FiPrinter } from "react-icons/fi";

const SuccessPage = () => {
    const { language } = useLanguage()
    const isEnglish = language === "ENG"
  const direction = isEnglish ? "ltr" : "rtl";

  return (
    <section className="min-h-[700px] mt-[-25px] flex flex-col justify-center items-center w-full mx-auto bg-[#fff]" dir={direction} lang={language}>
      <Container className="pt-20">
        <div></div>
      </Container>

      <div className="bg-white pb-10">
        <Container className="pt-10 space-y-6 max-w-7xl md:w-full w-80">
          <div className="-mt-20 bg-white shadow-[0_0_15px_rgba(0,0,0,0.05)] rounded-[22px] p-6 text-center space-y-4">
            <div>
              <h1 className="text-3xl font-extrabold text-[#F47D21] mb-1">
                {isEnglish ? "Success!" : "تم بنجاح!"}
              </h1>
              <p className="text-[#192330] text-sm">
                {isEnglish ? "Order No. #8987540" : "رقم الطلب #8987540"}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-[#192330] mb-1">
                  {isEnglish ? "Name" : "الاسم"}
                </p>
                <p className="font-extrabold">Ahmed Ismail</p>
              </div>
              <div>
                <p className="text-[#192330] mb-1">
                  {isEnglish ? "Phone Number" : "رقم الهاتف"}
                </p>
                <p className="font-extrabold">0534601372</p>
              </div>
              <div>
                <p className="text-[#192330] mb-1">
                  {isEnglish ? "Email" : "البريد الإلكتروني"}
                </p>
                <p className="font-extrabold break-all text-wrap">
                  Ahmedismail@monglish.uk.habola
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 shadow-[0_0_15px_rgba(0,0,0,0.05)] rounded-[22px] p-6">
            <div className="space-y-3 mb-6">
              <div className="bg-[#F2F2F2] rounded-2xl p-4 px-10 flex justify-between items-center">
                <div className={`flex items-center gap-3 ${isEnglish ? "text-left" : "text-right"}`}>
                  <p className="text-[#F47D21] font-extrabold mt-1 text-xl">x1</p>
                  <div className="flex flex-col">
                    <p className="text-[#FF9D52] text-sm">
                      {isEnglish ? "1 Month" : "شهر"}
                    </p>
                    <p className="text-[#F47D21] font-extrabold">
                      {isEnglish ? "Adult Course" : "دورة البالغين"}
                    </p>
                  </div>
                </div>
                <div className={isEnglish ? "text-right" : "text-left"}>
                  <p className="text-[#F47D21] font-bold text-xl">$240</p>
                </div>
              </div>

              <div className="bg-[#F2F2F2] rounded-2xl p-4 px-10 flex justify-between items-center">
                <div className={`flex items-center gap-3 ${isEnglish ? "text-left" : "text-right"}`}>
                  <p className="text-[#F47D21] font-extrabold mt-1 text-xl">x2</p>
                  <div className="flex flex-col">
                    <p className="text-[#FF9D52] text-sm">
                      {isEnglish ? "3 Months" : "3 شهور"}
                    </p>
                    <p className="text-[#F47D21] font-extrabold">
                      {isEnglish ? "Adult Course" : "دورة البالغين"}
                    </p>
                  </div>
                </div>
                <div className={isEnglish ? "text-right" : "text-left"}>
                  <p className="text-[#F47D21] font-bold text-xl">$480</p>
                </div>
              </div>
            </div>

            <div className="w-full mb-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
                <button className="w-full md:w-[60%] cursor-pointer bg-[#F47D21] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                  {isEnglish
                    ? "Print or Save to Homepage"
                    : "طباعة أو حفظ للصفحة الرئيسية"}
                </button>

                <div className="flex flex-1 items-center gap-2 text-sm text-[#165e84]">
                  <FiPrinter className="text-[#165e84]" size={20} />
                  <span className="font-semibold whitespace-nowrap md:text-lg text-md">
                    {isEnglish
                      ? "Note: Please print and keep the receipt."
                      : "ملحوظة: (يرجى طباعة الإيصال والاحتفاظ به.) "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default SuccessPage;
