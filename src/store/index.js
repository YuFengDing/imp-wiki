import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import states from './states'
Vue.use(Vuex)
export default new Vuex.Store({
  state: states,
  mutations: mutations,
  getters: getters,
  actions: actions
})
