// Header.tsx
"use client";
import dynamic from "next/dynamic";
import { useLanguage } from "@/app/lang/LanguageProvider";

const Logo = dynamic(() => import("@/app/components/Logo"));
const LanguageToggle = dynamic(() => import("@/app/lang/LangToggleBtn"));
const CountdownTimer = dynamic(() => import("@/app/components/Counter"));
const Button = dynamic(() => import("@/app/utils/Button"));
const Popup = dynamic(() => import("@/app/components/popup/Popup"));
const FormPopup = dynamic(() => import("@/app/components/Form"));

import { usePopup } from "../context/PopupContext";

const Header = () => {
  const { language } = useLanguage();

  const { isOpen, setIsOpen } = usePopup();

  // Counter data
  const counter = {
    buttonTxt: language === "ENG" ? "Subscribe Now!" : "أشترك الآن!",
    infoTxt:
      language === "ENG"
        ? "Learn 4 times faster than any other course!"
        : "تعلم 4 مرات اسرع من اي كورس اخر!",
  };

  return (
    <>
      <section className="bg-[#0F6396]">
        <div className="container mx-auto flex items-center justify-center xl:gap-x-35 lg:gap-x-35 gap-x-10 md:flex-row flex-col md:py-2 py-5">
          <p
            className={`text-white xl:text-xl md:text-lg text-sm text-md xl:w-70 md:w-60 w-full ${
              language === "ENG" ? "md:text-left" : "md:text-right"
            } text-center`}
          >
            {counter.infoTxt}
          </p>
          <CountdownTimer />
          <Button width="w-35 xl:w-50" onClick={() => setIsOpen(true)}>
            {counter.buttonTxt}
          </Button>
          {isOpen && (
            <Popup onClose={() => setIsOpen(false)}>
              <FormPopup onClose={() => setIsOpen(false)} />
            </Popup>
          )}
        </div>
      </section>

      <header
        className="sticky top-5 z-50 
        backdrop-blur-md bg-gradient-to-r from-[#ededed]/50 to-[#fff]/50 
        border border-white shadow-lg rounded-full
        w-[90%] 2xl:w-full container mx-auto 
        flex justify-between items-center py-5 px-10"
      >
        <Logo />
        <LanguageToggle />
      </header>
    </>
  );
};

export default Header;
