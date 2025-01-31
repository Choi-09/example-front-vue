<template>
  <button :class="['base-button', variant]" :disabled="disabled" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'outline'
  disabled?: boolean
}>()
</script>

<style scoped></style>
