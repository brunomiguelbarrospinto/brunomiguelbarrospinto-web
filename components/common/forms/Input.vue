<template>
  <input
    :id="id || name"
    :name="name || id"
    :type="type"
    v-bind="$attrs"
    :placeholder="placeholder"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
    autocomplete="off"
    class="c-input"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  type: string;
  name?: string;
  id?: string;
  placeholder?: string;
  modelValue: string | number;
}>();
</script>

<style scoped></style>

<style scoped>
.c-input {
  @apply block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6;
}
</style>
