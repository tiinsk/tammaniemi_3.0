<template>
  <page class="reservations" background-color="#f6f1ff">
    <image-menu
      slot="menu"
      type="reservations"
      :blur-background="true"
    >
      <calendar
        slot="navigation"
        :year="year"
        :month="month"
        :reservations="reservations"
        @change="changeRange"
      />
    </image-menu>
    <page-header
      slot="header"
      title="Reservations"
      icon="calendar"
      type="reservations"
      :count="reservations.length"
    />
    <template slot="content">
      <reservation
        v-for="reservation in reservations"
        :key="reservation.id"
        :reservation="reservation"
      />
    </template>
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
    if (!this.year || !this.month) {
      this.initRange();
    }
    this.fetchReservations();
  },
  watch: {
    '$route.query'() {
      if (!this.year || !this.month) {
        this.initRange();
      }
      this.fetchReservations();
    }
  },
  methods: {
    initRange() {
      const currDate = new Date();
      const currentMonth = currDate.getMonth() + 1;
      const currentYear = currDate.getFullYear();
      this.changeRange(currentYear, currentMonth);
    },
    async fetchReservations() {
      this.reservations = await api.reservations.getAll({
        year: this.year,
        month: this.month
      });
    },
    changeRange(year, month) {
      this.$router.push({
        name: 'reservations',
        query: {
          year,
          month
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.reservations {
}
</style>
