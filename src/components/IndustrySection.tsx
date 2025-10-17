"use client"

import IndustryCard from "./IndustryCard"

const industries = [
  {
    title: "Beverage",
    description: "Durable liquid packaging solutions for juices, smoothies, and energy drinks.",
    imageSrc: "/Beverage_img.png",
    imageAlt: "Beverage Packaging"
  },
  {
    title: "Candy & Snacks",
    description: "Lightweight, resealable options that preserve freshness and crunch.",
    imageSrc: "/Candy_Snacks_img.png",
    imageAlt: "Candy & Snacks Packaging"
  },
  {
    title: "Pet Food",
    description: "High-barrier, odor-resistant packaging for dry or wet pet food.",
    imageSrc: "/Pet Food_img.png",
    imageAlt: "Pet Food Packaging"
  },
  {
    title: "Frozen Food",
    description: "Flexible films with cold resistance to protect texture and taste.",
    imageSrc: "/Frozen food_img.png",
    imageAlt: "Frozen Food Packaging"
  },
  {
    title: "Coffee & Tea",
    description: "Aromatic barrier pouches maintaining freshness and flavor.",
    imageSrc: "/Coffee_Tea_img.png",
    imageAlt: "Coffee & Tea Packaging"
  },
  {
    title: "Electronics & Parts",
    description: "Durable, anti-static packaging ensuring protection and reliability.",
    imageSrc: "/Electronics_Parts_img.png",
    imageAlt: "Electronics & Parts Packaging"
  },
  {
    title: "Household Chemicals",
    description: "Secure, leak-resistant pouches designed for safe chemical storage.",
    imageSrc: "/Household Chemicals_img.png",
    imageAlt: "Household Chemicals Packaging"
  },
  {
    title: "Cosmetic & Health",
    description: "Premium barrier packaging preserving purity and effectiveness.",
    imageSrc: "/Cosmetic_Health_img.png",
    imageAlt: "Cosmetic & Health Packaging"
  },
  {
    title: "Sauces & Seasonings",
    description: "Leak-proof and heat-resistant designs for sauces, oils, and pastes.",
    imageSrc: "/Sauces_Seasonings_img.png",
    imageAlt: "Sauces & Seasonings Packaging"
  }
]

export default function IndustrySection() {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h2 className="text-2xl lg:text-4xl font-bold text-[#0A3D62] mb-6 lg:mb-12 text-center">Industry</h2>
      
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