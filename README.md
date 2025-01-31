# Vue 3 + TypeScript + Vite

### 1. 프로젝트 생성
```
yarn create vite [proejct명] --template vue-ts
```

### 2. 의존성 설치
```
yarn
```

### 3. 의존성 설치 / 삭제
```
yarn add

yarn add -D

yarn remove
```
### 4. 개발 서버 실행
```
yarn dev
```

### 5. 프로젝트 빌드
```
yarn build
```

### 6. 필수 패키지
```
axios pinia vue-router @vueuse/core
-D typescript @types/node
```

### 7. eslint 설정
```
1) 의존성 추가
2) .eslintrc.cjs, .eslintignore 작성
3) package.json script 추가
4) yarn lint 실행
```

### 8. 폴더 설명
```
- assets: 정적 리소스 (스타일, 이미지 등)
- components: 재사용 가능한 UI 컴포넌트
- views: 페이지 단위 컴포넌트
- router: 라우팅 설정
- store: 상태 관리
- services: API 통신 로직
- utils: 순수 유틸리티 함수
- types: TypeScript 타입 정의
- constants: 상수 값 정의
- composables: Vue Composition API 관련 로직
```
