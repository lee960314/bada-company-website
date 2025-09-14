import { Button } from "@/components/ui/button"

export default function ClientsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-[#0A3D62] mb-6">
            Major Clients
          </h2>
          <p className="text-xl text-[#555555] max-w-3xl mx-auto">
            Trusted by leading companies worldwide
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-20">
          {Array.from({ length: 12 }, (_, index) => (
            <div key={index} className="bg-[#F5F6FA] rounded-xl p-8 flex items-center justify-center h-32 hover:shadow-lg transition-shadow duration-300 border border-[#E5E5E5] hover:border-[#FFC312]">
              {/* TODO: Add client logo here - Size: 120x80px */}
              <div className="text-center text-gray-400">
                <p className="text-sm">Logo {index + 1}</p>
                <p className="text-sm">120x80px</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-[#F5F6FA] rounded-2xl p-12 lg:p-16 text-center border border-[#E5E5E5]">
          <h3 className="text-4xl sm:text-5xl font-bold text-[#0A3D62] mb-8">
            Have Questions? Contact us through our consultation board.
          </h3>
          <p className="text-xl text-[#555555] mb-10 max-w-4xl mx-auto">
            We promise to always approach customers with friendly consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-[#FFC312] hover:bg-[#FFD93D] text-[#0A3D62] px-10 py-4 text-lg font-bold">
              Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-[#0A3D62] text-[#0A3D62] hover:bg-[#0A3D62] hover:text-white px-10 py-4 text-lg font-bold">
              Consultation Request
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}