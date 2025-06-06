// importing React component
import Image from "next/image";
// using Translation
import { useLanguage } from "@/app/lang/LanguageProvider";

interface Card {
  id: number;
  Image: string;
  title: string;
  subTitle: string;
}

interface TestimonialCardProps {
  card: Card;
  isActive: boolean;
  position: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  card,
  isActive,
  position,
}) => {
  const { language } = useLanguage();

  const getCardClasses = () => {
    const baseClasses =
      "relative transition-all duration-500 ease-in-out rounded-2xl overflow-hidden shadow-lg";

    if (isActive) {
      // Mobile: full width, Desktop: fixed width
      return `${baseClasses} w-70 md:w-80 h-full md:h-100 scale-100 opacity-100 z-20`;
    } else {
      // Only visible on desktop
      return `${baseClasses} w-64 h-80 scale-90 opacity-60 z-10 hidden md:block`;
    }
  };

  const getCardStyle = () => {
    return {
      transform: `translateX(${position * 20}px)`,
    };
  };

  return (
    <div className={getCardClasses()} style={getCardStyle()}>
      {/* Video Container */}
      <div
        className={`relative w-full h-100 ${
          language === "ENG"
            ? `border-l-10 border-l-[#FF760B]`
            : `border-r-10 border-r-[#FF760B] `
        }`}
      >
        <div>
          <Image
            src={card.Image}
            width={250}
            height={250}
            alt={card.title}
            loading="lazy"
            className="ml-auto md:w-60 w-50"
          />
          <div className="flex flex-col gap-y-3 p-5 mt-[-20%]">
            <h3 className="text-[#282626] font-bold text-2xl">{card.title}</h3>
            <p className="text-[#585656] text-sm leading-6">{card.subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
