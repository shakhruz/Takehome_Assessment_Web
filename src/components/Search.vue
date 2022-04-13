<template>
    <form class="searchForm" v-on:submit.prevent="submitSearch">
      <input type="text" v-model="input" class="white">
    </form>    
</template>

<script>
import {debounce} from '../helpers'
const debounceDelay = 500;

export default {
    name: 'Search',
    data: () => ({
        input: "",
        debouncedInput: "",
    }),
    mounted() {
        this.$store.dispatch("getPodcasts", "");
    },
    watch: {
        input: debounce( function (newVal) {
            this.debouncedInput = newVal;
            this.$store.dispatch("getPodcasts", this.debouncedInput);
        }, debounceDelay)
    },
}
</script>