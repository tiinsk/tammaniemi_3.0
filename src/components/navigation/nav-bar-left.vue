<template>
  <div>
    <div class="nav-bar" v-if="!isMobile" :style="style">
      <div class="overlay" :style="overlayStyle"></div>
      <div class="overlay white-overlay"/>
      <div class="menu-toggle" :style="menuColor" @click="toggleMenu">
        <icon type="menu" color="white" size="30px"/>
      </div>
      <nav-item type="home" route="home"/>
      <nav-item type="info" route="infoposts" :query="{category: 'common'}"/>
      <nav-item type="calendar" route="reservations"/>
      <nav-item type="task" route="tasks" :query="taskQuery"/>
      <nav-item type="pen" route="posts"/>
      <nav-item type="image" route="images"/>
      <nav-item type="new-file" route="create"/>
      <nav-item type="person-outline" class="bottom"/>
    </div>
    <div class="nav-bar-mobile" v-else>
      <nav-item type="info" icon-color="#828080" active-position="top" route="infoposts" :query="{category: 'common'}"/>
      <nav-item type="calendar" icon-color="#828080" active-position="top" route="reservations"/>
      <nav-item type="task" icon-color="#828080" active-position="top" route="tasks"/>
      <nav-item type="pen" icon-color="#828080" active-position="top" route="posts"/>
      <nav-item type="image" icon-color="#828080" active-position="top" route="images"/>
    </div>
 </div>

</template>

<script>
import NavItem from './nav-item.vue';
import Icon from '../common/icon.vue';
import { gradient } from '../../utils/gradient';
import backgrounds from '../../utils/backgrounds';
import { TaskCategory } from '../../types/task';
import { mapMainActions, MainActions, mapMainGetters, MainGetters } from '../../store/main';

export default {
  components: {
    NavItem,
    Icon
  },
  computed: {
    ...mapMainGetters({
      menuOpen: MainGetters.IS_MENU_OPEN
    }),
    style() {
      const backgroundType = backgrounds[this.$route.name];
      const image = require(`@/assets/images/${backgroundType.image}.jpg`);
      return {
        'background-image': `url('${image}')`,
        'background-position': `${backgroundType.position} center`
      };
    },
    overlayStyle() {
      const backgroundType = backgrounds[this.$route.name];
      return {
        'background-color': backgroundType.overlayColor,
        opacity: backgroundType.overlayOpacity
      };
    },
    menuColor() {
      if (!this.menuOpen) return {};

      return this.$route.name ? gradient(this.$route.name, 'to top right') : {};
    },
    isMobile() {
      return this.$pageWidthMode === 'mobile';
    },
    taskQuery() {
      return {
        type: TaskCategory.CONTAINS_RECENTLY_MODIFIED
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
.nav-bar {
  width: $navbar-width;

  background-size: cover;

  height: 100%;
  position: fixed;
  z-index: $z-index-menus;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: $navbar-width 0;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  .white-overlay {
    background: rgba(white, 0.2);
  }

  .menu-toggle {
    position: absolute;
    top: 0;
    z-index: 2;

    background-color: #ffffff26;
    width: 100%;
    height: $navbar-width;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }
  .bottom {
    position: absolute;
    bottom: 0;
  }
}
.nav-bar-mobile {
  width: 100%;
  height: $navbar-width;
  background: white;

  position: fixed;
  bottom: 0;
  z-index: $z-index-menus;

  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
