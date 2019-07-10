import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
const SoundsPlugin = require('sounds-webpack-plugin')

Vue.use(Vuetify, {
  iconfont: 'md',
})

Vue.use(new SoundsPlugin())
