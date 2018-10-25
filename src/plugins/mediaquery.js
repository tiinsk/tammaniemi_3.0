import { throttle } from 'lodash';
import Vue from 'vue';

import variables from '../assets/_variables.scss';

export default {
  install(vueInstance) {
    const store = new Vue({
      data: {
        widthMode: ''
      }
    });

    const onWindowResize = throttle(500, () => {
      if (window.matchMedia(`(max-width: ${variables.mobile})`).matches) {
        store.widthMode = 'mobile';
      } else if (
        window.matchMedia(
          `(min-width: ${variables.mobile}) and
          (max-width: ${variables.desktop})`
        ).matches
      ) {
        store.widthMode = 'desktop';
      } else {
        store.widthMode = 'desktop-large';
      }
    });

    onWindowResize();
    window.addEventListener('resize', onWindowResize);

    vueInstance.mixin({
      computed: {
        $pageWidthMode() {
          return store.widthMode;
        }
      }
    });
  }
};
