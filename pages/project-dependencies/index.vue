<template>
  <div>
    <CommonTitle class="mb-6" text="Project dependencies" />
    <h2>Depenencies</h2>
    <pre>{{ JSON.stringify(dependencies, null, 2) }}</pre>
    <br />
    <h2>Dev Depenencies</h2>
    <pre>{{ JSON.stringify(devDependencies, null, 2) }}</pre>
  </div>
</template>

<script setup>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "simple",
});

const runtimeConfig = useRuntimeConfig();

const dependencies = runtimeConfig.public.dependencies;
const devDependencies = runtimeConfig.public.devDependencies;
</script>
