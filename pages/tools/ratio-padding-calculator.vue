<template>
  <article>
    <header>
      <CommonTitle text="Ratio padding calculator" />
      <CommonDateTime :timestamp="1698427677000" />
    </header>
    <div>
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
        <CommonFormsInput
          placeholder="Width"
          type="number"
          name="width"
          v-model:model-value="width"
        />

        <span class="pull-left larger-text">x</span>
        <CommonFormsInput
          v-model:model-value="height"
          placeholder="Height"
          type="number"
          name="height"
        />
        <CommonFormsDragAndDropFile />

        <input type="submit" value="Calculate" class="btn btn-primary" />
      </form>
      <div v-if="output > 0">
        padding-top: {{ output.replace(".00", "") + "%" }}
      </div>
    </div>
  </article>
</template>

<script setup>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "simple",
});

const { gtag } = useGtag();
// SSR-ready
gtag("event", "screen_view", {
  app_name: "Bruno Miguel Barros Pinto",
  screen_name: "ratio-padding-calculator",
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
