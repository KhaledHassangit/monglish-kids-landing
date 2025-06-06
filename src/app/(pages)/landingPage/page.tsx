// importing React Components
import Image from "next/image";
import dynamic from "next/dynamic";
// using Translation
import { useLanguage } from "@/app/lang/LanguageProvider";
// importing Components
const Button = dynamic(() => import("@/app/utils/Button"));
const StudentCarousel = dynamic(
  () => import("@/app/components/studentCarousel/StudentCarousel")
);
const CardCarousel = dynamic(
  () => import("@/app/components/infoCarousel/InfoCarousel")
);
const PhoneCarousel = dynamic(
  () => import("@/app/components/phoneCarousel/PhoneCarousel")
);
// importing React-Icons
import PricingSection from "@/app/components/PricingSection";

const Title = dynamic(() => import("@/app/utils/Title"));

const LandingPage = () => {
  const { language } = useLanguage();

  // data
  interface IHeroInfo {
    title: string;
    desc: string;
    btnMainTxt: string;
    btnSecondTxt: string;
  }
  const heroInfo: IHeroInfo = {
    title:
      language === "ENG"
        ? "Learn English with the world’s leading academy"
        : "تعلم الإنجليزية من خلال الأكاديمية الأولى عالميًا",
    desc:
      language === "ENG"
        ? "Specialists in teaching English to children starting from the basics with our unique and exclusive Immersion Methodology"
        : "متخصصون في تعليم اللغة الإنجليزية للصغار بدءًا من التأسيس بمنهج المعايشة الفريد والحصري",
    btnMainTxt:
      language === "ENG"
        ? "Discover the Subscription Packages"
        : "التعرف على باقات المعايشة",
    btnSecondTxt:
      language === "ENG" ? "Book a Free Session Now!" : "احجز حصة مجانية",
  };


  return (
    <main>
      {/* --- Hero Section --- */}
      <section>
        <Image
          src={
            language === "ENG"
              ? "/images/heroSectionImg.webp"
              : "/images/heroSectionImgAr.webp"
          }
          width={5000}
          height={5000}
          alt="hero section"
          loading="lazy"
          className="md:block hidden w-full relative"
        />

        <div className="md:block hidden mx-auto absolute 2xl:top-155 xl:top-122.5 lg:top-100 md:top-75 2xl:left-145 xl:left-80 lg:left-30 md:left-20 text-center">
          <h1
            className={`font-bold xl:text-6xl lg:text-4xl md:text-3xl lg:w-200 w-full ${
              language === "ENG" ? "leading-18" : "leading-22"
            } text-white`}
          >
            {heroInfo.title}
          </h1>
          <p className="xl:py-5 md:pb-5 text-white 2xl:text-2xl xl:text-lg md:text-lg w-150 mx-auto">
            {heroInfo.desc}
          </p>
          <div className="flex items-center justify-center gap-x-2">
            <Button width="w-80">{heroInfo.btnMainTxt}</Button>
            <Button width="w-60">{heroInfo.btnSecondTxt}</Button>
          </div>
        </div>

        <Image
          src={
            language === "ENG"
              ? "/images/heroSectionImg2.webp"
              : "/images/heroSectionImg2Ar.webp"
          }
          width={5000}
          height={5000}
          alt="hero section"
          loading="lazy"
          className="md:hidden block w-full relative"
        />

        <div className="md:hidden block mx-auto text-center absolute top-150">
          <h1
            className={`font-bold text-xl w-full px-5 ${
              language === "ENG" ? "leading-6" : "leading-8"
            } text-white`}
          >
            {heroInfo.title}
          </h1>
          <p className="p-5 text-white text-sm w-full mx-auto">
            {heroInfo.desc}
          </p>
          <div className="flex items-center justify-center gap-x-2">
            <Button width="w-60">{heroInfo.btnSecondTxt}</Button>
          </div>
        </div>
      </section>

      {/* --- Student --- */}
      <section className="flex flex-col justify-center items-center">
        <Title>
          {language === "ENG" ? "Meet Our Students" : "تعرّف على أطفالنا"}
        </Title>
        <StudentCarousel />
        <Button width="md:w-100 w-75">
          {language === "ENG" ? "Book a Free Session Now!" : "احجز حصة مجانية"}
        </Button>
      </section>

      {/* --- Cards --- */}
      <section className="flex flex-col justify-center items-center my-30">
        <Title>
          <p className="pb-2">
            {language === "ENG" ? "12 Reasons to" : "12 سبب"}
          </p>
          <p>{language === "ENG" ? "Choose Monglish" : "لاختيارك لمونجلش"}</p>
        </Title>
        <CardCarousel />
        <Button width="md:w-100 w-75">
          {language === "ENG" ? "Book a Free Session Now!" : "احجز حصة مجانية"}
        </Button>
      </section>

      {/* --- Phone --- */}
      <section className="flex flex-col justify-center items-center my-30">
        <Title>
          <p className="pb-2">
            {language === "ENG"
              ? "Don’t Just Take Our Word for It"
              : "لا تسمع منا فقط"}
          </p>
        </Title>
        <PhoneCarousel />
        <Button width="md:w-100 w-75">
          {language === "ENG" ? "Book a Free Session Now!" : "احجز حصة مجانية"}
        </Button>
      </section>

      {/* --- Packages --- */}
     <PricingSection language={language}/>

     {/* --- Sponsers --- */}
     <section className="bg-[#fff] flex flex-col justify-center items-center py-30">
      <Title>{language === 'ENG' ? 'Your Child Deserves Excellence' : 'طفلك يستحق التميز'}</Title>

      <div className="grid grid-cols-4 md:grid-cols-7 grid-3 md:gap-5 py-10 justify-items-center">
        <Image src={'/images/Logos new 2 1.webp'} width={150} height={150} alt="sponser" loading="lazy" className="xl:w-40 lg:w-25 md:w-20 w-17" />
        <Image src={'/images/Logos new 2 2.webp'} width={150} height={150} alt="sponser" loading="lazy" className="xl:w-40 lg:w-25 md:w-20 w-17" />
        <Image src={'/images/Logos new 2 3.webp'} width={150} height={150} alt="sponser" loading="lazy" className="xl:w-40 lg:w-25 md:w-20 w-17" />
        <Image src={'/images/Logos new 2 4.webp'} width={150} height={150} alt="sponser" loading="lazy" className="xl:w-40 lg:w-25 md:w-20 w-17" />
        <Image src={'/images/Logos new 2 5.webp'} width={150} height={150} alt="sponser" loading="lazy" className="xl:w-40 lg:w-25 md:w-20 w-17" />
        <Image src={'/images/Logos new 2 6.webp'} width={150} height={150} alt="sponser" loading="lazy" className="xl:w-40 lg:w-25 md:w-20 w-17" />
        <Image src={'/images/Logos new 2 7.webp'} width={150} height={150} alt="sponser" loading="lazy" className="xl:w-40 lg:w-25 md:w-20 w-17" />
        <Image src={'/images/West 1.webp'} width={150} height={150} alt="sponser" loading="lazy" className="xl:w-40 lg:w-25 md:w-20 w-17" />
        <Image src={'/images/Logos new 2 13.webp'} width={150} height={150} alt="sponser" loading="lazy" className="xl:w-40 lg:w-25 md:w-20 w-17" />
        <Image src={'/images/Logos new 2 12.webp'} width={150} height={150} alt="sponser" loading="lazy" className="xl:w-40 lg:w-25 md:w-20 w-17" />
        <Image src={'/images/Logos new 2 11.webp'} width={150} height={150} alt="sponser" loading="lazy" className="xl:w-40 lg:w-25 md:w-20 w-17" />
        <Image src={'/images/Logos new 2 10.webp'} width={150} height={150} alt="sponser" loading="lazy" className="xl:w-40 lg:w-25 md:w-20 w-17" />
        <Image src={'/images/Logos new 2 9.webp'} width={150} height={150} alt="sponser" loading="lazy" className="xl:w-40 lg:w-25 md:w-20 w-17" />
        <Image src={'/images/Logos new 2 8.webp'} width={150} height={150} alt="sponser" loading="lazy" className="xl:w-40 lg:w-25 md:w-20 w-17" />
      </div>

      <Button width="md:w-100 w-75">
          {language === "ENG" ? "Book a Free Session Now!" : "احجز حصة مجانية"}
        </Button>
     </section>
    </main>
  );
};

export default LandingPage;
