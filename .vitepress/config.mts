import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Polechat Docs',
  description: 'Документация Полечата',
  srcDir: './src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/about' },
    ],

    sidebar: [
      {
        text: 'Описание',
        items: [
          { text: 'Что такое Полечат?', link: '/about' },
          { text: 'Как дополнить?', link: '/contribuiting' },
        ],
      },
      {
        text: 'Бизнес Процессы',
        link: '/business',
        items: [
          { text: 'Онбординг Клиники', link: '/clinic-onboarding' },
          { text: 'Получение Доступов', link: '/access-request' },
        ],
      },
      {
        text: 'Разработчикам',
        items: [
          { text: 'Архитектура', link: '/architecture' },
          { text: 'Описание API', link: '/api-description' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/polechat' }],

    logo: {
      light: '/logo_light.svg',
      dark: '/logo_dark.svg',
    },
  },
});
