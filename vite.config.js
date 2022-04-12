/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import copy from 'rollup-plugin-copy'

export default defineConfig(({ command, mode }) => {
  const brand = process.env.VITE_APP_BRAND
  console.log(`Vite App Brand: ${brand}`)

  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, './src/index.js'),
        name: 'dekp-ui',
        fileName: (name) => `dekp.${name}.js`,
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      }
    },
    resolve: {
      alias: {
        '/@': path.resolve(__dirname, './src'),
        '@css': path.resolve(__dirname, `./src/assets/scss`),
        '@css-tokens': path.resolve(
          __dirname,
          `./styleDictionary/build/${brand}/scss/`
        ),
        '@css-tools': path.resolve(
          __dirname,
          `./src/assets/scss/tools`
        ),
        '@css-brand': path.resolve(
          __dirname,
          `./src/assets/scss/${brand}/`
        ),
        '@css-components': path.resolve(
          __dirname,
          `./src/assets/scss/shared/components`
        ),
        '@css-components-brand': path.resolve(
          __dirname,
          `./src/assets/scss/${brand}/components`
        )
      }
    },
    plugins: [
      vue(),
      copy({
        targets: [
          {
            src: 'dist/style.css',
            dest: 'docs/.vuepress/public/'
          },
        ],
        flatten: false,
        hook: 'writeBundle',
      })
    ]
  }
})
