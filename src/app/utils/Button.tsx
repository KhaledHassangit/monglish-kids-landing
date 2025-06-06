"use client";
import { ButtonHTMLAttributes, ReactNode } from "react";
// using Translation
import { useLanguage } from "@/app/lang/LanguageProvider";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width?: string;
  center?: string;
  id?: string;
}

const Button = ({
  children,
  width = "",
  center = "",
  id = "",
  ...rest
}: IButtonProps) => {
  const { language } = useLanguage();

  return (
    <button
      className={`${width} ${center} 
        bg-[#FF760B] hover:bg-[#fff] border-2 border-[#ff7600] cursor-pointer rounded-xl p-3 text-white text-sm xl:text-lg transition text-[#fff] hover:text-[#ff7600] font-semibold
        ${language === "ENG" ? "font-poppins" : "font-cairo"}`}
      {...rest}
      id={id}
    >
      {children}
    </button>
  );
};

export default Button;
