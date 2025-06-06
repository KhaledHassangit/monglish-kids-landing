import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationArrowProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

const NavigationArrow: React.FC<NavigationArrowProps> = ({ direction, onClick }) => {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
  const positionClass = direction === 'left' ? 'left-2 md:left-4' : 'right-2 md:right-4';

  return (
    <button
      onClick={onClick}
      className={`absolute ${positionClass} top-50 -translate-y-1/2 z-30 
                 bg-[#165e84] rounded-xl p-2 md:p-2
                 transition-all duration-300 active:scale-95
                 border border-gray-200 group cursor-pointer`}
      aria-label={`${direction === 'left' ? 'Previous' : 'Next'} testimonial`}
    >
      <Icon 
        className="w-5 h-5 md:w-6 md:h-6 text-white" 
        strokeWidth={2}
      />
    </button>
  );
};

export default NavigationArrow;