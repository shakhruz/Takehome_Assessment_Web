import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import axios from 'axios';

// API url
const apiUrl = "https://601f1754b5a0e9001706a292.mockapi.io/podcasts";

export default new Vuex.Store({
  state: {
    podcasts: [],
    categories: [],
    queryState: "ready",
    selectedCategory: "All"
  },
  actions: {
    // query podcasts from API with 'query' and save in state
    async getPodcasts({state, dispatch}, {query, category}) {
        if (state.queryState === "loading") return;

        // console.log("query podcasts:", query, category);
        state.queryState = "loading";

        try {
            // change selected category
            if (category) state.selectedCategory = category;

            if (category==='All') category = ''; // clear 'All' to fetch all categories
            const params = category ? "?categoryName=" + category : "?search=" + (query ? query : "")
            const response = await axios.get(apiUrl + params);
            // console.log(response);
            state.podcasts = response.data;
            state.queryState = state.podcasts.length>0 ? "ready" : "empty";
            
            // get categories list if empty
            if (state.categories.length==0) dispatch("getCategories");
        } catch (error) {
            // console.log(error);
            state.queryState = "error";
        }    
    },
    // fetch categories list
    getCategories({state}) {
        let categories = ["All", ...new Set(state.podcasts.map(i=>i.categoryName))];
        state.categories = categories.filter(i=>i.trim() != '');
    }
  },
})