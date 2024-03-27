// https://nuxt.com/docs/api/configuration/nuxt-config
import packageJson from "./package.json";

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "dayjs-nuxt",
    "nuxt-icon",
    "nuxt-gtag",
    "@pinia/nuxt",
    "@nuxtjs/sitemap",
    "@nuxtjs/device",
    "@storybook-vue/nuxt-storybook",
  ],

  gtag: {
    id: "",
    // Additional configuration for the Google Analytics 4 property
    config: {
      page_title: "Bruno Miguel Barros Pinto",
    },
  },
  nitro: {
    firebase: {
      gen: 2,
      // ...
    },
  },
  devtools: { enabled: true },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "api-base-url",
      devDependencies: packageJson.devDependencies,
      dependencies: packageJson.dependencies,
    },
  },
});
