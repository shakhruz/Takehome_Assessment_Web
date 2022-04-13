<template>
    <v-card class="podcast" max-width="227px" max-height="227px">
      <img :src="podcast.images.thumbnail" class="cover"/>
    </v-card>
</template>

<script>
export default {
  name: 'PodcastCard',
  props: ["podcast"],
}
</script>

<style scoped>
.podcast {
  width: 227px;
  height: 227px;
  max-width: 227px;
  max-height: 227px;
}

.cover {
  width: 227px;
  height: 227px;
  max-width: 227px;
  max-height: 227px;
}
</style>