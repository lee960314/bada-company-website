"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { t, ready } = useTranslation('common')

  useEffect(() => {
    setMounted(true)
  }, [])

  const slides = [
    {
      id: 1,
      title: t('hero_title') || 'Premium Flexible Packaging Solutions',
      subtitle: "",
      description: "",
      content: t('hero_subtitle') || 'Innovative packaging solutions for your business needs',
      image: "/desktop-heroimg1test.png",
      imageSize: "1980x800px"
    },
    {
      id: 2,
      title: t('hero_slide2_title') || 'Advanced Manufacturing',
      subtitle: "",
      description: "",
      content: t('hero_slide2_content') || 'State-of-the-art production facilities',
      imagePlaceholder: "Hero Image 2",
      imageSize: "1980x800px"
    },
    {
      id: 3,
      title: t('hero_slide3_title') || 'Quality Assurance',
      subtitle: "",
      description: "",
      content: t('hero_slide3_content') || 'Certified quality standards',
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

  // 번역이 준비되지 않았거나 마운트되지 않았으면 로딩 상태 표시
  if (!ready || !mounted) {
    return (
      <section className="relative h-[800px] bg-[#F5F6FA] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0A3D62] mx-auto mb-4"></div>
          <div className="text-[#0A3D62] text-xl font-semibold">
            Loading...
          </div>
        </div>
      </section>
    )
  }

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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0A3D62] leading-tight animate-fade-in-up-enhanced mb-6 md:mb-8 whitespace-pre-line"
            >
              {currentSlideData.title}
            </h1>
            
            <p 
              key={`content-${currentSlide}`}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#555555] max-w-3xl mx-auto leading-relaxed animate-fade-in-up-enhanced-delay-2 font-medium px-4"
            >
              {currentSlideData.content}
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            key={`buttons-${currentSlide}`}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 md:mt-12 animate-fade-in-up-enhanced-delay-3 px-4"
          >
            <Link href="/quote">
              <Button 
                size="lg" 
                className="bg-[#FFC312] hover:bg-[#FFD93D] text-[#0A3D62] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold touch-manipulation min-h-[48px] w-full sm:w-auto"
              >
                {t('get_quote') || 'Get Quote'}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <Link href="/products/flexible-packaging">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#0A3D62] text-[#0A3D62] hover:bg-[#0A3D62] hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold touch-manipulation min-h-[48px] w-full sm:w-auto"
              >
                {t('learn_more') || 'Learn More'}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#0A3D62]/80 hover:bg-[#0A3D62] rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 touch-manipulation min-h-[44px] min-w-[44px]"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#0A3D62]/80 hover:bg-[#0A3D62] rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 touch-manipulation min-h-[44px] min-w-[44px]"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation ${
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