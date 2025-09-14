import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Location() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Gangnam-gu, Seoul\nTeheran-ro 123, 15th Floor",
      bgColor: "bg-[#0A3D62]",
      iconColor: "text-white"
    },
    {
      icon: Phone,
      title: "Tel",
      content: "02-1234-5678~9",
      bgColor: "bg-white",
      iconColor: "text-[#0A3D62]"
    },
    {
      icon: Mail,
      title: "Fax",
      content: "02-1234-5677",
      bgColor: "bg-white",
      iconColor: "text-[#0A3D62]"
    },
    {
      icon: Clock,
      title: "E-mail",
      content: "info@bada.co.kr",
      bgColor: "bg-white",
      iconColor: "text-[#0A3D62]"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A3D62] mb-4">
            Visit Our Facility
          </h2>
          <p className="text-lg text-[#555555] max-w-2xl mx-auto">
            Located in the heart of Seoul&apos;s business district, our modern facility 
            is easily accessible and equipped with state-of-the-art manufacturing equipment
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-[#E5E5E5]">
                {/* Icon */}
                <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#0A3D62]`}>
                  <item.icon className={`h-8 w-8 ${item.iconColor}`} />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-[#0A3D62] mb-3">
                  {item.title}
                </h3>
                
                {/* Content */}
                <div className="text-[#555555] text-sm leading-relaxed">
                  {item.content.split('\n').map((line, lineIndex) => (
                    <div key={lineIndex}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-[#F5F6FA] rounded-2xl p-8 text-center border border-[#E5E5E5]">
            <h3 className="text-2xl font-bold text-[#0A3D62] mb-4">
              Ready to Visit?
            </h3>
            <p className="text-[#555555] mb-6 max-w-2xl mx-auto">
              We welcome visitors to our facility. Please contact us to schedule 
              a tour and see our state-of-the-art manufacturing processes in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#FFC312] hover:bg-[#FFD93D] text-[#0A3D62] px-8 py-3 rounded-lg font-bold transition-colors duration-300">
                Schedule a Tour
              </button>
              <button className="border-2 border-[#0A3D62] text-[#0A3D62] hover:bg-[#0A3D62] hover:text-white px-8 py-3 rounded-lg font-bold transition-colors duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}