"use client"

interface TabMenuProps {
  tabs: string[]
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function TabMenu({ tabs, activeTab, onTabChange }: TabMenuProps) {
  return (
    <div className="flex justify-center mb-16">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`px-8 py-4 text-lg font-semibold relative transition-all duration-300 ${
              activeTab === tab
                ? 'text-[#0A3D62] border-b-4 border-[#0A3D62]'
                : 'text-gray-600 hover:text-[#0A3D62] hover:border-b-2 hover:border-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}