<template>
  <div id="app">
    <nav-bar-left v-if="showNavbar"/>
    <router-view class="page-content"/>
  </div>
</template>
<script>
import NavBarLeft from './components/navigation/nav-bar-left.vue';

export default {
  components: {
    NavBarLeft
  },
  computed: {
    showNavbar() {
      return !['login', 'register'].includes(this.$route.name);
    }
  }
};
</script>
<style lang="scss">
@import 'assets/styles';
#app {
  min-height: 100vh;
  //background: #f1f3f5;
  .page-content {
    //margin-left: $navbar-width;
  }
}
</style>
