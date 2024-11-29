"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import { Playfair_Display, Inter } from "next/font/google"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import { Navbar } from "@/components/Navbar"
import Footer from "@/components/Footer"

const playfair = Playfair_Display({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

export default function ContactPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div
      className={`min-h-screen bg-gray-900 text-gray-100 ${inter.className}`}
    >
      <Navbar />

      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/cobalto.webp"
          alt="Contact us hero image"
          fill
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1
            className={`${playfair.className} text-4xl md:text-6xl font-bold mb-4 leading-tight`}
          >
            {t.contactTitle}
          </h1>
        </div>
      </section>

      <main className=" mx-auto px-4 py-12 bg-gradient-to-b from-gray-900 to-gray-800 w-full ">
        {/* Contact Information */}
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-xl p-8 mb-12">
          <h2
            className={`${playfair.className} text-3xl font-bold mb-8 text-center text-[#4DB6AC]`}
          >
            {t.contact}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Phone className="h-12 w-12 text-[#4DB6AC] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.phoneNumber}</h3>
              <p>+244 932 134 121</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Mail className="h-12 w-12 text-[#4DB6AC] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.email}</h3>
              <p>geral@vff.investment</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MapPin className="h-12 w-12 text-[#4DB6AC] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.location}</h3>
              <p>{t.addressLine1}</p>
              <p>{t.addressLine2}</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-xl p-8 mb-12">
          <div className="w-full h-[50vh] rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.7612693605147!2d13.236553275016297!3d-8.808484591244282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f246393c96a5%3A0xe7c1bb1deb5f005b!2sTorre%20do%20ambiente!5e0!3m2!1sen!2sao!4v1732809301736!5m2!1sen!2sao"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </main>

      <Footer playfair={playfair} t={t} />
    </div>
  )
}
