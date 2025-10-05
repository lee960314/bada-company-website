"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown, Globe } from "lucide-react"
import { useTranslation } from "react-i18next"
import { usePathname } from "next/navigation"
import * as Dialog from "@radix-ui/react-dialog"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const { t, i18n, ready } = useTranslation('common')
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  // 번역이 준비되지 않았거나 마운트되지 않았으면 로딩 상태 표시
  if (!ready || !mounted) {
    return (
      <header className="sticky top-0 z-50 bg-[#0A3D62] shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 md:h-24 lg:h-28 items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/header_logo.png"
                alt="KJ FLEX PACK"
                width={400}
                height={200}
                className="h-16 md:h-20 lg:h-24 w-auto"
                priority
              />
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="animate-pulse bg-gray-300 h-6 w-16 rounded"></div>
              <div className="animate-pulse bg-gray-300 h-6 w-16 rounded"></div>
              <div className="animate-pulse bg-gray-300 h-6 w-16 rounded"></div>
            </div>
          </div>
        </div>
      </header>
    )
  }

  const navigation = [
    { name: t('menu_home') || 'Home', href: "/" },
    { name: t('menu_about') || 'About', href: "/about" },
  ]

  const products = [
    { name: t('menu_manufacturing') || 'Manufacturing', href: "/manufacturing-process" },
    { name: t('menu_flexible_packaging') || 'Flexible Packaging', href: "/products/flexible-packaging" },
  ]

  const changeLanguage = async (lng: string) => {
    try {
      console.log('Changing language to:', lng);
      console.log('Current language before change:', i18n.language);
      
      await i18n.changeLanguage(lng);
      
      console.log('Language after change:', i18n.language);
      console.log('Translation test - menu_home:', t('menu_home'));
      
      // HTML lang 속성 즉시 업데이트
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lng;
        console.log('HTML lang attribute set to:', lng);
      }
      
      setIsLanguageOpen(false);
      console.log('Language change completed:', lng);
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  }

  const languages = [
    { code: 'en', name: t('language_en') || 'English', flag: '🇺🇸' },
    { code: 'ko', name: t('language_ko') || '한국어', flag: '🇰🇷' },
    { code: 'zh-CN', name: t('language_zh') || '中文', flag: '🇨🇳' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#0A3D62] shadow-lg backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 md:h-24 lg:h-28 items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/header_logo.png"
                alt="KJ FLEX PACK"
                width={400}
                height={200}
                className="h-16 md:h-20 lg:h-24 w-auto"
                priority
              />
            </Link>
          </div>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-[#FFC312] transition-colors duration-200 font-bold text-xl whitespace-pre-line"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Products 드롭다운 */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center space-x-1 text-white hover:text-[#FFC312] transition-colors duration-200 font-bold text-xl whitespace-pre-line">
                <span className="whitespace-pre-line">{t('menu_products') || 'Products'}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* 드롭다운 메뉴 */}
              <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-300 ease-in-out ${
                isProductsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="py-2">
                  {products.map((product, index) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      className={`block px-4 py-3 text-[#0A3D62] hover:bg-[#F5F6FA] hover:text-[#FFC312] transition-colors duration-200 font-semibold ${
                        index === 0 ? 'rounded-t-lg' : ''
                      } ${index === products.length - 1 ? 'rounded-b-lg' : ''}`}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Get Quote 링크 */}
            <Link
              href="/quote"
              className="text-white hover:text-[#FFC312] transition-colors duration-200 font-bold text-xl whitespace-pre-line"
            >
                {t('menu_quote') || 'Quote'}
            </Link>

            {/* 언어 선택 드롭다운 */}
            <div 
              className="relative"
              onMouseEnter={() => setIsLanguageOpen(true)}
              onMouseLeave={() => setIsLanguageOpen(false)}
            >
              <button className="flex items-center space-x-2 text-white hover:text-[#FFC312] transition-colors duration-200 font-bold text-xl">
                <Globe className="h-5 w-5" />
                <span>{languages.find(lang => lang.code === i18n.language)?.flag}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* 언어 드롭다운 메뉴 */}
              <div className={`absolute top-full left-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-300 ease-in-out ${
                isLanguageOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="py-2">
                  {languages.map((language, index) => (
                    <button
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                      className={`w-full text-left px-4 py-3 text-[#0A3D62] hover:bg-[#F5F6FA] hover:text-[#FFC312] transition-colors duration-200 font-semibold flex items-center space-x-2 ${
                        index === 0 ? 'rounded-t-lg' : ''
                      } ${index === languages.length - 1 ? 'rounded-b-lg' : ''} ${
                        i18n.language === language.code ? 'bg-[#F5F6FA] text-[#FFC312]' : ''
                      }`}
                    >
                      <span>{language.flag}</span>
                      <span>{language.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA 버튼 (데스크톱) */}
          <div className="hidden md:flex items-center">
            <Link href="/contact">
              <Button size="lg" className="px-8 py-3 text-lg font-bold bg-[#FFC312] hover:bg-[#FFD93D] text-[#0A3D62] whitespace-pre-line">
                {t('menu_contact') || 'Contact'}
              </Button>
            </Link>
          </div>

          {/* 모바일 언어 선택 버튼 */}
          <div className="md:hidden flex items-center space-x-2">
            {/* 언어 선택 드롭다운 */}
            <div 
              className="relative"
              onMouseEnter={() => setIsLanguageOpen(true)}
              onMouseLeave={() => setIsLanguageOpen(false)}
              onTouchStart={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <button className="flex items-center space-x-2 text-white hover:text-[#FFC312] transition-all duration-300 font-semibold text-base touch-manipulation min-h-[44px] px-3 py-2 rounded-lg hover:bg-white/10 hover:shadow-md">
                <Globe className="h-5 w-5" />
                <span>{languages.find(lang => lang.code === i18n.language)?.flag}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* 언어 드롭다운 메뉴 */}
              <div className={`absolute top-full right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-200 transition-all duration-300 ease-in-out z-50 backdrop-blur-sm ${
                isLanguageOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="py-2">
                  {languages.map((language, index) => (
                    <button
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                      className={`w-full text-left px-4 py-3 text-[#0A3D62] hover:bg-[#F5F6FA] hover:text-[#FFC312] transition-all duration-200 font-medium flex items-center space-x-3 touch-manipulation min-h-[44px] rounded-lg hover:shadow-sm ${
                        index === 0 ? 'rounded-t-xl' : ''
                      } ${index === languages.length - 1 ? 'rounded-b-xl' : ''} ${
                        i18n.language === language.code ? 'bg-[#F5F6FA] text-[#FFC312] font-semibold' : ''
                      }`}
                    >
                      <span>{language.flag}</span>
                      <span>{language.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 모바일 메뉴 버튼 */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="p-3 text-white hover:bg-white/10 hover:text-[#FFC312] touch-manipulation transition-all duration-300 hover:shadow-md"
                  aria-label="메뉴 열기"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-none bg-[#0A3D62] border-none p-0 animate-slide-down-from-header">
                <Dialog.Title className="sr-only">
                  Navigation Menu
                </Dialog.Title>
                <div className="flex flex-col h-full">
                  {/* 헤더 섹션 */}
                  <div className="flex items-center justify-between p-6 border-b border-white/20 animate-fade-in-up">
                    <div className="flex items-center">
                      <Image
                        src="/header_logo.png"
                        alt="KJ FLEX PACK"
                        width={400}
                        height={200}
                        className="h-16 w-auto"
                        priority
                      />
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="p-2 text-white hover:bg-white/10"
                      onClick={() => setIsOpen(false)}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </Button>
                  </div>
                  
                  {/* 메뉴 섹션 */}
                  <div className="flex-1 py-4">
                    {/* 기본 네비게이션 메뉴 */}
                    <div className="space-y-1">
                      {navigation.map((item, index) => {
                        const isActive = pathname === item.href
                        return (
                          <div key={item.name} className={`animate-fade-in-left menu-item-${index + 1}`}>
                            <Link
                              href={item.href}
                              className={`group block text-white text-lg font-medium py-3 px-6 hover:bg-white/10 transition-all duration-200 touch-manipulation flex items-center relative ${
                                isActive ? 'bg-white/5 border-l-4 border-[#FFC312]' : ''
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              <span className="relative">
                                {item.name}
                                {isActive && (
                                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FFC312]"></div>
                                )}
                              </span>
                            </Link>
                            {index < navigation.length - 1 && (
                              <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                            )}
                          </div>
                        )
                      })}
                    </div>

                    {/* 제품소개 섹션 */}
                    <div className="mt-6 animate-fade-in-left menu-item-4">
                      <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4"></div>
                      <button
                        className="group w-full flex items-center justify-between text-white text-lg font-medium py-3 px-6 hover:bg-white/10 transition-all duration-200 touch-manipulation"
                        onClick={() => setIsProductsOpen(!isProductsOpen)}
                      >
                        <span className="relative">
                          {t('menu_products') || 'Products'}
                          {isProductsOpen && (
                            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FFC312]"></div>
                          )}
                        </span>
                        <ChevronDown 
                          className={`w-5 h-5 transition-all duration-200 ${
                            isProductsOpen ? 'rotate-180 text-[#FFC312]' : 'group-hover:scale-105'
                          }`} 
                        />
                      </button>
                      
                      {isProductsOpen && (
                        <div className="bg-[#1a4a6b]/50 mt-2 rounded-lg mx-2 overflow-hidden animate-in slide-in-from-top-1 duration-200">
                          {products.map((product, index) => (
                            <div key={product.name}>
                              <Link
                                href={product.href}
                                className="group block text-white/90 text-base py-2.5 px-6 hover:bg-white/10 hover:text-white transition-all duration-200 touch-manipulation flex items-center"
                                onClick={() => setIsOpen(false)}
                              >
                                <span className="relative">
                                  {product.name}
                                </span>
                              </Link>
                              {index < products.length - 1 && (
                                <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* 견적문의 섹션 */}
                    <div className="mt-4 animate-fade-in-left menu-item-5">
                      <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4"></div>
                      <Link
                        href="/quote"
                        className={`group block text-white text-lg font-medium py-3 px-6 hover:bg-white/10 transition-all duration-200 touch-manipulation flex items-center relative ${
                          pathname === '/quote' ? 'bg-white/5 border-l-4 border-[#FFC312]' : ''
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="relative">
                          {t('menu_quote') || 'Quote'}
                          {pathname === '/quote' && (
                            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FFC312]"></div>
                          )}
                        </span>
                      </Link>
                    </div>

                    {/* 상담신청 섹션 */}
                    <div className="mt-2 animate-fade-in-left menu-item-6">
                      <Link
                        href="/contact"
                        className={`group block text-white text-lg font-medium py-3 px-6 hover:bg-white/10 transition-all duration-200 touch-manipulation flex items-center relative ${
                          pathname === '/contact' ? 'bg-white/5 border-l-4 border-[#FFC312]' : ''
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="relative">
                          {t('menu_contact') || 'Contact'}
                          {pathname === '/contact' && (
                            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FFC312]"></div>
                          )}
                        </span>
                      </Link>
                    </div>
                  </div>
                  
                  {/* 하단 정보 */}
                  <div className="mt-6 animate-fade-in-up menu-item-7">
                    <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4"></div>
                    <div className="px-6 pb-6">
                      <div className="text-center">
                        <p className="text-white/60 text-sm">
                          Premium Flexible Packaging Solutions
                        </p>
                        <p className="text-white/40 text-xs mt-1">
                          © 2024 KJ FLEX PACK. All rights reserved.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}