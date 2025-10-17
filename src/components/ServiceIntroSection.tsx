"use client"

import Image from "next/image"
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"

export default function ServiceIntroSection() {
  const [mounted, setMounted] = useState(false)
  const { t, ready } = useTranslation('common')

  useEffect(() => {
    setMounted(true)
  }, [])

  // 번역이 준비되지 않았거나 마운트되지 않았으면 로딩 상태 표시
  if (!ready || !mounted) {
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
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-auto lg:flex-shrink-0">
            <div className="w-full max-w-md lg:w-[500px] h-[250px] sm:h-[300px] lg:h-[350px] rounded-lg overflow-hidden mx-auto lg:mx-0">
              <Image
                src="/serviceintro_img1.jpg"
                alt="Flexible packaging solutions"
                width={500}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 lg:pl-8 xl:pl-20 text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight whitespace-pre-line">
              {t('service_intro_title') || 'From food to household goods,\neverything in flexible plastic packaging'}
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 leading-relaxed mt-4 whitespace-pre-line">
              {t('service_intro_description') || 'We provide high-quality flexible packaging solutions for various industries.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}