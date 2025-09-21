"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const slides = [
    {
      id: 1,
      title: "Premium Flexible",
      subtitle: "Packaging Solutions",
      description: "",
      content: "Protecting freshness, quality, and trust for brands worldwide. is the first face customers encounter with your product. Capture customers' attention with high-quality packaging.",
      image: "/desktop-heroimg1test.png",
      imageSize: "1980x800px"
    },
    {
      id: 2,
      title: "From Food to Everyday ",
      subtitle: " Life and Beyond",
      description: "",
      content: "Our packaging goes further, connecting producers and consumers across industries.",
      imagePlaceholder: "Hero Image 2",
      imageSize: "1980x800px"
    },
    {
      id: 3,
      title: "Shaping the Future of",
      subtitle: "Sustainable Packaging and Fast delivery",
      description: "",
      content: "Lightweight, reliable, and eco-conscious solutions for a changing world.",
      imagePlaceholder: "Hero Image 3",
      imageSize: "1980x800px"
    }
  ]

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 1000)
  }, [isAnimating, slides.length])

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsAnimating(false), 1000)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 1000)
  }

  // Auto-play functionality (optional)
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        nextSlide()
      }
    }, 5000) // Change slide every 5 seconds
    return () => clearInterval(timer)
  }, [isAnimating, nextSlide])

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative h-[800px] flex items-center justify-center overflow-hidden bg-[#F5F6FA]">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.image ? (
              <Image
                src={slide.image}
                alt={`Hero Image ${slide.id}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            ) : (
              <div className="w-full h-full bg-white flex items-center justify-center">
                {/* TODO: Add hero background image here - Size: 1980x800px */}
                <div className="text-center text-gray-400">
                  <p className="font-semibold">{slide.imagePlaceholder}</p>
                  <p className="text-sm">{slide.imageSize}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Animated Text Content */}
          <div className="space-y-6">
            <h1 
              key={`title-${currentSlide}`}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0A3D62] leading-tight animate-fade-in-up-enhanced"
            >
              {currentSlideData.title}
              <span 
                key={`subtitle-${currentSlide}`}
                className="block text-[#FFC312] animate-fade-in-up-enhanced-delay-1"
              >
                {currentSlideData.subtitle}
              </span>
            </h1>
            
            <div 
              key={`description-${currentSlide}`}
              className="text-2xl sm:text-3xl font-bold text-[#0A3D62] animate-fade-in-up-enhanced-delay-2"
            >
              {currentSlideData.description}
            </div>
            
            <p 
              key={`content-${currentSlide}`}
              className="text-lg sm:text-xl text-[#555555] max-w-3xl mx-auto leading-relaxed animate-fade-in-up-enhanced-delay-3"
            >
              {currentSlideData.content}
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            key={`buttons-${currentSlide}`}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in-up-enhanced-delay-4"
          >
            <Button size="lg" className="bg-[#FFC312] hover:bg-[#FFD93D] text-[#0A3D62] px-8 py-4 text-lg font-bold">
            Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-[#0A3D62] text-[#0A3D62] hover:bg-[#0A3D62] hover:text-white px-8 py-4 text-lg font-bold">
            Request Samples
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#0A3D62]/80 hover:bg-[#0A3D62] rounded-full p-3 shadow-lg transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#0A3D62]/80 hover:bg-[#0A3D62] rounded-full p-3 shadow-lg transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-[#FFC312] scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}