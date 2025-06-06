"use client";
// importing React-Icons
import { FaArrowUp } from "react-icons/fa6";
// using Translation
import { useLanguage } from "@/app/lang/LanguageProvider";

const ScrollToTop = () => {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`text-white flex items-center gap-x-2 cursor-pointer text-right ${language === 'ENG' ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <FaArrowUp size={15} />
      <span className="md:text-lg text-sm underline">{language === 'ENG' ? 'To Top' : 'إلى الأعلى'}</span>
    </button>
  );
};

export default ScrollToTop;
