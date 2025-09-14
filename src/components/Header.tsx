"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#0A3D62]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded bg-[#FFC312] flex items-center justify-center">
                <span className="text-[#0A3D62] font-black text-xl">B</span>
              </div>
              <span className="text-3xl font-black text-white">Bada Co., Ltd</span>
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
          </nav>

          {/* CTA 버튼 (데스크톱) */}
          <div className="hidden md:flex items-center space-x-5">
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg font-bold border-white text-[#0A3D62] hover:bg-white hover:text-[#0A3D62]">
              Get Quote
            </Button>

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
                  <div className="flex items-center space-x-4 pb-8 border-b">
                    <div className="h-12 w-12 rounded bg-[#FFC312] flex items-center justify-center">
                      <span className="text-[#0A3D62] font-black text-xl">B</span>
                    </div>
                    <span className="text-3xl font-black text-[#0A3D62]">Bada Co., Ltd</span>
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
                  
                  <div className="pt-8 border-t space-y-4">
                    <Button variant="outline" size="lg" className="w-full text-lg py-4 font-bold border-[#0A3D62] text-[#0A3D62] hover:bg-[#0A3D62] hover:text-white">
                      Get Quote
                    </Button>
                    <Button size="lg" className="w-full bg-[#FFC312] hover:bg-[#FFD93D] text-lg py-4 font-bold text-[#0A3D62]">
                      Contact Us
                    </Button>
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