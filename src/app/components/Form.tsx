"use client";
import { useState } from "react";
import { IoClose, IoChevronDown } from "react-icons/io5";
import Image from "next/image";
import { useLanguage } from "@/app/lang/LanguageProvider";
import { usePopup } from "../context/PopupContext";

type FormPopupProps = {
  onClose?: () => void;
};

export default function FormPopup({ onClose }: FormPopupProps) {
  const { language } = useLanguage();
  const direction = language === "ENG" ? "ltr" : "rtl";

  const [selectedCountry, setSelectedCountry] = useState("+966");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { setIsOpen } = usePopup();
  
  const handleClose = () => {
    if (onClose) {
      onClose(); // استخدم الـ prop لو موجود
    } else {
      setIsOpen(false); // fallback لو مش موجود
    }
  };

  const data = {
    title:
      language === "ENG" ? "Don't miss the opportunity!" : "لا تفوّت الفرصة!",
    subtitle:
      language === "ENG"
        ? "Book your seat now and enjoy a free trial class\nHurry before time runs out!"
        : "احجز مقعدك الآن واستمتع بحصة تجريبية مجانية\nسارع قبل انتهاء الوقت!",
    fullName: language === "ENG" ? "Full Name" : "الاسم الكامل",
    phoneLabel:
      language === "ENG"
        ? "Country code followed by WhatsApp number"
        : "كود الدولة متبوعا برقم الواتس أب",
    phonePlaceholder: language === "ENG" ? "Phone Number" : "رقم الهاتف",
    email: language === "ENG" ? "Email Address" : "البريد الإلكتروني",
    emailPlaceholder: language === "ENG" ? "Email" : "البريد الإلكتروني",
    terms:
      language === "ENG"
        ? "Personal details are saved and used only in relation to your request only.<br />Please read the <span>Terms & Conditions</span> for more information."
        : "تُحفظ التفاصيل الشخصية وتستخدم فقط فيما يتعلق بطلبك<br />فقط. يُرجى قراءة <span>الشروط والأحكام</span> للمزيد من المعلومات.",
    subscribe: language === "ENG" ? "Subscribe Now" : "اشترك الآن",
    openForm: language === "ENG" ? "Open Form" : "افتح النموذج",
  };

  return (
    <>
      <div className="relative fixed inset-0 z-50 min-h-screen flex items-center justify-center p-4 overflow-hidden">
        <div className="relative z-10 bg-white rounded-2xl w-full max-w-lg md:max-w-2xl">
          <button
            onClick={handleClose}
            className="absolute cursor-pointer top-4 border-[2px] border-[#165E84] right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
          >
            <IoClose className="w-5 h-5 font-bold text-[#165E84]" />
          </button>
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 max-w-[350px] md:max-w-[400px]">
            <div className="rounded-lg px-4 py-8 md:py-2 ">
              <Image
                src="/images/popupLogo.webp"
                alt="Monglish International Academy"
                width={400}
                height={150}
                priority
              />
            </div>
          </div>

          <div className="pt-24 px-6 pb-0 flex mt-4 flex-col items-center">
            <h2
              className="text-3xl md:text-4xl font-extrabold text-[#F47D21] text-center mb-2"
              dir={direction}
            >
              {data.title}
            </h2>

            <p
              className="text-[#3d3d3d] font-semibold text-center text-md mb-8"
              dir={direction}
            >
              {data.subtitle.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>

            <div className="space-y-4 w-full">
              <div className="w-full flex flex-col md:flex-row gap-3">
                <div className="w-full md:w-1/2">
                  <label
                    className="block mb-1 text-sm font-medium text-[#8D93A1] w-full"
                    dir={direction}
                  >
                    {data.fullName}
                  </label>
                  <input
                    type="text"
                    placeholder={data.fullName}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-6 py-4 mt-1.5 bg-[#f7f9fc] placeholder:text-[#B1BBC6] rounded-lg focus:outline-none "
                    dir={direction}
                  />
                </div>

                <div className="w-full md:w-1/2">
                  <label
                    className="block mb-1 text-sm font-medium text-[#8D93A1] w-full"
                    dir={direction}
                  >
                    {data.phoneLabel}
                  </label>
                  <div className="flex">
                    <input
                      type="tel"
                      placeholder={data.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={`flex-1 px-6 py-4 mt-1.5 bg-[#f7f9fc] focus:outline-none placeholder:text-[#B1BBC6]
                        ${
                          direction === "rtl" ? "rounded-r-lg" : "rounded-l-lg"
                        }`}
                      dir={direction}
                    />
                    <div className="relative">
                      <select
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        className={`appearance-none px-6 py-4 mt-1.5 text-[#8D93A1] bg-[#f7f9fc] h-[56px] text-sm focus:outline-none border-r-0
                          ${
                            direction === "rtl"
                              ? "rounded-l-lg pl-8"
                              : "rounded-r-lg pr-8"
                          }`}
                        dir="ltr"
                      >
                        <option value="+966">+966</option>
                        <option value="+971">+971</option>
                        <option value="+965">+965</option>
                        <option value="+974">+974</option>
                      </select>
                      <IoChevronDown className="absolute right-2 top-9 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <label
                  className="block mb-1 text-sm font-medium text-[#8D93A1] w-full"
                  dir={direction}
                >
                  {data.email}
                </label>
                <input
                  type="email"
                  placeholder={data.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-6 py-4 mt-1.5 placeholder:text-[#B1BBC6] bg-[#f7f9fc] rounded-lg"
                  dir={direction}
                />
              </div>
            </div>
          </div>

          <div className="relative mt-8">
            <svg
              viewBox="0 0 400 100"
              className="w-full h-20 transform scale-x-[-1]"
              preserveAspectRatio="none"
            >
              <path
                d="M0,50 Q100,10 200,50 T400,50 L400,100 L0,100 Z"
                fill="#186189"
              />
            </svg>

            <div className="bg-[#186189] px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 rounded-b-2xl">
              <p
                className={`text-white text-sm text-center font-semibold ${
                  direction === "rtl" ? " md:text-right" : " md:text-left"
                }`}
                dir={direction}
                dangerouslySetInnerHTML={{
                  __html: data.terms.replace(
                    "<span>",
                    '<span class="text-[#F47D21] underline">'
                  ),
                }}
              />
              <button className="bg-[#F47D21] whitespace-nowrap cursor-pointer text-white px-6 md:px-16 py-3 rounded-[22px] font-medium transition-colors">
                {data.subscribe}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
