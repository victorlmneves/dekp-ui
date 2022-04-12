// const VueExamplePlugin = require('vuepress-plugin-vue-example')
const path = require('path')

module.exports = {
  bundler: '@vuepress/bundler-vite',
  title: 'DEKP UI Library',
  themeConfig: {
    // darkMode: false,
    // logo: '/assets/yello/images/logo.svg',
    sidebar: [
      {
        title: 'Components',
        collapsable: false,
        children: [
          '/components/DekpButton.md',
          '/components/DekpInput.md',
          '/components/DekpTextarea.md'
        ]
      }
    ]
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
        },
      },
    ],
    // VueExamplePlugin({
    //   // You need to provide a directory that all the example .vue files will be stored.
    //   // You can use sub-directories to separate examples into categories.
    //   componentsPath: '/docs/.examples/'
    // })
  ],
}