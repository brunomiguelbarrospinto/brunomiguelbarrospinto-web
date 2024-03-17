import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import ThemeToggleComponent from "components/dist/components/common/ThemeToggleComponent.vue";

describe("Theme toggle component", () => {
  it("renders theme toggle", async () => {
    const wrapper = shallowMount(ThemeToggleComponent);
    expect(wrapper.find("div").exists()).toBe(true);
    expect(wrapper.find("input").exists()).toBe(true);
    expect(wrapper.find("input").attributes("id")).toBe("theme-toggle");
    expect(wrapper.find("label").exists()).toBe(true);
    expect(wrapper.find("label").attributes("for")).toBe("theme-toggle");
  });
});
