'use client';

import { useState, useEffect } from 'react';
import { Globe, Check } from 'lucide-react';

interface LanguageSelectionModalProps {
  isOpen: boolean;
  onLanguageSelect: (language: string) => void;
}

const languages = [
  { 
    code: 'en', 
    name: 'English', 
    nativeName: 'English',
    flag: '🇺🇸',
    description: 'English language'
  },
  { 
    code: 'ko', 
    name: 'Korean', 
    nativeName: '한국어',
    flag: '🇰🇷',
    description: '한국어'
  },
  { 
    code: 'zh-CN', 
    name: 'Chinese', 
    nativeName: '中文',
    flag: '🇨🇳',
    description: '中文'
  }
];

export default function LanguageSelectionModal({ isOpen, onLanguageSelect }: LanguageSelectionModalProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const handleLanguageSelect = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    setIsAnimating(false);
    
    // 애니메이션 후 언어 선택
    setTimeout(() => {
      onLanguageSelect(languageCode);
    }, 300);
  };

  // 키보드 네비게이션
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setSelectedLanguage(prev => {
            const currentIndex = languages.findIndex(lang => lang.code === prev);
            const nextIndex = (currentIndex + 1) % languages.length;
            return languages[nextIndex].code;
          });
          break;
        case 'ArrowUp':
          event.preventDefault();
          setSelectedLanguage(prev => {
            const currentIndex = languages.findIndex(lang => lang.code === prev);
            const prevIndex = currentIndex === 0 ? languages.length - 1 : currentIndex - 1;
            return languages[prevIndex].code;
          });
          break;
        case 'Enter':
          event.preventDefault();
          handleLanguageSelect(selectedLanguage);
          break;
        case 'Escape':
          event.preventDefault();
          // ESC 키로는 닫을 수 없음 (언어 선택 필수)
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, selectedLanguage, handleLanguageSelect]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="language-modal-title"
      aria-describedby="language-modal-description"
    >
      <div 
        className={`language-modal bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-700 ${
          isAnimating ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-8'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0A3D62] to-[#1a5a8a] p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-[#FFC312] rounded-full flex items-center justify-center mr-4">
              <span className="text-2xl font-bold text-[#0A3D62]">KJ</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">KJ FLEX PACK</h1>
              <p className="text-blue-200 text-sm">Flexible Packaging Solutions</p>
            </div>
          </div>
          <div className="flex items-center justify-center text-white/80">
            <Globe className="w-5 h-5 mr-2" />
            <span id="language-modal-title" className="text-lg">Please select your language</span>
          </div>
          <p id="language-modal-description" className="text-white/60 text-sm mt-2">
            Choose your preferred language to continue
          </p>
        </div>

        {/* Language Options */}
        <div className="p-8">
          <div className="grid gap-4">
            {languages.map((language, index) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language.code)}
                className={`language-option group relative p-6 rounded-xl border-2 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 ${
                  selectedLanguage === language.code
                    ? 'language-option-selected border-[#FFC312] bg-[#FFC312]/10 shadow-xl scale-105'
                    : 'border-gray-200 hover:border-[#0A3D62] hover:bg-[#0A3D62]/5'
                }`}
                style={{
                  animationDelay: `${index * 150}ms`
                }}
                role="radio"
                aria-checked={selectedLanguage === language.code}
                aria-label={`Select ${language.nativeName} language`}
                tabIndex={0}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">{language.flag}</div>
                    <div className="text-left">
                      <div className="text-xl font-semibold text-[#0A3D62] group-hover:text-[#0A3D62]">
                        {language.nativeName}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {language.name}
                      </div>
                    </div>
                  </div>
                  
                  {selectedLanguage === language.code && (
                    <div className="flex items-center justify-center w-8 h-8 bg-[#FFC312] rounded-full">
                      <Check className="w-5 h-5 text-[#0A3D62]" />
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Continue Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => handleLanguageSelect(selectedLanguage)}
              className="bg-[#FFC312] hover:bg-[#FFD93D] text-[#0A3D62] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="flex items-center justify-center">
                Continue
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-4 text-center">
          <p className="text-gray-600 text-sm">
            You can change the language anytime from the header menu
          </p>
        </div>
      </div>
    </div>
  );
}