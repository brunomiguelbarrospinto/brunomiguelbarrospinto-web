<template>
  <h1
    class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
  >
    {{ text }}
  </h1>
</template>

<script setup lang="ts">
const props = defineProps<{ text: string }>();
</script>

<style scoped></style>
