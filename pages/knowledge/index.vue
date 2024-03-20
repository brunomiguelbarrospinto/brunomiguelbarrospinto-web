<template>
  <div>
    <CommonTitle class="mb-6" text="My knowledge" />
    <a
      v-for="(k, key) in knowledge"
      :href="k.url"
      target="_blank"
      :key="'badge-knowledge-' + key"
      class="ms-2 mt-2 inline-flex items-center rounded-sm bg-gray-50 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10"
      :style="`background: ${k.background}!important`"
    >
      {{ k.name }}
    </a>
  </div>
</template>

<script setup>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "simple",
});

import useKnowledgeStore from "~/stores/knowledge";

const knowledgeStore = useKnowledgeStore();

const knowledge = knowledgeStore.getKnowledge;
</script>
