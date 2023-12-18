<template>
  <div>
    <CommonTitle
      class="mb-6"
      text="Writing about web development, javascript, vue and other things related with web technologies"
    />

    <div
      class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
    >
      <PostsPostListItem v-for="post in posts" :post="post" />
    </div>
  </div>
</template>

<script setup>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "simple",
});

const posts = [
  {
    timestamp: 1702926748000,
    title: "Share image",
    description:
      "Tutorial to share image with native navigator share in mobile.",
    image: "",
    slug: "share-image",
  },
  {
    timestamp: 1698427677000,
    title: "Ratio padding calculator",
    description: "Easy way to calculate image aspect ratio generating ratio",
    image: "",
    slug: "ratio-padding-calculator",
  },
];
</script>
