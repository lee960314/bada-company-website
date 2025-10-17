"use client"

import Image from "next/image"

interface FunctionalFeaturesCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

export default function FunctionalFeaturesCard({ title, description, imageSrc, imageAlt }: FunctionalFeaturesCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 hover:shadow-xl transition-shadow duration-300 h-[28rem] lg:h-[32rem]">
      <div className="flex flex-col gap-4 lg:gap-6 h-full">
        <div className="w-full h-64 lg:h-72 relative group flex-shrink-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={300}
            height={192}
            className="w-full h-full object-contain rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-200 group-hover:z-50"
          />
        </div>
        <div className="text-center flex-1 flex flex-col justify-center px-3">
          <h3 className="text-base lg:text-xl font-bold text-[#0A3D62] mb-3">{title}</h3>
          <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{description}</p>
        </div>
      </div>
    </div>
  )
}