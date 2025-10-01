"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import Image from "next/image"
import { Printer, Layers, CheckCircle } from "lucide-react"

export default function ManufacturingProcessPage() {

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
                  Manufacturing Process
                </h1>
              </div>
              
              <div className="text-sm sm:text-base text-[#555555]">
                <span className="hover:text-[#0A3D62] transition-colors duration-200">
                  <Link href="/">Home</Link>
                </span>
                <span className="mx-2 text-[#0A3D62]">•</span>
                <span className="text-[#0A3D62] font-semibold">Manufacturing Process</span>
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
                alt="Manufacturing Process Flowchart"
                width={1600}
                height={900}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-[#F5F6FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A3D62] mb-4">
                Production Capabilities
              </h2>
              <p className="text-lg text-[#555555] max-w-3xl mx-auto">
                State-of-the-art equipment and rigorous quality standards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#0A3D62] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Printer className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0A3D62] mb-4">High-Speed Printing</h3>
                <p className="text-[#555555] leading-relaxed">
                  9-color rotogravure presses delivering consistent color accuracy and registration at production speeds.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#0A3D62] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Layers className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0A3D62] mb-4">Solventless Lamination</h3>
                <p className="text-[#555555] leading-relaxed">
                  Eco-friendly bonding technology for multi-layer films with superior barrier properties and safety.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#0A3D62] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0A3D62] mb-4">Smart Quality Control</h3>
                <p className="text-[#555555] leading-relaxed">
                  Automated inspection systems and inline monitoring ensure defect-free products and regulatory compliance.
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
