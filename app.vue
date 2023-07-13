<template>
  <div>
    <HelloWorld />
    <NuxtWelcome />
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig);
</script>
