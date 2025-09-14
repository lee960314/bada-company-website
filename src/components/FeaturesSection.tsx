import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      title: "Quality",
      subtitle: "Make your brand's Unique packaging",
      description: "Unique packaging helps solidify your brand image. Create packaging that you can't find in ready-made products - one-of-a-kind packaging.",
      imagePlaceholder: "Quality Image",
      imageSize: "600x400px"
    },
    {
      title: "Unique",
      subtitle: "We promise an Exact and Fast delivery date",
      description: "A promise to customers is like a promise to family. We will faithfully keep every small promise.",
      imagePlaceholder: "Unique Image", 
      imageSize: "600x400px"
    },
    {
      title: "Exact & Fast",
      subtitle: "Bada promises high-quality packaging",
      description: "With years of accumulated know-how, Bada promises to perfectly create the packaging that customers want.",
      imagePlaceholder: "Fast Delivery Image",
      imageSize: "600x400px"
    }
  ]

  return (
    <section className="py-20 bg-[#F5F6FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {features.map((feature, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 mb-32 last:mb-0`}>
            {/* Image Section */}
            <div className="flex-1">
              <div className="aspect-video bg-white rounded-2xl flex items-center justify-center">
                {/* TODO: Add feature image here - Size: 600x400px */}
                <div className="text-center text-gray-400">
                  <p className="font-semibold">{feature.imagePlaceholder}</p>
                  <p className="text-sm">{feature.imageSize}</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 space-y-6">
              <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0A3D62]">
              {feature.title}
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0A3D62]">
              {feature.subtitle}
            </h3>
            <p className="text-lg text-[#555555] leading-relaxed">
              {feature.description}
            </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-[#0A3D62]">{feature.title}</span>
                <span className="text-lg text-[#FFC312]">Bada</span>
              </div>

              <Button size="lg" className="bg-[#FFC312] hover:bg-[#FFD93D] text-[#0A3D62] font-bold">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}