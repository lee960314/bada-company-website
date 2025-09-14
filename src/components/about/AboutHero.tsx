export default function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-[#F5F6FA] to-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A3D62] mb-6">
              About Bada Co., Ltd
            </h1>
            <div className="text-6xl sm:text-7xl font-bold text-[#FFC312] mb-4">
              15
            </div>
            <p className="text-xl text-[#555555] mb-2">Years Experience Working</p>
            <p className="text-lg text-[#555555]">SINCE 2009</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A3D62] mb-6">
              Bada is committed to providing
              <span className="block text-[#FFC312]">custom plastic packaging solutions</span>
              for all your business needs.
            </h2>
            
            <p className="text-lg text-[#555555] leading-relaxed mb-8">
              Since 2009, Bada Co., Ltd has been specializing in plastic packaging materials, 
              expanding our business from basic plastic bags to comprehensive packaging solutions. 
              The first impression of your product is determined by its packaging. 
              In the rapidly changing packaging market, we create packaging that captures 
              consumers' attention. With the same mindset we started with, we will always 
              do our best for customer satisfaction.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0A3D62] mb-2">2009</div>
                <div className="text-[#555555]">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0A3D62] mb-2">8,500</div>
                <div className="text-[#555555]">Last Year Orders</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0A3D62] mb-2">156</div>
                <div className="text-[#555555]">Last Year Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}