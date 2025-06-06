'use client'
// src/app/context/PopupContext.tsx
import { createContext, useState, useContext, ReactNode } from "react";

type PopupContextType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <PopupContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
};
