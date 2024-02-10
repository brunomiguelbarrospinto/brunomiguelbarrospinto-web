<template>
  <article>
    <header>
      <CommonDateTime class="mb-3" :timestamp="1698427677000" />
      <CommonTitle class="mb-6" text="Device Nuxt 3 module" />
    </header>
    <client-only>    <p v-show="device"> <pre> <code>{{ device }} </code></pre></p>
</client-only>
  </article>
</template>

<script setup>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "simple",
});
const device = useDevice()
</script>
