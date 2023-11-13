<template>
  <div>Strapi page</div>
</template>

<script setup>
const { gtag } = useGtag();
// SSR-ready
gtag("event", "screen_view", {
  app_name: "Bruno Miguel Barros Pinto",
  screen_name: "strapi",
});

const { find } = useStrapi();
const response = await find("pets");
console.log(response);
</script>
