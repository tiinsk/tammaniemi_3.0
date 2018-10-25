import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        menuOpen: false
    },
    getters: {
        isMenuOpen: state => state.menuOpen
    },
    mutations: {
        setMenuState(state) {
            state.menuOpen = !state.menuOpen;
        }
    },
    actions: {
        toggleMenu({ commit, state }) {
            commit('setMenuState', !state.menuOpen);
        }
    }
});
//# sourceMappingURL=store.js.map