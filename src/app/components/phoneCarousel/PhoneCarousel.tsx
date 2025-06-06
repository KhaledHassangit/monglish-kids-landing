"use client";
// importing React Components
import React, { useState } from "react";
import dynamic from "next/dynamic";
// importing Components
const TestimonialPhone = dynamic(
  () => import("@/app/components/phoneCarousel/TestimonialPhone")
);
const NavigationArrow = dynamic(
  () => import("@/app/components/phoneCarousel/NavigationArrow")
);

interface Phone {
  id: number;
  Image: string;
}

const PhoneCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const phones: Phone[] = [
    {
      id: 1,
      Image: "/images/mobile1.webp",
    },
    {
      id: 2,
      Image: "/images/mobile2.webp",
    },
    {
      id: 3,
      Image: "/images/mobile3.webp",
    },
    {
      id: 4,
      Image: "/images/mobile4.webp",
    },
    {
      id: 5,
      Image: "/images/mobile5.webp",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % phones.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + phones.length) % phones.length
    );
  };

  const getVisiblePhone = () => {
    const visible = [];
    for (let i = -1; i <= 3; i++) {
      const index = (currentIndex + i + phones.length) % phones.length;
      visible.push({
        phone: phones[index],
        position: i,
        isActive: i === 1,
      });
    }
    return visible;
  };

  return (
    <div className="w-full xl:max-w-7xl lg:max-w-4xl mx-auto px-4 py-12">
      <div className="relative">
        {/* Navigation Arrows */}
        <NavigationArrow direction="left" onClick={prevSlide} />
        <NavigationArrow direction="right" onClick={nextSlide} />

        {/* Carousel Container - Desktop: 3 cards, Mobile: 1 card */}
        <div className="flex justify-center items-center overflow-hidden">
          {/* Desktop view: Show 3 cards */}
          <div className="flex justify-center items-center transition-all duration-700 ease-in-out">
            {getVisiblePhone().map(({ phone, position, isActive }) => (
              <TestimonialPhone
                key={`${phone.id}-${position}`}
                phone={phone}
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

export default PhoneCarousel;
