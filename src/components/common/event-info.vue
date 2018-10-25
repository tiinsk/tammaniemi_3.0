<template>
  <div class="event-info" :class="classes" :style="{color}">
    <i class="material-icons icon">person_outline</i>
    <span class="text border-right" :style="{'border-right-color': color}">{{ person.name }}</span>
    <i class="material-icons icon">date_range</i>
    <span class="text">{{ formattedDate }}</span>
  </div>
</template>
<script>
import {format} from 'date-fns';

import Icon from '../common/icon.vue';

export default {
  components: {
    Icon
  },
  props: {
    person: {
      type: Object,
      required: true
    },
    timestamp: {
      type: [String, Number],
      required: true
    },
    color: {
      type: String,
      default: 'default'
    },
    infoStyle: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'bottom'].includes(value)
    }
  },
  computed: {
    formattedDate() {
      return format(this.timestamp, 'DD.MM.YYYY');
    },
    classes() {
      return {
        'event-info--default': this.infoStyle === 'default',
        'event-info--bottom': this.infoStyle === 'bottom'
      };
    }
  }
};
</script>
<style scoped lang="scss">
.event-info {
  padding: $base-size/2 0;

  display: flex;
  align-items: center;

  text-transform: uppercase;
  color: $color-semi-dark-grey;

  .icon {
    margin-right: 3px;
    font-size: 1.7rem;

    &:not(:first-of-type){
      margin-left: $base-size/2;
    }
  }
  .text {
    font-size: $font-size-default;
    line-height: 15px;

    &.border-right {
      padding-right: $base-size/2;
      border-right: 1px solid $color-semi-dark-grey;
    }
  }

  &--bottom {
    justify-content: flex-end;

    .text {
      font-size: $font-size-small;
    }
  }
}
</style>
