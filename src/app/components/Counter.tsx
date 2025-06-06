"use client";
// importing React Components
import { useEffect, useState } from "react";
// using Translation
import { useLanguage } from "@/app/lang/LanguageProvider";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const getTimeLeft = (targetDate: Date): TimeLeft => {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  return {
    days: Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0),
    hours: Math.max(Math.floor((distance / (1000 * 60 * 60)) % 24), 0),
    minutes: Math.max(Math.floor((distance / 1000 / 60) % 60), 0),
    seconds: Math.max(Math.floor((distance / 1000) % 60), 0),
  };
};

export default function CountdownTimer() {
  const { language } = useLanguage();

  const targetDate = new Date("2025-06-10T00:00:00"); // غيّر التاريخ حسب الحدث
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const box = (value: number, label: string) => (
    <div className="flex flex-col items-center text-white py-3">
      <span className="lg:text-2xl text-lg font-bold bg-[#4888af] px-2 py-3 w-15 md:w-14 rounded-lg text-center">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-sm">{label}</span>
    </div>
  );

  return (
    <div dir="rtl" className="flex gap-2 justify-center">
      {box(timeLeft.days, language === "ENG" ? "Days" : "ايام")}
      {box(timeLeft.hours, language === "ENG" ? "Hours" : "ساعات")}
      {box(timeLeft.minutes, language === "ENG" ? "Minutes" : "دقائق")}
      {box(timeLeft.seconds, language === "ENG" ? "Seconds" : "ثواني")}
    </div>
  );
}
