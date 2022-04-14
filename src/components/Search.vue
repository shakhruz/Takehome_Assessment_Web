<template>
    <v-form>
      <v-text-field v-model="input" 
        dense 
        hide-details
        solo
        outlined
        clearable
        append-icon="mdi-magnify" />
    </v-form>    
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