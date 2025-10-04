"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"

const clientLogos = [
  { name: "Aushell", src: "/aushell_logo.png", width: 150, height: 100 },
  { name: "Blondie Cafe", src: "/Blondie Cafe _logo.png", width: 150, height: 100 },
  { name: "Comvita", src: "/Comvita _logo.png", width: 150, height: 100 },
  { name: "Designer Brands", src: "/DB DESIGNER BRANDS _logo.png", width: 150, height: 100 },
  { name: "FuMoTo Film", src: "/FuMoTo film_logo.png", width: 150, height: 100 },
  { name: "Hive 175", src: "/HIVE 175 _logo.png", width: 150, height: 100 },
  { name: "Lipbusy Care", src: "/Lipbusy care _logo.png", width: 150, height: 100 },
  { name: "Midian", src: "/midian _logo.png", width: 180, height: 120 },
  { name: "Shrine", src: "/SHRINE _logo.png", width: 150, height: 100 },
  { name: "Waterpik", src: "/Waterpik_logo.png", width: 150, height: 100 },
  { name: "Yan Wo Wang", src: "/Yan Wo Wang _logo.png", width: 150, height: 100 },
  { name: "Yuanchu", src: "/yuanchu _logo.png", width: 180, height: 120 },
]

export default function ClientsSection() {
  const { t } = useTranslation('common')
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-[#0A3D62] mb-6 whitespace-pre-line">
            {t('clients_section_title')}
          </h2>
          <p className="text-xl text-[#555555] max-w-3xl mx-auto whitespace-pre-line">
            {t('clients_section_subtitle')}
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 mb-20">
          {clientLogos.map((client, index) => (
            <div key={index} className="bg-[#F5F6FA] rounded-xl p-10 flex items-center justify-center h-40 hover:shadow-lg transition-shadow duration-300 border border-[#E5E5E5] hover:border-[#FFC312]">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={client.src}
                  alt={`${client.name} logo`}
                  width={client.width}
                  height={client.height}
                  className="object-contain max-w-full max-h-full"
                  priority={index < 4}
                />
              </div>
            </div>
          ))}
        </div>
          
        {/* Contact Section */}
        <div className="bg-[#F5F6FA] rounded-2xl p-12 lg:p-16 text-center border border-[#E5E5E5]">
          <h3 className="text-4xl sm:text-5xl font-bold text-[#0A3D62] mb-8 whitespace-pre-line">
            {t('contact_section_title')}
          </h3>
          <p className="text-xl text-[#555555] mb-10 max-w-4xl mx-auto whitespace-pre-line">
            {t('contact_section_description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/quote">
              <Button size="lg" className="bg-[#FFC312] hover:bg-[#FFD93D] text-[#0A3D62] px-10 py-4 text-lg font-bold whitespace-pre-line">
                {t('get_quote')}
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-[#0A3D62] text-[#0A3D62] hover:bg-[#0A3D62] hover:text-white px-10 py-4 text-lg font-bold whitespace-pre-line">
                {t('get_consultation')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}