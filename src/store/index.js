import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sms_code: '',
    mobile: '',
    active: "0"
  },
  mutations: {
    setkey(state, value) {
      // console.log(value)
      this.state.sms_code = value.sms_code
      this.state.mobile = value.mobile
    },
    activeIndex(state, index) {
      // console.log(index)
      // console.log(this.state.active)
      this.state.active = index
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()]
});