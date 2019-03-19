<template>
  <router-link
    class="menu-item"
    :to="{name: route, query}"
    :class="[{active: $route.name === route && !noActive}, activePosition]"
    :style="activeBorder"
  >
    <icon :type="type" :color="iconColor" size="30px"/>
  </router-link>
</template>
<script>
import Icon from '../common/icon.vue';
import colors from '../../assets/_colors.scss';

export default {
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
    },
    iconColor: {
      type: String,
      default: 'white'
    },
    activePosition: {
      type: String,
      default: 'right',
      validator: val => ['top', 'right'].includes(val)
    }
  },
  computed: {
    activeBorder() {
      if (this.$route.name === 'posts') {
        return {
          'border-color': colors['colors-posts']
        };
      }
      if (this.$route.name === 'infoposts') {
        return {
          'border-color': colors['colors-infoposts']
        };
      }
      if (this.$route.name === 'tasks') {
        return {
          'border-color': colors['colors-tasks']
        };
      }
      if (this.$route.name === 'reservations') {
        return {
          'border-color': colors['colors-reservations']
        };
      }
      if (this.$route.name === 'images') {
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
};
</script>
<style scoped lang="scss">
.menu-item {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: $navbar-width;
  border-width: 0;
  padding: 0 5px;
  z-index: 2;

  &.active.right {
    border-width: 5px;
    border-right-style: solid;
    width: calc(100% + 1px);
    padding-right: 1px;
  }

  &.active.top {
    border-width: 5px;
    border-top-style: solid;
  }
}
</style>
