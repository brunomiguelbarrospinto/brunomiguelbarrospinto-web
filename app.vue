<template>
  <div>
    <HelloWorld />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <NuxtWelcome />
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();

console.log(runtimeConfig);
console.log(appConfig);
</script>
