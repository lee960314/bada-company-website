"use client"

import { useTranslation } from "react-i18next"
import { useMemo } from "react"
import FunctionalFeaturesCard from "./FunctionalFeaturesCard"

export default function FunctionalFeaturesSection() {
  const { t } = useTranslation('common')
  
  const functionalFeatures = useMemo(() => [
    {
      title: t('functional_feature_1_title'),
      description: t('functional_feature_1_desc'),
      imageSrc: "/Frozen Food Packaging_img.png",
      imageAlt: t('functional_feature_1_title')
    },
    {
      title: t('functional_feature_2_title'),
      description: t('functional_feature_2_desc'),
      imageSrc: "/Retort (High-temperature) Packaging_img.png",
      imageAlt: t('functional_feature_2_title')
    },
    {
      title: t('functional_feature_3_title'),
      description: t('functional_feature_3_desc'),
      imageSrc: "/Vacuum Packaging_img.png",
      imageAlt: t('functional_feature_3_title')
    },
    {
      title: t('functional_feature_4_title'),
      description: t('functional_feature_4_desc'),
      imageSrc: "/Zip-lock & Resealable Packaging_img.png",
      imageAlt: t('functional_feature_4_title')
    }
  ], [t])

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h2 className="text-2xl lg:text-4xl font-bold text-[#0A3D62] mb-6 lg:mb-12 text-center">{t('functional_features_title')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
        {functionalFeatures.map((feature, index) => (
          <FunctionalFeaturesCard
            key={index}
            title={feature.title}
            description={feature.description}
            imageSrc={feature.imageSrc}
            imageAlt={feature.imageAlt}
          />
        ))}
      </div>
    </div>
  )
}