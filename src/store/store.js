import Vue from 'vue';
import Vuex from 'vuex';

import main from './main';
import tasks from './tasks';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    main: main,
    tasks: tasks
  }
});
