// importing React component
import Image from "next/image";

interface Phone {
  id: number;
  Image: string;
}

interface TestimonialPhoneProps {
  phone: Phone;
  isActive: boolean;
  position: number;
}

const TestimonialPhone: React.FC<TestimonialPhoneProps> = ({
  phone,
  isActive,
  position,
}) => {

  const getPhoneClasses = () => {
    const baseClasses =
      "relative transition-all duration-500 ease-in-out rounded-2xl overflow-hidden";

    if (isActive) {
      // Mobile: full width, Desktop: fixed width
      return `${baseClasses} w-[115%] scale-100 opacity-100 z-20`;
    } else {
      // Only visible on desktop
      return `${baseClasses} w-full scale-90 opacity-60 z-10 hidden md:block`;
    }
  };

  const getPhoneStyle = () => {
    return {
      transform: `translateX(${position * 5}px)`,
    };
  };

  return (
    <div className={getPhoneClasses()} style={getPhoneStyle()}>
      {/* Image Container */}
      <Image
        src={phone.Image}
        width={1000}
        height={1000}
        alt={"clients opinions"}
        loading="lazy"
        className="w-70"
      />
    </div>
  );
};

export default TestimonialPhone;
