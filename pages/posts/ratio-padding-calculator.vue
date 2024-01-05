<template>
  <article>
    <header>
      <CommonDateTime class="mb-3" :timestamp="1698427677000" />
      <CommonTitle class="mb-6" text="Ratio padding calculator" />
    </header>
    <p>
      Enter the width and height of your element to calculate the vertical
      padding needed to make your element responsive whilst maintaining its
      aspect ratio.
    </p>
    <p class="mb-6">
      Example usage: when using a background image and you need the div to be
      the height of the image.
    </p>
    <div>
      <form @submit.prevent="calculatePadding">
        <div class="grid grid-cols-2 gap-8">
          <CommonFormsDragAndDropFile @load:file="setImage" />

          <div>
            <CommonFormsLabel for="width" text="Width" />
            <CommonFormsInput
              id="width"
              placeholder="Width"
              type="number"
              name="width"
              v-model:model-value="width"
            />

            <span class="pull-left larger-text">x</span>

            <CommonFormsLabel for="height" text="Height" />
            <CommonFormsInput
              id="height"
              v-model:model-value="height"
              placeholder="Height"
              type="number"
              name="height"
            />
            <CommonButtonComponent
              type="submit"
              class="mt-6"
              text="Calculate"
            />
          </div>
        </div>
      </form>

      <hr class="my-8" />
      <div v-if="output > 0">
        <div class="grid grid-cols-2 gap-8">
          <div>
            <div class="text-teal-600">
              <b>Text 1:</b> This is an excmple to show layout shift loading
              image...
            </div>
            <img :src="imageUrl" alt />
            <div class="text-teal-500">
              <b>Text 2:</b> This is an excmple to show layout shift loading
              image...
            </div>
          </div>

          <div>
            <img :src="imageUrl" alt />
          </div>
        </div>

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

const imageUrl = computed(
  () => `https://picsum.photos/${width.value}/${height.value}`
);

function setImage(file) {
  //console.log(file);
}

function calculatePadding() {
  output.value = (
    (Math.round(height.value) / Math.round(width.value)) *
    100
  ).toFixed(2);
}
</script>
