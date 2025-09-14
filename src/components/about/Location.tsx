import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Location() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A3D62] mb-4">
            Visit Our Facility
          </h2>
          <p className="text-lg text-[#555555] max-w-2xl mx-auto">
            Located in the heart of Seoul&apos;s business district, our modern facility 
            is easily accessible and equipped with state-of-the-art manufacturing equipment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-[#F5F6FA] rounded-xl shadow-lg p-8 border border-[#E5E5E5]">
              <h3 className="text-2xl font-bold text-[#0A3D62] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FFC312] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#0A3D62]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A3D62] mb-1">Address</h4>
                    <p className="text-[#555555]">
                      Gangnam-gu, Seoul<br />
                      Teheran-ro 123, 15th Floor
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FFC312] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#0A3D62]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A3D62] mb-1">Phone</h4>
                    <p className="text-[#555555]">02-1234-5678</p>
                    <p className="text-sm text-[#555555]">Main Line</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FFC312] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#0A3D62]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A3D62] mb-1">Email</h4>
                    <p className="text-[#555555]">info@bada.co.kr</p>
                    <p className="text-sm text-[#555555]">General Inquiries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FFC312] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-[#0A3D62]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A3D62] mb-1">Business Hours</h4>
                    <p className="text-[#555555]">Monday - Friday: 09:00 - 18:00</p>
                    <p className="text-[#555555]">Saturday: 09:00 - 13:00</p>
                    <p className="text-sm text-[#555555]">Closed on Sundays & Holidays</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F6FA] rounded-xl shadow-lg p-8 border border-[#E5E5E5]">
              <h3 className="text-2xl font-bold text-[#0A3D62] mb-6">Company Details</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-[#E5E5E5]">
                  <span className="font-medium text-[#0A3D62]">Company Name</span>
                  <span className="text-[#555555]">Bada Co., Ltd</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E5E5E5]">
                  <span className="font-medium text-[#0A3D62]">CEO</span>
                  <span className="text-[#555555]">John Smith</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E5E5E5]">
                  <span className="font-medium text-[#0A3D62]">Business Registration</span>
                  <span className="text-[#555555]">123-45-67890</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E5E5E5]">
                  <span className="font-medium text-[#0A3D62]">Established</span>
                  <span className="text-[#555555]">2009</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[#F5F6FA] rounded-xl shadow-lg p-8 border border-[#E5E5E5]">
            <h3 className="text-2xl font-bold text-[#0A3D62] mb-6">Location Map</h3>
            
            <div className="aspect-video bg-white rounded-lg flex items-center justify-center mb-6 border border-[#E5E5E5]">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-[#0A3D62] mx-auto mb-4" />
                <p className="text-[#555555]">Interactive Map</p>
                <p className="text-sm text-[#555555]">Gangnam-gu, Seoul</p>
              </div>
            </div>

            <div className="space-y-4">
              <Button className="w-full bg-[#FFC312] hover:bg-[#FFD93D] text-[#0A3D62] font-bold">
                Get Directions
              </Button>
              <Button variant="outline" className="w-full border-[#0A3D62] text-[#0A3D62] hover:bg-[#0A3D62] hover:text-white font-bold">
                Schedule a Visit
              </Button>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg border border-[#E5E5E5]">
              <h4 className="font-semibold text-[#0A3D62] mb-2">Parking Information</h4>
              <p className="text-sm text-[#555555]">
                Free parking available for visitors. Please contact us in advance 
                to reserve a parking space.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[#0A3D62] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Visit?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We welcome visitors to our facility. Please contact us to schedule 
              a tour and see our state-of-the-art manufacturing processes in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#FFC312] text-[#0A3D62] hover:bg-[#FFD93D] font-bold">
                Schedule a Tour
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0A3D62] font-bold">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}