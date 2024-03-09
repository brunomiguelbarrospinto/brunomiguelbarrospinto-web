// stores/counter.js
import { defineStore } from "pinia";

type Experience = {
  company: string;
  logo: string;
  webUrl: string;
  position: string;
  startDate: string;
  endDate: string | null;
  currently: boolean;
  location: string;
  description: string;
};

const usePostsStore = defineStore("experiences", {
  state: (): { experiences: Experience[] } => {
    return {
      experiences: [
        {
          company: "Filmin",
          logo: "filmin.jpg",
          webUrl: "http://filmin.es",
          position: "Frontend Developer",
          startDate: "2020-07-01",
          endDate: null,
          currently: true,
          location: "Barcelona, Cataluña, España",
          description:
            "Vue 2 (Vue CLI, Vuex, Vue Router, Vue loader, Single file components, Vuetify, Axios, Vue DevTools) Vue 3 (Composition API, Composables, Vue CLI, Vuex, Vue Router, Vue loader, Single file components, Vuetify, Axios, Vue DevTools, VueUse, Vue 3 componentes with TypeScript, Vite, Pinia) Nuxt3 Storybook documentations and tests for Vue components. Sanity.io POEditor, JavaScript, ECMA6, Fetch, TypeScript, Webpack API documentations and mockups data with Stopligth studio Rest mocking with Mock Service Worker Postman collections JSON:API Testing (Unit & Integration with Jest, Vue test utils testing-library/vue) HTML5, CSS3, SASS, BEM, Tailwind Jira, Zeplin to consume designs Gitlab, Git, NPM SCRUM",
        },
        {
          company: "PASSNFLY",
          logo: "passnfly.jpg",
          webUrl: "https://passnfly.com",
          position: "Frontend Developer",
          startDate: "2019-07-01",
          endDate: "2020-07-01",
          currently: false,
          location: "Barcelona, Cataluña, España",
          description:
            "Vuejs, Vuex, Vue Router, Vuetify, Axios, Vue Devtools, Vue CLI, Vue Loader, Single file components, HTML5, JavaScript, ES6, jQuery, RESTful APIs, CSS3, Bootstrap 3, Bootstrap 4, Bulma, Buefy, SCSS, BEM, Git, Jira, NPM",
        },
        {
          company: "BUSUP Technologies S.L",
          logo: "busup.jpg",
          webUrl: "https://www.busup.com",
          position: "Web developer",
          startDate: "2018-03-01",
          endDate: "2019-07-01",
          currently: false,
          location: "Barcelona, Cataluña, España",
          description:
            "Programming of systems and tools satisfying the needs of the company. All technologies used are web environment. Backend: Object-oriented programming and APIs with PHP 7 and Laravel 5.5 / 5.6 / 5.7 Frontend: HTML5, CSS3, SASS (BEM 'Block, Element, Modifier' Methodology), BOOTSTRAP 3 / 4 Responsive web design (Mobile First) / Cross-Browser Javascript, Jquery, VueJs (Vuex, Vue Router, Vuetify, Single File Component) Database: MySQL. Version control: Git. Task and incident management: Jira Software",
        },
        {
          company: "Pasiona",
          logo: "pasiona.jpg",
          webUrl: "https://pasiona.com",
          position: "Web designer",
          startDate: "2017-09-01",
          endDate: "2018-03-01",
          currently: false,
          location: "Barcelona, Cataluña, España",
          description:
            "Web Layout UX UI Designer, I carried out responsive web layout work on projects developed for clients based on prototypes created by a design tool, such as Photoshop or Invision, using web technologies, HTML5, CSS3, POSTCSS, CSSNEXT, SASS, BOOTSTRAP 3, BOOTSTRAP 4, MATERIALIZE CSS, JAVASCRIPT, JQUERY, GULP, FLEXBOX, RESPONSIVE WEB DESIGN.",
        },
        {
          company: "Deliverum",
          logo: "deliverum.jpg",
          webUrl: "https://www.bcnrestaurantes.com/",
          position: "Web developer",
          startDate: "2016-10-01",
          endDate: "2017-08-01",
          currently: false,
          location: "Barcelona, Cataluña, España",
          description:
            "Programmer, web designer of applications and corrections based on sketches made. Responsive interface layout for viewing web pages on tablets and mobiles. Schedule automatic scripts according to the needs of the company. Programming languages ​​used HTML5, CSS3, BOOTSTRAP, MYSQL, PHP, JQUERY, JAVASCRIPT.",
        },
      ],
    };
  },

  getters: {
    getExperiences: (state) => state.experiences,
  },
});

export default usePostsStore;
