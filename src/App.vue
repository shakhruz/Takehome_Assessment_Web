<template>
  <v-app class="app">
    <v-app-bar app color="#121c30" dark>
      <img src="/logo.svg">
      <v-spacer></v-spacer>
      <Search />
    </v-app-bar>

    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from '@/components/Home';
import Search from '@/components/Search';

export default {
  name: 'App',

  components: {
    Home, Search
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.app {
  background-color: #121c30
}
</style>
