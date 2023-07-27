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
import "~/assets/css/styles.css";

const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();

console.log(runtimeConfig);
console.log(appConfig);
</script>

<style lang="scss">
@use "~/assets/scss/styles.scss";
</style>
