<template>
  <article class="md:grid md:grid-cols-4 md:items-baseline space-y-10 my-10">
    <div class="md:col-span-3 group relative flex flex-col items-start">
      <h2
        class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"
      >
        <div
          class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"
        ></div>
        <a :href="`/posts/${props.post.slug}`">
          <span
            class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"
          >
          </span>
          <span class="relative z-10">{{ post.title }}</span>
        </a>
      </h2>

      <CommonDateTime
        class="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
        :timestamp="props.post.timestamp"
      />

      <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {{ post.description }}
      </p>
      <div
        aria-hidden="true"
        class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
      >
        Read post<svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          class="ml-1 h-4 w-4 stroke-current"
        >
          <path
            d="M6.75 5.75 9.25 8l-2.5 2.25"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  post: { type: Object },
});
</script>

<style lang="scss" scoped></style>
