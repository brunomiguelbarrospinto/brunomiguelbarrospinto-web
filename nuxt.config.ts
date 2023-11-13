// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "dayjs-nuxt", "nuxt-icon", "@nuxtjs/strapi"],
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
      apiBase: "/api",
    },
  },
});
