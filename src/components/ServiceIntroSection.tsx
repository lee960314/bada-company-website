"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function ServiceIntroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start">
          {/* Left side - Image */}
          <div className="flex-shrink-0">
            <div className="w-[500px] h-[350px] rounded-lg overflow-hidden">
              <Image
                src="/serviceintro_img1.png"
                alt="Flexible packaging solutions"
                width={500}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex-1 pl-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
              From food to household goods,<br />
              everything in flexible plastic packaging
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 leading-relaxed mt-4">
              The perfect flexible packaging solution tailored to your product.<br />
              With direct factory customization, we deliver competitive pricing,<br />
              fast lead times, and consistent quality.
            </p>
            
            {/* Detail Link with Animation */}
            <div className="mt-8">
              <a 
                href="/products" 
                className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300 group cursor-pointer"
              >
                <span className="text-2xl font-medium">Details </span>
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}