// stores/counter.js
import { defineStore } from "pinia";

interface KnowledgeInterface {
  name: string;
  url?: string;
  background?: string;
  color?: string;
}

const useKnowledgeStore = defineStore("knowledge", {
  state: (): { knowledge: KnowledgeInterface[] } => {
    return {
      knowledge: [
        {
          name: "HTML5",
          url: "https://dev.w3.org/html5/spec-LC/",
          background: "#E86328",
        },
        {
          name: "CSS3",
          url: "https://www.w3.org/Style/CSS/Overview.en.html",
          background: "#2662E9",
        },
        {
          name: "Sass",
          url: "https://sass-lang.com/",
          background: "#CE649A",
        },
        {
          name: "Tailwind",
          url: "https://tailwindcss.com/",
          background: "#38BDF9",
        },
        {
          name: "Bootstrap",
          url: "https://getbootstrap.com/",
          background: "#7533F9",
        },
        {
          name: "JavaScript",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          background: "#EFD81A",
        },
        {
          name: "Jquery",
          url: "https://jquery.com/",
          background: "#0968AD",
        },
        {
          name: "TypeScript",
          url: "https://www.typescriptlang.org/",
          background: "#3077C6",
        },
        {
          name: "Vuejs",
          url: "https://vuejs.org/",
          background: "#41B883",
        },
        {
          name: "Nuxt",
          url: "https://nuxt.com/",
          background: "#00DC81",
        },
        {
          name: "Pinia",
          url: "https://pinia.vuejs.org/",
          background: "#FFD759",
        },
        {
          name: "Vuex",
          url: "https://vuex.vuejs.org/",
          background: "#3FAF7C",
        },
        {
          name: "Firebase",
          url: "https://firebase.google.com/",
          background: "#FFCB2D",
        },
        {
          name: "Storybook",
          url: "https://storybook.js.org/",
          background: "#FF4685",
        },
        {
          name: "Jest",
          url: "https://jestjs.io/",
          background: "#99425B",
        },
        {
          name: "Vue Test Utils",
          url: "https://test-utils.vuejs.org/",
          background: "#5672CD",
        },
        {
          name: "Webpack",
          url: "https://webpack.js.org/",
          background: "#1F72B3",
        },
        {
          name: "POEDITOR",
          url: "https://poeditor.com/",
          background: "#00CCCC",
        },
        {
          name: "PHP",
          url: "https://www.php.net/",
          background: "#4F5B93",
        },
        {
          name: "Laravel",
          url: "https://laravel.com/",
          background: "#F03F30",
        },
        {
          name: "Git",
          url: "https://git-scm.com/",
          background: "#F34C28",
        },
        {
          name: "Clevertap",
          url: "https://clevertap.com/",
          background: "#F14444",
        },
        {
          name: "Google Tag Manager",
          url: "https://marketingplatform.google.com/intl/es/about/tag-manager/",
          background: "#4285F4",
        },
        {
          name: "Sanity",
          url: "https://www.sanity.io/",
          background: "#F36458",
        },
        {
          name: "Stoplight",
          url: "https://stoplight.io/",
          background: "#139CF4",
        },
        {
          name: "Dayjs",
          url: "https://day.js.org/",
          background: "#FF5F4C",
        },
        {
          name: "Sentry",
          url: "https://sentry.io/",
          background: "#452550",
        },
        {
          name: "Mock service worker",
          url: "https://mswjs.io/",
          background: "#FF6A33",
        },
        {
          name: "Schema + JSON-LD",
          url: "https://schema.org/",
          background: "#990001",
        },
      ],
    };
  },

  getters: {
    getKnowledge: (state) => state.knowledge,
  },
});

export default useKnowledgeStore;
