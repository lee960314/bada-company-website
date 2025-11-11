"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Upload, CheckCircle2, FileText } from "lucide-react"
import { supabase } from "@/lib/supabase"
import Image from "next/image"

interface FormData {
  name: string
  phone: string
  companyName: string
  email: string
  productType: string
  productionQuantity: string
  width: string
  height: string
  bottomSide: string
  productWeight: string
  printingMethod: string
  function: string
  formulation: string
  materials: string[]
  printCount: string
  productInformation: string
  additionalInput: string
  attachedFile: File | null
  shape: string
  // New quote options fields
  shapeType: string
  sizeWidth: string
  sizeLength: string
  hasPrinting: string
  purpose: string
  hasZipper: string
  hangHole: string
  corner: string
  inlet: string
  quantity: string
  designFile: File | null
  details: string
}

export default function QuoteForm() {
  const { t, ready } = useTranslation('common')
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const [formData, setFormData] = useState<FormData>({
    // Section 1: Contact Information
    name: "",
    phone: "",
    companyName: "",
    email: "",
    
    // Section 2: Product & Printing
    productType: "",
    productionQuantity: "",
    width: "",
    height: "",
    bottomSide: "",
    productWeight: "",
    printingMethod: "",
    function: "",
    formulation: "",
    materials: [],
    printCount: "",
    productInformation: "",
    additionalInput: "",
    attachedFile: null,
    
    // Section 3: Production Options
    shape: "",
    // Quote Options
    shapeType: "",
    sizeWidth: "",
    sizeLength: "",
    hasPrinting: "",
    purpose: "",
    hasZipper: "",
    hangHole: "",
    corner: "",
    inlet: "",
    quantity: "",
    designFile: null,
    details: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  // Material 선택 핸들러 추가
  const handleMaterialChange = (material: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      materials: checked 
        ? [...prev.materials, material]
        : prev.materials.filter(m => m !== material)
    }))
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFormData(prev => ({ ...prev, attachedFile: file }))
    }
  }

  const handleDesignFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFormData(prev => ({ ...prev, designFile: file }))
    }
  }

  const isStep1Valid = formData.name && formData.phone && formData.email
  const isStep2Valid = formData.productType && formData.productionQuantity && formData.width && formData.height && formData.bottomSide
  const isStep3Valid = !!formData.shape && !!formData.shapeType

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  // 번역이 준비되지 않았으면 로딩 상태 표시
  if (!ready) {
    return (
      <div className="min-h-screen bg-[#F5F6FA] py-8 lg:py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0A3D62] mx-auto mb-4"></div>
                <p className="text-[#0A3D62] text-lg">Loading...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      // Upload files to Supabase Storage if exists
      let fileUrl = null
      let designFileUrl = null
      
      if (formData.attachedFile) {
        const fileName = `${Date.now()}_${formData.attachedFile.name}`
        const { error: fileError } = await supabase.storage
          .from('quote-attachments')
          .upload(fileName, formData.attachedFile)

        if (fileError) {
          console.error('File upload error:', fileError)
        } else {
          // Get public URL
          const { data: { publicUrl } } = supabase.storage
            .from('quote-attachments')
            .getPublicUrl(fileName)
          fileUrl = publicUrl
        }
      }

      if (formData.designFile) {
        const fileName = `${Date.now()}_design_${formData.designFile.name}`
        const { error: fileError } = await supabase.storage
          .from('quote-attachments')
          .upload(fileName, formData.designFile)

        if (fileError) {
          console.error('Design file upload error:', fileError)
        } else {
          const { data: { publicUrl } } = supabase.storage
            .from('quote-attachments')
            .getPublicUrl(fileName)
          designFileUrl = publicUrl
        }
      }

      // Insert quote data into database
      console.log('Attempting to insert data...')
      const { data, error } = await supabase
        .from('quote_requests')
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            company_name: formData.companyName,
            email: formData.email,
            product_type: formData.productType,
            production_quantity: formData.productionQuantity,
            width: formData.width,
            height: formData.height,
            bottom_side: formData.bottomSide,
            product_weight: formData.productWeight,
            printing_method: formData.printingMethod,
            function: formData.function,
            formulation: formData.formulation,
            materials: formData.materials,
            print_count: formData.printCount,
            product_information: formData.productInformation,
            additional_input: formData.additionalInput,
            attached_file_url: fileUrl,
            shape: formData.shape,
            // New quote options fields
            shape_type: formData.shapeType,
            size_width: formData.sizeWidth,
            size_length: formData.sizeLength,
            has_printing: formData.hasPrinting,
            purpose: formData.purpose,
            has_zipper: formData.hasZipper,
            hang_hole: formData.hangHole,
            corner: formData.corner,
            inlet: formData.inlet,
            quantity: formData.quantity,
            details: formData.details,
            design_file_url: designFileUrl,
          }
        ])
        .select()

      console.log('Insert result:', { data, error })

      if (error) {
        console.error('Supabase error details:', error)
        throw error
      }

      setSubmitMessage({
        type: 'success',
        text: t('quote_submitted')
      })

      // Reset form
      setFormData({
        name: "",
        phone: "",
        companyName: "",
        email: "",
        productType: "",
        productionQuantity: "",
        width: "",
        height: "",
        bottomSide: "",
        productWeight: "",
        printingMethod: "",
        function: "",
        formulation: "",
        materials: [],
        printCount: "",
        productInformation: "",
        additionalInput: "",
        attachedFile: null,
        shape: "",
        shapeType: "",
        sizeWidth: "",
        sizeLength: "",
        hasPrinting: "",
        purpose: "",
        hasZipper: "",
        hangHole: "",
        corner: "",
        inlet: "",
        quantity: "",
        designFile: null,
        details: ""
      })
      setCurrentStep(1)

    } catch (error) {
      console.error('Error submitting quote:', error)
      setSubmitMessage({
        type: 'error',
        text: t('quote_failed')
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F6FA] py-8 lg:py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 lg:mb-6">
            <div className="text-2xl font-bold text-[#0A3D62]">
              {currentStep}/3
            </div>
            <div className="text-lg text-[#555555]">
              {t('quote_form_title')}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
            {/* Left Side Title */}
            <div className="mb-8 lg:mb-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A3D62] leading-tight">
                {currentStep === 1 && t('step_contact_info')}
                {currentStep === 2 && t('step_product_info')}
                {currentStep === 3 && t('step_production_options')}
              </h1>
            </div>

            {/* Form Content */}
            <div className="space-y-6 lg:space-y-4">
              {/* Section 1: Contact Information */}
              {currentStep === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0A3D62] mb-2">
                      {t('name')} *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC312] focus:border-transparent"
                      placeholder={t('enter_name')}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#0A3D62] mb-2">
                      {t('phone')} *
                    </label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC312] focus:border-transparent"
                      placeholder={t('enter_phone')}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#0A3D62] mb-2">
                      {t('company')}
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC312] focus:border-transparent"
                      placeholder={t('enter_company')}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#0A3D62] mb-2">
                      {t('email')} *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC312] focus:border-transparent"
                      placeholder={t('enter_email')}
                    />
                  </div>
                </div>
              )}

              {/* Section 2: Product & Printing Specifications */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0A3D62] mb-2">
                        {t('quote_product_type')}
                      </label>
                      <input
                        type="text"
                        value={formData.productType}
                        onChange={(e) => handleInputChange("productType", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC312] focus:border-transparent"
                        placeholder={t('quote_product_type_placeholder')}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-[#0A3D62] mb-2">
                        {t('quote_production_quantity')}
                      </label>
                      <input
                        type="text"
                        value={formData.productionQuantity}
                        onChange={(e) => handleInputChange("productionQuantity", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC312] focus:border-transparent"
                        placeholder={t('quote_quantity_placeholder')}
                      />
                    </div>
                  </div>

                  {/* Size and Product Weight in one row */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Size Information */}
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold text-[#0A3D62] mb-4">{t('quote_size')}</h3>
                      <div className="grid grid-cols-3 gap-3 flex-1">
                        <div>
                          <label className="block text-sm font-semibold text-[#0A3D62] mb-2">
                            {t('quote_width_mm')}
                          </label>
                          <input
                            type="text"
                            value={formData.width}
                            onChange={(e) => handleInputChange("width", e.target.value)}
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC312] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#0A3D62] mb-2">
                            {t('quote_height_mm')}
                          </label>
                          <input
                            type="text"
                            value={formData.height}
                            onChange={(e) => handleInputChange("height", e.target.value)}
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC312] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#0A3D62] mb-2">
                            {t('quote_bottom_side_mm')}
                          </label>
                          <input
                            type="text"
                            value={formData.bottomSide}
                            onChange={(e) => handleInputChange("bottomSide", e.target.value)}
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC312] focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Product Weight / Volume */}
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold text-[#0A3D62] mb-4">{t('quote_product_weight_volume')}</h3>
                      <div className="flex-1 flex items-end">
                        <input
                          type="text"
                          value={formData.productWeight}
                          onChange={(e) => handleInputChange("productWeight", e.target.value)}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC312] focus:border-transparent"
                          placeholder="Enter weight/volume (e.g., 500g, 250ml)"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Function */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#0A3D62] mb-4">{t('quote_function')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { label: t('quote_function_general'), value: 'general' },
                        { label: t('quote_function_refrigerated'), value: 'refrigerated' },
                        { label: t('quote_function_sterilized'), value: 'sterilized' },
                        { label: t('quote_function_microwave'), value: 'microwave' }
                      ].map((option) => (
                        <label key={option.value} className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                          formData.function === option.value 
                            ? 'border-[#FFC312] bg-[#FFC312] text-white' 
                            : 'border-gray-300 hover:bg-gray-50 hover:border-[#FFC312]'
                        }`}>
                          <input
                            type="radio"
                            name="function"
                            value={option.value}
                            checked={formData.function === option.value}
                            onChange={(e) => handleInputChange("function", e.target.value)}
                            className="text-[#FFC312] focus:ring-[#FFC312]"
                          />
                          <span>{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Formulation */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#0A3D62] mb-4">{t('quote_formulation')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { label: t('quote_formulation_powder'), value: 'powder' },
                        { label: t('quote_formulation_liquid'), value: 'liquid' },
                        { label: t('quote_formulation_solid'), value: 'solid' },
                        { label: t('quote_formulation_mixed'), value: 'mixed' }
                      ].map((option) => (
                        <label key={option.value} className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                          formData.formulation === option.value 
                            ? 'border-[#FFC312] bg-[#FFC312] text-white' 
                            : 'border-gray-300 hover:bg-gray-50 hover:border-[#FFC312]'
                        }`}>
                          <input
                            type="radio"
                            name="formulation"
                            value={option.value}
                            checked={formData.formulation === option.value}
                            onChange={(e) => handleInputChange("formulation", e.target.value)}
                            className="text-[#FFC312] focus:ring-[#FFC312]"
                          />
                          <span>{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Material Multi-Select */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0A3D62] mb-2">
                      {t('quote_materials') || 'Materials (Select multiple)'}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                      {[
                        { value: "opp", label: "OPP" },
                        { value: "pp", label: "PP" },
                        { value: "pe", label: "PE" },
                        { value: "hdpe", label: "HDPE" },
                        { value: "other", label: t('quote_material_other') }
                      ].map((option) => (
                        <label key={option.value} className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                          <input
                            type="checkbox"
                            checked={formData.materials.includes(option.value)}
                            onChange={(e) => handleMaterialChange(option.value, e.target.checked)}
                            className="w-4 h-4 text-[#0A3D62] border-gray-300 rounded focus:ring-[#FFC312] focus:ring-2"
                          />
                          <span className="text-sm text-[#555555] font-medium">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Print Count */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0A3D62] mb-2">
                      {t('quote_print_count')}
                    </label>
                    <input
                      type="text"
                      value={formData.printCount}
                      onChange={(e) => handleInputChange("printCount", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC312] focus:border-transparent"
                    />
                  </div>

                  {/* Product Information */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0A3D62] mb-2">
                      {t('quote_product_info')}
                    </label>
                    <textarea
                      value={formData.productInformation}
                      onChange={(e) => handleInputChange("productInformation", e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC312] focus:border-transparent"
                        placeholder={t('quote_product_info_placeholder')}
                    />
                  </div>

                  {/* Additional Input */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0A3D62] mb-2">
                      {t('quote_additional_info')}
                    </label>
                    <textarea
                      value={formData.additionalInput}
                      onChange={(e) => handleInputChange("additionalInput", e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC312] focus:border-transparent"
                        placeholder={t('quote_additional_info_placeholder')}
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0A3D62] mb-2">
                      {t('quote_attached_file')}
                    </label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        id="file-upload"
                      />
                      <label
                        htmlFor="file-upload"
                        className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                      >
                        <Upload className="h-5 w-5" />
                        <span>Find File</span>
                      </label>
                      {formData.attachedFile && (
                        <span className="text-sm text-gray-600">
                          {formData.attachedFile.name}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Section 3: Production Options */}
              {currentStep === 3 && (
                <div className="space-y-12">
                  {/* Shape Options */}
                  <div>
                    <h3 className="text-2xl font-semibold text-[#0A3D62] mb-6">{t('quote_shape')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        { 
                          key: 'three-side-seal-pouch',
                          title: t('quote_shape_three_side_seal_pouch'),
                          image: '/Three-side Seal Pouch_img.png'
                        },
                        { 
                          key: 'stand-up-pouch',
                          title: t('quote_shape_stand_up_pouch'),
                          image: '/Stand-up Pouch_img.png'
                        },
                        { 
                          key: 'm-side-gusset-pouch',
                          title: t('quote_shape_m_side_gusset_pouch'),
                          image: '/M-side Gusset Pouch_img.png'
                        },
                        { 
                          key: 'roll-stock-film',
                          title: t('quote_shape_roll_stock_film'),
                          image: '/Roll Stock Film_img.png'
                        },
                        { 
                          key: 'spout-pouch',
                          title: t('quote_shape_spout_pouch'),
                          image: '/Spout Pouch_img.png'
                        },
                        { 
                          key: 'special-shape-pouch',
                          title: t('quote_shape_special_shape_pouch'),
                          image: '/Special Shape Pouch_img.png'
                        }
                      ].map((shape) => (
                        <label key={shape.key} className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                          formData.shape === shape.key
                            ? 'border-[#FFC312] bg-[#FFC312] text-white' 
                            : 'border-gray-300 hover:bg-gray-50 hover:border-[#FFC312]'
                        }`}>
                          <div className={`w-full aspect-square max-w-[200px] rounded-lg mb-4 flex items-center justify-center overflow-hidden transition-colors duration-300 ${
                            formData.shape === shape.key
                              ? 'bg-white' 
                              : 'bg-gray-200'
                          }`}>
                            <Image
                              src={shape.image}
                              alt={shape.title}
                              width={200}
                              height={200}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <input
                            type="radio"
                            name="shape"
                            value={shape.key}
                            checked={formData.shape === shape.key}
                            onChange={(e) => handleInputChange("shape", e.target.value)}
                            className="text-[#FFC312] focus:ring-[#FFC312]"
                          />
                          <span className="text-sm font-medium text-center mt-2">{shape.title}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Quote Options & Details Section - Table Layout */}
                  <div className="bg-white rounded-lg border border-gray-200 mt-8">
                    {/* Quote Options Section */}
                    <div className="border-b border-gray-200">
                      <div className="flex items-center space-x-3 px-6 py-4 bg-[#F8F8FA]">
                        <CheckCircle2 className="h-6 w-6 text-[#0A3D62]" />
                        <h3 className="text-2xl font-semibold text-[#0A3D62]">{t('quote_options_title')}</h3>
                      </div>

                      <div className="divide-y divide-gray-200">
                        {/* Shape Type */}
                        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 px-6 py-4">
                          <label className="text-base font-semibold text-[#0A3D62] flex items-center">{t('quote_shape_type')}</label>
                          <div className="flex flex-wrap gap-4">
                            {[
                              { value: '3side', label: t('quote_shape_type_3side') },
                              { value: '3side_stand', label: t('quote_shape_type_3side_stand') },
                              { value: 'm', label: t('quote_shape_type_m') },
                              { value: 't', label: t('quote_shape_type_t') }
                            ].map((option) => (
                              <label key={option.value} className="flex items-center space-x-2 cursor-pointer group">
                                <input
                                  type="radio"
                                  name="shapeType"
                                  value={option.value}
                                  checked={formData.shapeType === option.value}
                                  onChange={(e) => handleInputChange("shapeType", e.target.value)}
                                  className="w-4 h-4 text-[#0A3D62] border-gray-300 focus:ring-[#0A3D62] focus:ring-2"
                                />
                                <span className="text-sm text-[#555555] group-hover:text-[#0A3D62]">{option.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        {/* Size */}
                        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 px-6 py-4">
                          <label className="text-base font-semibold text-[#0A3D62] flex items-center">{t('quote_size')}</label>
                          <div className="flex items-center gap-2 flex-wrap">
                            <input
                              type="text"
                              value={formData.sizeWidth}
                              onChange={(e) => handleInputChange("sizeWidth", e.target.value)}
                              placeholder={t('quote_size_width')}
                              className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A3D62] focus:border-[#0A3D62] text-sm"
                            />
                            <span className="text-sm text-gray-500">mm</span>
                            <span className="text-gray-400">×</span>
                            <input
                              type="text"
                              value={formData.sizeLength}
                              onChange={(e) => handleInputChange("sizeLength", e.target.value)}
                              placeholder={t('quote_size_length')}
                              className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A3D62] focus:border-[#0A3D62] text-sm"
                            />
                            <span className="text-sm text-gray-500">mm</span>
                          </div>
                        </div>

                        {/* Printing */}
                        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 px-6 py-4">
                          <label className="text-base font-semibold text-[#0A3D62] flex items-center">{t('quote_has_printing')}</label>
                          <div className="flex gap-4">
                            {[
                              { value: 'yes', label: t('quote_has_printing_yes') },
                              { value: 'no', label: t('quote_has_printing_no') }
                            ].map((option) => (
                              <label key={option.value} className="flex items-center space-x-2 cursor-pointer group">
                                <input
                                  type="radio"
                                  name="hasPrinting"
                                  value={option.value}
                                  checked={formData.hasPrinting === option.value}
                                  onChange={(e) => handleInputChange("hasPrinting", e.target.value)}
                                  className="w-4 h-4 text-[#0A3D62] border-gray-300 focus:ring-[#0A3D62] focus:ring-2"
                                />
                                <span className="text-sm text-[#555555] group-hover:text-[#0A3D62]">{option.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        {/* Purpose */}
                        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 px-6 py-4">
                          <label className="text-base font-semibold text-[#0A3D62] flex items-center">{t('quote_purpose')}</label>
                          <div className="flex flex-wrap gap-4">
                            {[
                              { value: 'apparel', label: t('quote_purpose_apparel') },
                              { value: 'food', label: t('quote_purpose_food') },
                              { value: 'industrial', label: t('quote_purpose_industrial') },
                              { value: 'other', label: t('quote_purpose_other') }
                            ].map((option) => (
                              <label key={option.value} className="flex items-center space-x-2 cursor-pointer group">
                                <input
                                  type="radio"
                                  name="purpose"
                                  value={option.value}
                                  checked={formData.purpose === option.value}
                                  onChange={(e) => handleInputChange("purpose", e.target.value)}
                                  className="w-4 h-4 text-[#0A3D62] border-gray-300 focus:ring-[#0A3D62] focus:ring-2"
                                />
                                <span className="text-sm text-[#555555] group-hover:text-[#0A3D62]">{option.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        {/* Post-processing */}
                        <div className="px-6 py-4">
                          <label className="text-base font-semibold text-[#0A3D62] mb-4 block">{t('quote_post_processing')}</label>
                          
                          <div className="space-y-3">
                            {/* Zipper */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
                              <label className="text-sm text-[#555555] flex items-center">{t('quote_post_zipper')}</label>
                              <div className="flex gap-4">
                                {[
                                  { value: 'yes', label: t('quote_post_zipper_yes') },
                                  { value: 'no', label: t('quote_post_zipper_no') }
                                ].map((option) => (
                                  <label key={option.value} className="flex items-center space-x-2 cursor-pointer group">
                                    <input
                                      type="radio"
                                      name="hasZipper"
                                      value={option.value}
                                      checked={formData.hasZipper === option.value}
                                      onChange={(e) => handleInputChange("hasZipper", e.target.value)}
                                      className="w-4 h-4 text-[#0A3D62] border-gray-300 focus:ring-[#0A3D62] focus:ring-2"
                                    />
                                    <span className="text-sm text-[#555555] group-hover:text-[#0A3D62]">{option.label}</span>
                                  </label>
                                ))}
                              </div>
                            </div>

                            {/* Hang Hole */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
                              <label className="text-sm text-[#555555] flex items-center">{t('quote_post_hang_hole')}</label>
                              <div className="flex gap-4">
                                {[
                                  { value: 'round', label: t('quote_post_hang_hole_round') },
                                  { value: 'hat', label: t('quote_post_hang_hole_hat') },
                                  { value: 'none', label: t('quote_post_hang_hole_none') }
                                ].map((option) => (
                                  <label key={option.value} className="flex items-center space-x-2 cursor-pointer group">
                                    <input
                                      type="radio"
                                      name="hangHole"
                                      value={option.value}
                                      checked={formData.hangHole === option.value}
                                      onChange={(e) => handleInputChange("hangHole", e.target.value)}
                                      className="w-4 h-4 text-[#0A3D62] border-gray-300 focus:ring-[#0A3D62] focus:ring-2"
                                    />
                                    <span className="text-sm text-[#555555] group-hover:text-[#0A3D62]">{option.label}</span>
                                  </label>
                                ))}
                              </div>
                            </div>

                            {/* Corner */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
                              <label className="text-sm text-[#555555] flex items-center">{t('quote_post_corner')}</label>
                              <div className="flex gap-4">
                                {[
                                  { value: 'right', label: t('quote_post_corner_right') },
                                  { value: 'rounded', label: t('quote_post_corner_rounded') }
                                ].map((option) => (
                                  <label key={option.value} className="flex items-center space-x-2 cursor-pointer group">
                                    <input
                                      type="radio"
                                      name="corner"
                                      value={option.value}
                                      checked={formData.corner === option.value}
                                      onChange={(e) => handleInputChange("corner", e.target.value)}
                                      className="w-4 h-4 text-[#0A3D62] border-gray-300 focus:ring-[#0A3D62] focus:ring-2"
                                    />
                                    <span className="text-sm text-[#555555] group-hover:text-[#0A3D62]">{option.label}</span>
                                  </label>
                                ))}
                              </div>
                            </div>

                            {/* Inlet */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
                              <label className="text-sm text-[#555555] flex items-center">{t('quote_post_inlet')}</label>
                              <div className="flex gap-4">
                                {[
                                  { value: 'top', label: t('quote_post_inlet_top') },
                                  { value: 'bottom', label: t('quote_post_inlet_bottom') }
                                ].map((option) => (
                                  <label key={option.value} className="flex items-center space-x-2 cursor-pointer group">
                                    <input
                                      type="radio"
                                      name="inlet"
                                      value={option.value}
                                      checked={formData.inlet === option.value}
                                      onChange={(e) => handleInputChange("inlet", e.target.value)}
                                      className="w-4 h-4 text-[#0A3D62] border-gray-300 focus:ring-[#0A3D62] focus:ring-2"
                                    />
                                    <span className="text-sm text-[#555555] group-hover:text-[#0A3D62]">{option.label}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Quantity */}
                        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 px-6 py-4">
                          <label className="text-base font-semibold text-[#0A3D62] flex items-center">{t('quote_quantity')}</label>
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                              <input
                                type="text"
                                value={formData.quantity}
                                onChange={(e) => handleInputChange("quantity", e.target.value)}
                                className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A3D62] focus:border-[#0A3D62] text-sm"
                              />
                              <span className="text-sm text-gray-500">{t('quote_quantity_unit')}</span>
                            </div>
                            <p className="text-xs text-gray-500">{t('quote_quantity_minimum')}</p>
                          </div>
                        </div>

                        {/* Design Attachment */}
                        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 px-6 py-4">
                          <label className="text-base font-semibold text-[#0A3D62] flex items-center">{t('quote_design_attachment')}</label>
                          <div className="flex items-center gap-4 flex-wrap">
                            <input
                              type="file"
                              onChange={handleDesignFileChange}
                              className="hidden"
                              id="design-file-upload"
                            />
                            <label
                              htmlFor="design-file-upload"
                              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors text-sm"
                            >
                              <Upload className="h-4 w-4" />
                              <span>{t('quote_design_file_find')}</span>
                            </label>
                            <span className="text-sm text-gray-500">
                              {formData.designFile ? formData.designFile.name : t('quote_design_file_none')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Details Section */}
                    <div className="px-6 py-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <FileText className="h-6 w-6 text-[#0A3D62]" />
                        <h3 className="text-2xl font-semibold text-[#0A3D62]">{t('quote_details_title')}</h3>
                      </div>
                      <textarea
                        value={formData.details}
                        onChange={(e) => handleInputChange("details", e.target.value)}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A3D62] focus:border-[#0A3D62] resize-none"
                        placeholder={t('quote_details_placeholder')}
                      />
                    </div>
                  </div>

                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 lg:mt-6 pt-6 lg:pt-4 border-t border-gray-200">
              {currentStep > 1 ? (
                <Button
                  onClick={prevStep}
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 border-[#0A3D62] text-[#0A3D62] hover:bg-[#0A3D62] hover:text-white"
                >
                  <ChevronLeft className="mr-2 h-5 w-5" />
                  {t('quote_previous')}
                </Button>
              ) : (
                <div></div>
              )}

              {currentStep < 3 ? (
                <Button
                  onClick={nextStep}
                  disabled={currentStep === 1 ? !isStep1Valid : !isStep2Valid}
                  size="lg"
                  className="px-8 py-3 bg-[#FFC312] hover:bg-[#FFD93D] text-[#0A3D62] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {t('quote_next')}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!isStep3Valid || isSubmitting}
                  size="lg"
                  className="px-8 py-3 bg-[#FFC312] hover:bg-[#FFD93D] text-[#0A3D62] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t('quote_submitting') : t('quote_submit')}
                </Button>
              )}
            </div>

            {/* Submit Message */}
            {submitMessage && (
              <div className={`mt-6 p-4 rounded-lg text-center ${
                submitMessage.type === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-300' 
                  : 'bg-red-100 text-red-800 border border-red-300'
              }`}>
                {submitMessage.text}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}