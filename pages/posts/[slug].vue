<template>
  <div>Post page - {{ slug }}</div>
</template>

<script setup>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "simple",
  validate: async (route) => {
    // Check if the slug is bruno
    return route.params.slug === "bruno";
  },
});

const route = useRoute();

// When accessing /posts/1, route.params.id will be 1

const slug = route.params.slug;
</script>
