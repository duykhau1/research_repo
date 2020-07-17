import Vue from "vue";
import Vuex from "vuex";
import barImage from "@/assets/04.jpg";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: barImage,
    drawer: null,
    lang: ''
  },
  mutations: {
    SET_BAR_IMAGE(state, payload) {
      console.log("SET_BAR_IMAGE", payload);
      state.barImage = payload
    },
    SET_DRAWER(state, payload) {
      console.log('SET_DRAWER', payload);
      state.drawer = payload
    },
    SET_LANG(state, payload) {
      console.log('SET_LANG', payload);
      state.lang = payload;
    }
  },
  actions: {},
  modules: {}
});
