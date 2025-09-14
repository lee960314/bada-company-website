import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AboutHero from "@/components/about/AboutHero"
import CompanyStats from "@/components/about/CompanyStats"
import CompanyHistory from "@/components/about/CompanyHistory"
import Certifications from "@/components/about/Certifications"
import Location from "@/components/about/Location"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      <Header />
      <main>
        <AboutHero />
        <CompanyStats />
        <CompanyHistory />
        <Certifications />
        <Location />
      </main>
      <Footer />
    </div>
  )
}