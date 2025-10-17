'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutHero() {
  const { t, ready } = useTranslation('common')
  const [counts, setCounts] = useState({
    founded: 0,
    orders: 0,
    clients: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateCount = useCallback((key: 'founded' | 'orders' | 'clients') => {
    const targetCounts = {
      founded: 2003,
      orders: 8500,
      clients: 156
    };
    
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
    if (!ready) return;
    
    // 이미 애니메이션이 실행되었다면 중복 실행 방지
    if (hasAnimated) return;

    // 페이지 로드 시 애니메이션 시작
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // 각 카운트를 순차적으로 시작
    const timer1 = setTimeout(() => animateCount('founded'), 1000);
    const timer2 = setTimeout(() => animateCount('orders'), 1200);
    const timer3 = setTimeout(() => animateCount('clients'), 1400);

    // 애니메이션 완료 후 플래그 설정
    const completeTimer = setTimeout(() => {
      setHasAnimated(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(completeTimer);
    };
  }, [hasAnimated, animateCount, ready]); // ready를 의존성으로 추가

  // 번역이 준비되지 않았으면 로딩 상태 표시
  if (!ready) {
    return (
      <section className="relative h-screen bg-[#F5F6FA] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse text-[#0A3D62] text-3xl font-bold mb-4">
            Loading...
          </div>
        </div>
      </section>
    )
  }

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
                  {t('menu_about')}
                </h1>
              </div>
              
              {/* Breadcrumb Navigation */}
              <div className={`text-sm sm:text-base text-[#555555] transition-all duration-1000 ease-out delay-200 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}>
                <span className="hover:text-[#0A3D62] transition-colors duration-200">
                  <Link href="/">{t('menu_home')}</Link>
                </span>
                <span className="mx-2 text-[#0A3D62]">•</span>
                <span className="text-[#0A3D62] font-semibold">{t('menu_about')}</span>
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
                <div className={`text-center transition-all duration-1000 ease-out delay-300 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                }`}>
                  <div className="w-full h-auto mx-auto flex items-center justify-center">
                    <Image
                      src="/about_logo.png"
                      alt="KJ FLEX PACK Logo"
                      width={350}
                      height={350}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
              
              {/* Column 2: Company Mission/Goal */}
              <div className="lg:col-span-1">
                <div className="space-y-6">
     
                  {/* Company Goal */}
                  <div className="space-y-2">
                    <p className={`text-xl sm:text-2xl lg:text-3xl font-bold text-[#0A3D62] leading-relaxed transition-all duration-1000 ease-out delay-500 ${
                      isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                    }`}>
                      {t('about_mission_statement')}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Column 3: Company Introduction/History */}
              <div className="lg:col-span-1">
                <div className="space-y-4">
                  <p className={`text-base sm:text-lg text-[#555555] leading-relaxed transition-all duration-1000 ease-out delay-800 whitespace-pre-line ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  }`}>
                    {t('about_company_intro_1')}
                  </p>
                  
                  <p className={`text-base sm:text-lg text-[#555555] leading-relaxed transition-all duration-1000 ease-out delay-900 whitespace-pre-line ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  }`}>
                    {t('about_company_intro_2')}
                  </p>
                  
                  <p className={`text-base sm:text-lg text-[#555555] leading-relaxed transition-all duration-1000 ease-out delay-1000 whitespace-pre-line ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  }`}>
                    {t('about_company_intro_3')}
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
                  <div className="text-[#555555]">{t('about_founded')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#0A3D62] mb-2">{counts.orders.toLocaleString()}</div>
                  <div className="text-[#555555]">{t('about_orders')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#0A3D62] mb-2">{counts.clients}</div>
                  <div className="text-[#555555]">{t('about_clients')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}