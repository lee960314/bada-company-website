"use client"

import { useState } from "react"
import Image from "next/image"

interface ImageZoomProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function ImageZoom({ src, alt, width, height, className = "" }: ImageZoomProps) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })

  const handleImageClick = () => {
    setIsZoomed(true)
  }

  const handleCloseZoom = () => {
    setIsZoomed(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    
    setZoomPosition({ x, y })
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isZoomed) return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const touch = e.touches[0]
    const x = ((touch.clientX - rect.left) / rect.width) * 100
    const y = ((touch.clientY - rect.top) / rect.height) * 100
    
    setZoomPosition({ x, y })
  }

  return (
    <>
      {/* 원본 이미지 */}
      <div 
        className={`relative cursor-zoom-in ${className}`}
        onClick={handleImageClick}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto rounded-lg transition-transform duration-200 hover:scale-105"
        />
        {/* 확대 아이콘 */}
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>

      {/* 확대된 이미지 모달 */}
      {isZoomed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={handleCloseZoom}
        >
          {/* 닫기 버튼 */}
          <button
            onClick={handleCloseZoom}
            className="absolute top-4 right-4 text-white text-2xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-all duration-200"
          >
            ×
          </button>
          
          {/* 확대된 이미지 */}
          <div 
            className="relative max-w-full max-h-full overflow-hidden"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={width * 2}
              height={height * 2}
              className="w-full h-auto rounded-lg"
              style={{
                transform: `scale(2)`,
                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                transition: 'transform 0.1s ease-out'
              }}
            />
          </div>
          
          {/* 사용법 안내 */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            마우스를 움직여서 이미지를 탐색하세요
          </div>
        </div>
      )}
    </>
  )
}