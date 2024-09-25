import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/web-design/',
  title: "Web Design",
  description: "Syllabus course Web Design",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Design', link: '/design' },
      { text: 'Coding', link: '/coding' },
      { text: 'Richtlijnen', link: '/guidelines' },
    ],

    sidebar: {
      '/design/': [
        {
          text: 'Design',
          items: [
            { text: 'Introductie', link: '/design' },
          ]
        }
      ],
      '/coding/': [
        {
          text: 'Coding',
          items: [
            { text: 'Introductie', link: '/markup' },
          ]
        }
      ],
      '/guidelines/': [
        {
          text: 'Richtlijnen',
          items: [
            { text: 'Introductie', link: '/guidelines' },
            { text: 'Semantiek', link: '/guidelines/semantics' },
            { text: 'Coding', link: '/guidelines/coding' },
            { text: 'Gebruiksvriendelijkheid', link: '/guidelines/usability' },
            { text: 'Performantie', link: '/guidelines/performance' },
            { text: 'Toegankelijkheid', link: '/guidelines/accessibility' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT'
      },
      copyright: `Copyright © ${new Date().getFullYear()} Arteveldehogeschool & LUCA School of Arts`
    }
  }
})
