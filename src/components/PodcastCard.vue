<template>
    <v-hover v-slot="{hover}">
      <v-card class="podcast" max-width="227px" max-height="227px">
        <v-img :src="podcast.images.thumbnail" class="cover" :alt="podcast.title" >
          <v-expand-transition>
            <div v-if="hover" class="transition-fast-in-fast-out black v-card--reveal white--text"
              style="height:100%;">
              <div class="title">{{ podcast.title }}</div>
              <div class="category">{{ podcast.categoryName}}</div>
              <div class="description">{{ podcast.description.substring(0, 200).concat('...')}}</div>
            </div>
          </v-expand-transition>
        </v-img>
      </v-card>
    </v-hover>
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

.podcast :hover {
  cursor: pointer;
}

.cover {
  width: 227px;
  height: 227px;
  max-width: 227px;
  max-height: 227px;
}

.title {
  font-size: 18px;
  font-family: "ClearSans", sans-serif;
}

.category {
  color: #bababa;
  font-size: 12px;
  font-family: "ClearSans", sans-serif;  
}

.description {
  color: #fefefc;
  font-size: 14px;
  font-family: "ClearSans", sans-serif;  
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}
</style>