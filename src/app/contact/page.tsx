"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, User, Send } from "lucide-react"
import { supabase, Contact } from "@/lib/supabase"

export default function ContactPage() {
  const { t, ready } = useTranslation('common')

  // 번역이 준비되지 않았으면 로딩 상태 표시
  if (!ready) {
    return (
      <div className="min-h-screen bg-[#F5F6FA]">
        <Header />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0A3D62] mx-auto mb-4"></div>
            <p className="text-[#0A3D62] text-lg">{t('quote_loading')}</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      // Supabase에 contact 데이터 저장
      const contactData: Omit<Contact, 'id' | 'created_at'> = {
        name: formData.name,
        email: formData.email,
        whatsapp: formData.whatsapp || undefined,
        message: formData.message
      }

      const { error } = await supabase
        .from('contacts')
        .insert([contactData])

      if (error) {
        console.error('Supabase error:', error)
        throw error
      }
      
      setSubmitMessage({
        type: 'success',
        text: t('contact_success_message')
      })
      
      // 폼 초기화
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        message: ""
      })
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitMessage({
        type: 'error',
        text: t('contact_error_message')
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name && formData.email && formData.message

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
                  {t('contact_page_title')}
                </h1>
              </div>
              
              <div className="text-sm sm:text-base text-[#555555]">
                <span className="hover:text-[#0A3D62] transition-colors duration-200">
                  <Link href="/">{t('menu_home')}</Link>
                </span>
                <span className="mx-2 text-[#0A3D62]">•</span>
                <span className="text-[#0A3D62] font-semibold">{t('menu_contact')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left: Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#0A3D62] mb-6">
                    {t('contact_page_subtitle')}
                  </h2>
                  <p className="text-lg text-[#555555] leading-relaxed mb-8">
                    {t('contact_description')}
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#0A3D62] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0A3D62] mb-2">{t('contact_form_email')}</h3>
                      <p className="text-[#555555]">{t('contact_email_info')}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#0A3D62] rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0A3D62] mb-2">{t('contact_form_whatsapp')}</h3>
                      <p className="text-[#555555]">{t('contact_whatsapp_info')}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#0A3D62] rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0A3D62] mb-2">{t('about_contact')}</h3>
                      <p className="text-[#555555]">{t('contact_business_hours')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form Card */}
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-2">
                      {t('contact_form_name')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3D62] focus:border-transparent transition-all"
                      placeholder={t('contact_placeholder_name')}
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
                      {t('contact_form_email')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3D62] focus:border-transparent transition-all"
                      placeholder={t('contact_placeholder_email')}
                    />
                  </div>

                  {/* WhatsApp/WeChat Field */}
                  <div>
                    <label htmlFor="whatsapp" className="block text-base font-medium text-gray-700 mb-2">
                      {t('contact_form_whatsapp')}
                    </label>
                    <input
                      type="text"
                      id="whatsapp"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3D62] focus:border-transparent transition-all"
                      placeholder={t('contact_placeholder_whatsapp')}
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-2">
                      {t('contact_form_message')} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3D62] focus:border-transparent transition-all resize-none"
                      placeholder={t('contact_placeholder_message')}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="w-full py-6 text-lg font-bold bg-[#FFC312] hover:bg-[#FFD93D] text-[#0A3D62] rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                        <span>{t('contact_sending')}</span>
                    ) : (
                      <>
                        <span>{t('contact_send_button')}</span>
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </Button>

                  {/* Submit Message */}
                  {submitMessage && (
                    <div className={`p-4 rounded-xl text-center ${
                      submitMessage.type === 'success' 
                        ? 'bg-green-100 text-green-800 border border-green-300' 
                        : 'bg-red-100 text-red-800 border border-red-300'
                    }`}>
                      {submitMessage.text}
                    </div>
                  )}
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
