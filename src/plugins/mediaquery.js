import { throttle } from 'lodash/fp';
import Vue from 'vue';

import variables from '../assets/_variables.scss';
import { WindowSize } from '../types/window-size';

export default {
  install(vueInstance) {
    const store = new Vue({
      data: {
        widthMode: ''
      }
    });

    const onWindowResize = throttle(500, () => {
      if (window.matchMedia(`(max-width: ${variables.mobile})`).matches) {
        store.widthMode = WindowSize.MOBILE;
      } else if (
        window.matchMedia(
          `(min-width: ${variables.mobile}) and
          (max-width: ${variables.smallWindow})`
        ).matches
      ) {
        store.widthMode = WindowSize.SMALL_DESKTOP;
      } else {
        store.widthMode = WindowSize.DESKTOP;
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
