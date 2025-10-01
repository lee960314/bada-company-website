"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Upload } from "lucide-react"

export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
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
    printingMethod: "",
    function: "",
    formulation: "",
    material: "",
    printCount: "",
    productInformation: "",
    additionalInput: "",
    attachedFile: null,
    
    // Section 3: Production Options
    shape: "",
    surface: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFormData(prev => ({ ...prev, attachedFile: file }))
    }
  }

  const isStep1Valid = formData.name && formData.phone && formData.email
  const isStep2Valid = formData.productType && formData.productionQuantity && formData.width && formData.height && formData.bottomSide
  const isStep3Valid = formData.shape && formData.surface

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

  const handleSubmit = () => {
    console.log("Form submitted:", formData)
    // Handle form submission here
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
              Quote Request Form
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
            {/* Left Side Title */}
            <div className="mb-8 lg:mb-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A3D62] leading-tight">
                {currentStep === 1 && "Please provide your contact information."}
                {currentStep === 2 && "Please provide the product type and printing method."}
                {currentStep === 3 && "Please select the production options."}
              </h1>
            </div>

            {/* Form Content */}
            <div className="space-y-6 lg:space-y-4">
              {/* Section 1: Contact Information */}
              {currentStep === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0A3D62] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC312] focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#0A3D62] mb-2">
                      Phone *
                    </label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC312] focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#0A3D62] mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC312] focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#0A3D62] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC312] focus:border-transparent"
                      placeholder="Enter your email"
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
                        Product Type
                      </label>
                      <input
                        type="text"
                        value={formData.productType}
                        onChange={(e) => handleInputChange("productType", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC312] focus:border-transparent"
                        placeholder="e.g., Type 1, Type 2, etc."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-[#0A3D62] mb-2">
                        Production Quantity
                      </label>
                      <input
                        type="text"
                        value={formData.productionQuantity}
                        onChange={(e) => handleInputChange("productionQuantity", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC312] focus:border-transparent"
                        placeholder="Please enter the quantity"
                      />
                    </div>
                  </div>

                  {/* Size and Printing Method in one row */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Size Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-[#0A3D62] mb-4">Size</h3>
                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <label className="block text-sm font-semibold text-[#0A3D62] mb-2">
                            Width (mm)
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
                            Height (mm)
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
                            Bottom/Side (mm)
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

                    {/* Printing Method */}
                    <div>
                      <h3 className="text-lg font-semibold text-[#0A3D62] mb-4">Printing Method</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <label className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                          formData.printingMethod === "gravure" 
                            ? 'border-[#FFC312] bg-[#FFC312] text-white' 
                            : 'border-gray-300 hover:bg-gray-50 hover:border-[#FFC312]'
                        }`}>
                          <input
                            type="radio"
                            name="printingMethod"
                            value="gravure"
                            checked={formData.printingMethod === "gravure"}
                            onChange={(e) => handleInputChange("printingMethod", e.target.value)}
                            className="text-[#FFC312] focus:ring-[#FFC312]"
                          />
                          <span>Gravure/Copper Plate</span>
                        </label>
                        <label className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                          formData.printingMethod === "digital" 
                            ? 'border-[#FFC312] bg-[#FFC312] text-white' 
                            : 'border-gray-300 hover:bg-gray-50 hover:border-[#FFC312]'
                        }`}>
                          <input
                            type="radio"
                            name="printingMethod"
                            value="digital"
                            checked={formData.printingMethod === "digital"}
                            onChange={(e) => handleInputChange("printingMethod", e.target.value)}
                            className="text-[#FFC312] focus:ring-[#FFC312]"
                          />
                          <span>Digital/Non-Plate</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Function */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#0A3D62] mb-4">Function</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {["General", "Refrigerated/Frozen", "Sterilized Retort", "Microwave"].map((option) => (
                        <label key={option} className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                          formData.function === option.toLowerCase() 
                            ? 'border-[#FFC312] bg-[#FFC312] text-white' 
                            : 'border-gray-300 hover:bg-gray-50 hover:border-[#FFC312]'
                        }`}>
                          <input
                            type="radio"
                            name="function"
                            value={option.toLowerCase()}
                            checked={formData.function === option.toLowerCase()}
                            onChange={(e) => handleInputChange("function", e.target.value)}
                            className="text-[#FFC312] focus:ring-[#FFC312]"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Formulation */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#0A3D62] mb-4">Formulation</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {["Powder", "Liquid", "Solid", "Mixed"].map((option) => (
                        <label key={option} className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                          formData.formulation === option.toLowerCase() 
                            ? 'border-[#FFC312] bg-[#FFC312] text-white' 
                            : 'border-gray-300 hover:bg-gray-50 hover:border-[#FFC312]'
                        }`}>
                          <input
                            type="radio"
                            name="formulation"
                            value={option.toLowerCase()}
                            checked={formData.formulation === option.toLowerCase()}
                            onChange={(e) => handleInputChange("formulation", e.target.value)}
                            className="text-[#FFC312] focus:ring-[#FFC312]"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Material Dropdown */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0A3D62] mb-2">
                      Material
                    </label>
                    <select
                      value={formData.material}
                      onChange={(e) => handleInputChange("material", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC312] focus:border-transparent"
                    >
                      <option value="">Please select the material</option>
                      <option value="opp">OPP</option>
                      <option value="pp">PP</option>
                      <option value="pe">PE</option>
                      <option value="hdpe">HDPE</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Print Count */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0A3D62] mb-2">
                      Print Count (Applies to Gravure/Copper Plate production. Leave blank if unknown.)
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
                      Product Information
                    </label>
                    <textarea
                      value={formData.productInformation}
                      onChange={(e) => handleInputChange("productInformation", e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC312] focus:border-transparent"
                      placeholder="e.g., frozen dumplings, soups, face masks, etc."
                    />
                  </div>

                  {/* Additional Input */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0A3D62] mb-2">
                      Additional Information
                    </label>
                    <textarea
                      value={formData.additionalInput}
                      onChange={(e) => handleInputChange("additionalInput", e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC312] focus:border-transparent"
                      placeholder="Please enter the content"
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0A3D62] mb-2">
                      Attached File
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
                    <h3 className="text-2xl font-semibold text-[#0A3D62] mb-6">Shape</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        "Three-side seal",
                        "Three-side seal stand", 
                        "MM zipper",
                        "MT type",
                        "T-bag",
                        "Auto roll",
                        "Common shape"
                      ].map((shape) => (
                        <label key={shape} className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                          formData.shape === shape.toLowerCase().replace(/\s+/g, '-') 
                            ? 'border-[#FFC312] bg-[#FFC312] text-white' 
                            : 'border-gray-300 hover:bg-gray-50 hover:border-[#FFC312]'
                        }`}>
                          <div className={`w-16 h-16 rounded-lg mb-4 flex items-center justify-center transition-colors duration-300 ${
                            formData.shape === shape.toLowerCase().replace(/\s+/g, '-') 
                              ? 'bg-white' 
                              : 'bg-gray-200'
                          }`}>
                            <span className={`text-xs transition-colors duration-300 ${
                              formData.shape === shape.toLowerCase().replace(/\s+/g, '-') 
                                ? 'text-gray-500' 
                                : 'text-gray-500'
                            }`}>Image</span>
                          </div>
                          <input
                            type="radio"
                            name="shape"
                            value={shape.toLowerCase().replace(/\s+/g, '-')}
                            checked={formData.shape === shape.toLowerCase().replace(/\s+/g, '-')}
                            onChange={(e) => handleInputChange("shape", e.target.value)}
                            className="text-[#FFC312] focus:ring-[#FFC312]"
                          />
                          <span className="text-sm font-medium text-center mt-2">{shape}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Surface Options */}
                  <div>
                    <h3 className="text-2xl font-semibold text-[#0A3D62] mb-6">Surface</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {["Glossy", "Matte"].map((surface) => (
                        <label key={surface} className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                          formData.surface === surface.toLowerCase() 
                            ? 'border-[#FFC312] bg-[#FFC312] text-white' 
                            : 'border-gray-300 hover:bg-gray-50 hover:border-[#FFC312]'
                        }`}>
                          <div className={`w-16 h-16 rounded-lg mb-4 flex items-center justify-center transition-colors duration-300 ${
                            formData.surface === surface.toLowerCase() 
                              ? 'bg-white' 
                              : 'bg-gray-200'
                          }`}>
                            <span className={`text-xs transition-colors duration-300 ${
                              formData.surface === surface.toLowerCase() 
                                ? 'text-gray-500' 
                                : 'text-gray-500'
                            }`}>Image</span>
                          </div>
                          <input
                            type="radio"
                            name="surface"
                            value={surface.toLowerCase()}
                            checked={formData.surface === surface.toLowerCase()}
                            onChange={(e) => handleInputChange("surface", e.target.value)}
                            className="text-[#FFC312] focus:ring-[#FFC312]"
                          />
                          <span className="text-sm font-medium text-center mt-2">{surface}</span>
                        </label>
                      ))}
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
                  Previous
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
                  Next
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!isStep3Valid}
                  size="lg"
                  className="px-8 py-3 bg-[#FFC312] hover:bg-[#FFD93D] text-[#0A3D62] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}