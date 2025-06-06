import React from "react";
import { Play } from 'lucide-react';

interface Student {
  id: number;
  videoId: string;
  testimonial: string;
  testimonialAr: string;
  subject: string;
  subjectAr: string;
}

interface TestimonialCardProps {
  student: Student;
  isActive: boolean;
  position: number;
  isArabic?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  student,
  isActive,
  position,
}) => {
  const getCardClasses = () => {
    const baseClasses =
      "relative transition-all duration-500 ease-in-out rounded-2xl overflow-hidden shadow-lg";

    if (isActive) {
      // Mobile: full width, Desktop: fixed width
      return `${baseClasses} w-full md:w-80 h-130 scale-100 opacity-100 z-20`;
    } else {
      // Only visible on desktop
      return `${baseClasses} w-64 h-120 scale-90 opacity-60 z-10 hidden md:block`;
    }
  };

  const getCardStyle = () => {
    if (!isActive) {
      return {
        transform: `translateX(${position * 20}px)`,
      };
    }
    return {};
  };

  return (
    <div className={getCardClasses()} style={getCardStyle()}>
      {/* Video Container */}
      <div className="relative w-full h-full bg-gray-900">
        <iframe
          src={`https://www.youtube.com/embed/${student.videoId}?rel=0&modestbranding=1&showinfo=0`}
          title={`testimonial`}
          className="w-full h-full object-cover"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        {/* Play button overlay for inactive cards */}
        {!isActive && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <Play className="w-8 h-8 text-white" fill="white" />
            </div>
          </div>
        )}
      </div>

      {/* Active card glow effect */}
      {isActive && (
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600 rounded-2xl blur opacity-30 -z-10"></div>
      )}
    </div>
  );
};

export default TestimonialCard;
