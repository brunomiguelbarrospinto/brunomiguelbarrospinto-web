// stores/counter.js
import { defineStore } from "pinia";

const usePostsStore = defineStore("posts", {
  state: () => {
    return {
      posts: [
        {
          timestamp: 1702926748000,
          title: "Share image",
          description:
            "Tutorial to share image with native navigator share in mobile.",
          image: "",
          slug: "share-image",
        },
        {
          timestamp: 1698427677000,
          title: "Ratio padding calculator",
          description:
            "Easy way to calculate image aspect ratio generating ratio",
          image: "",
          slug: "ratio-padding-calculator",
        },
      ],
    };
  },

  getters: {
    getPosts: (state) => state.posts,
  },
});

export default usePostsStore;
