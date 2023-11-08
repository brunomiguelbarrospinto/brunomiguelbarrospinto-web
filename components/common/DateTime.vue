<template>
  <time
    :datetime="date"
    class="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
  >
    <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
    <span class="ml-3">{{ dateToHuman }}</span>
  </time>
</template>

<script setup lang="ts">
const dayjs = useDayjs();
const props = defineProps<{ timestamp: number }>();
const dayjsObject = dayjs(props.timestamp);
const date = dayjsObject.format("YYYY-MM-DD");
const dateToHuman = dayjsObject.format("MMMM D, YYYY");
</script>

<style scoped></style>
