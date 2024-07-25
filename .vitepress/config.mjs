import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/web-technology/',
  title: "Web Technology",
  description: "Syllabus course Web Technology",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Technologie', link: '/technology' },
      { text: 'Markup', link: '/markup' },
      { text: 'Styling', link: '/styling' },
      { text: 'Richtlijnen', link: '/guidelines' },
    ],

    sidebar: {
      '/technology/': [
        {
          text: 'Technologie',
          items: [
            { text: 'Introductie', link: '/technology' },
            { text: 'Netwerk', link: '/technology/network' },
            { text: 'OSI', link: '/technology/osi' },
            { text: 'Protocollen', link: '/technology/protocols' },
            { text: 'Internet', link: '/technology/internet' },
            { text: 'World Wide Web', link: '/technology/web' },
            { text: 'Applicaties', link: '/technology/applications' },
            { text: 'Source Code Management', link: '/technology/scm' },
            { text: 'Command Line Interface', link: '/technology/cli' },
          ]
        }
      ],
      '/markup/': [
        {
          text: 'Markup',
          items: [
            { text: 'Introductie', link: '/markup' },
            { text: 'Structuur', link: '/markup/structure' },
            { text: 'Basis head-elementen', link: '/markup/basic-head-elements' },
            { text: 'Tekst', link: '/markup/text' },
            { text: 'Lijsten', link: '/markup/lists' },
            { text: 'Linken', link: '/markup/links' },
            { text: 'Afbeeldingen', link: '/markup/images' },
            { text: 'Tabellen', link: '/markup/tables' },
            { text: 'Formulieren', link: '/markup/forms' },
            { text: 'Lay-out', link: '/markup/layout' },
          ]
        }
      ],
      '/styling/': [
        {
          text: 'Styling',
          items: [
            { text: 'Introductie', link: '/styling' },
            { text: 'Selectoren', link: '/styling/selectors' },
            { text: 'Waarden', link: '/styling/values' },
            { text: 'Boxmodel', link: '/styling/box-model' },
            { text: 'Typografie', link: '/styling/typography' },
            { text: 'Kleursystemen', link: '/styling/color-systems' },
            { text: 'Boxstijlen', link: '/styling/box-styling' },
            { text: 'Lay-out', link: '/styling/layout' },
            { text: 'Media Queries', link: '/styling/media-queries' },
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
