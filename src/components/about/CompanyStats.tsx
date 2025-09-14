import { Package, Users, Award, Globe } from "lucide-react"

export default function CompanyStats() {
  const stats = [
    {
      icon: Package,
      number: "15+",
      label: "Years of Experience",
      description: "Dedicated to plastic packaging excellence"
    },
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      description: "Satisfied customers worldwide"
    },
    {
      icon: Award,
      number: "50+",
      label: "Quality Certifications",
      description: "Industry-recognized standards"
    },
    {
      icon: Globe,
      number: "20+",
      label: "Countries Served",
      description: "Global packaging solutions"
    }
  ]

  return (
    <section className="py-20 bg-[#F5F6FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A3D62] mb-4">
            Our Achievements
          </h2>
          <p className="text-lg text-[#555555] max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-8 mb-6 group-hover:bg-[#0A3D62] transition-colors duration-300 border border-[#E5E5E5] group-hover:border-[#FFC312]">
                <stat.icon className="h-12 w-12 text-[#0A3D62] group-hover:text-white mx-auto transition-colors duration-300" />
              </div>
              <div className="text-4xl font-bold text-[#0A3D62] mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-[#0A3D62] mb-2">{stat.label}</div>
              <div className="text-sm text-[#555555]">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}