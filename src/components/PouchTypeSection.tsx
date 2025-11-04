"use client"

import { useTranslation } from "react-i18next"
import { useMemo } from "react"
import PouchTypeCard from "./PouchTypeCard"

export default function PouchTypeSection() {
  const { t } = useTranslation('common')
  
  const pouchTypes = useMemo(() => [
    {
      title: t('pouch_type_1_title'),
      description: t('pouch_type_1_desc'),
      imageSrc: "/Three-side Seal Pouch_img.png",
      imageAlt: t('pouch_type_1_title')
    },
    {
      title: t('pouch_type_2_title'),
      description: t('pouch_type_2_desc'),
      imageSrc: "/Stand-up Pouch_img.png",
      imageAlt: t('pouch_type_2_title')
    },
    {
      title: t('pouch_type_3_title'),
      description: t('pouch_type_3_desc'),
      imageSrc: "/M-side Gusset Pouch_img.png",
      imageAlt: t('pouch_type_3_title')
    },
    {
      title: t('pouch_type_4_title'),
      description: t('pouch_type_4_desc'),
      imageSrc: "/Roll Stock Film_img.png",
      imageAlt: t('pouch_type_4_title')
    },
    {
      title: t('pouch_type_5_title'),
      description: t('pouch_type_5_desc'),
      imageSrc: "/Spout Pouch_img.png",
      imageAlt: t('pouch_type_5_title')
    },
    {
      title: t('pouch_type_6_title'),
      description: t('pouch_type_6_desc'),
      imageSrc: "/Special Shape Pouch_img.png",
      imageAlt: t('pouch_type_6_title')
    }
  ], [t])

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h2 className="text-2xl lg:text-4xl font-bold text-[#0A3D62] mb-6 lg:mb-12 text-center">{t('pouch_type_title')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {pouchTypes.map((pouch, index) => (
          <PouchTypeCard
            key={index}
            title={pouch.title}
            description={pouch.description}
            imageSrc={pouch.imageSrc}
            imageAlt={pouch.imageAlt}
          />
        ))}
      </div>
    </div>
  )
}