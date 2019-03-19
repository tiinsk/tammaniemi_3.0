<template>
  <div class="card">
    <div v-if="showIcon" class="icon-wrapper">
      <slot name="icon"/>
    </div>
    <div class="content" :style="contentStyle">
      <slot name="content"/>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {
  },
  props: {
    contentStyle: {
      type: Object,
      default: undefined
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  }
});
</script>
<style scoped lang="scss">
.card {
  background: white;
  //border: 1px solid $color-light-grey;
  border-radius: 5px;
  margin: $base-size;
  box-shadow: 3px 8px 30px 1px #c9d6e670;

  display: flex;

  .icon-wrapper {
    padding: $base-size;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    border-right: 1px solid $color-light-grey;
  }

  .content {
    padding: $base-size;
    flex-grow: 1;
  }
  @media (max-width: $breakpoint-mobile) {
    margin: $base-size/2;
  }
}
</style>
