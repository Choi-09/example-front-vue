<template>
  <div class="home">
    <h1>홈페이지</h1>
    <!--    <PostList :posts="posts" />-->
    <p>마우스 위치: {{ x }}, {{ y }}</p>
    <p>화면 크기: {{ width }} x {{ height }}</p>
    <p>온라인 상태: {{ isOnline ? '온라인' : '오프라인' }}</p>
    <BaseButton @click="refreshPage">새로고침</BaseButton>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '../components/common/BaseButton.vue';
import { useMouse, useOnline, useWindowSize } from '@vueuse/core';

const { x, y } = useMouse();
const { width, height } = useWindowSize();
const isOnline = useOnline();

const refreshPage = () => {
  window.location.reload();
};
</script>
