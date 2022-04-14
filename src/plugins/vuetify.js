import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#fefefe',
        secondary: '#b0bec5',
        anchor: '#8c9eff',
        background: '#121c30'
      },
    },
  },
})

export default vuetify