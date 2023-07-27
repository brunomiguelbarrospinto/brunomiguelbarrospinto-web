<template>
  <div>DASHBOARD</div>
</template>

<script setup lang="ts">
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  middleware: ["auth"],
});
</script>
