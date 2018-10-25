<template>
  <div class="page-menu">
    <slot/>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {
  },
  computed: {

  }
});
</script>

<style scoped lang="scss">
.page-menu {
  background: #00000008;
  box-shadow: 0 0 50px 40px #00000008;
}
</style>
