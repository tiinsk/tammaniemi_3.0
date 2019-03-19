import { mapActions, mapGetters } from 'vuex';

export const MAIN = 'main';

export const mapMainActions = actions => {
  return mapActions(MAIN, actions);
};

export const mapMainGetters = getters => {
  return mapGetters(MAIN, getters);
};

export const MainGetters = {
  IS_MENU_OPEN: 'isMenuOpen'
};

export const MainMutations = {
  SET_MENU_STATE: 'setMenuState'
};

export const MainActions = {
  TOGGLE_MENU: 'toggleMenu'
};

export default {
  namespaced: true,
  state: {
    menuOpen: true
  },
  getters: {
    [MainGetters.IS_MENU_OPEN]: state => state.menuOpen
  },
  mutations: {
    [MainMutations.SET_MENU_STATE](state) {
      state.menuOpen = !state.menuOpen;
    }
  },
  actions: {
    [MainActions.TOGGLE_MENU]({ commit, state }) {
      commit(MainMutations.SET_MENU_STATE, !state.menuOpen);
    }
  }
};
