import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ServiceIntroSection from "@/components/ServiceIntroSection"
import ProductsSection from "@/components/ProductsSection"
import ClientsSection from "@/components/ClientsSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      <Header />
      <main>
        <HeroSection />
        <ServiceIntroSection />
        <ProductsSection />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  )
}
