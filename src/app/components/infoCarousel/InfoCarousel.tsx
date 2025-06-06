"use client";
// importing React Components
import React, { useState } from "react";
import dynamic from "next/dynamic";
// importing Components
const TestimonialCard = dynamic(
  () => import("@/app/components/infoCarousel/TestimonialCard")
);
const NavigationArrow = dynamic(
  () => import("@/app/components/infoCarousel/NavigationArrow")
);
// using Translation
import { useLanguage } from "@/app/lang/LanguageProvider";

interface Card {
  id: number;
  Image: string;
  title: string;
  subTitle: string;
}

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language } = useLanguage();

  const cards: Card[] = [
    {
      id: 1,
      Image: "/images/card1.webp",
      title: language === "ENG" ? "Our Mongi - immerse" : "منهج المعايشة",
      subTitle:
        language === "ENG"
          ? "The Mongi-Immerse Method is the ideal solution for ensuring cards achieve the highest levels of English education by engaging with the language daily."
          : "يُعد منهج المعايشة الحل المثالي، لضمان حصول الطلاب على أعلى مستويات التعليم والتدريب في اللغة الانجليزية، عبر اكتساب اللغة والتعايش معها بشكل يومي.",
    },
    {
      id: 2,
      Image: "/images/card2.webp",
      title:
        language === "ENG" ? "Internationally Accredited" : "معتمدين دوليا",
      subTitle:
        language === "ENG"
          ? "The Mongi-Immerse Learning Method is a unique, globally protected language teaching approach, registered with the U.S. Library of Congress (#TXU002361898)."
          : "منهج المعايشة هو منهجنا الحصري لتدريس اللغات الأجنبية والمسجل في مكتبة الكونجرس الأمريكية برقم (# TXU002361898)، وهذا المنهج محمي بموجب قوانين حقوق النشر في الولايات المتحدة الأمريكية وجميع أنحاء العالم.",
    },
    {
      id: 3,
      Image: "/images/card3.webp",
      title: language === "ENG" ? "Less than $2 per hour" : "أقل من 2$ للساعة",
      subTitle:
        language === "ENG"
          ? "Enjoy strong and accredited curricula at our lowest  price, with over 40+ hours monthly at a value of less than $2 per hour."
          : "استمتع بمناهج قويه و معتمده بأقل سعر لدينا أكثر من 40+ ساعة شهرياً بقيمة تقل عن 2$ للساعة الواحدة.",
    },
    {
      id: 4,
      Image: "/images/card4.webp",
      title:
        language === "ENG"
          ? "Pioneering in Language Teaching."
          : "الريادة في تعليم اللغات",
      subTitle:
        language === "ENG"
          ? "The academy holds licenses for distance English education in the US, UK, and Egypt, reinforcing its position as a leading language educator in the Middle East, committed to global standards."
          : "الأكاديمية مرخصة رسميًا لتقديم تعليم اللغة الإنجليزية عن بُعد في الولايات المتحدة، المملكة المتحدة، ومصر، مما يعزز مكانتها كإحدى أبرز الأكاديميات في الشرق الأوسط، مع التزامها بالمعايير الدولية.",
    },
    {
      id: 5,
      Image: "/images/card5.webp",
      title:
        language === "ENG"
          ? "Over 200 experts /specialists"
          : "اكثر من 200 متخصص",
      subTitle:
        language === "ENG"
          ? "Our experts are committed to providing excellent educational services, always striving for the highest levels of success and student satisfaction."
          : "الخبراء ملتزمون بتقديم خدمات تعليمية متفوقة، حيث يجمعون بين الجودة العالية والتميز في كل خدمة نقدمها، مسعين دوماً لتحقيق أعلى مستويات النجاح والرضا لطلابنا.",
    },
    {
      id: 6,
      Image: "/images/card6.webp",
      title: language === "ENG" ? "Teaching experts" : "خبراء في التدريس",
      subTitle:
        language === "ENG"
          ? "Their experience extends over years of teaching; they have dedicated all their expertise to delivering educational courses at the highest level."
          : "تمتد خبرتهم إلى سنوات من التدريس، كرسوا جميع خبراتهم من أجل تقديم دورات تعليمية على أعلى مستوى.",
    },
    {
      id: 7,
      Image: "/images/card7.webp",
      title:
        language === "ENG"
          ? "In 22 countries around the world."
          : "في 22 دولة حول العالم",
      subTitle:
        language === "ENG"
          ? "Our global presence fosters openness to diverse cultures, ensuring educational programs tailored to diverse student needs."
          : "هذا الانتشار الواسع منح الأكاديمية بُعدًا عالميًا فريدًا وأهلها لاكتساب خصائص تميزها، أبرزها الانفتاح على ثقافات وبيئات متنوعة. نحن نتفهم ونحترم التنوع الثقافي، ونسعى دومًا لتقديم برامج تعليمية تلائم الاحتياجات المختلفة لطلابنا في كل مكان.",
    },
    {
      id: 8,
      Image: "/images/card8.webp",
      title:
        language === "ENG"
          ? "More than 12,000 trainees/ cards"
          : "أكثر من 12آلاف متدرب",
      subTitle:
        language === "ENG"
          ? "Our success with both young and adult learners boosts our confidence and drives our commitment to innovative, unparalleled education. We strive for excellence and continuously pursue further success."
          : "هذا العدد من المتدربين الصغار، إضافةً إلى البالغين. هذا الإنجاز البارز منحنا ثقة كبيرة في قدراتنا وزاد من عزمنا على تقديم خدمات تعليمية فريدة من نوعها وغير مسبوقة في العالم. نحن ملتزمون بالابتكار والتميز في كل ما نقدمه، ونتطلع دائمًا لتحقيق المزيد.",
    },
    {
      id: 9,
      Image: "/images/card9.webp",
      title:
        language === "ENG"
          ? "Master English skills in no time"
          : "سرعة إتقان الإنجليزية",
      subTitle:
        language === "ENG"
          ? "Our cards fluently speak American English in just 3 to 6 months, thanks to our unique Mongi-Immerse teaching method."
          : "يتميز طلابنا في الأكاديمية بقدرتهم على التحدث باللغة الإنجليزية بلهجة أمريكية وبطلاقة مذهلة خلال فترة قصيرة تتراوح بين 3 إلى 6 أشهر فقط. هذا الإنجاز المبهر يرجع إلى منهجنا الفريد في التعليم المبني على مبدأ المعايشة،",
    },
    {
      id: 10,
      Image: "/images/card10.webp",
      title:
        language === "ENG" ? "Fun and engaging activities" : "المرح والحماس",
      subTitle:
        language === "ENG"
          ? "A stimulating learning environment fosters focus, comprehension, and a love for learning. Our goal is to create an exciting atmosphere encouraging curiosity and passion for language exploration."
          : "نؤمن بأن بيئة التعلم الممتعة والمحفزة تزيد من قدرة الطلاب على التركيز، الاستيعاب والرغبة المستمرة في التعلم. هدفنا هو خلق جو عام للتعليم يتسم بالإثارة والتشويق، مما يشجع الطلاب على استكشاف اللغة بفضول وشغف.",
    },
    {
      id: 11,
      Image: "/images/card11.webp",
      title:
        language === "ENG" ? "Achieving Maximum Benefit" : "تحقيق أقصى استفادة",
      subTitle:
        language === "ENG"
          ? "Diverse educational activities enhance our courses, ensuring rapid progress in language skills. We're committed to providing comprehensive education tailored to all cards' needs."
          : "التنوع في الأنشطة التعليمية يعزز من فعالية دوراتنا، حيث نعتمد على منهجيات مدروسة تضمن لطلابنا الاستفادة القصوى وتحقيق التقدم السريع في مهاراتهم اللغوية. نحن نلتزم بتوفير تعليم شامل ومتكامل يلبي احتياجات جميع الطلاب.",
    },
    {
      id: 12,
      Image: "/images/card12.webp",
      title:
        language === "ENG"
          ? "Smart Education Advanced Technologies"
          : "تعليم ذكي تقنيات متطورة ",
      subTitle:
        language === "ENG"
          ? "We use AI for exams, enhancing learning benefits and accuracy in a dynamic environment aligned with the latest technology."
          : "التزامنا بالتطور التكنولوجي يتجلى في استخدامنا لأدوات الذكاء الصناعي في تقييم الامتحانات والاختبارات، مما يمنح متعلمينا فوائد تعليمية محسنة ونتائج دقيقة. نحن نوفر بيئة تعليمية ديناميكية تتماشى مع أحدث التطورات التكنولوجية، لتعزيز التعلم.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const getVisibleCards = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + cards.length) % cards.length;
      visible.push({
        card: cards[index],
        position: i,
        isActive: i === 0,
      });
    }
    return visible;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="relative">
        {/* Navigation Arrows */}
        <NavigationArrow direction="left" onClick={nextSlide} />
        <NavigationArrow direction="right" onClick={prevSlide} />

        {/* Carousel Container - Desktop: 3 cards, Mobile: 1 card */}
        <div className="flex justify-center items-center mb-8 overflow-hidden">
          {/* Desktop view: Show 3 cards */}
          <div className="flex justify-center items-center gap-4 transition-all duration-700 ease-in-out">
            {getVisibleCards().map(({ card, position, isActive }) => (
              <TestimonialCard
                key={`${card.id}-${position}`}
                card={card}
                isActive={isActive}
                position={position}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
