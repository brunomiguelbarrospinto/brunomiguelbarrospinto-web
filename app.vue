<template>
  <div>
    LAst versuib
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/">Index</NuxtLink></li>
          <li><NuxtLink to="/test">Test</NuxtLink></li>
          <li>
            <NuxtLink to="/posts/test-slug"
              >Post test-slug not valid or exist</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/posts/bruno">Post bruno valid or exist</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/tools/ratio-padding-calculator"
              >Ratio padding calculator</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </header>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import "~/assets/css/styles.css";

const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();
useHead({
  htmlAttrs: { class: "antialiased" },
  bodyAttrs: {
    class: "",
  },
});

console.log(runtimeConfig);
console.log(appConfig);
</script>

<style lang="scss">
@use "~/assets/scss/styles.scss";
</style>
