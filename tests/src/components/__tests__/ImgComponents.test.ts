import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import ImgComponent from "components/dist/components/common/ImgComponent.vue";

describe("Img component", () => {
  it("renders image with src and alt", async () => {
    const src =
      "https://static.filmin.es/images/wildcard/1721/1/card_0_3_720x0.jpg";
    const alt = "alt image";
    const wrapper = shallowMount(ImgComponent, {
      props: {
        src,
        alt,
      },
    });
    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.find("div").exists()).toBe(true);
    expect(wrapper.find("div").classes("img__loading")).toBe(true);
    expect(wrapper.find("img").attributes("src")).toBe(src);
    expect(wrapper.find("img").attributes("alt")).toBe(alt);
  });
});
