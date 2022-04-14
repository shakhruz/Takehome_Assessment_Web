<template>
  <div class="home">
    <div id="podcasts">
      <div v-if="$store.state.queryState==='empty'">No podcasts found</div>
      <div v-if="$store.state.queryState==='error'">Oops, something went wrong...</div>
      <div v-if="$store.state.queryState==='ready'">
        <v-container>
          <v-row justify="center">
            <div v-for="podcast in $store.state.podcasts" v-bind:key="podcast.id">
              <v-col>
                <PodcastCard :podcast="podcast" />
              </v-col>
            </div>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import PodcastCard from '@/components/PodcastCard.vue'

export default {
  name: 'Home',
  components: {PodcastCard}
}
</script>

<style scoped>
.home {
  background-color: #121c30;
  color: #fefefe
}
</style>
