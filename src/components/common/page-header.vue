<template>
  <div class="page-header">
    <div class="menu-button" @click="toggleMenu">
      <icon type="menu" size="30px"/>
    </div>
    <div class="content">
      <h1 class="title">{{ title }}</h1>
      <div class="tag-wrapper" v-if="!$slots.tags">
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
      <slot name="tags"/>
    </div>
  </div>

</template>

<script>
import Icon from '../common/icon.vue';
import { gradient } from '../../utils/gradient';
import { mapMainActions, MainActions } from '../../store/main';

export default {
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
    backgroundStyle() {
      return gradient(this.type, 'to right');
    }
  },
  methods: {
    ...mapMainActions({
      toggleMenu: MainActions.TOGGLE_MENU
    })
  }
};
</script>

<style scoped lang="scss">
.page-header {
  padding: $base-size * 4 $base-size;

  .menu-button {
    display: none;
    padding: 0 $base-size/2 $base-size/2 0;
    cursor: pointer;
  }

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
        padding-right: 3 * $base-size/4;

        .icon {
          margin-right: $base-size/4;
        }
      }
    }
  }
  @media (max-width: $breakpoint-mobile) {
    padding: $base-size $base-size/2;
    .menu-button {
      display: inline-block;
    }
  }
}
</style>
