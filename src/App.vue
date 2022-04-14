<template>
  <v-app class="app">
    <v-app-bar app color="#121c30" dark>
      <v-navigation-drawer v-model="drawer" app>
        <!-- <v-list dense nav>
          <v-list-item
            v-for="item in $store.state.categories"
            :key="item"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>     -->
    </v-navigation-drawer>
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
    drawer: false
  })
};
</script>

<style scoped>
.app {
  background-color: #121c30
}
.main {
  background-color: #121c30
}

</style>
