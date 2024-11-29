"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import { Playfair_Display, Inter } from "next/font/google"
import { Navbar } from "@/components/Navbar"
import Footer from "@/components/Footer"

const playfair = Playfair_Display({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

export default function PrivacyPolicyPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div
      className={`min-h-screen bg-gray-900 text-gray-100 ${inter.className}`}
    >
      <Navbar />

      <main className="bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 py-16 pt-32 ">
          <h1
            className={`${playfair.className} text-4xl md:text-5xl font-bold mb-8 text-center text-[#4DB6AC]`}
          >
            {t.privacyPolicyTitle}
          </h1>
          <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl">
            <div className="space-y-6">
              <p>{t.privacyContent1}</p>
              <p>{t.privacyContent2}</p>
              <p>{t.privacyContent3}</p>
              {/* Add more privacy policy content as needed */}
            </div>
          </div>
        </div>
      </main>

      <Footer playfair={playfair} t={t} />
    </div>
  )
}
