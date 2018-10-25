<template>
  <router-link
    class="menu-item"
    :to="{name: route, query}"
    :class="{active: $route.name === route && !noActive}"
    :style="activeBorder"
  >
    <icon :type="type" color="white" size="30px"/>
  </router-link>
</template>
<script lang="ts">
import Vue from 'vue';
import Icon from '../common/icon.vue';
import colors from '../../assets/_colors.scss';

export default Vue.extend({
  components: {
    Icon
  },
  props: {
    type: {
      type: String,
      required: true
    },
    route: {
      type: String,
      default: 'home'
    },
    query: {
      type: Object,
      default: null
    },
    noActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    activeBorder(): object {
      if ( this.$route.name === 'posts' ) {
        return {
          'border-color': colors['colors-posts']
        };
      }
      if ( this.$route.name === 'infoposts' ) {
        return {
          'border-color': colors['colors-infoposts']
        };
      }
      if ( this.$route.name === 'tasks' ) {
        return {
          'border-color': colors['colors-tasks']
        };
      }
      if ( this.$route.name === 'reservations' ) {
        return {
          'border-color': colors['colors-reservations']
        };
      }
      if ( this.$route.name === 'images' ) {
        return {
          'border-color': colors['colors-images']
        };
      } else {
        return {
          'border-color': colors['colors-posts']
        };
      }
    }
  }
});
</script>
<style scoped lang="scss">
.menu-item {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: $navbar-width;
  &.active {
    padding-left: 5px;
    border-width: 5px;
    border-right-style: solid;
    width: calc(100% + 1px);
    padding-right: 1px;
  }
}
</style>
