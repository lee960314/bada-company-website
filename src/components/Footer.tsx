"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t, ready } = useTranslation('common')
  
  // 번역이 준비되지 않았으면 로딩 상태 표시
  if (!ready) {
    return (
      <footer className="bg-[#0A3D62] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <div className="flex items-center justify-center h-32">
              <div className="animate-pulse text-gray-300">Loading...</div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  return (
    <footer className="bg-[#0A3D62] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 메인 푸터 콘텐츠 */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 회사 정보 */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Image
                  src="/header_logo.png"
                  alt="KJ FLEX PACK"
                  width={350}
                  height={175}
                  className="h-20 w-auto"
                />
              </div>
              <p className="text-gray-300 text-base leading-relaxed whitespace-pre-line">
                {t('footer_description')}
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="p-2 text-gray-300 hover:text-[#FFC312] hover:bg-white/10">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 text-gray-300 hover:text-[#FFC312] hover:bg-white/10">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 text-gray-300 hover:text-[#FFC312] hover:bg-white/10">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold whitespace-pre-line">{t('footer_products')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/manufacturing-process" className="text-gray-300 hover:text-[#FFC312] transition-colors text-base whitespace-pre-line">
                    {t('footer_manufacturing_process')}
                  </Link>
                </li>
                <li>
                  <Link href="/products/flexible-packaging" className="text-gray-300 hover:text-[#FFC312] transition-colors text-base whitespace-pre-line">
                    {t('footer_flexible_packaging')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold whitespace-pre-line">{t('footer_company_info')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-[#FFC312] transition-colors text-base whitespace-pre-line">
                    {t('footer_about_us')}
                  </Link>
                </li>
                <li>
                  <Link href="/materials" className="text-gray-300 hover:text-[#FFC312] transition-colors text-base whitespace-pre-line">
                    {t('footer_materials')}
                  </Link>
                </li>
                <li>
                  <Link href="/quote" className="text-gray-300 hover:text-[#FFC312] transition-colors text-base whitespace-pre-line">
                    {t('footer_get_quote')}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-[#FFC312] transition-colors text-base whitespace-pre-line">
                    {t('footer_contact')}
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="text-gray-300 hover:text-[#FFC312] transition-colors text-base whitespace-pre-line">
                    {t('footer_dashboard')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold whitespace-pre-line">{t('footer_contact')}</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-base">+82-2-1234-5678</p>
                    <p className="text-gray-400 text-sm">Mon-Fri 09:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-base">info@kjflexpack.com</p>
                    <p className="text-gray-400 text-sm">24/7 Available</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-base">Gangnam-gu, Seoul</p>
                    <p className="text-gray-400 text-sm">KJ Flex Pack Building</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 구분선 */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-base whitespace-pre-line">
              © 2024 {t('footer_company')}. {t('footer_rights')}.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-base whitespace-pre-line">
                {t('footer_privacy_policy')}
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-base whitespace-pre-line">
                {t('footer_terms_of_service')}
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors text-base whitespace-pre-line">
                {t('footer_sitemap')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}