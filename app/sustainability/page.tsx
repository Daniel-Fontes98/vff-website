"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import { Playfair_Display, Inter } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Leaf, Users, Recycle } from "lucide-react"
import { Navbar } from "@/components/Navbar"
import Footer from "@/components/Footer"

const playfair = Playfair_Display({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

export default function SustainabilityPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div
      className={`min-h-screen bg-gray-900 text-gray-100 ${inter.className}`}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Sustain.jpg"
          alt="Sustainable mining operation"
          width={2000}
          height={1333}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1
            className={`${playfair.className} text-4xl md:text-6xl font-bold mb-6 leading-tight`}
          >
            {t.sustainabilityTitle}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <p className="text-xl mb-12 text-center max-w-3xl mx-auto">
          {t.sustainabilityIntro}
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
            <Leaf className="h-12 w-12 text-[#4DB6AC] mb-6" />
            <h2 className={`${playfair.className} text-2xl font-semibold mb-4`}>
              {t.operationalExcellence}
            </h2>
            <p className="text-gray-300">{t.operationalExcellenceDesc}</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
            <Users className="h-12 w-12 text-[#4DB6AC] mb-6" />
            <h2 className={`${playfair.className} text-2xl font-semibold mb-4`}>
              {t.socioeconomicDevelopment}
            </h2>
            <p className="text-gray-300">{t.socioeconomicDevelopmentDesc}</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
            <Recycle className="h-12 w-12 text-[#4DB6AC] mb-6" />
            <h2 className={`${playfair.className} text-2xl font-semibold mb-4`}>
              {t.environmentalResponsibility}
            </h2>
            <p className="text-gray-300">{t.environmentalResponsibilityDesc}</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-[#4DB6AC] hover:underline"
          >
            <ChevronLeft className="mr-2" />
            {t.backToHome}
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer playfair={playfair} t={t} />
    </div>
  )
}
