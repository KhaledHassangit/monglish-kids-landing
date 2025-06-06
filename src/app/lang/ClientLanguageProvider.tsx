"use client";
import { LanguageProvider } from "./LanguageProvider";

export default function ClientLanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LanguageProvider defaultLanguage="en">{children}</LanguageProvider>;
}
