<template>
  <div>
    <CommonTitle
      class="mb-6"
      text="Writing about web development, javascript, vue and other things related with web technologies"
    />

    <PostsPostListItem v-for="post in posts" :post="post" />
  </div>
</template>

<script setup>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "simple",
});

import usePostsStore from "~/stores/posts";

const postsStore = usePostsStore();

const posts = postsStore.getPosts;
</script>
