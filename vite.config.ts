import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import url from 'url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), 'src')
    }
  },
  server: {
    port: 3000,
    open: true
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8080',
    //     changeOrigin: true
    //   }
    // }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/assets/styles/variables.scss" as *;
        @use "sass:color";
        `,
        api: 'modern'
      }
    }
  },
  // 환경 변수 설정
  define: {
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false
  },

  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser', // 코드 압축
    terserOptions: {
      // 추가 압축 옵션
      compress: {
        drop_console: true, // console.log 제거
        drop_debugger: true // debugger 구문 제거
      }
    },
    rollupOptions: {
      // Rollup 추가 설정
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router', 'pinia'] // 벤더 청크 분리
        }
      }
    }
  }
})
