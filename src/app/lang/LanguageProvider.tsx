'use client'
import { createContext, useContext, useState, useEffect } from "react";

type Language = "ENG" | "AR";

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
  storageKey?: string;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const initialState: LanguageProviderState = {
  language: "ENG",
  setLanguage: () => null,
};

const LanguageProviderContext = createContext<LanguageProviderState>(initialState);

export function LanguageProvider({
  children,
  defaultLanguage = "ENG",
  storageKey = "Language",
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  
  useEffect(() => {
    const savedLanguage = localStorage.getItem(storageKey) as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, [storageKey]);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("lang", language);
    html.setAttribute("dir", language === "AR" ? "rtl" : "ltr");
  }, [language]);

  const value = {
    language,
    setLanguage: (language: Language) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey, language);
      }
      setLanguage(language);
    },
  };

  return (
    <LanguageProviderContext.Provider value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider");

  return context;
};