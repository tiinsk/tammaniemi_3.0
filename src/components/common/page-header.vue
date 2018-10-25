<template>
  <div class="page-header">
    <div class="content">
      <h1 class="title">{{ title }}</h1>
      <div class="tag-wrapper">
        <div
          v-if="subtitle"
          class="tag subtitle"
          :style="backgroundStyle"
        >
          <icon class="icon" v-if="icon" color="white" :type="icon" />
          <span>{{ subtitle }}</span>
        </div>
        <div class="tag count-box" :style="backgroundStyle">{{ count }} kpl</div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';

import Icon from '../common/icon.vue';
import {gradient} from '../../utils/gradient';

export default Vue.extend({
  components: {
    Icon
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    count: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    backgroundStyle(): object {
      return gradient(this.type, 'to right');
    }
  }
});
</script>

<style scoped lang="scss">
.page-header {
  padding: $base-size*4 $base-size;
  display: flex;
  align-items: center;

  .tag-wrapper {
    display: flex;

    margin-left: 3px;
    margin-top: $base-size/4;

    .tag {
      height: 28px;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 15px/50%;
      background: rgba($color-semi-light-grey, 0.5);

      color: white;

      font-size: $font-size-xsmall;
      line-height: $base-size/2;

      padding: 3px $base-size/2;
      margin-right: $base-size/4;

      &.subtitle {
        padding-right: 3*$base-size/4;

        .icon {
          margin-right: $base-size/4;
        }
      }

      &.count-box {
      }
    }
  }

  .content {

  }


}
</style>
