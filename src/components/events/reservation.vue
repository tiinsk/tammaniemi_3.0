<template>
  <card class="reservation" :show-icon="true">
    <template class="dates" slot="icon">
      <div class="date">
        <div class="day">{{ day(reservation.begin) }}</div>
        <div class="month">{{ month(reservation.begin) }}</div>
      </div>
      <div class="date">
        <div class="day">{{ day(reservation.end) }}</div>
        <div class="month">{{ month(reservation.end) }}</div>
      </div>
    </template>
    <template slot="content">
      <div class="reservation-body">
        <h3 class="reservation-title">{{ reservation.title }}</h3>
        <event-content class="reservation-content" :content="reservation.content" :color="iconColor"/>
      </div>
      <event-info
        class="reservation-info"
        :person="reservation.creator"
        :timestamp="reservation.timestamp"
        info-style="bottom"
      />
    </template>
  </card>
</template>
<script>
import format from 'date-fns/format';

import Icon from '../common/icon.vue';
import Card from '../common/card.vue';
import colors from '../../assets/_colors.scss';
import EventInfo from '../common/event-info.vue';
import EventContent from '../common/event-content.vue';
import { monthShort } from '../../utils/dates';

export default {
  monthShort,
  components: {
    Icon,
    Card,
    EventInfo,
    EventContent
  },
  props: {
    reservation: {
      type: Object,
      required: true
    }
  },
  computed: {
    iconColor() {
      return colors['colors-posts'];
    },
    icon() {
      return 'posts';
    }
  },
  methods: {
    month(date) {
      return monthShort(date);
    },
    day(date) {
      return format(date, 'DD');
    }
  }
};
</script>
<style scoped lang="scss">
.reservation {
  .date {
    color: $color-reservations;
    text-align: center;

    &:not(:last-of-type) {
      padding-bottom: $base-size;
    }

    .day {
      font-size: 2.6rem;
    }
    .month {
      font-size: $font-size-small;
      text-transform: uppercase;
    }
  }
  .reservation-body {
    display: flex;
    .reservation-title {
      flex-shrink: 0;
      max-width: 50%;
      padding-right: $base-size;
    }
    .reservation-content {
      flex-shrink: 1;
    }
  }
  .reservation-info {
    padding-bottom: 0;
  }
}
</style>
