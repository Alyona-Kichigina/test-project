import Vue from 'vue';
import Vuex from 'vuex';
import promo from './views/Promo/promo';
import auth from './store/modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    promo, auth,
  },
});
