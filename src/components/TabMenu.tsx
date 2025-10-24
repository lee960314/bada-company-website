"use client"

interface TabMenuProps {
  tabs: string[]
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function TabMenu({ tabs, activeTab, onTabChange }: TabMenuProps) {
  return (
    <div className="flex justify-center mb-2 md:mb-2">
      <div className="flex gap-3 md:gap-6 overflow-x-auto w-full max-w-full px-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-semibold rounded-full transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
              activeTab === tab
                ? 'bg-[#0A3D62] text-white shadow-lg transform scale-105'
                : 'bg-[#F2F4F7] text-gray-700 hover:bg-gray-200 hover:shadow-sm hover:font-bold hover:transform hover:scale-105'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}