"use client"

import FunctionalFeaturesCard from "./FunctionalFeaturesCard"

const functionalFeatures = [
  {
    title: "Frozen Food Packaging",
    description: "Cold-resistant films to preserve freshness in freezing conditions.",
    imageSrc: "/Frozen Food Packaging_img.png",
    imageAlt: "Frozen Food Packaging"
  },
  {
    title: "Retort (High-temperature) Packaging",
    description: "Withstands sterilization up to 120–135°C — ideal for ready-to-eat meals.",
    imageSrc: "/Retort (High-temperature) Packaging_img.png",
    imageAlt: "Retort High-temperature Packaging"
  },
  {
    title: "Vacuum Packaging",
    description: "Removes air to extend shelf life and prevent oxidation.",
    imageSrc: "/Vacuum Packaging_img.png",
    imageAlt: "Vacuum Packaging"
  },
  {
    title: "Zip-lock & Resealable Packaging",
    description: "Easy to open and close for convenient reuse.",
    imageSrc: "/Zip-lock & Resealable Packaging_img.png",
    imageAlt: "Zip-lock & Resealable Packaging"
  }
]

export default function FunctionalFeaturesSection() {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h2 className="text-2xl lg:text-4xl font-bold text-[#0A3D62] mb-6 lg:mb-12 text-center">Functional Features</h2>
      
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