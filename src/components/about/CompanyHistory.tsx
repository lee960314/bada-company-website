import { Calendar, Factory, Award, Globe } from "lucide-react"

export default function CompanyHistory() {
  const historyPeriods = [
    {
      period: "2009 ~ 2012",
      title: "Foundation & Early Growth",
      achievements: [
        "Plastic bag manufacturing facility established",
        "First production line installation",
        "Initial client partnerships formed",
        "Quality control systems implemented"
      ]
    },
    {
      period: "2013 ~ 2016",
      title: "Expansion & Innovation",
      achievements: [
        "Facility expansion and modernization",
        "Advanced packaging equipment introduction",
        "Export partnerships with international clients",
        "Custom packaging solutions development",
        "ISO quality management system certification"
      ]
    },
    {
      period: "2017 ~ 2020",
      title: "Global Reach & Technology",
      achievements: [
        "International market expansion",
        "Automated production systems implementation",
        "Eco-friendly packaging material development",
        "Digital ordering system launch",
        "Research and development center establishment"
      ]
    },
    {
      period: "2021 ~ Present",
      title: "Sustainability & Future",
      achievements: [
        "Sustainable packaging material certification",
        "Carbon-neutral production processes",
        "AI-powered quality control systems",
        "Global supply chain optimization",
        "Innovation lab for next-gen packaging"
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A3D62] mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-[#555555] max-w-2xl mx-auto">
            A timeline of our growth, innovation, and commitment to excellence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {historyPeriods.map((period, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index < historyPeriods.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-24 bg-[#E5E5E5]"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Timeline icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#0A3D62] rounded-full flex items-center justify-center">
                      {index === 0 && <Factory className="h-8 w-8 text-white" />}
                      {index === 1 && <Award className="h-8 w-8 text-white" />}
                      {index === 2 && <Globe className="h-8 w-8 text-white" />}
                      {index === 3 && <Calendar className="h-8 w-8 text-white" />}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-[#F5F6FA] rounded-xl shadow-lg p-8 border border-[#E5E5E5]">
                    <div className="text-2xl font-bold text-[#0A3D62] mb-2">
                      {period.period}
                    </div>
                    <h3 className="text-xl font-semibold text-[#0A3D62] mb-4">
                      {period.title}
                    </h3>
                    <ul className="space-y-2">
                      {period.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#FFC312] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-[#555555]">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}