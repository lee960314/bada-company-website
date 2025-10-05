import { useTranslation } from "react-i18next"
import { Printer, Layers, Flame, Scissors, FileText, Droplet, Zap, Snowflake } from "lucide-react"

const processSteps = [
  {
    titleKey: "process_step_printing",
    descriptionKey: "process_step_printing_desc",
    icon: Printer
  },
  {
    titleKey: "process_step_dry_lamination",
    descriptionKey: "process_step_dry_lamination_desc",
    icon: Layers
  },
  {
    titleKey: "process_step_extrusion_coating",
    descriptionKey: "process_step_extrusion_coating_desc",
    icon: Flame
  },
  {
    titleKey: "process_step_converting_slitting",
    descriptionKey: "process_step_converting_slitting_desc",
    icon: Scissors
  },
  {
    titleKey: "process_step_converting_cutting",
    descriptionKey: "process_step_converting_cutting_desc",
    icon: FileText
  },
  {
    titleKey: "process_step_converting_spout",
    descriptionKey: "process_step_converting_spout_desc",
    icon: Droplet
  },
  {
    titleKey: "process_step_heat_sealing",
    descriptionKey: "process_step_heat_sealing_desc",
    icon: Zap
  },
  {
    titleKey: "process_step_cold_seal",
    descriptionKey: "process_step_cold_seal_desc",
    icon: Snowflake
  }
]

export default function ProcessCapabilities() {
  const { t, ready } = useTranslation('common')

  // 번역이 준비되지 않았으면 로딩 상태 표시
  if (!ready) {
    return (
      <section className="py-20 bg-[#F5F6FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse text-[#0A3D62] text-4xl font-bold mb-4">
              Loading...
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  return (
    <section className="py-20 bg-[#F5F6FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A3D62] mb-4">
              {t('production_capabilities_title') || 'Production Capabilities'}
            </h2>
            <p className="text-lg text-[#555555] max-w-3xl mx-auto">
              {t('production_capabilities_description') || 'Advanced manufacturing processes for flexible packaging solutions'}
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
                <h3 className="text-xl font-bold text-[#0A3D62] mb-4">{t(step.titleKey)}</h3>
                <p className="text-[#555555] leading-relaxed text-sm">
                  {t(step.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
