<template>
  <div class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
    <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        class="h-6 w-6 flex-none"
      >
        <path
          d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
          class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        ></path>
        <path
          d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
          class="stroke-zinc-400 dark:stroke-zinc-500"
        ></path>
      </svg>
      <span class="ml-3">Work</span>
    </h2>
    <ol class="mt-6 space-y-4">
      <li class="flex gap-4" v-for="experience in experiences">
        <div
          class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
        >
          <img
            alt=""
            loading="lazy"
            width="32"
            height="32"
            decoding="async"
            data-nimg="1"
            class="h-7 w-7 rounded-full"
            style="color: transparent"
            :src="'/img/experiences/' + experience.logo"
          />
        </div>
        <dl class="flex flex-auto flex-wrap gap-x-2">
          <dt class="sr-only">““e</dt>
          <dd
            class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100"
          >
            {{ experience.company }}
          </dd>
          <dt class="sr-only">Role</dt>
          <dd class="text-xs text-zinc-500 dark:text-zinc-400">
            {{ experience.position }}
          </dd>
          <dt class="sr-only">Date</dt>
          <dd
            class="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
            aria-label="2019 until Present"
          >
            <time datetime="2019">
              {{ dayjsFormat(experience.startDate, "MMM YYYY") }}
            </time>
            <span aria-hidden="true"> — </span>
            <time v-if="experience.currently" class="text-green-500 font-bold"
              >Present</time
            >
            <time v-else datetime="2024">
              {{ dayjsFormat(experience.endDate, "MMM YYYY") }}
            </time>
          </dd>
        </dl>
      </li>
    </ol>
  </div>
</template>

<script setup>
const { dayjsFormat } = useDayjsComposable();

import useExperiencesStore from "~/stores/experiences";

const experiencesStore = useExperiencesStore();

const experiences = experiencesStore.getExperiences;
</script>

<style lang="scss" scoped></style>
