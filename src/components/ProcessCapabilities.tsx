import { Printer, Layers, Flame, Scissors, FileText, Droplet, Zap, Snowflake } from "lucide-react"

const processSteps = [
  {
    title: "Printing",
    description: "Using engraved cylinders, the printing press reproduces customer-specified colors with precision on the packaging film.",
    icon: Printer
  },
  {
    title: "Dry Lamination",
    description: "Adhesive is applied to the printed film surface and dried in a chamber before being laminated with secondary film layers.",
    icon: Layers
  },
  {
    title: "Extrusion Coating",
    description: "Polyethylene is melted at over 300℃ and coated onto the printed film to enhance strength and barrier properties.",
    icon: Flame
  },
  {
    title: "Converting – Slitting",
    description: "Large laminated rolls are slit into narrower reels for efficient handling in downstream production.",
    icon: Scissors
  },
  {
    title: "Converting – Cutting",
    description: "Films are cut to precise dimensions, creating pouches or packaging formats tailored to customer specifications.",
    icon: FileText
  },
  {
    title: "Converting – Spout Insertion",
    description: "Caps or spouts are attached to the pouch top after cutting, enabling functionality for liquid and beverage packaging.",
    icon: Droplet
  },
  {
    title: "Heat Sealing",
    description: "The sealant layer of the laminated film is heat-pressed to form strong, leak-proof pouch seals.",
    icon: Zap
  },
  {
    title: "Cold Seal Process",
    description: "A special adhesive is precisely applied to the inner surface of the film, allowing seal formation without heat—commonly used for snacks and confectionery.",
    icon: Snowflake
  }
]

export default function ProcessCapabilities() {
  return (
    <section className="py-20 bg-[#F5F6FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A3D62] mb-4">
              Production Capabilities
            </h2>
            <p className="text-lg text-[#555555] max-w-3xl mx-auto">
              State-of-the-art equipment and rigorous quality standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-[#0A3D62] rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0A3D62] mb-4">{step.title}</h3>
                <p className="text-[#555555] leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
