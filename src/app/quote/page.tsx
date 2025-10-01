import Header from "@/components/Header"
import Footer from "@/components/Footer"
import QuoteForm from "@/components/QuoteForm"

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      <Header />
      <QuoteForm />
      <Footer />
    </div>
  )
}