'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutHero() {
  const [counts, setCounts] = useState({
    founded: 0,
    orders: 0,
    clients: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  const targetCounts = {
    founded: 2003,
    orders: 8500,
    clients: 156
  };

  const animateCount = useCallback((key: keyof typeof targetCounts) => {
    const target = targetCounts[key];
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
    }, stepDuration);
  }, []);

  useEffect(() => {
    // 페이지 로드 시 애니메이션 시작
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // 각 카운트를 순차적으로 시작
    setTimeout(() => animateCount('founded'), 1000);
    setTimeout(() => animateCount('orders'), 1200);
    setTimeout(() => animateCount('clients'), 1400);

    return () => clearTimeout(timer);
  }, [animateCount]);

  return (
    <>
      {/* Page Header Section */}
      <section className="bg-[#F5F6FA] py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              {/* Main Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className={`text-xl sm:text-4xl lg:text-3xl font-bold text-[#0A3D62] transition-all duration-1000 ease-out ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                }`}>
                  About Us
                </h1>
              </div>
              
              {/* Breadcrumb Navigation */}
              <div className={`text-sm sm:text-base text-[#555555] transition-all duration-1000 ease-out delay-200 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}>
                <span className="hover:text-[#0A3D62] transition-colors duration-200">
                  <Link href="/">Home</Link>
                </span>
                <span className="mx-2 text-[#0A3D62]">•</span>
                <span className="text-[#0A3D62] font-semibold">About Us</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Column 1: Company Logo/Image */}
              <div className="lg:col-span-1">
                <div className={`bg-[#F5F6FA] rounded-2xl p-8 lg:p-12 text-center transition-all duration-1000 ease-out delay-300 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                }`}>
                  <div className="w-48 h-48 mx-auto mb-6 flex items-center justify-center">
                    <Image
                      src="/about_logo.png"
                      alt="Bada Company Logo"
                      width={192}
                      height={192}
                      className="object-contain"
                      priority
                    />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0A3D62] mb-4">
                    KJ FLEX PACK
                  </h2>
                </div>
              </div>
              
              {/* Column 2: Company Mission/Goal */}
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  <h3 className={`text-2xl sm:text-3xl font-bold text-[#0A3D62] mb-6 transition-all duration-1000 ease-out delay-400 ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  }`}>
                    Our Mission
                  </h3>
     
                  {/* Company Goal */}
                  <div className="space-y-2">
                    <p className={`text-lg sm:text-xl lg:text-2xl font-bold text-[#0A3D62] leading-relaxed transition-all duration-1000 ease-out delay-500 ${
                      isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                    }`}>
                      We create innovative, sustainable flexible packaging that drives brand success and lasting partnerships worldwide.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Column 3: Company Introduction/History */}
              <div className="lg:col-span-1">
                <div className="space-y-4">
                  <p className={`text-base sm:text-lg text-[#555555] leading-relaxed transition-all duration-1000 ease-out delay-800 ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  }`}>
                    Founded in 2003, KJ FLEX PACK is a global manufacturer of flexible packaging solutions, serving leading brands in food, beverage, pet care, household, and personal care.
                  </p>
                  
                  <p className={`text-base sm:text-lg text-[#555555] leading-relaxed transition-all duration-1000 ease-out delay-900 ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  }`}>
                    Equipped with high-speed 9-color printing, solventless lamination, and smart manufacturing systems, we deliver packaging that ensures product safety, shelf appeal, and supply chain efficiency.
                  </p>
                  
                  <p className={`text-base sm:text-lg text-[#555555] leading-relaxed transition-all duration-1000 ease-out delay-1000 ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  }`}>
                    With a commitment to innovation and sustainability, we provide eco-friendly, high-barrier packaging solutions that strengthen our partners&apos; competitiveness in global markets.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Company Stats Section */}
            <div className={`mt-16 p-8 lg:p-12 transition-all duration-1000 ease-out delay-1100 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#0A3D62] mb-2">{counts.founded}</div>
                  <div className="text-[#555555]">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#0A3D62] mb-2">{counts.orders.toLocaleString()}</div>
                  <div className="text-[#555555]">Last Year Orders</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#0A3D62] mb-2">{counts.clients}</div>
                  <div className="text-[#555555]">Last Year Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}