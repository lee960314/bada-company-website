"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"

export default function Footer() {
  const [mounted, setMounted] = useState(false)
  const { t, ready } = useTranslation('common')

  useEffect(() => {
    setMounted(true)
  }, [])
  
  // 번역이 준비되지 않았거나 마운트되지 않았으면 로딩 상태 표시
  if (!ready || !mounted) {
    return (
      <footer className="bg-[#0A3D62] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <div className="flex items-center justify-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
              <div className="text-white text-lg font-semibold ml-4">Loading...</div>
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
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {/* 회사 정보 */}
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center justify-center lg:justify-start lg:items-start lg:pt-0">
                <Image
                  src="/header_logo.png"
                  alt="KJ FLEX PACK"
                  width={400}
                  height={200}
                  className="h-36 md:h-44 lg:h-56 xl:h-64 w-auto"
                />
              </div>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed whitespace-pre-line text-center lg:text-left">
                {t('footer_description') || 'A specialized company in flexible packaging materials, providing high-quality products and reliable services for all your packaging needs.'}
              </p>
              <div className="flex space-x-3 justify-center lg:justify-start">
                <Button variant="ghost" size="sm" className="p-2 text-gray-300 hover:text-[#FFC312] hover:bg-white/10 touch-manipulation min-h-[44px] min-w-[44px]">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 text-gray-300 hover:text-[#FFC312] hover:bg-white/10 touch-manipulation min-h-[44px] min-w-[44px]">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="p-2 text-gray-300 hover:text-[#FFC312] hover:bg-white/10 touch-manipulation min-h-[44px] min-w-[44px]"
                  onClick={() => window.open('https://www.linkedin.com/company/kj-flexpack', '_blank', 'noopener,noreferrer')}
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="p-2 text-gray-300 hover:text-[#FFC312] hover:bg-white/10 touch-manipulation min-h-[44px] min-w-[44px]"
                  onClick={() => window.open('http://www.youtube.com/@KJFLEXPACKOfficial', '_blank', 'noopener,noreferrer')}
                >
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-semibold whitespace-pre-line">{t('footer_products') || 'Products'}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/manufacturing-process" className="text-gray-300 hover:text-[#FFC312] transition-colors text-sm md:text-base whitespace-pre-line touch-manipulation min-h-[44px] flex items-center">
                    {t('footer_manufacturing_process') || 'Manufacturing Process'}
                  </Link>
                </li>
                <li>
                  <Link href="/products/flexible-packaging" className="text-gray-300 hover:text-[#FFC312] transition-colors text-sm md:text-base whitespace-pre-line touch-manipulation min-h-[44px] flex items-center">
                    {t('footer_flexible_packaging') || 'Flexible Packaging'}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-semibold whitespace-pre-line">{t('footer_company_info') || 'Company Info'}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-[#FFC312] transition-colors text-sm md:text-base whitespace-pre-line touch-manipulation min-h-[44px] flex items-center">
                    {t('footer_about_us') || 'About Us'}
                  </Link>
                </li>
                <li>
                  <Link href="/quote" className="text-gray-300 hover:text-[#FFC312] transition-colors text-sm md:text-base whitespace-pre-line touch-manipulation min-h-[44px] flex items-center">
                    {t('footer_get_quote') || 'Get Quote'}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-[#FFC312] transition-colors text-sm md:text-base whitespace-pre-line touch-manipulation min-h-[44px] flex items-center">
                    {t('footer_contact') || 'Contact'}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-semibold whitespace-pre-line">{t('footer_contact') || 'Contact'}</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm sm:text-base">{t('footer_phone_number') || '+86-13666066192'}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">{t('footer_business_hours') || 'Mon-Fri 09:00 - 18:00'}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm sm:text-base">{t('footer_email_address') || 'info@kjflexpack.com'}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {t('footer_address_full') || t('footer_address') || 'No. 23 Siming Industrial Park, Meixi Road, Tongan District, Xiamen City, Fujian, China'}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1">{t('footer_whatsapp_wechat') || 'WhatsApp / WeChat: (+86) 13666066192'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Codes - 데스크톱에서만 표시 */}
            <div className="hidden lg:flex lg:flex-col lg:items-center space-y-4">
              <h3 className="text-lg md:text-xl font-semibold whitespace-pre-line">Contact QR</h3>
              <div className="flex flex-col space-y-4">
                <div className="text-center">
                  <Image
                    src="/KJ_Wechat_img.png"
                    alt="WeChat QR Code"
                    width={120}
                    height={120}
                    className="mx-auto rounded-lg shadow-lg"
                  />
                  <p className="text-gray-300 text-sm mt-2">WeChat</p>
                </div>
                <div className="text-center">
                  <Image
                    src="/KJ_Whatapp_img.png"
                    alt="WhatsApp QR Code"
                    width={120}
                    height={120}
                    className="mx-auto rounded-lg shadow-lg"
                  />
                  <p className="text-gray-300 text-sm mt-2">WhatsApp</p>
                </div>
              </div>
            </div>
          </div>

          {/* QR Codes - 모바일에서만 표시 */}
          <div className="lg:hidden mt-8 flex flex-col items-center">
            <h3 className="text-lg font-semibold text-center mb-6">Contact QR</h3>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <Image
                  src="/KJ_Wechat_img.png"
                  alt="WeChat QR Code"
                  width={100}
                  height={100}
                  className="mx-auto rounded-lg shadow-lg"
                />
                <p className="text-gray-300 text-sm mt-2">WeChat</p>
              </div>
              <div className="text-center">
                <Image
                  src="/KJ_Whatapp_img.png"
                  alt="WhatsApp QR Code"
                  width={100}
                  height={100}
                  className="mx-auto rounded-lg shadow-lg"
                />
                <p className="text-gray-300 text-sm mt-2">WhatsApp</p>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 구분선 */}
        <div className="border-t border-gray-800 py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-gray-400 text-sm md:text-base whitespace-pre-line text-center md:text-left">
              © 2024 {t('footer_company') || 'KJ FLEX PACK'}. {t('footer_rights') || 'All rights reserved'}.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base whitespace-pre-line touch-manipulation">
                {t('footer_privacy_policy') || 'Privacy Policy'}
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base whitespace-pre-line touch-manipulation">
                {t('footer_terms_of_service') || 'Terms of Service'}
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base whitespace-pre-line touch-manipulation">
                {t('footer_sitemap') || 'Sitemap'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}