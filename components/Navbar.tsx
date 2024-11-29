"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, Globe } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/LanguageContext"

const navItems = [
  {
    title: { en: "Projects", pt: "Projectos" },
    href: "/projects",
  },
  {
    title: { en: "Contacts", pt: "Contactos" },
    href: "/contact",
  },
  {
    title: { en: "About Us", pt: "Sobre Nós" },
    href: "/about",
  },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLanguageChange = (newLanguage: "en" | "pt") => {
    setLanguage(newLanguage)
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src="/vff_logo.svg"
              alt="VFF Investimentos"
              width={100}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.title[language]} className="relative">
                <Link
                  href={item.href}
                  className="text-white hover:text-[#4DB6AC] transition-colors duration-200 flex items-center"
                >
                  {item.title[language]}
                </Link>
              </div>
            ))}
          </div>

          {/* Language Switcher and Contact Button */}
          <div className="hidden lg:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="w-full px-2">
                  <Globe className="h-5 w-5 text-[#4DB6AC]" />
                  {language === "pt" ? "PT" : "EN"}
                  <span className="sr-only">Switch language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("pt")}>
                  Português
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="lg:hidden" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-gray-900 border-gray-800"
            >
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <div key={item.title[language]}>
                      <Link
                        href={item.href}
                        className="text-lg font-medium text-white hover:text-[#4DB6AC]"
                      >
                        {item.title[language]}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="flex  justify-end space-x-4 mt-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      handleLanguageChange(language === "en" ? "pt" : "en")
                    }
                  >
                    <Globe className="h-5 w-5 text-[#4DB6AC]" />
                    <span className="sr-only">Switch language</span>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}
