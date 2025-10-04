'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import '../lib/i18n';

interface I18nProviderProps {
  children: React.ReactNode;
}

export default function I18nProvider({ children }: I18nProviderProps) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // i18n 초기화는 lib/i18n.ts에서 이미 처리됨
  }, []);

  return <>{children}</>;
}