<template>
  <div class="tag-wrapper">
    <div class="tag" :style="backgroundStyle" v-if="doneCount > 0">
      <span class="checkbox">
        <i class="material-icons">check</i>
      </span>
      <span>{{ doneCount }} kpl</span>
    </div>
    <div class="tag grey" v-if="undoneCount > 0">
      <span class="checkbox"/>
      <span>{{ undoneCount }} kpl</span>
    </div>
  </div>
</template>

<script>
import { gradient } from '../../utils/gradient';

export default {
  components: {},
  props: {
    doneCount: {
      type: Number,
      default: 0
    },
    undoneCount: {
      type: Number,
      default: 0
    }
  },
  computed: {
    backgroundStyle() {
      return gradient('tasks', 'to right');
    }
  }
};
</script>

<style scoped lang="scss">
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

    padding: 3px 2 * $base-size/3 3px $base-size/2;
    margin-right: $base-size/4;

    &.grey {
      background-image: linear-gradient(to right, #e2e2e2, #c3c3c3);
    }

    .checkbox {
      width: 14px;
      height: 14px;
      border-radius: 2px;
      margin-right: $base-size/2;
      border: 2px solid white;

      .material-icons {
        font-size: $font-size-xxxsmall;
        padding-right: 2px;
        color: white;
        font-weight: $font-weight-bold;
      }
    }
  }
}
</style>
