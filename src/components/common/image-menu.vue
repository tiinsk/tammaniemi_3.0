<template>
  <div class="image-menu" :style="backgroundStyle">
    <div class="overlay" :style="overlayStyle">
    </div>
    <div class="top">
      <div class="back-button" @click="toggleMenu">
        <i class="material-icons">arrow_back</i>
      </div>
    </div>
    <div class="top-mobile" v-if="isMobile">
      <router-link class="home-btn" :to="{name: 'home'}">
        <icon type="home" color="white" class="icon" size="26px"/>
        <span>Etusivu</span>
      </router-link>
    </div>
    <div class="content">
      <div class="empty" v-if="isMobile"/>
      <div class="blur" v-if="blurBackground" :style="backgroundStyle"/>
      <slot name="navigation"/>
      <div class="bottom" v-if="isMobile">
        <slot name="options"/>
      </div>
    </div>
    <div class="bottom" v-if="!isMobile">
      <slot name="options"/>
    </div>
  </div>
</template>

<script>
import backgrounds from '../../utils/backgrounds';
import { WindowSize } from '../../types/window-size';
import { mapMainActions, MainActions, mapMainGetters, MainGetters } from '../../store/main';
import Icon from './icon';

export default {
  components: { Icon },
  props: {
    type: {
      type: String,
      required: true
    },
    blurBackground: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapMainGetters({
      menuOpen: MainGetters.IS_MENU_OPEN
    }),
    backgroundStyle() {
      const backgroundType = backgrounds[this.type];
      const image = require(`@/assets/images/${backgroundType.image}.jpg`);
      return {
        'background-image': `url('${image}')`,
        'background-position': `${backgroundType.position} center`
      };
    },
    overlayStyle() {
      console.log(this);
      const backgroundType = backgrounds[this.type];
      return {
        'background-color': backgroundType.overlayColor,
        opacity: backgroundType.overlayOpacity
      };
    },
    isMobile() {
      return this.$pageWidthMode === WindowSize.MOBILE;
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
.image-menu {
  position: relative;

  height: 100%;
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  padding-left: $navbar-width;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  .back-button {
    display: none;

    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
    padding: $base-size/2;

    cursor: pointer;

    .material-icons {
      color: #ffffff96;
      font-size: $font-size-xxlarge;
    }
  }

  .blur {
    background-size: cover;

    position: absolute;
    left: calc(50% - #{$navbar-width} / 2);
    top: 50%;
    box-shadow: inset 0 0 0 3000px rgba(197, 205, 249, 0.4);
    filter: blur(10px);
    transform: translate(-50%, -50%);
    width: $menu-width;
    height: 100vh;
  }

  .top {
    z-index: 2;
    min-height: 75px;
  }

  .top-mobile {
    width: 100%;
    z-index: 2;

    position: absolute;
    top: 0px;

    .home-btn {
      color: white;
      font-size: $font-size-default;
      text-transform: uppercase;
      text-decoration: none;

      background: none;
      border: none;
      padding: $base-size/2;

      display: flex;
      align-items: center;

      .icon {
        padding-right: $base-size/4;
      }
    }
  }

  .content {
    z-index: 2;
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    overflow: hidden;

    border-radius: 5px;
    .bottom {
      min-height: 0;
      padding: 0;
    }
  }

  .bottom {
    min-height: 75px;
    z-index: 2;
    width: 100%;
    padding: $base-size/2 $base-size/2;
  }

  @media (max-width: $breakpoint-small-window) {
    .back-button {
      display: block;
    }
  }
  @media (max-width: $breakpoint-mobile) {
    padding-left: 0;

    .content {
      position: absolute;
      top: $base-size * 2;
      bottom: $navbar-width + $base-size * 2;
      left: $base-size / 2;
      right: calc(15% + #{$base-size/2});
    }

    .back-button {
      display: none;
    }

    .blur {
      background-size: cover;

      position: absolute;
      left: -$base-size/2; //negative value of .content left
      top: -$base-size * 2; //negative value of .content top
      box-shadow: inset 0 0 0 3000px rgba(197, 205, 249, 0.4);
      filter: blur(10px);
      transform: none;
      width: 85vw; //Because of .page.menu-open.content-wrapper left: 85%
      height: 100vh;
    }
  }
}
</style>
