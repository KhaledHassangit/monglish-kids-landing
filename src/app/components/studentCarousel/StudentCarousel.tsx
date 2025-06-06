// importing React Components
import React, { useState } from 'react';
import dynamic from "next/dynamic";
// importing Components
const TestimonialCard = dynamic(() => import("@/app/components/studentCarousel/TestimonialCard"));
const NavigationArrow = dynamic(() => import("@/app/components/studentCarousel/NavigationArrow"));
// using Translation
import { useLanguage } from "@/app/lang/LanguageProvider";

interface Student {
  id: number;
  videoId: string;
  testimonial: string;
  testimonialAr: string;
  subject: string;
  subjectAr: string;
}

const students: Student[] = [
  {
    id: 1,
    videoId: "dQw4w9WgXcQ",
    testimonial: "Adam has mastered the Present Perfect tense with impressive accuracy — a clear reflection of his passion for continuous growth.",
    testimonialAr: "نجح آدم في إتقان قواعد الPresent Perfect بدقةٍ تبرز شغفه الدائم بالتطور.",
    subject: "Thanks to the immersive methodology at Monglish",
    subjectAr: "بفضل منهج المعايشة في مونجلش"
  },
  {
    id: 2,
    videoId: "jNQXAC9IVRw",
    testimonial: "Student Perry presents her journey of learning English with Monglish International Academy.",
    testimonialAr: "تقدم الطالبة بيري و رحلتها في تعلم اللغة الإنجليزية مع أكاديمية مونجليش الدولية",
    subject: "Student Perry presents her journey with us",
    subjectAr: "تقدم الطالبة بيري و رحلتها معنا"
  },
  {
    id: 3,
    videoId: "M7lc1UVf-VE",
    testimonial: "Monglish's family and Adam's friends always encourage him to succeed.",
    testimonialAr: "عائلة مونجلش و أصدقاء آدم يشجعوه دائما على النجاح",
    subject: "Adam is a great example of courage and perseverance",
    subjectAr: "آدم مثال رائع للشجاعة والمثابرة"
  },
  {
    id: 4,
    videoId: "3JZ_D3ELwOQ",
    testimonial: "A Mongolian student wishes your son could speak English as fluently as her.",
    testimonialAr: "طالبة مونجليش تتمنى ابنك يتكلم الإنجليزية بطلاقة مثلها",
    subject: "You wish your son to speak English fluently",
    subjectAr: "تتمنى ابنك يتكلم الإنجليزية بطلاقة"
  },
  {
    id: 5,
    videoId: "kJQP7kiw5Fk",
    testimonial: "Learning English is no longer a big challenge for children.",
    testimonialAr: "لم يعد تعلم اللغة الإنجليزية تحديًا كبيرًا للأطفال",
    subject: "Thanks to modern educational methods",
    subjectAr: "بفضل الأساليب التعليمية الحديثة"
  }
];

const StudentCarousel = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % students.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + students.length) % students.length);
  };

  const getVisibleStudents = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + students.length) % students.length;
      visible.push({
        student: students[index],
        position: i,
        isActive: i === 0
      });
    }
    return visible;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="relative">
        {/* Navigation Arrows */}
        <NavigationArrow direction="left" onClick={prevSlide} />
        <NavigationArrow direction="right" onClick={nextSlide} />

        {/* Carousel Container - Desktop: 3 cards, Mobile: 1 card */}
        <div className="flex justify-center items-center mb-8 overflow-hidden">
          {/* Desktop view: Show 3 cards */}
          <div className="flex justify-center items-center gap-4 transition-all duration-700 ease-in-out">
            {getVisibleStudents().map(({ student, position, isActive }) => (
              <TestimonialCard
                key={`${student.id}-${position}`}
                student={student}
                isActive={isActive}
                position={position}
              />
            ))}
          </div>
        </div>

        {/* Active Student Description */}
        <div className="text-center md:max-w-[20rem] max-w-full mx-auto">
          <div className="bg-white md:w-full w-75 mx-auto rounded-b-3xl border-1 border-[#E6E6E6] p-6 md:p-8 md:mx-0 mt-[-15%] animate-fade-in transform transition-all duration-500">
            <p className="text-[#3D3D3D] font-bold my-4 text-xl md:text-base">
              {language === 'ENG' ? students[currentIndex].subject : students[currentIndex].subjectAr}
            </p>
            <p className="text-[#808080] leading-relaxed text-sm md:text-base" dir={language === 'ENG' ? "rtl" : "ltr"}>
              {language === 'ENG' ? students[currentIndex].testimonial : students[currentIndex].testimonialAr}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCarousel;