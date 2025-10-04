"use client"

import { useTranslation } from "react-i18next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import Image from "next/image"
import ProcessCapabilities from "@/components/ProcessCapabilities"

export default function ManufacturingProcessPage() {
  const { t, ready } = useTranslation('common')

  // 번역이 준비되지 않았으면 로딩 상태 표시
  if (!ready) {
    return (
      <div className="min-h-screen bg-[#F5F6FA]">
        <Header />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0A3D62] mx-auto mb-4"></div>
            <p className="text-[#0A3D62] text-lg">Loading...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      <Header />
      
      {/* Page Header */}
      <section className="bg-[#F5F6FA] py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A3D62]">
                  {t('manufacturing_process_title')}
                </h1>
              </div>
              
              <div className="text-sm sm:text-base text-[#555555]">
                <span className="hover:text-[#0A3D62] transition-colors duration-200">
                  <Link href="/">{t('menu_home')}</Link>
                </span>
                <span className="mx-2 text-[#0A3D62]">•</span>
                <span className="text-[#0A3D62] font-semibold">{t('manufacturing_process_breadcrumb')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flowchart Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Process Flowchart Image */}
            <div className="relative w-full">
              <Image
                src="/manufacturing Process.png"
                alt={t('manufacturing_process_flowchart_alt')}
                width={1600}
                height={900}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Capabilities Section */}
      <ProcessCapabilities />

      <Footer />
    </div>
  )
}
