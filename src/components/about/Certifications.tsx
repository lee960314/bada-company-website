import { Shield, Award, CheckCircle, Star } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System",
      type: "International Standard",
      icon: Shield
    },
    {
      title: "ISO 14001:2015",
      description: "Environmental Management System",
      type: "Environmental Standard",
      icon: Award
    },
    {
      title: "GRS Certification",
      description: "Global Recycled Standard",
      type: "Sustainability Certification",
      icon: CheckCircle
    },
    {
      title: "FDA Approved",
      description: "Food Contact Materials",
      type: "Safety Certification",
      icon: Star
    },
    {
      title: "CE Marking",
      description: "European Conformity",
      type: "EU Standard",
      icon: Shield
    },
    {
      title: "SGS Certification",
      description: "Third-party Quality Assurance",
      type: "Quality Verification",
      icon: Award
    }
  ]

  return (
    <section className="py-20 bg-[#F5F6FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A3D62] mb-4">
            Certifications & Standards
          </h2>
          <p className="text-lg text-[#555555] max-w-2xl mx-auto">
            Our commitment to quality, safety, and environmental responsibility
            is validated by industry-leading certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl p-8 text-center group hover:bg-[#F5F6FA] transition-colors duration-300 border border-[#E5E5E5] hover:border-[#FFC312]">
              <div className="w-16 h-16 bg-[#0A3D62] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FFC312] transition-colors duration-300">
                <cert.icon className="h-8 w-8 text-white group-hover:text-[#0A3D62]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A3D62] mb-2">{cert.title}</h3>
              <p className="text-[#555555] mb-3">{cert.description}</p>
              <span className="inline-block bg-[#F5F6FA] text-[#0A3D62] px-3 py-1 rounded-full text-sm font-medium border border-[#E5E5E5]">
                {cert.type}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[#0A3D62] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Quality Assurance</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              All our products undergo rigorous testing and quality control processes. 
              We maintain the highest standards in manufacturing, ensuring that every 
              plastic packaging solution meets international quality requirements and 
              customer specifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}