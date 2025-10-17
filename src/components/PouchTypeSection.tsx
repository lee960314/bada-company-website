"use client"

import PouchTypeCard from "./PouchTypeCard"

const pouchTypes = [
  {
    title: "Three-side Seal Pouch",
    description: "A flat pouch sealed on three sides — ideal for sample packs, small snacks, or single-use items. Perfect for soybeans, crackers, and single-serve products.",
    imageSrc: "/Three-side Seal Pouch_img.png",
    imageAlt: "Three-side Seal Pouch"
  },
  {
    title: "Stand-up Pouch",
    description: "A bottom gusset allows the pouch to stand upright — perfect for sauces, liquids, and snacks. Great for oat bran drinks, coffee, and liquid products.",
    imageSrc: "/Stand-up Pouch_img.png",
    imageAlt: "Stand-up Pouch"
  },
  {
    title: "M-side Gusset Pouch",
    description: "Side folds expand the volume — ideal for coffee, pet food, and bulk dry products. Excellent for nougat crackers, tea, and bulk items.",
    imageSrc: "/M-side Gusset Pouch_img.png",
    imageAlt: "M-side Gusset Pouch"
  },
  {
    title: "Roll Stock Film",
    description: "Continuous film roll for automatic packing machines — customizable for various shapes and laminations. Features jelly patterns and berry designs.",
    imageSrc: "/Roll Stock Film_img.png",
    imageAlt: "Roll Stock Film"
  },
  {
    title: "Spout Pouch",
    description: "Equipped with a spout for easy pouring and resealing — perfect for liquids and refill products. Ideal for detergents, soaps, and liquid formulas.",
    imageSrc: "/Spout Pouch_img.png",
    imageAlt: "Spout Pouch"
  },
  {
    title: "Special Shape Pouch",
    description: "Custom-designed pouches with unique shapes and features for specialized packaging needs. Includes cloud, leaf, pumpkin, and fruit-shaped designs.",
    imageSrc: "/Special Shape Pouch_img.png",
    imageAlt: "Special Shape Pouch"
  }
]

export default function PouchTypeSection() {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h2 className="text-2xl lg:text-4xl font-bold text-[#0A3D62] mb-6 lg:mb-12 text-center">Pouch Type</h2>
      
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