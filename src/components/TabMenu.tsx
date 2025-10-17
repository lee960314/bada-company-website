"use client"

interface TabMenuProps {
  tabs: string[]
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function TabMenu({ tabs, activeTab, onTabChange }: TabMenuProps) {
  return (
    <div className="flex justify-center mb-2 md:mb-2">
      <div className="flex border-b border-gray-200 overflow-x-auto w-full max-w-full">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`px-3 py-2 md:px-8 md:py-4 text-sm md:text-lg font-semibold relative transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
              activeTab === tab
                ? 'text-[#0A3D62] border-b-2 md:border-b-4 border-[#0A3D62]'
                : 'text-gray-600 hover:text-[#0A3D62] hover:border-b-1 md:hover:border-b-2 hover:border-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}