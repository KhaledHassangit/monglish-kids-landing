"use client"

import { useEffect, useState } from "react"
import { FaCheck } from "react-icons/fa"
import styles from "../(pages)/landingPage/landingPage.module.scss"
import Title from "../utils/Title"
import Button from "../utils/Button"
import { getCoursePackagesUrl } from "../hooks/useGetCourses"
import api from "../api/baseURL"
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi"

interface IPrice {
  id: number
  numMonth: string
  name: string
  badget: string
  duration: number
  badge?: {
    text: string
    textAR: string
  }
  table: {
    id: number
    title: string
    time: string
  }[]
}

const PricingSection = ({ language }: { language?: "ENG" | "AR" }) => {
  const [selectedDuration, setSelectedDuration] = useState<number>(6)
    // const [price, setPrice] = useState<IPrice[]>([])
      const [loading, setLoading] = useState(true)
    const price: IPrice[] = [
    // 6 Months Packages
    {
      id: 1,
      numMonth: language === "ENG" ? "(6 months)" : "(6 أشهر)",
      name: language === "ENG" ? "Immersion Plus" : "المعايشة بلس",
      badget: language === "ENG" ? "SAR 4,275" : "4,275 ريال",
      duration: 6,
      badge: {
        text: "Best Value",
        textAR: "أفضل قيمة",
      },
      table: [
        {
          id: 1,
          title: language === "ENG" ? "Basic Sessions" : "حصص أســـــــاسية:",
          time: language === "ENG" ? "8 sessions per month" : "8شهرياً",
        },
        {
          id: 2,
          title: language === "ENG" ? "Reading Club" : "نادى القـــــــــــــــــراءة:",
          time: language === "ENG" ? "Once a week" : "مرة أسبوعياً",
        },
        {
          id: 3,
          title: language === "ENG" ? "Cinema Club" : "نادى الســــــــــــــينما:",
          time: language === "ENG" ? "Once a week" : "مرة أسبوعياً",
        },
        {
          id: 4,
          title: language === "ENG" ? "Conversation Club" : "نادى المــــــــــــحادثة",
          time: language === "ENG" ? "Daily" : "يومياً",
        },
        {
          id: 5,
          title: language === "ENG" ? "Debate Club" : "نادى المـــــــناظرات",
          time: language === "ENG" ? "Once a month" : "مرة شهرياً",
        },
        {
          id: 6,
          title: language === "ENG" ? "Writing club" : "نادى الكتــــــــــــــــــــابة",
          time: language === "ENG" ? "Once a week" : "مرة أسبوعياً",
        },
        {
          id: 7,
          title: language === "ENG" ? "Phonetics Club" : "نادى الصوتــــــــــيات",
          time: language === "ENG" ? "teacher's recommendation" : "بترشيح المعلم",
        },
        {
          id: 8,
          title: language === "ENG" ? "Talent Club:" : "نادى المـــــــــواهب:",
          time: language === "ENG" ? "Once a week" : "مرة أسبوعياً",
        },
        {
          id: 9,
          title: language === "ENG" ? "Drawing Club:" : "نادى الرســـــــــــــــــــم:",
          time: language === "ENG" ? "Once a week" : "مرة أسبوعياً",
        },
        {
          id: 10,
          title: language === "ENG" ? "Parent-Teacher Meeting:" : "لقاء تربـــــــــــــــوي مع ولي الامر:",
          time: language === "ENG" ? "Once a month" : "مرة شهرياً",
        },
        {
          id: 11,
          title: language === "ENG" ? "Live Coaching Club:" : "لايف كوتش:",
          time: language === "ENG" ? "Free session" : "جلسة مجانية",
        },
      ],
    },
    {
      id: 2,
      numMonth: language === "ENG" ? "(6 months)" : "(6 أشهر)",
      name: language === "ENG" ? "Immersion" : "المعايشة",
      badget: language === "ENG" ? "SAR 3,600" : "3,600 ريال",
      duration: 6,
      badge: {
        text: "Best Seller",
        textAR: "الأكثر مبيعاً",
      },
      table: [
        {
          id: 1,
          title: language === "ENG" ? "Basic Sessions" : "حصص أســـــــاسية:",
          time: language === "ENG" ? "8 sessions per month" : "8 شهرياً",
        },
        {
          id: 2,
          title: language === "ENG" ? "Reading Club:" : "نادى القـــــــــــــــــراءة:",
          time: language === "ENG" ? "Once a week" : "مرة أسبوعياً",
        },
        {
          id: 3,
          title: language === "ENG" ? "Cinema Club" : "نادى الســــــــــــــينما:",
          time: language === "ENG" ? "Once a week" : "مرة أسبوعياً",
        },
        {
          id: 4,
          title: language === "ENG" ? "Conversation Club" : "نادى المــــــــــــحادثة",
          time: language === "ENG" ? "Daily" : "يومياً",
        },
        {
          id: 5,
          title: language === "ENG" ? "Debate Club" : "نادى المـــــــناظرات",
          time: language === "ENG" ? "Once a month" : "مرة شهرياً",
        },
        {
          id: 6,
          title: language === "ENG" ? "Live Coaching" : "لايف كوتش:",
          time: language === "ENG" ? "Free session" : "جلسة مجانية",
        },
      ],
    },
    {
      id: 3,
      numMonth: language === "ENG" ? "(6 months)" : "(6 أشهر)",
      name: language === "ENG" ? "Basic" : "أساسية",
      badget: language === "ENG" ? "SAR 2,815" : "2,815 ريال",
      duration: 6,
      table: [
        {
          id: 1,
          title: language === "ENG" ? "Basic Sessions" : "حصص أســـــــاسية:",
          time: language === "ENG" ? "8 sessions per month" : "8 شهرياً",
        },
        {
          id: 2,
          title: language === "ENG" ? "Reading Club:" : "نادى القـــــــــــــــــراءة:",
          time: language === "ENG" ? "Once a month For the foundation stage only" : "مرة شهرياً لمرحلة التأسيس فقط",
        },
        {
          id: 3,
          title: language === "ENG" ? "Conversation Club" : "نادى المــــــــــــحادثة",
          time: language === "ENG" ? "Daily" : "يومياً",
        },
        {
          id: 4,
          title: language === "ENG" ? "Debate Club" : "نادى المـــــــناظرات",
          time: language === "ENG" ? "Once a month" : "مرة شهرياً",
        },
      ],
    },

    // 4 Months Packages
    {
      id: 4,
      numMonth: language === "ENG" ? "(4 months)" : "(4 أشهر)",
      name: language === "ENG" ? "Immersion Plus" : "المعايشة بلس",
      badget: language === "ENG" ? "$520" : "$520",
      duration: 4,
      table: [
        {
          id: 1,
          title: language === "ENG" ? "Basic Sessions" : "حصص أســـــــاسية:",
          time: language === "ENG" ? "8 sessions per month" : "8شهرياً",
        },
        {
          id: 2,
          title: language === "ENG" ? "Reading Club" : "نادى القـــــــــــــــــراءة:",
          time: language === "ENG" ? "Once a week" : "مرة أسبوعياً",
        },
        {
          id: 3,
          title: language === "ENG" ? "Cinema Club" : "نادى الســــــــــــــينما:",
          time: language === "ENG" ? "Once a week" : "مرة أسبوعياً",
        },
        {
          id: 4,
          title: language === "ENG" ? "Conversation Club" : "نادى المــــــــــــحادثة",
          time: language === "ENG" ? "Daily" : "يومياً",
        },
        {
          id: 5,
          title: language === "ENG" ? "Debate Club" : "نادى المـــــــناظرات",
          time: language === "ENG" ? "Once a month" : "مرة شهرياً",
        },
        {
          id: 6,
          title: language === "ENG" ? "Writing club" : "نادى الكتــــــــــــــــــــابة",
          time: language === "ENG" ? "Once a week" : "مرة أسبوعياً",
        },
      ],
    },
    {
      id: 5,
      numMonth: language === "ENG" ? "(4 months)" : "(4 أشهر)",
      name: language === "ENG" ? "Immersion" : "المعايشة",
      badget: language === "ENG" ? "$452" : "$452",
      duration: 4,
      table: [
        {
          id: 1,
          title: language === "ENG" ? "Basic Sessions" : "حصص أســـــــاسية:",
          time: language === "ENG" ? "8 sessions per month" : "8 شهرياً",
        },
        {
          id: 2,
          title: language === "ENG" ? "Reading Club:" : "نادى القـــــــــــــــــراءة:",
          time: language === "ENG" ? "Once a week" : "مرة أسبوعياً",
        },
        {
          id: 3,
          title: language === "ENG" ? "Cinema Club" : "نادى الســــــــــــــينما:",
          time: language === "ENG" ? "Once a week" : "مرة أسبوعياً",
        },
        {
          id: 4,
          title: language === "ENG" ? "Conversation Club" : "نادى المــــــــــــحادثة",
          time: language === "ENG" ? "Daily" : "يومياً",
        },
      ],
    },
    {
      id: 6,
      numMonth: language === "ENG" ? "(4 months)" : "(4 أشهر)",
      name: language === "ENG" ? "Basic" : "أساسية",
      badget: language === "ENG" ? "$390" : "$390",
      duration: 4,
      table: [
        {
          id: 1,
          title: language === "ENG" ? "Basic Sessions" : "حصص أســـــــاسية:",
          time: language === "ENG" ? "8 sessions per month" : "8 شهرياً",
        },
        {
          id: 2,
          title: language === "ENG" ? "Reading Club:" : "نادى القـــــــــــــــــراءة:",
          time: language === "ENG" ? "Once a month" : "مرة شهرياً",
        },
        {
          id: 3,
          title: language === "ENG" ? "Conversation Club" : "نادى المــــــــــــحادثة",
          time: language === "ENG" ? "Daily" : "يومياً",
        },
      ],
    },

    // 2 Months Packages
    {
      id: 7,
      numMonth: language === "ENG" ? "(2 months)" : "(شهرين)",
      name: language === "ENG" ? "Immersion Plus" : "المعايشة بلس",
      badget: language === "ENG" ? "$380" : "$380",
      duration: 2,
      table: [
        {
          id: 1,
          title: language === "ENG" ? "Basic Sessions" : "حصص أســـــــاسية:",
          time: language === "ENG" ? "8 sessions per month" : "8شهرياً",
        },
        {
          id: 2,
          title: language === "ENG" ? "Reading Club" : "نادى القـــــــــــــــــراءة:",
          time: language === "ENG" ? "Once a week" : "مرة أسبوعياً",
        },
        {
          id: 3,
          title: language === "ENG" ? "Cinema Club" : "نادى الســــــــــــــينما:",
          time: language === "ENG" ? "Once a week" : "مرة أسبوعياً",
        },
      ],
    },
    {
      id: 8,
      numMonth: language === "ENG" ? "(2 months)" : "(شهرين)",
      name: language === "ENG" ? "Immersion" : "المعايشة",
      badget: language === "ENG" ? "$320" : "$320",
      duration: 2,
      table: [
        {
          id: 1,
          title: language === "ENG" ? "Basic Sessions" : "حصص أســـــــاسية:",
          time: language === "ENG" ? "8 sessions per month" : "8 شهرياً",
        },
        {
          id: 2,
          title: language === "ENG" ? "Reading Club:" : "نادى القـــــــــــــــــراءة:",
          time: language === "ENG" ? "Once a week" : "مرة أسبوعياً",
        },
      ],
    },
    {
      id: 9,
      numMonth: language === "ENG" ? "(2 months)" : "(شهرين)",
      name: language === "ENG" ? "Basic" : "أساسية",
      badget: language === "ENG" ? "$280" : "$280",
      duration: 2,
      table: [
        {
          id: 1,
          title: language === "ENG" ? "Basic Sessions" : "حصص أســـــــاسية:",
          time: language === "ENG" ? "8 sessions per month" : "8 شهرياً",
        },
      ],
    },
    ]

  const filteredPrices = price.filter((pkg) => pkg.duration === selectedDuration)
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const url = getCoursePackagesUrl()
        const response = await api.get(url)
        console.log(response?.data?.data) 
      } catch (error) {
        console.error("Error fetching course packages:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPrices()
  }, [])
  if (loading) {
    return <div className="text-center text-white">Loading...</div>
  }
  return (
    <section className={`${styles.packages} py-15`}>
      <Title>
        <p className="text-white pb-3">{language === "ENG" ? "Your Future Starts Here" : "مستقبلك يبدأ من هنا"}</p>
        <p className="text-white">
          {language === "ENG" ? "Interactive learning. Smart investment." : "تعليم تفاعلي، استثمار ذكي"}
        </p>
      </Title>

      <div className="flex flex-col mx-auto ">
       <div className="flex items-center justify-center gap-x-5 py-5 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:bg-white/10 after:w-[calc(80%)] mb-4">
  {/* 6 Months Button */}
  <button
    onClick={() => setSelectedDuration(6)}
    className={`flex items-center justify-center gap-1 px-4 ${selectedDuration === 6 ? "text-[#FF994A] font-bold" : "text-white"} hover:text-[#FF994A] hover:font-bold transition-all`}
  >
    {language === "ENG" ? (
      <>
        <FiChevronsRight className="text-lg flex-shrink-0 " />
        <span className="whitespace-nowrap">6 Months</span>
        <FiChevronsLeft className="text-lg flex-shrink-0" />
      </>
    ) : (
      <>
        <FiChevronsLeft className="text-lg flex-shrink-0" />
        <span className="whitespace-nowrap">6 أشهر</span>
        <FiChevronsRight className="text-lg flex-shrink-0" />
      </>
    )}
  </button>

  {/* 4 Months Button */}
  <button
    onClick={() => setSelectedDuration(4)}
    className={`px-4 ${selectedDuration === 4 ? "text-[#FF994A] font-bold" : "text-white"} hover:text-[#FF994A] hover:font-bold transition-all`}
  >
    {language === "ENG" ? "4 Months" : "4 أشهر"}
  </button>

  {/* 2 Months Button */}
  <button
    onClick={() => setSelectedDuration(2)}
    className={`px-4 ${selectedDuration === 2 ? "text-[#FF994A] font-bold" : "text-white"} hover:text-[#FF994A] hover:font-bold transition-all`}
  >
    {language === "ENG" ? "2 Months" : "شهرين"}
  </button>
</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
          {filteredPrices.map((card) => (
            <div
              key={card.id}
              className="relative z-[10] flex flex-col justify-between bg-white xl:w-100 lg:w-70 md:w-80 w-75 px-5 py-10 rounded-3xl border-2 border-white hover:border-[#ff994a] transition-all"
            >
              
                    {card.badge && (
              <div className="absolute   -top-2 -left-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-br   rounded-tl-[20px] from-[#FF994A] to-[#FF7A1A] relative"
                  style={{
                    width: "160px",
                    height: "160px",
                    clipPath: "polygon(0 0, 100% 0, 0px 100%)"
                  }}
                >
                  <div className="absolute top-3 left-4 transform -rotate-45 origin-top-bottom">
                    <div className="text-white text-xl font-bold whitespace-nowrap">
                        {language === "AR" ? (
                              <>
                                {card.badge.textAR.split(' ').map((word, i, arr) => (
                                  <span key={i}>
                                    {word}
                                    {i !== arr.length - 1 && <br />}
                                  </span>
                                ))}
                              </>
                            ) : (
                              <>
                                {card.badge.text.split(' ').map((word, i, arr) => (
                                  <span key={i}>
                                    {word}
                                    {i !== arr.length - 1 && <br />}
                                  </span>
                                ))}
                              </>
                            )}
                       

                    </div>
                  </div>
                </div>
              </div>
            )}


              <div>
                <div className={styles.priceTitle}>
                  <p className="text-lg font-bold bg-gradient-to-r from-[#FF9D52] to-[#115275] bg-clip-text text-transparent">
                    {card.numMonth}
                  </p>
                  <h3 className="font-bold text-3xl py-2">{card.name}</h3>
                  <p className="font-bold pb-2 xl:text-5xl lg:text-4xl md:text-4xl bg-gradient-to-tl from-[#F47D21] to-[#FF9D52] bg-clip-text text-transparent">
                    {card.badget}
                  </p>
                </div>

                <div className="mt-10">
                  <p className="font-bold text-lg">
                    {language === "ENG" ? "Enjoy the following:" : "واستمتع بالاتي:"}
                  </p>
                  <div>
                    {card.table.map((data) => (
                      <div key={data.id} className={`${styles.item} flex items-center justify-between mt-5`}>
                        <div className="flex items-center gap-x-2">
                          <span className="text-[#F47D21] font-bold">
                            <FaCheck />
                          </span>
                          <p className="text-lg text-[#64626A]">{data.title}</p>
                        </div>
                        <p
                          className={`text-[#F47D21] font-bold w-50 ${
                            language === "ENG" ? "text-right" : "text-left"
                          }`}
                        >
                          {data.time}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Button width="xl:w-90 lg:w-60 w-full mt-10">
                {language === "ENG" ? "Buy" : "شراء"}
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>

  )
}

export default PricingSection
