<template>
  <div class="page" :class="{'menu-open': menuOpen}">
    <div class="menu">
      <slot name="menu"/>
    </div>
    <div class="content-wrapper" :style="contentStyle">
      <div class="header">
        <slot name="header"/>
      </div>
      <div class="content">
        <slot name="content"/>
      </div>
      <div class="mobile-toggle-button" @click="toggleMenu"/>
    </div>
  </div>

</template>

<script>
import { mapMainActions, MainActions, mapMainGetters, MainGetters } from '../../store/main';

export default {
  components: {},
  props: {
    backgroundColor: {
      type: String,
      default: 'white'
    }
  },
  computed: {
    ...mapMainGetters({
      menuOpen: MainGetters.IS_MENU_OPEN
    }),
    contentStyle() {
      return {
        'background-image': `linear-gradient(to bottom, white, ${this.backgroundColor} 1000px)`
      };
    }
  },
  methods: {
    ...mapMainActions({
      toggleMenu: MainActions.TOGGLE_MENU
    })
  }
};
</script>

<style scoped lang="scss">
.page {
  margin-left: $navbar-width;
  min-height: 100vh;

  position: relative;
  overflow: hidden;

  .content-wrapper {
    min-height: 100vh;
    padding-bottom: $base-size;

    .mobile-toggle-button {
      display: none;
    }
  }

  .menu {
    position: fixed;
    height: 100vh;
    width: $menu-width;
    left: -475px + $navbar-width;
    transition: left ease-out 0.5s;
  }

  &.menu-open {
    margin-left: $menu-width;

    .menu {
      left: 0;
    }
  }

  @media (max-width: $breakpoint-small-window) {
    &.menu-open {
      margin-left: $navbar-width;
    }
  }

  @media (max-width: $breakpoint-mobile) {
    margin-left: 0;
    padding-bottom: 0;

    .menu {
      width: 100% !important;
    }
    .content-wrapper {
      position: absolute;
      top: 0;
      bottom: $navbar-width;
      left: 0;
      min-height: auto;
      width: 100vw;

      overflow-y: scroll;
      transition: all ease-out 0.3s;
    }

    &.menu-open {
      margin-left: 0;

      .content-wrapper {
        z-index: 2000;
        top: $base-size * 2;
        bottom: $navbar-width + $base-size * 2;
        left: 85%;

        overflow: hidden;

        .mobile-toggle-button {
          display: block;
          position: absolute;
          background: transparent;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
        }
      }
    }
  }
}
</style>
