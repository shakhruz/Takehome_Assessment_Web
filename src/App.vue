<template>
  <v-app class="app">
      <v-navigation-drawer v-model="drawer" app color="#121c30" class="navigation"> 
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6 title mt-1">
              Categories
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider color="#fcfcfc"></v-divider>        
        <v-list dense nav class="mt-1">
          <v-list-item v-for="item in $store.state.categories" :key="item" link 
            @click="$store.dispatch('getPodcasts', {category:item});">
            <v-list-item-content :class="$store.state.selectedCategory === item ? 'selected_item' : 'item' ">
              <v-list-item-title class="title">
                {{ item }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>    
    </v-navigation-drawer>
    <v-app-bar app color="#121c30" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <img src="/logo.svg">
      <v-spacer></v-spacer>
      <Search />
        <v-progress-linear
        :active="$store.state.queryState==='loading'"
        :indeterminate="$store.state.queryState==='loading'"
        absolute
        bottom
        color="amber"
      ></v-progress-linear>
    </v-app-bar>

    <v-main class="main">
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
    drawer: true
  }),
};
</script>

<style scoped>
.app {
  background-color: #121c30
}
.main {
  background-color: #121c30
}
.navigation {
  background-color: #121c30;
}
.title {
  color: #fefefe;
  font-family: "ClearSans", sans-serif !important;
  font-size: 20px !important;
  padding: 5px 10px
}

.title :hover {
  text-decoration: underline !important;
}

.selected_item {
  background-color: rgb(126 124 124);
}

</style>
