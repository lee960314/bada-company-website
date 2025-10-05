import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguageSelection = () => {
  const { i18n } = useTranslation();
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // 로컬 스토리지에서 언어 선택 여부 확인
    const hasSelectedLanguage = localStorage.getItem('language-selected');
    
    if (!hasSelectedLanguage) {
      // 언어가 선택되지 않았다면 모달 표시
      setShowLanguageModal(true);
    } else {
      // 이미 언어가 선택되었다면 초기화 완료
      setIsInitialized(true);
    }
  }, []);

  const handleLanguageSelect = async (language: string) => {
    try {
      // i18n 언어 변경
      await i18n.changeLanguage(language);
      
      // HTML lang 속성 업데이트
      if (typeof document !== 'undefined') {
        document.documentElement.lang = language;
      }
      
      // 로컬 스토리지에 언어 선택 저장
      localStorage.setItem('language-selected', 'true');
      localStorage.setItem('selected-language', language);
      
      // 모달 닫기 및 초기화 완료
      setShowLanguageModal(false);
      setIsInitialized(true);
      
      console.log('Language selected:', language);
    } catch (error) {
      console.error('Failed to set language:', error);
    }
  };

  const resetLanguageSelection = () => {
    localStorage.removeItem('language-selected');
    localStorage.removeItem('selected-language');
    setShowLanguageModal(true);
    setIsInitialized(false);
  };

  return {
    showLanguageModal,
    isInitialized,
    handleLanguageSelect,
    resetLanguageSelection
  };
};