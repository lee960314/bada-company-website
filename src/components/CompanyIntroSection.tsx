import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CompanyIntroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0A3D62] leading-tight">
                Bada aims to provide
                <span className="block text-[#FFC312]">custom packaging solutions</span>
                for all customer needs.
              </h2>
              
              <p className="text-lg text-[#555555] leading-relaxed">
                Since 2009, Bada Co., Ltd has been expanding its business from plastic injection molding 
                to comprehensive packaging solutions including poly bags and flexible packaging.
              </p>
              
              <p className="text-lg text-[#555555] leading-relaxed">
                The first impression of your product is determined by its packaging. 
                In the rapidly changing packaging market, we create packaging that captures 
                consumers' attention.
              </p>
              
              <p className="text-lg text-[#555555] leading-relaxed">
                With the same mindset we started with, we will always do our best for customer satisfaction.
              </p>
            </div>

            <Button size="lg" className="bg-[#FFC312] hover:bg-[#FFD93D] text-[#0A3D62] font-bold">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Image Section */}
          <div className="space-y-8">
            {/* Main Company Image */}
            <div className="aspect-video bg-[#F5F6FA] rounded-2xl flex items-center justify-center">
              {/* TODO: Add company main image here - Size: 800x500px */}
              <div className="text-center text-gray-400">
                <p className="font-semibold">Company Main Image</p>
                <p className="text-sm">800x500px</p>
              </div>
            </div>

            {/* Factory Direct Manufacturing Highlight */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Bada is a factory-direct custom manufacturing company.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                What moves people's hearts is not money, appearance, or power, 
                but a very small 'sincerity'. Bada manufactures customer packaging with sincerity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}