import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import { Package, Leaf, Settings, Layers } from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      title: "Product 1",
      titleKr: "제품 1",
      description: "고품질 소재와 정밀한 제작 공정을 통해 완벽한 제품을 제공합니다.",
      href: "/products/plastic-bags",
      icon: Package
    },
    {
      title: "Product 2",
      titleKr: "제품 2",
      description: "다양한 형태와 크기의 유연한 솔루션을 제공합니다.",
      href: "/products/flexible-packaging",
      icon: Layers
    },
    {
      title: "Product 3",
      titleKr: "제품 3",
      description: "고객의 특별한 요구사항에 맞는 맞춤형 솔루션",
      href: "/products/custom-solutions",
      icon: Settings
    },
    {
      title: "Product 4",
      titleKr: "제품 4",
      description: "환경을 생각하는 친환경 솔루션을 제공합니다.",
      href: "/products/eco-friendly",
      icon: Leaf
    }
  ]

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      <Header />
      
      {/* Page Header */}
      <section className="bg-[#F5F6FA] py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A3D62]">
                  Products
                </h1>
              </div>
              
              <div className="text-sm sm:text-base text-[#555555]">
                <span className="hover:text-[#0A3D62] transition-colors duration-200">
                  <Link href="/">Home</Link>
                </span>
                <span className="mx-2 text-[#0A3D62]">•</span>
                <span className="text-[#0A3D62] font-semibold">제품소개</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A3D62] mb-4">
                Our Products
              </h2>
              <p className="text-lg text-[#555555] max-w-3xl mx-auto">
                고품질 소재와 정밀한 제작 공정을 통해 완벽한 포장 솔루션을 제공합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product) => (
                <Link
                  key={product.title}
                  href={product.href}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#FFC312]"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-[#0A3D62] rounded-full flex items-center justify-center group-hover:bg-[#FFC312] transition-colors duration-300 flex-shrink-0">
                      <product.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0A3D62] mb-2 group-hover:text-[#FFC312] transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="text-sm text-[#FFC312] font-semibold mb-3">
                        {product.titleKr}
                      </p>
                      <p className="text-[#555555] leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 