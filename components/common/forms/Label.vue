<template>
  <label :for="for" class="block text-sm font-medium leading-6 text-gray-900">
    {{ text }}
  </label>
</template>

<script setup lang="ts">
const props = defineProps<{ for: string; text: string }>();
</script>

<style scoped></style>
