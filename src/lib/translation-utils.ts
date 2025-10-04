// 번역 키 노출 방지를 위한 유틸리티 함수들

/**
 * 번역 키가 노출되지 않도록 안전하게 번역하는 함수
 * @param t - useTranslation의 t 함수
 * @param key - 번역 키
 * @param fallback - 번역이 없을 때 사용할 기본값
 * @returns 번역된 텍스트 또는 기본값
 */
export const safeTranslate = (t: (key: string) => string, key: string, fallback: string): string => {
  try {
    const translation = t(key);
    // 번역 키가 그대로 반환되었는지 확인 (키가 번역되지 않은 경우)
    if (translation === key || translation.startsWith('translation:')) {
      return fallback;
    }
    return translation;
  } catch (error) {
    console.warn(`Translation error for key "${key}":`, error);
    return fallback;
  }
};

/**
 * 여러 번역 키를 안전하게 번역하는 함수
 * @param t - useTranslation의 t 함수
 * @param translations - 번역 키와 기본값의 객체
 * @returns 번역된 텍스트들의 객체
 */
export const safeTranslateMultiple = (
  t: (key: string) => string,
  translations: Record<string, string>
): Record<string, string> => {
  const result: Record<string, string> = {};
  
  Object.entries(translations).forEach(([key, fallback]) => {
    result[key] = safeTranslate(t, key, fallback);
  });
  
  return result;
};

/**
 * 번역이 준비되었는지 확인하는 함수
 * @param ready - useTranslation의 ready 상태
 * @param mounted - 컴포넌트가 마운트되었는지 상태
 * @returns 번역이 준비되었는지 여부
 */
export const isTranslationReady = (ready: boolean, mounted: boolean): boolean => {
  return ready && mounted;
};

/**
 * 번역 키가 유효한지 확인하는 함수
 * @param key - 확인할 키
 * @returns 유효한 키인지 여부
 */
export const isValidTranslationKey = (key: string): boolean => {
  // 번역 키가 아닌 일반 텍스트인지 확인
  return !key.includes('_') || key.includes(' ') || key.length < 3;
};