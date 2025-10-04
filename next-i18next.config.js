/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko', 'zh-CN'],
  },
  fallbackLng: {
    default: ['en'],
    'zh-CN': ['en'],
    'ko': ['en'],
  },
  debug: process.env.NODE_ENV === 'development',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  ns: ['common'],
  defaultNS: 'common',
  react: {
    useSuspense: false,
  },
}