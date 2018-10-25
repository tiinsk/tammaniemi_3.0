<template>
 <div class="nav-bar">
   <nav-item type="menu" class="top" :style="menuColor" color="white" no-active/>
   <nav-item type="home" route="home"/>
   <nav-item type="info" route="infoposts" :query="{category: 'common'}"/>
   <nav-item type="calendar" route="reservations"/>
   <nav-item type="task" route="tasks"/>
   <nav-item type="pen" route="posts"/>
   <nav-item type="image" route="images"/>
   <nav-item type="new-file" route="create"/>
   <nav-item type="person-outline" class="bottom"/>
 </div>

</template>

<script lang="ts">
import Vue from 'vue';
import NavItem from './nav-item.vue';
import {gradient} from '../../utils/gradient';

export default Vue.extend({
  components: {
    NavItem
  },
  computed: {
    menuColor(): object {
      return this.$route.name ? gradient(this.$route.name, 'to top right') : {};
    }
  }
});
</script>

<style scoped lang="scss">
.nav-bar {
  width: $navbar-width;
  background: rgba(white, 0.2);
  height: 100%;
  position: fixed;
  z-index: $z-index-menus;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: $navbar-width 0;

  .top {
    position: absolute;
    top: 0;
    background-color: $color-posts;
    width: calc(100% + 1px);
  }
  .bottom {
    position: absolute;
    bottom: 0;
  }
}
</style>
