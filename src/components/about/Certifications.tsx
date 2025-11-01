"use client"

import Image from "next/image"
import { useTranslation } from "react-i18next"

export default function Certifications() {
  const { t, ready } = useTranslation('common')

  // 번역이 준비되지 않았으면 로딩 상태 표시
  if (!ready) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse text-[#0A3D62] text-4xl font-bold mb-4">
              Loading...
            </div>
          </div>
        </div>
      </section>
    )
  }
  const certifications = [
    {
      image: "/certi_img1.png",
      alt: "Industrial Product Production License"
    },
    {
      image: "/certi_img2.png", 
      alt: "Food Grade Plastic Packaging Certificate"
    },
    {
      image: "/ISO_img.png",
      alt: "ISO 9001:2015 Quality Management System Certification"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A3D62] mb-4">
            {t('about_certifications')}
          </h2>
          <p className="text-lg text-[#555555] max-w-2xl mx-auto whitespace-pre-line">
            {t('about_certifications_description')}
          </p>
        </div>

        {/* 인증서 이미지 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white border border-[#E5E5E5]">
                <Image
                  src={cert.image}
                  alt={cert.alt}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[#0A3D62] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">{t('about_quality_assurance')}</h3>
            <p className="text-gray-300 max-w-3xl mx-auto whitespace-pre-line">
              {t('about_quality_description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}