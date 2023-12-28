<template>
  <div>
    <vue-horizontal responsive class="this">
      <section v-for="item in items" :key="item.title">
        <h3>{{ item.title }}</h3>
        <p>{{ item.content }}</p>
      </section>
    </vue-horizontal>
  </div>
</template>

<script setup>
import VueHorizontal from "vue-horizontal";

// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "simple",
});

const items = [...Array(20).keys()].map((i) => {
  return { title: `Item ${i}`, content: `🚀 Content ${i}` };
});
</script>

<style lang="scss">
section {
  padding: 16px 24px;
  background: #f5f5f5;
}
.v-hl-container {
  background: black;

  @apply columns-4 gap-4 #{!important};

  & > * {
    background: red;
  }
}
</style>
