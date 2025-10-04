"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "react-i18next"

export default function ProductsSection() {
  const { t } = useTranslation('common')
  
  const products = [
    {
      title: t('product_materials'),
      subtitle: t('product_poly_bag'),
      materials: t('product_materials_list'),
      imagePlaceholder: t('product_materials_image'),
      imageSize: "400x300px"
    },
    {
      title: t('product_functionalities'),
      subtitle: t('product_flexible_package'), 
      materials: t('product_functionalities_list'),
      imagePlaceholder: t('product_flexible_image'),
      imageSize: "400x300px"
    },
    {
      title: t('product_industries'),
      subtitle: "-",
      materials: t('product_industries_list'),
      imagePlaceholder: t('product_injection_image'), 
      imageSize: "400x300px"
    }
  ]

  return (
    <section className="py-20 bg-[#F5F6FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A3D62] mb-4 whitespace-pre-line">
            {t('products_section_title')}
          </h2>
          <p className="text-lg text-[#555555] max-w-2xl mx-auto whitespace-pre-line">
            {t('products_section_subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 text-center hover:bg-[#F5F6FA] transition-colors duration-300 border border-[#E5E5E5] hover:border-[#FFC312]">
                {/* Product Image */}
                 <div className="aspect-video bg-[#F5F6FA] rounded-xl mb-6 overflow-hidden">
                   {product.title === t('product_materials') ? (
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
                  <h3 className="text-2xl font-bold text-[#0A3D62] whitespace-pre-line">
                    {product.title}
                  </h3>
                  
                  <h4 className="text-xl font-semibold text-[#0A3D62] whitespace-pre-line">
                    {product.subtitle}
                  </h4>
                  
                  <p className="text-[#555555] whitespace-pre-line">
                    {product.materials}
                  </p>

                  <Button 
                    size="lg" 
                    className="w-full bg-[#FFC312] hover:bg-[#FFD93D] text-[#0A3D62] group-hover:bg-[#FFD93D] transition-colors duration-300 font-bold whitespace-pre-line"
                  >
                    {t('learn_more')}
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