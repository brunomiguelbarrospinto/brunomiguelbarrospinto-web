<template>
  <div class="bg-zinc-50 min-h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import "~/assets/css/tailwind.css";

const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();
useHead({
  htmlAttrs: { class: "antialiased", lang: "en" },
  bodyAttrs: {
    class: "overflow-x-hidden",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon-32x32.png",
    },
  ],
});

useSeoMeta({
  title: "Bruno Miguel Barros Pinto",
  ogTitle: "Bruno Miguel Barros Pinto",
  description: "Frontend Developer - VueJs lover",
  ogDescription: "Frontend Developer - VueJs lover",
  ogImage: "/img/share.jpg",
  twitterCard: "summary_large_image",
  ogUrl: "https://brunomiguelbarrospinto.dev",
  twitterTitle: "Bruno Miguel Barros Pinto",
  twitterDescription: "Frontend Developer - VueJs lover",
  twitterImage: "/img/share.jpg",
});

console.log(runtimeConfig);
console.log(appConfig);
</script>

<style lang="scss">
@use "~/assets/scss/styles.scss";
</style>
