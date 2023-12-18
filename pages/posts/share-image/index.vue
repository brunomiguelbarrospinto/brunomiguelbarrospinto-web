<template>
  <article>
    <header>
      <CommonTitle class="mb-6" text="Share image" />
      <CommonDateTime class="mb-6" :timestamp="1698427677000" />
    </header>
    <ShareImageHTML />
  </article>
</template>

<script setup>
import ShareImageHTML from "./ShareImageHTML.vue";

// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "simple",
});

const { gtag } = useGtag();
// SSR-ready
gtag("event", "screen_view", {
  app_name: "Bruno Miguel Barros Pinto",
  screen_name: "share-image",
});
</script>
