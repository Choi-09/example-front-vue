/// <reference types="vite/client" />

// Vue 컴포넌트 타입 선언
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

// 환경변수 타입 선언
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_API_BASE_URL: string
    readonly VITE_API_TIMEOUT: string
    readonly VITE_APP_MODE: 'dev' | 'prod' | 'test'
    // 더 많은 환경 변수들...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}