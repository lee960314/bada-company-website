"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useTranslation } from "react-i18next"
import Link from "next/link"

export default function Location() {
  const { t, ready } = useTranslation('common')

  // 번역이 준비되지 않았으면 로딩 상태 표시
  if (!ready) {
    return (
      <section className="py-20 bg-[#F5F6FA]">
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
  const contactInfo = [
    {
      icon: MapPin,
      title: t('about_address'),
      content: t('about_address_content'),
      bgColor: 'bg-[#0A3D62]',
      iconColor: 'text-white'
    },
    {
      icon: Phone,
      title: t('about_tel'),
      content: t('about_tel_content'),
      bgColor: 'bg-white',
      iconColor: 'text-[#0A3D62]'
    },
    {
      icon: Mail,
      title: t('about_fax'),
      content: t('about_fax_content'),
      bgColor: 'bg-white',
      iconColor: 'text-[#0A3D62]'
    },
    {
      icon: Clock,
      title: t('about_email'),
      content: t('about_email_content'),
      bgColor: 'bg-white',
      iconColor: 'text-[#0A3D62]'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A3D62] mb-4">
            {t('about_visit_facility')}
          </h2>
            <p className="text-lg text-[#555555] max-w-2xl mx-auto whitespace-pre-line">
            {t('about_facility_description')}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-[#E5E5E5]">
                {/* Icon */}
                <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#0A3D62]`}>
                  <item.icon className={`h-8 w-8 ${item.iconColor}`} />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-[#0A3D62] mb-3">
                  {item.title}
                </h3>
                
                {/* Content */}
                <div className="text-[#555555] text-sm leading-relaxed">
                  {item.content.split('\n').map((line, lineIndex) => (
                    <div key={lineIndex}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-[#F5F6FA] rounded-2xl p-8 text-center border border-[#E5E5E5]">
            <h3 className="text-2xl font-bold text-[#0A3D62] mb-4">
              {t('about_visit_facility')}
            </h3>
            <p className="text-[#555555] mb-6 max-w-2xl mx-auto whitespace-pre-line">
              {t('about_facility_description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/quote"
                className="bg-[#FFC312] hover:bg-[#FFD93D] text-[#0A3D62] px-8 py-3 rounded-lg font-bold transition-colors duration-300 text-center"
              >
                {t('get_quote')}
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-[#0A3D62] text-[#0A3D62] hover:bg-[#0A3D62] hover:text-white px-8 py-3 rounded-lg font-bold transition-colors duration-300 text-center"
              >
                {t('menu_contact')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}