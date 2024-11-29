"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import { Playfair_Display, Inter } from "next/font/google"
import Image from "next/image"
import { Navbar } from "@/components/Navbar"
import Footer from "@/components/Footer"

const playfair = Playfair_Display({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

const projects = [
  {
    id: "kawa-katele" as const,
    titleKey: "kawaKateleTitle" as const,
    descKey: "kawaKateleDesc" as const,
    image: "/img.png" as const,
  },
  {
    id: "capaia" as const,
    titleKey: "capaiaTitle" as const,
    descKey: "capaiaDesc" as const,
    image: "/img1.jpg" as const,
  },
  {
    id: "emaz" as const,
    titleKey: "emazTitle" as const,
    descKey: "emazDesc" as const,
    image: "/img2.png" as const,
  },
  {
    id: "quartz" as const,
    titleKey: "quartzTitle" as const,
    descKey: "quartzDesc" as const,
    image: "/img3.png" as const,
  },
]

export default function ProjectsPage() {
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
          src="/img4.jpg"
          alt="Mining projects hero image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1
            className={`${playfair.className} text-4xl md:text-6xl font-bold mb-6 leading-tight`}
          >
            {t.projects}
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200">
            {t.projectsSubtitle}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-xl"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={t[project.titleKey]}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2
                  className={`${playfair.className} text-2xl font-bold mb-4 text-[#4DB6AC]`}
                >
                  {t[project.titleKey]}
                </h2>
                <p className="text-gray-300 mb-6">{t[project.descKey]}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer playfair={playfair} t={t} />
    </div>
  )
}
