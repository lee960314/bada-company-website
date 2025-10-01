import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function ProductsSection() {
  const products = [
    {
      title: "Materials",
      subtitle: "Poly Bag",
      materials: "OPP / PP / PE / HDPE / ETC",
      imagePlaceholder: "Plastic Bags Image",
      imageSize: "400x300px"
    },
    {
      title: "Functionalities",
      subtitle: "Flexible Package", 
      materials: "Three-side / Stand / M-side / T-side",
      imagePlaceholder: "Flexible Packaging Image",
      imageSize: "400x300px"
    },
    {
      title: "Industries",
      subtitle: "-",
      materials: "Plastic / ETC",
      imagePlaceholder: "Injection Molding Image", 
      imageSize: "400x300px"
    }
  ]

  return (
    <section className="py-20 bg-[#F5F6FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A3D62] mb-4">
            Flexible Packaging
          </h2>
          <p className="text-lg text-[#555555] max-w-2xl mx-auto">
            Comprehensive packaging solutions for all your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 text-center hover:bg-[#F5F6FA] transition-colors duration-300 border border-[#E5E5E5] hover:border-[#FFC312]">
                {/* Product Image */}
                 <div className="aspect-video bg-[#F5F6FA] rounded-xl mb-6 overflow-hidden">
                   {product.title === "Materials" ? (
                     <Image
                       src="/material_img.png"
                       alt="Materials"
                       width={400}
                       height={300}
                       className="w-full h-full object-cover"
                     />
                   ) : (
                     <div className="w-full h-full flex items-center justify-center">
                       <div className="text-center text-gray-400">
                         <p className="font-semibold text-sm">{product.imagePlaceholder}</p>
                         <p className="text-xs">{product.imageSize}</p>
                       </div>
                     </div>
                   )}
                 </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#0A3D62]">
                    {product.title}
                  </h3>
                  
                  <h4 className="text-xl font-semibold text-[#0A3D62]">
                    {product.subtitle}
                  </h4>
                  
                  <p className="text-[#555555]">
                    {product.materials}
                  </p>

                  <Button 
                    size="lg" 
                    className="w-full bg-[#FFC312] hover:bg-[#FFD93D] text-[#0A3D62] group-hover:bg-[#FFD93D] transition-colors duration-300 font-bold"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
       
      </div>
    </section>
  )
}