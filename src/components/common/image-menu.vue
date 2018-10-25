<template>
  <div class="image-menu" :style="style">
    <div class="overlay" :style="{'background-color': overlayColor, 'opacity': overlayOpacity}">
    </div>
    <div class="content" :style="contentStyle">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {},
  props: {
    image: {
      type: String,
      required: true
    },
    overlayColor: {
      type: String,
      default: 'white'
    },
    overlayOpacity: {
      type: Number,
      default: 0.4
    },
    positionX: {
      type: String,
      default: 0
    },
    contentStyle: {
      type: Object,
      default: null
    }
  },
  computed: {
    style(): object {
      const image = require(`@/assets/images/${this.image}.jpg`);
      return {
        'background-image': `url('${image}')`,
        'background-position': `${this.positionX} center`
      };
    }
  }
});
</script>

<style scoped lang="scss">
.image-menu {
  position: relative;

  height: 100%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-left: $navbar-width;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
  .content {
    position: relative;
    /*top: 0;
    left: 0;
    right: 0;
    bottom: 0;*/
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
