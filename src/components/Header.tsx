"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ]

  const products = [
    { name: "Manufacturing Process", href: "/manufacturing-process" },
    { name: "Flexible Packaging", href: "/products/flexible-packaging" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#0A3D62]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/header_logo.png"
                alt="KJ FLEX PACK"
                width={400}
                height={200}
                className="h-30 w-auto"
                priority
              />
            </Link>
          </div>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-[#FFC312] transition-colors duration-200 font-bold text-xl"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Products 드롭다운 */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center space-x-1 text-white hover:text-[#FFC312] transition-colors duration-200 font-bold text-xl">
                <span>Products</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* 드롭다운 메뉴 */}
              <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-300 ease-in-out ${
                isProductsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="py-2">
                  {products.map((product, index) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      className={`block px-4 py-3 text-[#0A3D62] hover:bg-[#F5F6FA] hover:text-[#FFC312] transition-colors duration-200 font-semibold ${
                        index === 0 ? 'rounded-t-lg' : ''
                      } ${index === products.length - 1 ? 'rounded-b-lg' : ''}`}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Get Quote 링크 */}
            <Link
              href="/quote"
              className="text-white hover:text-[#FFC312] transition-colors duration-200 font-bold text-xl"
            >
              Get a Quote
            </Link>
          </nav>

          {/* CTA 버튼 (데스크톱) */}
          <div className="hidden md:flex items-center">
            <Link href="/contact">
              <Button size="lg" className="px-8 py-3 text-lg font-bold bg-[#FFC312] hover:bg-[#FFD93D] text-[#0A3D62]">
                Contact
              </Button>
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="lg" className="p-4 text-white hover:bg-white/10">
                  <Menu className="h-8 w-8" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[350px] sm:w-[450px]">
                <div className="flex flex-col space-y-8 mt-10">
                  <div className="flex items-center pb-8 border-b">
                    <Image
                      src="/header_logo.png"
                      alt="KJ FLEX PACK"
                      width={400}
                      height={200}
                      className="h-20 w-auto"
                    />
                  </div>
                  
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-[#0A3D62] hover:text-[#FFC312] transition-colors duration-200 font-bold py-4 text-xl"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  {/* 모바일 Products 메뉴 */}
                  <div className="space-y-2">
                    <div className="text-[#0A3D62] font-bold py-2 text-xl">Products</div>
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className="block text-[#555555] hover:text-[#FFC312] transition-colors duration-200 font-semibold py-2 pl-4 text-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="pt-8 border-t space-y-4">
                    <Link 
                      href="/quote" 
                      className="block text-[#0A3D62] hover:text-[#FFC312] transition-colors duration-200 font-bold py-4 text-xl"
                      onClick={() => setIsOpen(false)}
                    >
                      Get Quote
                    </Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <Button size="lg" className="w-full bg-[#FFC312] hover:bg-[#FFD93D] text-lg py-4 font-bold text-[#0A3D62]">
                        Contact
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}