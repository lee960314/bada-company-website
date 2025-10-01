"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import TabMenu from "@/components/TabMenu"
import Link from "next/link"
import { Layers, Shield, Leaf, Sparkles, Droplets, Zap } from "lucide-react"

export default function MaterialsPage() {
  const [activeTab, setActiveTab] = useState("STRUCTURE")
  
  const tabs = ["STRUCTURE", "PROPERTIES", "APPLICATIONS"]

  const materialTypes = [
    {
      category: "High-Barrier Films",
      description: "Multi-layer structures providing superior protection against oxygen, moisture, and light.",
      icon: Shield,
      features: [
        "Extended shelf life for sensitive products",
        "Aluminum-free barrier options available",
        "Suitable for food, pharma, and pet care"
      ]
    },
    {
      category: "Recyclable & Compostable Materials",
      description: "Eco-friendly packaging solutions designed for circular economy and sustainability goals.",
      icon: Leaf,
      features: [
        "Mono-material PE and PP structures",
        "Certified compostable films",
        "Reduced environmental footprint"
      ]
    },
    {
      category: "Transparent & Glossy Films",
      description: "Crystal-clear films with excellent transparency and gloss for premium product presentation.",
      icon: Sparkles,
      features: [
        "High clarity for product visibility",
        "Enhanced shelf appeal",
        "Ideal for snacks, confectionery, and retail"
      ]
    },
    {
      category: "Metalized Films",
      description: "Metallized substrates offering superior barrier properties and striking visual appeal.",
      icon: Zap,
      features: [
        "Excellent oxygen and moisture barrier",
        "Metallic finish for premium branding",
        "Lightweight alternative to foil"
      ]
    },
    {
      category: "Matte & Soft-Touch Films",
      description: "Premium tactile finishes that deliver sophisticated look and feel for high-end products.",
      icon: Droplets,
      features: [
        "Soft, velvety surface texture",
        "Anti-glare properties",
        "Luxury brand positioning"
      ]
    },
    {
      category: "Multi-Layer Laminations",
      description: "Custom-engineered laminates combining multiple films for optimized performance.",
      icon: Layers,
      features: [
        "Tailored barrier and mechanical properties",
        "Solventless lamination technology",
        "Flexible design for diverse applications"
      ]
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
                  Materials
                </h1>
              </div>
              
              <div className="text-sm sm:text-base text-[#555555]">
                <span className="hover:text-[#0A3D62] transition-colors duration-200">
                  <Link href="/">Home</Link>
                </span>
                <span className="mx-2 text-[#0A3D62]">•</span>
                <span className="text-[#0A3D62] font-semibold">Materials</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-xl text-[#555555] leading-relaxed max-w-4xl mx-auto">
              KJ FLEX PACK offers a comprehensive range of flexible packaging materials engineered 
              for product protection, shelf life extension, and brand differentiation. From high-barrier 
              films to sustainable alternatives, we provide solutions that meet diverse industry requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Menu Section */}
      <section className="py-12 bg-[#F5F6FA]">
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

      {/* Materials Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-lg font-semibold text-[#0A3D62] mb-4">MATERIAL PORTFOLIO</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A3D62] mb-8">
                Flexible Packaging Materials for Every Need
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {materialTypes.map((material, index) => (
                <div 
                  key={index} 
                  className="bg-[#F5F6FA] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-[#E5E5E5] hover:border-[#FFC312] group"
                >
                  <div className="w-16 h-16 bg-[#0A3D62] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#FFC312] transition-colors duration-300">
                    <material.icon className="h-8 w-8 text-white group-hover:text-[#0A3D62] transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A3D62] mb-4">
                    {material.category}
                  </h3>
                  <p className="text-[#555555] leading-relaxed mb-6">
                    {material.description}
                  </p>
                  <ul className="space-y-2">
                    {material.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-[#FFC312] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-[#555555]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Properties Section */}
      <section className="py-20 bg-[#F5F6FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A3D62] mb-4">
                Key Material Properties
              </h2>
              <p className="text-lg text-[#555555] max-w-3xl mx-auto">
                Performance characteristics that matter most
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="text-4xl font-bold text-[#0A3D62] mb-2">99%</div>
                <div className="text-sm text-[#555555]">Oxygen Barrier</div>
                <p className="text-xs text-[#555555] mt-2">High-barrier films</p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="text-4xl font-bold text-[#0A3D62] mb-2">100%</div>
                <div className="text-sm text-[#555555]">Recyclable Options</div>
                <p className="text-xs text-[#555555] mt-2">Mono-material structures</p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="text-4xl font-bold text-[#0A3D62] mb-2">9-Color</div>
                <div className="text-sm text-[#555555]">Printing Capability</div>
                <p className="text-xs text-[#555555] mt-2">Vibrant graphics</p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="text-4xl font-bold text-[#0A3D62] mb-2">Safe</div>
                <div className="text-sm text-[#555555]">Food Contact Approved</div>
                <p className="text-xs text-[#555555] mt-2">Regulatory compliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
