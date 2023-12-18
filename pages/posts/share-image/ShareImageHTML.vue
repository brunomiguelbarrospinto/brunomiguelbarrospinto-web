<template>
  <div>
    <div ref="shareImageHtml" class="share-image-html">
      <div class="share-image-html__title">Title</div>
      <div class="share-image-html__subtitle">This is a subtitle</div>
      <div class="share-image-html__picture"></div>
    </div>

    <hr class="my-4" />
    <CommonButtonComponent text="Generate" @click="generate" />

    <template v-if="dataUrl">
      <hr class="my-4" />

      <CommonButtonComponent text="Download" @click="downloadImage" />

      <hr class="my-4" />

      <CommonButtonComponent text="Share" @click="share" />
    </template>
  </div>
</template>

<script setup>
import downloadjs from "downloadjs";
const { convert, dataUrl } = useHTMLToImage();
const { startShare, isSupported } = useNavigatorShare();
const { dataUrlToFile } = useDataUrlToFile();

const shareImageHtml = ref(null);

async function generate() {
  await convert({ node: shareImageHtml.value });
}

async function share() {
  console.log(dataUrl.value);
  const file = await dataUrlToFile(dataUrl.value, "my-image.png");

  await startShare({
    title: "My title",
    text: "My text",
    files: [file],
  });
}

function downloadImage() {
  downloadjs(dataUrl.value, "my-image.png");
}
</script>

<style lang="scss" scoped>
.share-image-html {
  @apply bg-blue-500 text-white w-40 h-40 p-4;

  &__title {
    @apply font-bold;
  }
  &__subtitle {
    @apply font-semibold text-xs;
  }
}
</style>
