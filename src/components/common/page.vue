<template>
  <div class="page">
    <div class="menu" :class="{open: menuOpen}">
      <slot name="menu"/>
    </div>
    <div class="header">
      <slot name="header"/>
    </div>
    <div class="content">
      <slot name="content"/>
    </div>
  </div>

</template>

<script>

export default {
  components: {
  },
  props: {

  },
  computed: {
    menuOpen() {
      return this.$store.getters.isMenuOpen;
    }
  }
};
</script>

<style scoped lang="scss">
$menu-width: 475px;

.page {
  margin-left: $menu-width;
  min-height: 100vh;
  padding-bottom: $base-size*2;

  .header {

  }
  .menu {
    position: fixed;
    height: 100vh;
    width: $menu-width;
    left: 0;
  }
  .content {

  }
  @media (min-width: $breakpoint-mobile) {
    /*margin-left: $navbar-width;
    .menu {
      width: 0px;
    }*/
  }
}
</style>
