"use client"

import { useState } from "react"
import { TrendingUp, Factory, Layers, Globe } from "lucide-react"

export default function CompanyHistory() {
  const [selectedPeriod, setSelectedPeriod] = useState(0)

  const historyPeriods = [
    {
      period: "2003 ~ 2008",
      title: "Foundation & Early Growth",
      achievements: [
        "Founded as a family-operated workshop specializing in thermal transfer labels",
        "Began manufacturing plastic packaging for local food and consumer goods companies",
        "Built a foundation in flexible packaging by supplying regional distributors and manufacturers"
      ],
      icon: Factory
    },
    {
      period: "2009 ~ 2015",
      title: "Expansion & Innovation",
      achievements: [
        "Expanded facilities with new production halls and upgraded utilities to increase output capacity",
        "Installed the first fully integrated flexible packaging production line",
        "Introduced computerized printing and slitting equipment to improve precision and consistency",
        "Designed custom packaging formats tailored to client specifications across food, retail, and industrial sectors",
        "Formed long-term supply contracts with leading regional brands",
        "Established standardized quality management and inspection procedures"
      ],
      icon: Layers
    },
    {
      period: "2016 ~ 2022",
      title: "Global Reach & Technology Advancement",
      achievements: [
        "Added high-speed 9-color rotogravure presses and solventless lamination systems",
        "Increased pouch-making capacity with advanced converting machinery for stand-up and spouted pouches",
        "Developed high-barrier films for extended shelf life and launched recyclable, eco-friendly packaging materials",
        "Entered international markets through export partnerships in Asia, Europe, and North America",
        "Strengthened R&D capabilities to support product innovation and regulatory compliance"
      ],
      icon: Globe
    },
    {
      period: "2023 ~ Present",
      title: "Smart & Sustainable Growth",
      achievements: [
        "Upgraded operations with smart manufacturing systems, including automated defect detection and inline quality inspection",
        "Expanded product portfolio to serve global brands in food, beverage, pet food, household, and personal care industries",
        "Positioning the company as a technology-driven packaging partner committed to customer success and long-term growth"
      ],
      icon: TrendingUp
    }
  ]

  const selectedPeriodData = historyPeriods[selectedPeriod]

  return (
    <section className="py-20 bg-[#F5F6FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A3D62] mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-[#555555] max-w-2xl mx-auto">
            A timeline of our growth, innovation, and commitment to excellence
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Horizontal Timeline Navigation */}
          <div className="mb-12">
            {/* Desktop Timeline */}
            <div className="hidden md:block">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute top-8 left-0 right-0 h-0.5 bg-[#E5E5E5]"></div>
                
                {/* Timeline Points */}
                <div className="flex justify-between relative">
                  {historyPeriods.map((period, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedPeriod(index)}
                      className={`flex flex-col items-center group transition-all duration-300 ${
                        selectedPeriod === index ? 'transform scale-110' : 'hover:transform hover:scale-105'
                      }`}
                    >
                      {/* Timeline Dot */}
                      <div className={`w-6 h-6 rounded-full border-4 transition-all duration-300 ${
                        selectedPeriod === index 
                          ? 'bg-[#FFC312] border-[#FFC312] shadow-lg' 
                          : 'bg-white border-[#E5E5E5] group-hover:border-[#FFC312]'
                      }`}></div>
                      
                      {/* Period Text */}
                      <div className={`mt-4 text-center transition-colors duration-300 ${
                        selectedPeriod === index 
                          ? 'text-[#0A3D62] font-bold' 
                          : 'text-[#555555] group-hover:text-[#0A3D62]'
                      }`}>
                        <div className="text-sm font-semibold">{period.period}</div>
                        <div className="text-xs mt-1 max-w-20 leading-tight">{period.title}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden">
              <div className="flex overflow-x-auto pb-4 space-x-4">
                {historyPeriods.map((period, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPeriod(index)}
                    className={`flex-shrink-0 px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                      selectedPeriod === index
                        ? 'bg-[#FFC312] border-[#FFC312] text-[#0A3D62] font-bold'
                        : 'bg-white border-[#E5E5E5] text-[#555555] hover:border-[#FFC312]'
                    }`}
                  >
                    <div className="text-sm font-semibold">{period.period}</div>
                    <div className="text-xs mt-1">{period.title}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Display */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-[#E5E5E5]">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-[#0A3D62] rounded-full flex items-center justify-center">
                <selectedPeriodData.icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0A3D62] mb-2">
                  {selectedPeriodData.period}
                </div>
                <h3 className="text-xl font-semibold text-[#0A3D62]">
                  {selectedPeriodData.title}
                </h3>
              </div>
            </div>

            <ul className="space-y-4">
              {selectedPeriodData.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-[#FFC312] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#555555] text-lg leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Arrows for Mobile */}
          <div className="md:hidden flex justify-center mt-8 space-x-4">
            <button
              onClick={() => setSelectedPeriod(Math.max(0, selectedPeriod - 1))}
              disabled={selectedPeriod === 0}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedPeriod === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-[#0A3D62] text-white hover:bg-[#0A3D62]/80'
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => setSelectedPeriod(Math.min(historyPeriods.length - 1, selectedPeriod + 1))}
              disabled={selectedPeriod === historyPeriods.length - 1}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedPeriod === historyPeriods.length - 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-[#FFC312] text-[#0A3D62] hover:bg-[#FFD93D]'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}