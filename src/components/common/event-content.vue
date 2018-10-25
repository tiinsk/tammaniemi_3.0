<template>
  <div class="event-content">
    <div class="content-wrapper" :class="{'content-wrapper--open': open, 'content-wrapper--closed': !open}">{{ content }}</div>
    <div class="toggle-btn-wrapper">
      <div class="toggle-btn" @click="toggle">
        <i v-if="open" class="material-icons">keyboard_arrow_up</i>
        <i v-else class="material-icons">keyboard_arrow_down</i>
        <span>{{ open ? 'Lue vähemmän' : 'Lue lisää' }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Icon from '../common/icon.vue';

export default Vue.extend({
  components: {
    Icon
  },
  data() {
    return {
      open: false
    };
  },
  props: {
    content: {
      type: String,
      required: true
    },
    color: {
      type: String,
      defualt: 'black'
    }
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
});
</script>
<style scoped lang="scss">

.event-content {
  font-family: $font-body;
  color: $color-semi-dark-grey;
  font-size: $font-size-default;

  line-height: 20px;

  .content-wrapper {
    &--closed {
      @include multiline-truncate(3, 20px);
    }

    &--open {

    }
  }
  .toggle-btn-wrapper {
    display: flex;
    justify-content: flex-end;

    .toggle-btn {
      display: flex;
      justify-content: baseline;

      margin-top: $base-size/2;

      cursor: pointer;

      .material-icons {
        margin-right: $base-size/4;
      }
    }
  }
}
</style>
