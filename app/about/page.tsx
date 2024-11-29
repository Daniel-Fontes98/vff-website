"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import { Playfair_Display, Inter } from "next/font/google"
import Image from "next/image"
import { Navbar } from "@/components/Navbar"
import { Leaf, Lightbulb, Shield, Users, Award } from "lucide-react"
import Footer from "@/components/Footer"

const playfair = Playfair_Display({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

export default function AboutPage() {
  const { language } = useLanguage()
  const t = translations[language]

  const values = [
    { icon: Leaf, title: t.value1 },
    { icon: Lightbulb, title: t.value2 },
    { icon: Shield, title: t.value3 },
    { icon: Users, title: t.value4 },
    { icon: Award, title: t.value5 },
  ]

  return (
    <div
      className={`min-h-screen bg-gray-900 text-gray-100 ${inter.className}`}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/diamond.webp"
          alt="Mining operation panorama"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1
            className={`${playfair.className} text-4xl md:text-6xl font-bold mb-6 leading-tight`}
          >
            {t.aboutUs}
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200">
            {t.aboutUsTitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2
            className={`${playfair.className} text-3xl font-bold mb-8 text-[#4DB6AC]`}
          >
            {t.aboutUs}
          </h2>
          <div className="space-y-6 text-lg">
            <p>{t.aboutUsContent1}</p>
            <p>{t.aboutUsContent2}</p>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
            <h3
              className={`${playfair.className} text-2xl font-bold mb-4 text-[#4DB6AC]`}
            >
              {t.ourMission}
            </h3>
            <p>{t.missionContent}</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
            <h3
              className={`${playfair.className} text-2xl font-bold mb-4 text-[#4DB6AC]`}
            >
              {t.ourVision}
            </h3>
            <p>{t.visionContent}</p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h3
            className={`${playfair.className} text-3xl font-bold mb-8 text-center text-[#4DB6AC]`}
          >
            {t.ourValues}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <value.icon className="h-12 w-12 text-[#4DB6AC] mb-4" />
                <h4 className="text-xl font-semibold">{value.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer playfair={playfair} t={t} />
    </div>
  )
}
