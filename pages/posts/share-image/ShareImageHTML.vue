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

      <CommonButtonComponent text="Share" @click="share" />
    </template>
  </div>
</template>

<script setup>
const { convert, dataUrl } = useHTMLToImage();
const { startShare, isSupported } = useNavigatorShare();

const shareImageHtml = ref(null);

async function generate() {
  await convert({ node: shareImageHtml.value });
}

async function share() {
  alert("Navigator share: " + isSupported.value);

  if (isSupported.value) {
    const url = dataUrl.value;
    fetch(url)
      .then((res) => res.blob())
      .then(async (blob) => {
        const file = new File([blob], "File name", { type: "image/png" });
        await startShare({
          title: "My title",
          text: "My text",
          url: window.location.url,
          files: [file],
        });
      });
  }
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
