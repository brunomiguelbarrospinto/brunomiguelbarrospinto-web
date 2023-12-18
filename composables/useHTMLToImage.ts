import { toBlob, toJpeg, toPixelData, toPng, toSvg } from "html-to-image";

function useHTMLToImage() {
  const dataUrl: Ref<String | null> = ref(null);

  async function convert({ node }: { node: HTMLElement }) {
    const result = await toPng(node);

    dataUrl.value = result;
  }

  return { convert, dataUrl };
}

export default useHTMLToImage;
