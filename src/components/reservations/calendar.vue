<template>
  <div class="calendar">
    <div class="content-wrapper">
      <div class="year">
        <span>{{ year }}</span>
        <div class="nav-arrows">
          <i class="material-icons" @click="$emit('change', year-1, month)">chevron_left</i>
          <i class="material-icons" @click="$emit('change', year+1, month)">chevron_right</i>
        </div>
      </div>
      <div class="month">
        <span>{{ monthText }}</span>
        <div class="nav-arrows">
          <i class="material-icons" @click="$emit('change', year, month-1)">chevron_left</i>
          <i class="material-icons" @click="$emit('change', year, month+1)">chevron_right</i>
        </div>
      </div>
      <div class="weekdays">
        <div
          v-for="(weekday,i) in weekdays"
          :key="i"
          class="weekday"
        >
          {{ weekday }}
        </div>
      </div>
      <div
        class="dates"
      >
        <div
          class="date"
          v-for="date in dates"
          :class="{'date--diff-month': month !== (getMonth(date)+1)}"
          :key="date.toLocaleString()"
        >
          <div class="date-content">
            <div
              class="reservation"
              v-if="splittedReservations[date]"
              :style="[{width: `${splittedReservations[date].length*100}%`}, backgroundStyle]"
              :class="{'reservation--ending': splittedReservations[date].ending, 'reservation--beginning': splittedReservations[date].beginning}"
            ></div>
            <div class="date-number">
              {{ getDate(date) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getDate, getMonth} from 'date-fns';
import {weekdays, eachDayOfCalendarMonth, monthText, splittedReservations} from '../../utils/dates';
import {gradient} from '../../utils/gradient';

export default {
  components: {

  },
  props: {
    year: {
      type: Number,
      required: true
    },
    month: {
      type: Number,
      required: true
    },
    reservations: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {

    };
  },
  computed: {
    dates() {
      return eachDayOfCalendarMonth(this.year, this.month-1);
    },
    weekdays() {
      console.log(this.splittedReservations);
      return weekdays();
    },
    monthText() {
      return monthText(this.month-1);
    },
    splittedReservations() {
      return splittedReservations(this.reservations);
    },
    backgroundStyle() {
      return gradient('reservations', 'to right');
    }
  },
  watch: {

  },
  methods: {
    getMonth(date) {
      return getMonth(date);
    },
    getDate(date) {
      return getDate(date);
    },
    addMonths(month) {
      const newMonth = this.month + month;
      this.$emit('change' )
    },
    addYears(year) {

    }
  }
};
</script>

<style scoped lang="scss">
.calendar {
  width: 325px;

  background: inherit;
  position: relative;

  overflow: hidden;

  border-radius: 5px;

  &:before{
    content: ' ';
    background: inherit;
    position: absolute;
    left: -25px;
    right: -25px;
    top: -25px;
    bottom: -25px;
    box-shadow: inset 0 0 0 3000px rgba(197, 205, 249, 0.4);
    filter: blur(10px);
  }

  .content-wrapper {
    position: relative;
    z-index: 2;
    padding: $base-size;

    .nav-arrows {
      color: white;
      cursor: pointer;
      .material-icons:hover {
        color: #F27B8F;
      }
    }

    .year {
      color: white;
      font-size: $font-size-large;
      padding-bottom: $base-size/2;
      font-weight: $font-weight-light;
      display: flex;
      justify-content: space-between;
    }

    .month {
      color: #F27B8F;
      font-size: 3.5rem;
      text-transform: uppercase;
      padding-bottom: $base-size*2;
      display: flex;
      justify-content: space-between;
    }

    .weekdays {
      display: flex;

      .weekday {
        flex: 0 0 14.28%;
        text-align: center;

        color: white;
        text-transform: uppercase;
        font-weight: $font-weight-light;
        padding-bottom: $base-size;
      }
    }

    .dates {
      display: flex;
      flex-wrap: wrap;

      .date {
        flex: 0 0 14.28%;
        color: white;
        font-family: $font-roboto;
        font-weight: $font-weight-light;

        padding-bottom: 14.28%;
        position: relative;

        .date-content {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;

          display: flex;
          justify-content: center;
          align-items: center;

          .reservation {
            height: 60%;
            position: absolute;
            left: 0;
            z-index: 0;
            display: inline-table; //solves rounding problems -> wtf

            &--beginning {
              border-top-left-radius: 12px;
              border-bottom-left-radius: 12px;
            }
            &--ending {
              border-top-right-radius: 12px;
              border-bottom-right-radius: 12px;
            }
          }

          .date-number {
            position: relative;
            z-index: 1;
          }

        }
        &--diff-month {
          color: #949494;
        }
      }
    }
  }
}
</style>
