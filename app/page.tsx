"use client"

import Image from "next/image"
import { Playfair_Display, Inter } from "next/font/google"
import {
  ChevronRight,
  Shield,
  TrendingUp,
  Search,
  BarChart2,
  Globe,
  Maximize2,
} from "lucide-react"
import { Navbar } from "@/components/Navbar"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import Footer from "@/components/Footer"

const playfair = Playfair_Display({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

export default function LandingPage() {
  const { language } = useLanguage()
  const t = translations[language]
  return (
    <div
      className={`min-h-screen bg-gray-900 text-gray-100 ${inter.className}`}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <Image
          src="/Diamond.jpg"
          alt="Close-up of a diamond with green reflections"
          width={2000}
          height={1333}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1
            className={`${playfair.className} text-5xl md:text-7xl font-bold mb-6 leading-tight`}
          >
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200">
            {t.heroSubtitle}
          </p>
          <a
            href="/contact"
            className="bg-[#00897B] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#00796B] transition-all duration-300 inline-flex items-center transform hover:scale-105"
          >
            {t.exploreOpportunities} <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <div className="container mx-auto px-4">
          <h2
            className={`${playfair.className} text-4xl font-bold text-center mb-16 text-[#4DB6AC]`}
          >
            {t.redefiningExploration}
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg mb-6 leading-relaxed">{t.aboutText1}</p>
              <p className="text-lg leading-relaxed">{t.aboutText2}</p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/width_1600.webp"
                alt="Geologist examining rock samples"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3
                  className={`${playfair.className} text-2xl font-semibold mb-2`}
                >
                  {t.expertAnalysis}
                </h3>
                <p className="text-sm text-gray-300">{t.expertAnalysisDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-b from-gray-800 to-gray-900"
      >
        <div className="container mx-auto px-4">
          <h2
            className={`${playfair.className} text-4xl font-bold text-center mb-16 text-[#4DB6AC]`}
          >
            {t.ourServices}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: t.secureInvestments,
                description: t.secureInvestmentsDesc,
              },
              {
                icon: Search,
                title: t.advancedExploration,
                description: t.advancedExplorationDesc,
              },
              {
                icon: BarChart2,
                title: t.marketIntelligence,
                description: t.marketIntelligenceDesc,
              },
              {
                icon: Globe,
                title: t.globalOperations,
                description: t.globalOperationsDesc,
              },
              {
                icon: TrendingUp,
                title: t.sustainableGrowth,
                description: t.sustainableGrowthDesc,
              },
              {
                icon: Maximize2,
                title: t.technologyIntegration,
                description: t.technologyIntegrationDesc,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <service.icon className="h-12 w-12 text-[#4DB6AC] mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section
        id="technology"
        className="py-20 bg-gradient-to-b from-gray-900 to-[#004D40]"
      >
        <div className="container mx-auto px-4">
          <h2
            className={`${playfair.className} text-4xl font-bold text-center mb-16 text-[#4DB6AC]`}
          >
            {t.cuttingEdgeTechnology}
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/Data.avif"
                alt="Advanced data analysis on multiple screens"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3
                  className={`${playfair.className} text-2xl font-semibold mb-2`}
                >
                  {t.dataDrivenDecisions}
                </h3>
                <p className="text-sm text-gray-300">
                  {t.dataDrivenDecisionsDesc}
                </p>
              </div>
            </div>
            <div>
              <h3
                className={`${playfair.className} text-3xl font-semibold mb-6 text-[#4DB6AC]`}
              >
                {t.revolutionizingExploration}
              </h3>
              <ul className="space-y-4">
                {t.techList.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-[#4DB6AC] mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-gray-400">{t.techDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-20 bg-[#004D40] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`${playfair.className} text-4xl font-bold mb-6`}>
            {t.readyToRevolutionize}
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">{t.joinUs}</p>
          <a
            href="/contact"
            className="bg-[#4DB6AC] text-gray-900 px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#80CBC4] transition-all duration-300 inline-flex items-center transform hover:scale-105"
          >
            {t.connectWithExperts} <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <Footer playfair={playfair} t={t} />
    </div>
  )
}
