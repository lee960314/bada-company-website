"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import TabMenu from "@/components/TabMenu"
import Link from "next/link"
import { MessageCircle, Handshake, Package, Printer, Settings, ClipboardCheck, Truck } from "lucide-react"

export default function Product2Page() {
  const [activeTab, setActiveTab] = useState("SHAPE")
  
  const tabs = ["SHAPE", "FUNCTIONALITIES", "INDUSTRY"]
  
  const processSteps = [
    {
      step: "01",
      title: "상담",
      description: "고객의 요구사항을 정확히 파악하고 최적의 솔루션을 제안합니다.",
      icon: MessageCircle
    },
    {
      step: "02", 
      title: "계약",
      description: "상세한 제품 사양과 납기일을 확정하고 계약을 체결합니다.",
      icon: Handshake
    },
    {
      step: "03",
      title: "원단",
      description: "고품질 원료를 선별하여 제품의 품질을 보장합니다.",
      icon: Package
    },
    {
      step: "04",
      title: "인쇄",
      description: "정밀한 인쇄 기술로 고객의 브랜드를 완벽하게 표현합니다.",
      icon: Printer
    },
    {
      step: "05",
      title: "가공",
      description: "최첨단 장비로 정확한 크기와 형태로 가공합니다.",
      icon: Settings
    },
    {
      step: "06",
      title: "테스트",
      description: "품질 검사를 통해 완벽한 제품만을 선별합니다.",
      icon: ClipboardCheck
    },
    {
      step: "07",
      title: "출고",
      description: "안전한 포장으로 고객에게 신속하게 배송합니다.",
      icon: Truck
    }
  ]

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
                  Flexible packaging
                </h1>
              </div>
              
              <div className="text-sm sm:text-base text-[#555555]">
                <span className="hover:text-[#0A3D62] transition-colors duration-200">
                  <Link href="/">Home</Link>
                </span>
                <span className="mx-2 text-[#0A3D62]">•</span>
                <span className="hover:text-[#0A3D62] transition-colors duration-200">
                  <Link href="/products"> Products</Link>
                </span>
                <span className="mx-2 text-[#0A3D62]">•</span>
                <span className="text-[#0A3D62] font-semibold"> Flexible packaging</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Menu Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <TabMenu 
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-lg font-semibold text-[#0A3D62] mb-4">PROCESS</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A3D62] mb-8">
                Product 2 주문 제작 공정 프로세스
              </h2>
            </div>

            {/* Process Steps */}
            <div className="relative">
              {/* Desktop Layout */}
              <div className="hidden lg:block">
                {/* Top Row - Steps 1-4 */}
                <div className="flex justify-center items-center mb-20">
                  <div className="flex items-center space-x-24">
                    {processSteps.slice(0, 4).map((step, index) => (
                      <div key={step.step} className="flex flex-col items-center relative">
                        <div className="w-32 h-32 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center mb-6 bg-white hover:border-solid hover:border-4 hover:border-[#0A3D62] transition-all duration-500 ease-in-out cursor-pointer group shadow-lg hover:shadow-xl">
                          <step.icon className="h-10 w-10 text-[#0A3D62] group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-[#0A3D62] mb-1">STEP {step.step}</div>
                          <div className="text-lg font-bold text-[#0A3D62]">{step.title}</div>
                        </div>
                        {index < 3 && (
                          <div className="absolute top-16 left-full w-28 h-0.5 border-t-2 border-dashed border-gray-300 group-hover:border-solid group-hover:border-[#0A3D62] transition-all duration-500 transform translate-x-0"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row - Steps 5-7 */}
                <div className="flex justify-center items-center">
                  <div className="flex items-center space-x-32">
                    {processSteps.slice(4, 7).map((step, index) => (
                      <div key={step.step} className="flex flex-col items-center relative">
                        <div className="w-32 h-32 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center mb-6 bg-white hover:border-solid hover:border-4 hover:border-[#0A3D62] transition-all duration-500 ease-in-out cursor-pointer group shadow-lg hover:shadow-xl">
                          <step.icon className="h-10 w-10 text-[#0A3D62] group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-[#0A3D62] mb-1">STEP {step.step}</div>
                          <div className="text-lg font-bold text-[#0A3D62]">{step.title}</div>
                        </div>
                        {index < 2 && (
                          <div className="absolute top-16 left-full w-32 h-0.5 border-t-2 border-dashed border-gray-300 group-hover:border-solid group-hover:border-[#0A3D62] transition-all duration-500 transform translate-x-0"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden space-y-8">
                {processSteps.map((step, index) => (
                  <div key={step.step} className="flex items-center space-x-6">
                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center bg-white flex-shrink-0 hover:border-solid hover:border-4 hover:border-[#0A3D62] transition-all duration-500">
                      <step.icon className="h-6 w-6 text-[#0A3D62]" />zmf
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[#0A3D62] mb-1">STEP {step.step}</div>
                      <div className="text-lg font-bold text-[#0A3D62] mb-2">{step.title}</div>
                      <div className="text-sm text-[#555555]">{step.description}</div>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="absolute left-8 top-full w-0.5 h-8 border-l-2 border-dashed border-gray-300 transform translate-y-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section className="py-20 bg-[#F5F6FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A3D62] mb-4">
                Product 2 제품 특징
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="w-16 h-16 bg-[#0A3D62] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0A3D62] mb-4">고품질 소재</h3>
                <p className="text-[#555555] leading-relaxed">
                  식품 안전 기준을 만족하는 고품질 소재를 사용합니다.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="w-16 h-16 bg-[#0A3D62] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Printer className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0A3D62] mb-4">정밀 인쇄</h3>
                <p className="text-[#555555] leading-relaxed">
                  최첨단 인쇄 기술로 선명하고 내구성 있는 인쇄를 제공합니다.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="w-16 h-16 bg-[#0A3D62] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0A3D62] mb-4">맞춤 제작</h3>
                <p className="text-[#555555] leading-relaxed">
                  고객의 요구사항에 맞는 다양한 크기와 디자인으로 제작합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 