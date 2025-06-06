"use client";
// importing React components
import Link from "next/link";
// using Translation
import { useLanguage } from "@/app/lang/LanguageProvider";
// importing React components
import dynamic from "next/dynamic";
// importing Components
const Button = dynamic(() => import("@/app/utils/Button"));
const ScrollToTop = dynamic(() => import("@/app/components/ScrollToTop"));
// importing React-Icon
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  const { language } = useLanguage();

  // data
  interface ILink {
    id: number;
    name: string;
    href: string;
  }
  const links: ILink[] = [
    {
      id: 1,
      name: language === "ENG" ? "Privacy Policy" : "سياسة الخصوصية",
      href: "",
    },
    {
      id: 2,
      name: language === "ENG" ? "Terms and Conditions" : "الشروط والأحكام",
      href: "",
    },
    {
      id: 3,
      name:
        language === "ENG" ? "Refund and Postponement" : "الاسترداد والتأجيل",
      href: "",
    },
    {
      id: 4,
      name: language === "ENG" ? "Security and Protection" : "الأمن والحماية",
      href: "",
    },
    {
      id: 5,
      name:
        language === "ENG"
          ? "Affiliate Marketing program"
          : "التسويق بالعمولة ",
      href: "",
    },
    {
      id: 6,
      name: language === "ENG" ? "Our Platform" : "المنصّة الخاصة بنا",
      href: "",
    },
  ];

  interface IContactInfo {
    title: string;
    info: string;
    btnTxt: string;
  }
  const contactInfo: IContactInfo = {
    title: language === "ENG" ? "Contact Us!" : "تواصل معنا!",
    info:
      language === "ENG"
        ? "Monglish International Academy is a registered institution in England and Wales (Registration No. 14083316), with its legal headquarters in London. The Academy recognizes English language certifications issued by the University of Cambridge and employs certified trainers holding TKT, CELTA, and DELTA qualifications."
        : "أكاديمية مونجلش معتمدة في إنجلترا وويلز (رقم 14083316) ومقرها القانوني بلندن، تعترف بشهادات اللغة الإنجليزية من جامعة كامبريدجوتضم مدربين بشهادات TKT/CELTA/DELTA.",
    btnTxt: language === "ENG" ? "Send a Message" : "اكتب رسالة",
  };

  interface ISocial {
    id: number;
    title: string;
    link: string;
    icon: React.ReactNode;
  }
  const social: ISocial[] = [
    { id: 1, title: "Twitter", link: "@Olympics_inc", icon: <FaTwitter /> },
    {
      id: 2,
      title: "Instagram",
      link: "@Olympics_inc",
      icon: <PiInstagramLogoFill />,
    },
    { id: 3, title: "Linkedin", link: "@Olympics_inc", icon: <FaLinkedinIn /> },
    { id: 4, title: "Youtube", link: "@Olympics_inc", icon: <FaYoutube /> },
  ];

  interface IFootTxt {
    name: string;
  }
  const footTxt: IFootTxt = {
    name:
      language === "ENG"
        ? "© All rights reserved to Monglish International Academy, a company under Edulixa360 Holding Group – Dubai, UAE"
        : "تحفظ حقوق النشر © 2019-2024 لمؤسسة إيديوليكسا 360 العالمية وأكاديمية مونجلش الدولية. العلامتان التجاريتان 'مونجلش' و'منهج المعايشة' محميتان دوليًا ومسجلتان كجزء من منهجنا الفريد.",
  };

  return (
    <footer className="bg-[#eff9ff] relative">
      <div className="absolute 2xl:top-[-14.5%] 2xl:left-[45%] xl:top-[-11%] xl:left-[45%] lg:top-[-8.5%] lg:left-[45%] md:top-[-4.5%] md:left-[45%]">
        <Image
          src={"/star.svg"}
          width={50}
          height={50}
          alt="star"
          loading="lazy"
          className="2xl:w-50 xl:w-40 lg:w-30 md:w-20 w-0"
        />
      </div>

      <div className="md:pt-20 md:pb-5">
        <section className="container mx-auto grid justify-items-center lg:grid-cols-6 md:grid-cols-3 grid-cols-2 xl:gap-10 lg:gap-0 md:gap-5 gap-x-0 gap-y-2 pt-5">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.id}
              className="underline font-bold text-[#3D3D3D] xl:text-md lg:text-[12px] md:text-[14px] text-[10px]"
            >
              {link.name}
            </Link>
          ))}
        </section>

        <section className="flex flex-col justify-center items-center gap-2 my-10">
          <h2 className="font-extrabold md:text-7xl text-5xl text-[#3D3D3D]">
            {contactInfo.title}
          </h2>
          <p className="py-5 xl:w-[35%] lg:w-[60%] md:w-[80%] w-full text-sm text-[#020204] text-center leading-7">
            {contactInfo.info}
          </p>
          <Button width="w-70">{contactInfo.btnTxt}</Button>
        </section>

        <section className="grid lg:grid-cols-4 grid-cols-2 xl:gap-0 lg:gap-10 gap-5 justify-items-center 2xl:px-120 xl:px-15 lg:px-5">
          {social.map((soc) => (
            <div
              key={soc.id}
              className="flex items-center xl:gap-x-10 md:gap-x-5 gap-x-2"
            >
              <p className="flex flex-col items-start">
                <span className="font-bold xl:text-lg md:text-md text-sm text-[#3D3D3D]">
                  {soc.title}
                </span>
                <span className="xl:text-md md:text-sm text-[12px] text-[#020204]">
                  {soc.link}
                </span>
              </p>

              <div className="md:p-4 p-2 xl:text-lg md:text-md text-sm text-white bg-[#FF760B] rounded-full">
                {soc.icon}
              </div>
            </div>
          ))}
        </section>
      </div>

      <section className="bg-[#074363] rounded-tl-3xl rounded-tr-3xl w-full flex items-center justify-between gap-x-5 py-5 md:px-20 px-10 mt-10">
        <p className={`${language === 'ENG' ? 'text-left xl:w-full lg:w-180 md:w-120 w-70' : 'text-right xl:w-300 lg:w-175 md:w-120 w-70'} text-white xl:text-md lg:text-[14px] md:text-md text-[10px]`}>
          {footTxt.name}
        </p>
        <span className={language === 'ENG' ? 'xl:w-30 lg:w-20 w-30' : 'xl:w-30 lg:w-30 w-40'}><ScrollToTop /></span>
      </section>
    </footer>
  );
};

export default Footer;
