<template>
  <div class="bg-zinc-50 min-h-screen">
    <header class="mt-6 flex justify-center fixed w-full">
      <!-- <nav>
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
      </nav> -->

      <CommonNav />
    </header>
    <main class="pt-32 px-40 max-w-6xl m-auto bg-white min-h-screen">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
  </div>
</template>

<script setup>
import "~/assets/css/tailwind.css";

const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();
useHead({
  htmlAttrs: { class: "antialiased" },
  bodyAttrs: {
    class: "",
  },
});

// console.log(runtimeConfig);
// console.log(appConfig);
</script>

<style lang="scss">
@use "~/assets/scss/styles.scss";
</style>
