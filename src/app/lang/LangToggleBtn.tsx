"use client";
import { useLanguage } from "@/app/lang/LanguageProvider";
// importing React-Icons
import { FaChevronDown } from "react-icons/fa";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "ENG" ? "AR" : "ENG")}
      className="cursor-pointer flex items-center"
    >
      <span className="text-[#165E84] order-2 xl:text-lg md:text-md text-sm"><FaChevronDown /></span>
      <span className="px-2 text-[#165E84] font-semibold xl:text-lg md:text-md text-sm">{language === "ENG" ? "AR" : "ENG"}</span>
    </button>
  );
}
