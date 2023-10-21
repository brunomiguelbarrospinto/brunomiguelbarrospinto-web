<template>
  <div>
    <h1 class="text-red-400">Ratio padding calculator</h1>
    <p>
      Enter the width and height of your element to calculate the vertical
      padding needed to make your element responsive whilst maintaining its
      aspect ratio.
    </p>
    <p>
      Example usage: when using a background image and you need the div to be
      the height of the image.
    </p>

    <form @submit.prevent="calculatePadding">
      <input
        v-model="width"
        type="number"
        maxlength="5"
        placeholder="Width"
        class="form-control pull-left"
      />
      <span class="pull-left larger-text">x</span>
      <input
        v-model="height"
        type="number"
        maxlength="5"
        placeholder="Height"
        class="form-control pull-left"
      />
      <input type="submit" value="Calculate" class="btn btn-primary" />
    </form>
    <div v-if="output > 0">
      padding-top: {{ output.replace(".00", "") + "%" }}
    </div>
  </div>
</template>

<script setup>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "simple",
});

const width = ref(0);
const height = ref(0);
const output = ref(0);

function calculatePadding() {
  output.value = (
    (Math.round(height.value) / Math.round(width.value)) *
    100
  ).toFixed(2);
}
</script>
