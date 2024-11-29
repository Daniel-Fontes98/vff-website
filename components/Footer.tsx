import { Diamond } from "lucide-react"
import type { translations } from "@/utils/translations"
import { NextFont } from "next/dist/compiled/@next/font"

interface Props {
  playfair: NextFont
  t: (typeof translations)["pt"]
}

export default function Footer({ playfair, t }: Props) {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Diamond className="h-8 w-8 text-[#4DB6AC]" />
            <span
              className={`${playfair.className} text-2xl font-bold text-white`}
            >
              VFF Investimentos
            </span>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center space-x-6">
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-[#4DB6AC] transition-colors"
                >
                  {t.privacyPolicy}
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="hover:text-[#4DB6AC] transition-colors"
                >
                  {t.termsOfService}
                </a>
              </li>

              <li>
                <a
                  href="/sustainability"
                  className="hover:text-[#4DB6AC] transition-colors"
                >
                  {t.sustainability}
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} VFF Investimentos.{" "}
            {t.allRightsReserved}
          </p>
          <p className="mt-2">{t.pioneeringSustainable}</p>
        </div>
      </div>
    </footer>
  )
}
