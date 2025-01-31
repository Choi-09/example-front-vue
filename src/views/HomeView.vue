<template>
  <div class="home">
    <h1>홈페이지</h1>
    <!--    <PostList :posts="posts" />-->
    <BaseButton @click="fetchPosts">새로고침</BaseButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Post } from '@/types/post'
import BaseButton from '../components/common/BaseButton.vue'

const posts = ref<Post[]>([])
</script>
