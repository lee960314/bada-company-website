"use client"

import { useTranslation } from "react-i18next"
import { useMemo } from "react"
import IndustryCard from "./IndustryCard"

export default function IndustrySection() {
  const { t } = useTranslation('common')
  
  const industries = useMemo(() => [
    {
      title: t('industry_1_title'),
      description: t('industry_1_desc'),
      imageSrc: "/Beverage_img.png",
      imageAlt: t('industry_1_title')
    },
    {
      title: t('industry_2_title'),
      description: t('industry_2_desc'),
      imageSrc: "/Candy_Snacks_img.png",
      imageAlt: t('industry_2_title')
    },
    {
      title: t('industry_3_title'),
      description: t('industry_3_desc'),
      imageSrc: "/Pet Food_img.png",
      imageAlt: t('industry_3_title')
    },
    {
      title: t('industry_4_title'),
      description: t('industry_4_desc'),
      imageSrc: "/Frozen food_img.png",
      imageAlt: t('industry_4_title')
    },
    {
      title: t('industry_5_title'),
      description: t('industry_5_desc'),
      imageSrc: "/Coffee_Tea_img.png",
      imageAlt: t('industry_5_title')
    },
    {
      title: t('industry_6_title'),
      description: t('industry_6_desc'),
      imageSrc: "/Electronics_Parts_img.png",
      imageAlt: t('industry_6_title')
    },
    {
      title: t('industry_7_title'),
      description: t('industry_7_desc'),
      imageSrc: "/Household Chemicals_img.png",
      imageAlt: t('industry_7_title')
    },
    {
      title: t('industry_8_title'),
      description: t('industry_8_desc'),
      imageSrc: "/Cosmetic_Health_img.png",
      imageAlt: t('industry_8_title')
    },
    {
      title: t('industry_9_title'),
      description: t('industry_9_desc'),
      imageSrc: "/Sauces_Seasonings_img.png",
      imageAlt: t('industry_9_title')
    }
  ], [t])

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h2 className="text-2xl lg:text-4xl font-bold text-[#0A3D62] mb-6 lg:mb-12 text-center">{t('industry_title')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {industries.map((industry, index) => (
          <IndustryCard
            key={index}
            title={industry.title}
            description={industry.description}
            imageSrc={industry.imageSrc}
            imageAlt={industry.imageAlt}
          />
        ))}
      </div>
    </div>
  )
}