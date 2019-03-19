<template>
  <div class="icon" :style="style" v-html="icon"></div>
</template>

<script>

export default {
  props: {
    type: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: '22px'
    },
    color: {
      type: String,
      default: 'black'
    },
    opacity: {
      type: Number,
      default: 1
    }
  },
  computed: {
    icon() {
      return require(`@/assets/images/icons/${this.type}.svg?inline`);
    },
    style() {
      return {
        '--stroke-color': this.color,
        '--stroke-opacity': this.opacity,
        '--height': this.size,
        height: this.size
      };
    }
  }
};
</script>

<style lang="scss">
.icon {
  text-align: center;

  svg {
    height: var(--height);
  }
  svg,
  g,
  path,
  rect {
    fill: var(--stroke-color);
    opacity: var(--stroke-opacity);
  }
  /*.fill {
    fill: var(--stroke-color);
    opacity: var(--stroke-opacity);
  }*/
}
</style>
