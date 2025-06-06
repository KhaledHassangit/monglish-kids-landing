"use client"

import { useLanguage } from "@/app/lang/LanguageProvider"
import type React from "react"
import { useState, useEffect, useRef } from "react"
import { LuChevronDown } from "react-icons/lu"

interface EnrollmentFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function EnrollmentForm({ isOpen, onClose }: EnrollmentFormProps) {
  const { language } = useLanguage()
  const isEnglish = language === "ENG"
  const modalRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    phone: "",
    agreed: false,
  })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  if (!isOpen) return null

  const translations = {
    title: isEnglish ? "Enrollment Acceptance Form for Moglech International Academy" : "إقرار قبول دراسي لأكاديمية موجلش الدولية",
    formNumber: isEnglish ? "Form No." : "نموذج رقم",
    date: isEnglish ? "Date: 10/21/2024" : "التاريخ: 10/21/2024",
    programName: isEnglish ? "Study Program Name" : "اسم البرنامج الدراسي",
    fullNameLabel: isEnglish ? "Full Name" : "الاسم كاملاً",
    fullNamePlaceholder: isEnglish ? "Full name" : "الاسم كامل",
    emailLabel: isEnglish ? "Email" : "البريد الإلكتروني",
    emailPlaceholder: isEnglish ? "example@email.com" : "example@email.com",
    phoneLabel: isEnglish ? "Phone Number" : "رقم الهاتف",
    phonePlaceholder: isEnglish ? "+966 XX XXX XXXX" : "+966 XX XXX XXXX",
    countryLabel: isEnglish ? "Country" : "البلد",
    countryPlaceholder: isEnglish ? "Select Country" : "اختر البلد",
    termsTitle: isEnglish ?
      "To ensure your full rights in contracting with the Academy, please read the following terms carefully and agree to them:" :
      "لضمان حقوقك الكاملة في التعاقد مع الأكاديمية، برجاء قراءة البنود التالية بعناية والموافقة عليها:",
    agreeText: isEnglish ? "I agree to all " : "أوافق على جميع ",
    termsAndConditions: isEnglish ? "Terms and Conditions" : "الشروط والأحكام",
    createAccount: isEnglish ? "Create New Account" : "إنشاء حساب جديد",
    policies: [
      {
        title: isEnglish ? "1. Academy Policies:" : "١. سياسات الأكاديمية:",
        content: isEnglish ?
          "I pledge to adhere to all policies and procedures followed within the Academy, and I acknowledge that I have reviewed, fully understood, and agreed to them." :
          "أتعهد بالالتزام بكافة السياسات والإجراءات المتبعة داخل الأكاديمية، وأقر بأنني قد اطلعت عليها وفهمتها بالكامل ووافقت عليها."
      },
      {
        title: isEnglish ? "2. Tuition Fees:" : "٢. الرسوم الدراسية:",
        content: isEnglish ?
          "I acknowledge that I have reviewed the prescribed tuition fees and pledge to pay them on the specified dates. " +
          "I understand that in case of late payment, the Academy has the right to take appropriate measures including account suspension or stopping educational services until dues are paid." :
          "أقر بأنني قد اطلعت على الرسوم الدراسية المقررة وأتعهد بسدادها في المواعيد المحددة. " +
          "أعلم أنه في حالة التأخر في السداد، يحق للأكاديمية اتخاذ الإجراءات المناسبة بما في ذلك تعليق الحساب أو وقف الخدمات التعليمية حتى سداد المستحقات."
      },
      {
        title: isEnglish ? "3. Online Attendance and Discipline:" : "٣. الحضور الإلكتروني والانضباط:",
        content: isEnglish ?
          "I pledge to ensure my child's regular attendance to online classes at the specified times, and I understand that repeated absence without acceptable excuse may lead to administrative measures such as reservation cancellation or rescheduling. " +
          "In addition to complying with what is stated in the Terms and Conditions regarding attendance." :
          "أتعهد بضمان حضور ابني/ابنتي للحصص الدراسية الإلكترونية بانتظام وفي المواعيد المحددة، وأفهم أن التغيب المتكرر دون عذر مقبول قد يؤدي إلى إجراءات إدارية مثل إلغاء الحجز أو إعادة الجدولة. " +
          "بالإضافة إلى الالتزام بما ورد في نموذج الشروط والأحكام بما يخص بند الحضور."
      },
      {
        title: isEnglish ? "4. Online Behavior:" : "٤. السلوك الإلكتروني:",
        content: isEnglish ?
          "I pledge to monitor my child's behavior during online classes, and I acknowledge that the Academy has the right to take disciplinary actions in case of behavioral violations through the online platform." :
          "أتعهد بمتابعة سلوك ابني/ابنتي خلال الحصص الدراسية الإلكترونية، وأدرك أن الأكاديمية لها الحق في اتخاذ إجراءات تأديبية في حال حدوث مخالفات سلوكية عبر المنصة الإلكترونية."
      },
      {
        title: isEnglish ? "5. Technology and Responsibilities:" : "٥. التقنية والمسؤوليات:",
        content: isEnglish ?
          "I acknowledge that I am responsible for providing an electronic device and stable internet connection to ensure my child's participation in online classes, and I understand that the Academy is not responsible for any technical issues related to my connection." :
          "أقر بأنني مسؤول عن توفير جهاز إلكتروني واتصال إنترنت مستقر لضمان مشاركة ابني/ابنتي في الحصص الدراسية عبر الإنترنت، وأدرك أن الأكاديمية غير مسؤولة عن أي مشكلات تقنية تتعلق بالاتصال من جانبي."
      },
      {
        title: isEnglish ? "6. Withdrawal or Cancellation:" : "٦. الانسحاب أو الإلغاء:",
        content: isEnglish ?
          "I understand that in case of wishing to withdraw my child from the Academy or cancel subscription to the program, the administration must be notified in writing before a specified period, and I agree to comply with the Cancellation and Refund Policy as shown in the Terms and Conditions of the Academy Policies." :
          "أعلم أنه في حالة الرغبة في سحب ابني/ابنتي من الأكاديمية أو إلغاء الاشتراك في البرنامج، يجب إبلاغ الإدارة كتابةً قبل فترة زمنية محددة، وأوافق على الالتزام بسياسة الإلغاء والاسترداد كما هو موضح في الشروط والأحكام الخاصة بسياسات الأكاديمية."
      },
      {
        title: isEnglish ? "7. Use of Online Educational Tools:" : "٧. استخدام الوسائل التعليمية الإلكترونية:",
        content: isEnglish ?
          "I agree to the Academy's use of e-learning platforms and modern technologies to deliver lessons, " +
          "and I acknowledge that I have read and understood the Privacy Policy related to the use of these tools." :
          "أوافق على استخدام الأكاديمية لمنصات التعليم الإلكتروني والتقنيات الحديثة لتقديم الدروس، " +
          "وأقر بأنني قد قرأت وفهمت سياسة الخصوصية المتعلقة باستخدام هذه الوسائل."
      },
      {
        title: isEnglish ? "8. Photos and Recordings:" : "٨. الصور والمقاطع المصورة:",
        content: isEnglish ? (
          <div className="space-y-2">
            <div className="flex gap-2">
              <span>-</span>
              <span>Keeping the camera on throughout the lecture to ensure the quality of the educational process and facilitate communication between teachers and all trainees.</span>
            </div>
            <div className="flex gap-2">
              <span>-</span>
              <span>Being in a quiet place away from noise with one of the backgrounds specified by customer service.</span>
            </div>
            <div className="flex gap-2">
              <span>-</span>
              <span>Using a computer screen as a minimum or a laptop.</span>
            </div>
            <div className="flex gap-2">
              <span>-</span>
              <span>Adhering to appropriate dress code (white - blue - black) as we are keen to develop discipline among trainees.</span>
            </div>
            <div className="flex gap-2">
              <span>-</span>
              <span>All lectures are recorded and sent to all trainees for general benefit. The recorded sessions are the exclusive property of the Academy and it has the right to use them for purposes such as &quot;analyzing student levels or promotional campaigns for the Academy.&quot;</span>
            </div>
          </div>
        ) : (
          <div className="space-y-2" dir="rtl">
            <div className="flex gap-2">
              <span>-</span>
              <span>فتح الكاميرا طوال فترة المحاضرة لضمان جودة العملية التعليمية وتسهيل التواصل بين المعلمين والمتدربين كافة.</span>
            </div>
            <div className="flex gap-2">
              <span>-</span>
              <span>يراعى التواجد في مكان هادئ بعيداً عن الضوضاء مع إحدى الخلفيات المحددة من قِبل خدمة العملاء.</span>
            </div>
            <div className="flex gap-2">
              <span>-</span>
              <span>استخدام شاشة كمبيوتر كحد أدنى أو لابتوب.</span>
            </div>
            <div className="flex gap-2">
              <span>-</span>
              <span>الالتزام بالزي المناسب (أبيض – أزرق – أسود) وذلك حرصاً منا على تنمية الانضباط لدى المتدرب.</span>
            </div>
            <div className="flex gap-2">
              <span>-</span>
              <span>جميع المحاضرات مسجلة ويتم إرسالها لجميع المتدربين للاستفادة العامة. تعتبر الحصص المسجلة ملك خالص للأكاديمية ويحق لها استخدامها على سبيل المثال &quot;تحليل لمستويات الطلاب أو حملات ترويجية للأكاديمية.&quot;</span>
            </div>
          </div>
        )
      },
      {
        title: isEnglish ? "9. Agreement to Terms:" : "٩. الموافقة على الشروط:",
        content: isEnglish ?
          "By clicking the purchase button, this is considered your acceptance of the above terms and conditions attached to Form No. MIA-TC 01" :
          "بمجرد الضغط على زر شراء، يعتبر هذا موافقة منك على الشروط والأحكام المذكورة أعلاه والمرفقة بنموذج رقم MIA-TC 01"
      }
    ],
    countries: [
      { value: "saudi", label: isEnglish ? "Saudi Arabia" : "المملكة العربية السعودية" },
      { value: "uae", label: isEnglish ? "United Arab Emirates" : "الإمارات العربية المتحدة" },
      { value: "kuwait", label: isEnglish ? "Kuwait" : "الكويت" },
      { value: "qatar", label: isEnglish ? "Qatar" : "قطر" },
      { value: "bahrain", label: isEnglish ? "Bahrain" : "البحرين" },
      { value: "oman", label: isEnglish ? "Oman" : "عمان" },
    ]
  }

  return (
    <div onClick={onClose} className="fixed inset-0  bg-[#1E1E1E]/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div ref={modalRef}
        onClick={(e) => e.stopPropagation()} className="relative max-w-4xl w-full rounded-2xl">
        <div className="max-h-[90vh] overflow-y-auto rounded-2xl custom-scrollbar">
          <div className="p-6 space-y-6" dir={isEnglish ? "ltr" : "rtl"}>
            <div className="bg-[#F47D21] px-12 rounded-2xl py-6 text-white">
              <h1 className={`text-xl font-bold mb-3 ${isEnglish ? "text-left" : "text-right"} `}>{translations.title}</h1>
              <div className="flex justify-between items-center">
                <p className="text-2xl font-extrabold  tracking-wider ">&quot;MIA-TC 01&quot;</p>
                <div className="flex flex-col ">
                  <p className="text-sm font-medium ">{translations.date}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium  ">{translations.programName}:</span>
                    <input
                      type="text"
                      value=""
                      className="
                          text-xs          
                          bg-transparent    
                          border-none     
                          outline-none   
                          px-1            
                          w-32             
                          placeholder-opacity-0 
                        "
                      placeholder="______"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#8D93A1] mb-2">
                    {translations.fullNameLabel}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-[#E4EBF3] focus:outline-none border border-transparent rounded-lg placeholder-[#B1BBC6]"
                    placeholder={translations.fullNamePlaceholder}
                    dir={isEnglish ? "ltr" : "rtl"}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#8D93A1] mb-2">
                    {translations.emailLabel}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-[#E4EBF3] border focus:outline-none border-transparent rounded-lg placeholder-[#B1BBC6]"
                    placeholder={translations.emailPlaceholder}
                    dir="ltr"
                  />
                </div>

                <div className="mt-1">
                  <label className="block mb-1 text-sm font-medium text-[#8D93A1] w-full">
                    {translations.phoneLabel}
                  </label>
                  <div className="flex">
                    <input
                      type="tel"
                      name="phone"
                      placeholder={translations.phonePlaceholder}
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`flex-1 px-6 py-3 bg-[#E4EBF3] focus:outline-none placeholder:text-[#B1BBC6] 
                        ${isEnglish ? " rounded-l-lg" : "  rounded-r-lg"}`}

                      dir={isEnglish ? "ltr" : "rtl"}
                    />
                    <div className="relative">
                      <select
                        name="countryCode"
                        value={"+966"}
                        onChange={handleInputChange}
                        className={`appearance-none px-6 py-3 text-[#8D93A1] bg-[#E4EBF3] h-full text-sm focus:outline-none ${isEnglish ? "rounded-r-lg" : "  rounded-l-lg"
                          }`}
                        dir="ltr"
                      >
                        <option value="+966">+966</option>
                        <option value="+971">+971</option>
                        <option value="+965">+965</option>
                        <option value="+974">+974</option>
                      </select>
                      <LuChevronDown className="absolute  right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#B1BBC6] pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#8D93A1] mb-2">
                    {translations.countryLabel}
                  </label>
                  <div className="relative">
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full p-3 text-[#B1BBC6] bg-[#E4EBF3] focus:outline-none border border-transparent rounded-lg appearance-none"
                      dir={isEnglish ? "ltr" : "rtl"}
                    >
                      <option value="">{translations.countryPlaceholder}</option>
                      {translations.countries.map((country) => (
                        <option key={country.value} value={country.value}>
                          {country.label}
                        </option>
                      ))}
                    </select>
                    <LuChevronDown className={`absolute ${isEnglish ? "right-3" : "left-3"} top-1/2 transform -translate-y-1/2 text-[#B1BBC6] w-5 h-5 pointer-events-none`} />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h2 className="text-lg font-bold text-gray-800 mb-6 text-center md:text-start">
                {translations.termsTitle}
              </h2>
              <div className="mb-6">
                <div className="bg-[#EEEEEE] custom-scrollbar p-6 rounded-lg text-sm leading-relaxed space-y-6 max-h-60 overflow-y-auto">
                  {translations.policies.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                      <h3 className="font-bold text-black mb-2">{item.title}</h3>
                      <div className="text-black">{item.content}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className={`flex items-center ${isEnglish ? "space-x-3" : "space-x-reverse space-x-3"}`}>
                  <input
                    type="checkbox"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-orange-500 border-2 border-orange-300 rounded focus:ring-orange-500 bg-white"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {translations.agreeText}
                    <span className="text-orange-500"> {translations.termsAndConditions}</span>
                  </span>
                </label>
              </div>

              <div className="space-y-3">
                <button
                  disabled={!formData.agreed}
                  className={`w-full py-3 px-6 rounded-[22px] font-bold text-white transition-all duration-200 ${formData.agreed
                    ? "bg-gradient-to-r bg-[#f7842c] cursor-pointer shadow-lg hover:shadow-xl"
                    : "bg-[#C5C5C5] cursor-not-allowed"
                    }`}
                >
                  {translations.createAccount}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}