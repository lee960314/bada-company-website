"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"
import { safeTranslate } from "@/lib/translation-utils"
import Link from "next/link"

export default function ProductsSection() {
  const [mounted, setMounted] = useState(false)
  const { t, ready } = useTranslation('common')

  useEffect(() => {
    setMounted(true)
  }, [])

  // 번역이 준비되지 않았거나 마운트되지 않았으면 로딩 상태 표시
  if (!ready || !mounted) {
    return (
      <section className="py-20 bg-[#F5F6FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0A3D62] mx-auto mb-4"></div>
            <div className="text-[#0A3D62] text-lg font-semibold">
              Loading...
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  const products = [
    {
      title: t('product_materials') || 'Film Type',
      subtitle: "",
      materials: t('product_materials_list') || 'PE, PP, PET materials',
      imagePlaceholder: t('product_materials_image') || 'Materials Image',
      imageSize: "400x300px",
      tabSlug: 'film-type'
    },
    {
      title: t('product_functionalities') || 'Pouch Type',
      subtitle: "", 
      materials: t('product_functionalities_list') || 'Barrier, Seal, Print',
      imagePlaceholder: t('product_flexible_image') || 'Flexible Image',
      imageSize: "400x300px",
      tabSlug: 'pouch-type'
    },
    {
      title: t('product_industries') || 'Functional Features',
      subtitle: "",
      materials: t('product_industries_list') || 'Food, Medical, Industrial',
      imagePlaceholder: t('product_injection_image') || 'Injection Image', 
      imageSize: "400x300px",
      tabSlug: 'functional-features'
    }
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#F5F6FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A3D62] mb-3 md:mb-4 whitespace-pre-line">
            {t('products_section_title') || 'Flexible Packaging'}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#555555] max-w-2xl mx-auto whitespace-pre-line">
            {t('products_section_subtitle') || 'High-quality packaging solutions for various industries'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div key={index} className="group h-full">
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 text-center hover:bg-[#F5F6FA] transition-colors duration-300 border border-[#E5E5E5] hover:border-[#FFC312] h-full flex flex-col">
                {/* Product Image */}
                 <div className="aspect-video bg-[#F5F6FA] rounded-lg md:rounded-xl mb-4 md:mb-6 overflow-hidden">
                    {product.title === (t('product_materials') || 'Film Type') ? (
                     <Image
                       src="/materials_img.jpg"
                       alt="Materials"
                       width={400}
                       height={300}
                       className="w-full h-full object-cover"
                     />
                    ) : product.title === (t('product_functionalities') || 'Shape Type') ? (
                     <Image
                       src="/functionalities_img.png"
                       alt="Functionalities"
                       width={400}
                       height={300}
                       className="w-full h-full object-cover"
                     />
                    ) : product.title === (t('product_industries') || 'Functional Features') ? (
                     <Image
                       src="/industries_img.jpg"
                       alt="Industries"
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
                <div className="flex-grow flex flex-col justify-between">
                  <div className="space-y-2 md:space-y-4">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#0A3D62] whitespace-pre-line">
                      {product.title}
                    </h3>
                    
                    <h4 className="text-sm md:text-base lg:text-xl font-semibold text-[#0A3D62] whitespace-pre-line">
                      {product.subtitle}
                    </h4>
                    
                    <p className="text-xs md:text-sm lg:text-base text-[#555555] whitespace-pre-line">
                      {product.materials}
                    </p>
                  </div>

                  <Link 
                    href={`/products/flexible-packaging?tab=${product.tabSlug}`}
                    className="w-full"
                  >
                    <Button 
                      size="lg" 
                      className="w-full bg-[#FFC312] hover:bg-[#FFD93D] text-[#0A3D62] group-hover:bg-[#FFD93D] transition-colors duration-300 font-bold whitespace-pre-line text-sm md:text-base py-2 md:py-3 mt-4"
                    >
                      {t('learn_more') || 'Learn More'}
                      <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                    </Button>
                  </Link>
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