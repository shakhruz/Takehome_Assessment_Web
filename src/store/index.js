import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import axios from 'axios';

// API url
const apiUrl = "https://601f1754b5a0e9001706a292.mockapi.io/podcasts";

export default new Vuex.Store({
  state: {
    podcasts: [],
    categories: ["Comedy", "Sexuality"],
    queryState: "ready",
  },
  actions: {
    // query podcasts from API with 'query' and save in state
    async getPodcasts({state}, query) {
        if (state.queryState === "loading") return;

        // console.log("query podcasts:", query);
        state.queryState = "loading";

        try {
            const response = await axios.get(apiUrl + "?search=" + (query ? query : ""));
            // console.log(response);
            state.podcasts = response.data;
            state.queryState = state.podcasts.length>0 ? "ready" : "empty";
        } catch (error) {
            // console.log(error);
            state.queryState = "error";
        }    
    },
  },
})