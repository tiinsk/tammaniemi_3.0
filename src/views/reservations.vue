<template>
  <page class="reservations">
    <image-menu
      slot="menu"
      image="reservations_whole"
      overlayColor="#3f3b73"
      :overlayOpacity="0.33"
      title="Reservations"
      position-x="910px"
      :contentStyle="{'background': 'inherit', 'border-radius': '5px'}"
    >
      <calendar
        :year="year"
        :month="month"
        :reservations="reservations"
        @change="changeRange"
      />
    </image-menu>
    <div slot="header">
      <page-header
        title="Reservations"
        icon="calendar"
        type="reservations"
        :count="reservations.length"
      />
    </div>
    <div slot="content">
      <reservation
        v-for="reservation in reservations"
        :key="reservation.id"
        :reservation="reservation"
      />
    </div>
  </page>
</template>

<script>

import ImageMenu from '../components/common/image-menu.vue';
import Page from '../components/common/page.vue';
import PageHeader from '../components/common/page-header.vue';
import Reservation from '../components/events/reservation.vue';
import api from '../api/index';
import Calendar from '../components/reservations/calendar';

export default {
  components: {
    Calendar,
    ImageMenu,
    Page,
    PageHeader,
    Reservation
  },
  data() {
    return {
      reservations: []
    };
  },
  computed: {
    year() {
      return +this.$route.query.year;
    },
    month() {
      return +this.$route.query.month;
    }
  },
  created() {
    this.fetchReservations();
    if (!this.year || !this.month) {
      const currDate = new Date();
      const currentMonth = currDate.getMonth() + 1;
      const currentYear = currDate.getFullYear();
      this.changeRange(currentYear, currentMonth);
    }
  },
  watch: {
    '$route.query'() {
      this.fetchReservations();
    }
  },
  methods: {
    async fetchReservations() {
      this.reservations = await api.reservations.getAll({
        year: this.year,
        month: this.month
      });
    },
    changeRange(year, month) {
      this.$router.push({name: 'reservations', query: {
        year,
        month
      }});
    }
  }
};
</script>

<style scoped lang="scss">
.reservations {
  background-image: linear-gradient(
      to bottom,
      white,
      #f6f1ff 1000px
  );
}
</style>
