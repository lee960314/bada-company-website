import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0A3D62] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 메인 푸터 콘텐츠 */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 회사 정보 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded bg-[#FFC312] flex items-center justify-center">
                  <span className="text-[#0A3D62] font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-bold">Bada Co., Ltd</span>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                A specialized company in plastic packaging materials, 
                providing high-quality products and reliable services.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="p-2 text-gray-300 hover:text-[#FFC312] hover:bg-white/10">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 text-gray-300 hover:text-[#FFC312] hover:bg-white/10">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 text-gray-300 hover:text-[#FFC312] hover:bg-white/10">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/products/plastic-bags" className="text-gray-300 hover:text-[#FFC312] transition-colors text-base">
                    Plastic Bags
                  </Link>
                </li>
                <li>
                  <Link href="/products/wrapping-film" className="text-gray-300 hover:text-[#FFC312] transition-colors text-base">
                    Wrapping Film
                  </Link>
                </li>
                <li>
                  <Link href="/products/bubble-wrap" className="text-gray-300 hover:text-[#FFC312] transition-colors text-base">
                    Bubble Wrap
                  </Link>
                </li>
                <li>
                  <Link href="/products/custom" className="text-gray-300 hover:text-[#FFC312] transition-colors text-base">
                    Custom Solutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-base">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/about/history" className="text-gray-300 hover:text-white transition-colors text-base">
                    History
                  </Link>
                </li>
                <li>
                  <Link href="/about/certifications" className="text-gray-300 hover:text-white transition-colors text-base">
                    Certifications
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-300 hover:text-white transition-colors text-base">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-base">02-1234-5678</p>
                    <p className="text-gray-400 text-sm">Mon-Fri 09:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-base">info@bada.co.kr</p>
                    <p className="text-gray-400 text-sm">24/7 Available</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-base">Gangnam-gu, Seoul</p>
                    <p className="text-gray-400 text-sm">Teheran-ro 123</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 구분선 */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-base">
              © 2024 Bada Co., Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-base">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-base">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors text-base">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}