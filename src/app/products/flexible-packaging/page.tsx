"use client"

import { useState, useEffect, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { useSearchParams } from 'next/navigation'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import TabMenu from "@/components/TabMenu"
import ImageZoom from "@/components/ImageZoom"
import PouchTypeSection from "@/components/PouchTypeSection"
import IndustrySection from "@/components/IndustrySection"
import FunctionalFeaturesSection from "@/components/FunctionalFeaturesSection"
import Link from "next/link"

export default function Product2Page() {
  const { t, ready } = useTranslation('common')
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("vacuum")
  
  // 번역이 준비되면 기본 탭 설정
  useEffect(() => {
    if (ready && !activeTab) {
      setActiveTab(t('tab_film_type'))
    }
  }, [ready, t, activeTab])
  
  const tabs = [
    t('tab_film_type'),
    t('tab_pouch_type'),
    t('tab_industry'),
    t('tab_functional_features')
  ]

  // URL 파라미터에서 탭 설정
  useEffect(() => {
    if (!ready) return
    const tabParam = searchParams.get('tab')
    if (tabParam) {
      const tabMap: Record<string, string> = {
        'film-type': t('tab_film_type'),
        'pouch-type': t('tab_pouch_type'), 
        'functional-features': t('tab_functional_features')
      }
      if (tabMap[tabParam]) {
        setActiveTab(tabMap[tabParam])
      }
    }
  }, [searchParams, t, ready])


  // 탭 클릭 시 해당 섹션으로 스크롤 (스크롤 없이 탭만 변경)
  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    // 스크롤 없이 탭만 변경
  }

  // Film type data with translations
  const filmTypes = useMemo(() => [
    {
      id: 1,
      filmType: "PET + AL + PE",
      mainFeatures: t('film_type_1_features'),
      applications: [t('film_type_1_app_1'), t('film_type_1_app_2'), t('film_type_1_app_3')],
      vacuumAble: true,
      tags: ["Excellent barrier", "Moisture resistance"]
    },
    {
      id: 2,
      filmType: "PET + PE",
      mainFeatures: t('film_type_2_features'),
      applications: [t('film_type_2_app_1'), t('film_type_2_app_2')],
      vacuumAble: true,
      tags: ["Flexibility", "Lightweight"]
    },
    {
      id: 3,
      filmType: "PET + NY + AL + RCPP",
      mainFeatures: t('film_type_3_features'),
      applications: [t('film_type_3_app_1'), t('film_type_3_app_2')],
      vacuumAble: true,
      tags: ["Heat resistant", "Multilayer structure"]
    },
    {
      id: 4,
      filmType: "PET + AL + RCPP",
      mainFeatures: t('film_type_4_features'),
      applications: [t('film_type_4_app_1'), t('film_type_4_app_2'), t('film_type_4_app_3')],
      vacuumAble: true,
      tags: ["Barrier", "Heat sterilization"]
    },
    {
      id: 5,
      filmType: "NY + RCPP",
      mainFeatures: t('film_type_5_features'),
      applications: [t('film_type_5_app_1'), t('film_type_5_app_2')],
      vacuumAble: true,
      tags: ["Cost effective", "Sterilization resistant"]
    },
    {
      id: 6,
      filmType: "NY + PE",
      mainFeatures: t('film_type_6_features'),
      applications: [t('film_type_6_app_1'), t('film_type_6_app_2'), t('film_type_6_app_3')],
      vacuumAble: true,
      tags: ["Puncture resistance", "Vacuum sealing"]
    },
    {
      id: 7,
      filmType: "PET + VM + PE",
      mainFeatures: t('film_type_7_features'),
      applications: [t('film_type_7_app_1'), t('film_type_7_app_2'), t('film_type_7_app_3')],
      vacuumAble: false,
      tags: ["Metalized", "Oxygen barrier"]
    },
    {
      id: 8,
      filmType: "PET + NY + PE",
      mainFeatures: t('film_type_8_features'),
      applications: [t('film_type_8_app_1'), t('film_type_8_app_2'), t('film_type_8_app_3')],
      vacuumAble: true,
      tags: ["Strong", "Freezing suitable"]
    },
    {
      id: 9,
      filmType: "PET + AL + NY + RCPP",
      mainFeatures: t('film_type_9_features'),
      applications: [t('film_type_9_app_1'), t('film_type_9_app_2'), t('film_type_9_app_3')],
      vacuumAble: true,
      tags: ["Durability", "Strong barrier"]
    }
  ], [t])

  // Filtered data
  const filteredFilmTypes = filmTypes.filter(film => {
    if (selectedFilter === "vacuum") return film.vacuumAble
    if (selectedFilter === "heat") return film.tags.some(tag => tag.includes("Heat") || tag.includes("Sterilization") || tag.includes("resistant"))
    if (selectedFilter === "barrier") return film.tags.some(tag => tag.includes("barrier") || tag.includes("Barrier"))
    return true
  })

  // 번역이 준비되지 않았으면 로딩 상태 표시
  if (!ready) {
    return (
      <div className="min-h-screen bg-[#F5F6FA]">
        <Header />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0A3D62] mx-auto mb-4"></div>
            <p className="text-[#0A3D62] text-lg">Loading...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
  

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      <Header />
      
      {/* Page Header */}
      <section className="bg-[#F5F6FA] py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A3D62]">
                  {t('flexible_packaging_title')}
                </h1>
              </div>
              
              <div className="text-sm sm:text-base text-[#555555]">
                <span className="hover:text-[#0A3D62] transition-colors duration-200">
                  <Link href="/">{t('menu_home')}</Link>
                </span>
                <span className="mx-2 text-[#0A3D62]">•</span>
                <span className="text-[#0A3D62] font-semibold">{t('flexible_packaging_breadcrumb')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Tab Menu Section */}
      <section className="sticky top-0 z-50 py-4 bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <TabMenu 
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />
            
            {/* 탐색 가이드 문구 */}
            <div className="text-left mt-4">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <span className="text-yellow-500">💡</span>
                <span>{t('explore_other_options')}</span>
                <span className="text-[#0A3D62] font-medium">{t('tab_pouch_type')}</span>
                <span className="text-gray-400">•</span>
                <span className="text-[#0A3D62] font-medium">{t('tab_industry')}</span>
                <span className="text-gray-400">•</span>
                <span className="text-[#0A3D62] font-medium">{t('tab_functional_features')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content Section */}
      <section className="py-12 bg-[#F5F6FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Film Type Section */}
            <div id="film-type">
              {activeTab === t('tab_film_type') && (
                <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#0A3D62] mb-6">{t('film_materials_title')}</h2>
                {/* 데스크톱 테이블 */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#0A3D62] text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{t('film_materials_code')}</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{t('film_materials_full_name')}</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{t('film_materials_function')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">PET</td>
                        <td className="border border-gray-300 px-4 py-3">{t('material_pet_name')}</td>
                        <td className="border border-gray-300 px-4 py-3">{t('material_pet_function')}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">NY</td>
                        <td className="border border-gray-300 px-4 py-3">{t('material_ny_name')}</td>
                        <td className="border border-gray-300 px-4 py-3">{t('material_ny_function')}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">AL</td>
                        <td className="border border-gray-300 px-4 py-3">{t('material_al_name')}</td>
                        <td className="border border-gray-300 px-4 py-3">{t('material_al_function')}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">VM PET/CPP/OPP</td>
                        <td className="border border-gray-300 px-4 py-3">{t('material_vm_pet_cpp_opp_name')}</td>
                        <td className="border border-gray-300 px-4 py-3">{t('material_vm_pet_cpp_opp_function')}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">PE</td>
                        <td className="border border-gray-300 px-4 py-3">{t('material_pe_name')}</td>
                        <td className="border border-gray-300 px-4 py-3">{t('material_pe_function')}</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">RCPP</td>
                        <td className="border border-gray-300 px-4 py-3">{t('material_rcpp_name')}</td>
                        <td className="border border-gray-300 px-4 py-3">{t('material_rcpp_function')}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 모바일 카드 레이아웃 */}
                <div className="md:hidden space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="font-bold text-[#0A3D62] mb-2">PET</div>
                    <div className="text-sm text-gray-600 mb-1">{t('material_pet_name')}</div>
                    <div className="text-xs text-gray-500">{t('material_pet_function')}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="font-bold text-[#0A3D62] mb-2">NY</div>
                    <div className="text-sm text-gray-600 mb-1">{t('material_ny_name')}</div>
                    <div className="text-xs text-gray-500">{t('material_ny_function')}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="font-bold text-[#0A3D62] mb-2">AL</div>
                    <div className="text-sm text-gray-600 mb-1">{t('material_al_name')}</div>
                    <div className="text-xs text-gray-500">{t('material_al_function')}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="font-bold text-[#0A3D62] mb-2">VM PET/CPP/OPP</div>
                    <div className="text-sm text-gray-600 mb-1">{t('material_vm_pet_cpp_opp_name')}</div>
                    <div className="text-xs text-gray-500">{t('material_vm_pet_cpp_opp_function')}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="font-bold text-[#0A3D62] mb-2">PE</div>
                    <div className="text-sm text-gray-600 mb-1">{t('material_pe_name')}</div>
                    <div className="text-xs text-gray-500">{t('material_pe_function')}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="font-bold text-[#0A3D62] mb-2">RCPP</div>
                    <div className="text-sm text-gray-600 mb-1">{t('material_rcpp_name')}</div>
                    <div className="text-xs text-gray-500">{t('material_rcpp_function')}</div>
                  </div>
                </div>
                
                {/* Film Type Image */}
                <div className="mt-8">
                  <ImageZoom
                    src="/film_type_img.png"
                    alt="Film Type Materials"
                    width={1200}
                    height={600}
                    className="w-full h-auto rounded-lg md:max-w-none max-w-sm mx-auto"
                  />
                </div>

                {/* Film Type Table Section */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-[#0A3D62] mb-6">{t('film_type_details')}</h3>
                  
                  {/* Filter Buttons */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    <button
                      onClick={() => setSelectedFilter("vacuum")}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedFilter === "vacuum"
                          ? "bg-[#0A3D62] text-white shadow-lg"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {t('filter_vacuum_capable')}
                    </button>
                    <button
                      onClick={() => setSelectedFilter("heat")}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedFilter === "heat"
                          ? "bg-[#0A3D62] text-white shadow-lg"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {t('filter_heat_resistant')}
                    </button>
                    <button
                      onClick={() => setSelectedFilter("barrier")}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedFilter === "barrier"
                          ? "bg-[#0A3D62] text-white shadow-lg"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {t('filter_excellent_barrier')}
                    </button>
                  </div>

                  {/* Desktop Table */}
                  <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
                      <thead>
                        <tr className="bg-[#0A3D62] text-white">
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{t('table_film_type')}</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{t('table_main_features')}</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{t('table_typical_applications')}</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{t('table_vacuum_able')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredFilmTypes.map((film) => (
                          <tr key={film.id} className="hover:bg-gray-50 transition-colors duration-200">
                            <td className="border border-gray-300 px-4 py-3 font-medium text-[#0A3D62]">{film.filmType}</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm">{film.mainFeatures}</td>
                            <td className="border border-gray-300 px-4 py-3 text-sm">
                              <ul className="space-y-1">
                                {film.applications.map((app, index) => (
                                  <li key={index} className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-[#0A3D62] rounded-full mr-2 flex-shrink-0"></span>
                                    {app}
                                  </li>
                                ))}
                              </ul>
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              <span className="text-sm font-medium">
                                {film.vacuumAble ? t('yes') : t('no')}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Tablet Table */}
                  <div className="hidden md:block lg:hidden overflow-x-auto">
                    <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
                      <thead>
                        <tr className="bg-[#0A3D62] text-white">
                          <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-sm">{t('table_film_type')}</th>
                          <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-sm">{t('table_main_features')}</th>
                          <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-sm">{t('table_typical_applications')}</th>
                          <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-sm">{t('vacuum')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredFilmTypes.map((film) => (
                          <tr key={film.id} className="hover:bg-gray-50 transition-colors duration-200">
                            <td className="border border-gray-300 px-3 py-2 font-medium text-[#0A3D62] text-sm">{film.filmType}</td>
                            <td className="border border-gray-300 px-3 py-2 text-xs">{film.mainFeatures}</td>
                            <td className="border border-gray-300 px-3 py-2 text-xs">
                              <div className="space-y-1">
                                {film.applications.map((app, index) => (
                                  <div key={index} className="flex items-center">
                                    <span className="w-1 h-1 bg-[#0A3D62] rounded-full mr-1 flex-shrink-0"></span>
                                    {app}
                                  </div>
                                ))}
                              </div>
                            </td>
                            <td className="border border-gray-300 px-3 py-2 text-center">
                              <span className="text-xs font-medium">
                                {film.vacuumAble ? "Yes" : "No"}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Cards */}
                  <div className="md:hidden space-y-4">
                    {filteredFilmTypes.map((film) => (
                      <div key={film.id} className="bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="font-bold text-[#0A3D62] text-sm mb-2">{film.filmType}</h4>
                            <span className="text-xs font-medium">
                              {t('vacuum')}: {film.vacuumAble ? t('yes') : t('no')}
                            </span>
                          </div>
                        </div>
                        
                        <div className="mb-3">
                          <h5 className="text-xs font-semibold text-gray-700 mb-1">{t('main_features')}</h5>
                          <p className="text-xs text-gray-600">{film.mainFeatures}</p>
                        </div>
                        
                        <div>
                          <h5 className="text-xs font-semibold text-gray-700 mb-1">{t('typical_applications')}</h5>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {film.applications.map((app, index) => (
                              <li key={index} className="flex items-center">
                                <span className="w-1 h-1 bg-[#0A3D62] rounded-full mr-2 flex-shrink-0"></span>
                                {app}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* No Results Message */}
                  {filteredFilmTypes.length === 0 && (
                    <div className="text-center py-12">
                      <div className="text-gray-500 text-lg">
                        {t('no_film_types_found')}
                      </div>
                      <button
                        onClick={() => setSelectedFilter("vacuum")}
                        className="mt-4 px-6 py-2 bg-[#0A3D62] text-white rounded-lg hover:bg-[#0A3D62]/90 transition-colors duration-200"
                      >
                        {t('show_all')}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
            </div>

            {/* Pouch Type Section */}
            <div id="pouch-type">
              {activeTab === t('tab_pouch_type') && (
                <PouchTypeSection />
              )}
            </div>

            {/* Industry Section */}
            <div id="industry">
              {activeTab === t('tab_industry') && (
                <IndustrySection />
              )}
            </div>

            {/* Functional Features Section */}
            <div id="functional-features">
              {activeTab === t('tab_functional_features') && (
                <FunctionalFeaturesSection />
              )}
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
} 