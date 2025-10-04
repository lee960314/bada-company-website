"use client"

import { Shield, Award, CheckCircle, Star } from "lucide-react"
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
      title: t('cert_iso_9001'),
      description: t('cert_iso_9001_desc'),
      type: t('cert_iso_9001_type'),
      icon: Shield
    },
    {
      title: t('cert_iso_14001'),
      description: t('cert_iso_14001_desc'),
      type: t('cert_iso_14001_type'),
      icon: Award
    },
    {
      title: t('cert_grs'),
      description: t('cert_grs_desc'),
      type: t('cert_grs_type'),
      icon: CheckCircle
    },
    {
      title: t('cert_fda'),
      description: t('cert_fda_desc'),
      type: t('cert_fda_type'),
      icon: Star
    },
    {
      title: t('cert_ce'),
      description: t('cert_ce_desc'),
      type: t('cert_ce_type'),
      icon: Shield
    },
    {
      title: t('cert_sgs'),
      description: t('cert_sgs_desc'),
      type: t('cert_sgs_type'),
      icon: Award
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-[#F5F6FA] rounded-xl p-8 text-center group hover:bg-white transition-colors duration-300 border border-[#E5E5E5] hover:border-[#FFC312]">
              <div className="w-16 h-16 bg-[#0A3D62] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FFC312] transition-colors duration-300">
                <cert.icon className="h-8 w-8 text-white group-hover:text-[#0A3D62]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A3D62] mb-2">{cert.title}</h3>
              <p className="text-[#555555] mb-3">{cert.description}</p>
              <span className="inline-block bg-white text-[#0A3D62] px-3 py-1 rounded-full text-sm font-medium border border-[#E5E5E5]">
                {cert.type}
              </span>
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