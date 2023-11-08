<template>
  <div
    ref="dropZoneRef"
    class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
  >
    <div class="text-center">
      <Icon
        name="heroicons:photo-solid"
        class="mx-auto h-12 w-12 text-gray-300"
        aria-hidden="true"
      />

      <div class="mt-4 flex text-sm leading-6 text-gray-600">
        <label
          for="file-upload"
          class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
        >
          <span>Upload a file</span>
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            class="sr-only"
          />
        </label>
        <p class="pl-1">or drag and drop</p>
      </div>
      <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDropZone } from "@vueuse/core";

const dropZoneRef = ref<HTMLDivElement>();

function onDrop(files: File[] | null) {
  // called when files are dropped on zone
  console.log(files);
}

const { isOverDropZone } = useDropZone(dropZoneRef, onDrop);
</script>

<style scoped></style>
