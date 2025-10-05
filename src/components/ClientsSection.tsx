"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"

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
].filter(Boolean) // undefined 항목 제거

export default function ClientsSection() {
  const [mounted, setMounted] = useState(false)
  const { t, ready } = useTranslation('common')

  useEffect(() => {
    setMounted(true)
  }, [])

  // 번역이 준비되지 않았거나 마운트되지 않았거나 clientLogos가 없으면 로딩 상태 표시
  if (!ready || !mounted || !clientLogos || clientLogos.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0A3D62] mx-auto mb-4"></div>
            <div className="text-[#0A3D62] text-lg font-semibold">
              Loading...
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0A3D62] mb-3 md:mb-4 lg:mb-6 whitespace-pre-line">
            {t('clients_section_title') || 'Major Clients'}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#555555] max-w-3xl mx-auto whitespace-pre-line">
            {t('clients_section_subtitle') || 'Trusted by leading companies worldwide'}
          </p>
        </div>

        {/* Client Logos - Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 gap-12 mb-20">
          {clientLogos.map((client, index) => (
            <div key={index} className="bg-[#F5F6FA] rounded-xl p-10 flex items-center justify-center h-40 hover:shadow-lg transition-shadow duration-300 border border-[#E5E5E5] hover:border-[#FFC312]">
              <div className="relative w-full h-full flex items-center justify-center">
                {client?.src && (
                  <Image
                    src={client.src}
                    alt={`${client.name || 'Client'} logo`}
                    width={client.width || 150}
                    height={client.height || 100}
                    className="object-contain max-w-full max-h-full"
                    priority={index < 4}
                    onError={(e) => {
                      console.warn(`Failed to load image: ${client.src}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos - Mobile Two Row Animation */}
        <div className="md:hidden mb-20">
          <div className="space-y-4">
            {/* First Row - Right to Left */}
            <div className="overflow-hidden relative">
              <div className="flex animate-scroll-left touch-manipulation">
                {/* First set of logos (first 6) */}
                {clientLogos?.slice(0, 6).map((client, index) => {
                  if (!client) return null;
                  return (
                    <div key={`first-row-${index}`} className="flex-shrink-0 mx-2 bg-[#F5F6FA] rounded-lg p-3 flex items-center justify-center h-16 w-24 border border-[#E5E5E5] hover:border-[#FFC312] transition-colors duration-300">
                      {client?.src && (
                        <Image
                          src={client.src}
                          alt={`${client.name || 'Client'} logo`}
                          width={client.width || 150}
                          height={client.height || 100}
                          className="object-contain max-w-full max-h-full"
                          onError={(e) => {
                            console.warn(`Failed to load image: ${client.src}`);
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      )}
                    </div>
                  );
                })}
                {/* Duplicate set for seamless loop */}
                {clientLogos?.slice(0, 6).map((client, index) => {
                  if (!client) return null;
                  return (
                    <div key={`first-row-dup-${index}`} className="flex-shrink-0 mx-2 bg-[#F5F6FA] rounded-lg p-3 flex items-center justify-center h-16 w-24 border border-[#E5E5E5] hover:border-[#FFC312] transition-colors duration-300">
                      {client?.src && (
                        <Image
                          src={client.src}
                          alt={`${client.name || 'Client'} logo`}
                          width={client.width || 150}
                          height={client.height || 100}
                          className="object-contain max-w-full max-h-full"
                          onError={(e) => {
                            console.warn(`Failed to load image: ${client.src}`);
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
              {/* 그라데이션 오버레이 */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            </div>

            {/* Second Row - Left to Right */}
            <div className="overflow-hidden relative">
              <div className="flex animate-scroll-right touch-manipulation">
                {/* Second set of logos (last 6) */}
                {clientLogos?.slice(6, 12).map((client, index) => {
                  if (!client) return null;
                  return (
                    <div key={`second-row-${index}`} className="flex-shrink-0 mx-2 bg-[#F5F6FA] rounded-lg p-3 flex items-center justify-center h-16 w-24 border border-[#E5E5E5] hover:border-[#FFC312] transition-colors duration-300">
                      {client?.src && (
                        <Image
                          src={client.src}
                          alt={`${client.name || 'Client'} logo`}
                          width={client.width || 150}
                          height={client.height || 100}
                          className="object-contain max-w-full max-h-full"
                          onError={(e) => {
                            console.warn(`Failed to load image: ${client.src}`);
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      )}
                    </div>
                  );
                })}
                {/* Duplicate set for seamless loop */}
                {clientLogos?.slice(6, 12).map((client, index) => {
                  if (!client) return null;
                  return (
                    <div key={`second-row-dup-${index}`} className="flex-shrink-0 mx-2 bg-[#F5F6FA] rounded-lg p-3 flex items-center justify-center h-16 w-24 border border-[#E5E5E5] hover:border-[#FFC312] transition-colors duration-300">
                      {client?.src && (
                        <Image
                          src={client.src}
                          alt={`${client.name || 'Client'} logo`}
                          width={client.width || 150}
                          height={client.height || 100}
                          className="object-contain max-w-full max-h-full"
                          onError={(e) => {
                            console.warn(`Failed to load image: ${client.src}`);
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
              {/* 그라데이션 오버레이 */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            </div>
          </div>
        </div>
          
        {/* Contact Section */}
        <div className="bg-[#F5F6FA] rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 xl:p-16 text-center border border-[#E5E5E5]">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A3D62] mb-4 md:mb-6 lg:mb-8 whitespace-pre-line">
            {t('contact_section_title') || 'Ready to Get Started?'}
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#555555] mb-6 md:mb-8 lg:mb-10 max-w-4xl mx-auto whitespace-pre-line">
            {t('contact_section_description') || 'Contact us today for a free consultation and quote.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 justify-center">
            <Link href="/quote">
              <Button size="lg" className="bg-[#FFC312] hover:bg-[#FFD93D] text-[#0A3D62] px-6 md:px-8 lg:px-10 py-3 md:py-4 text-sm md:text-base lg:text-lg font-bold whitespace-pre-line w-full sm:w-auto">
                {t('get_quote') || 'Get Quote'}
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-[#0A3D62] text-[#0A3D62] hover:bg-[#0A3D62] hover:text-white px-6 md:px-8 lg:px-10 py-3 md:py-4 text-sm md:text-base lg:text-lg font-bold whitespace-pre-line w-full sm:w-auto">
                {t('get_consultation') || 'Get Consultation'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}