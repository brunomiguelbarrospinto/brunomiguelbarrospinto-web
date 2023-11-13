<template>
  <div>Strapi page</div>
</template>

<script setup>
const { find } = useStrapi();
const response = await find("pets");
console.log(response);
</script>
