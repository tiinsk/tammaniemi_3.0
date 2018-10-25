<template>
  <page class="infoposts">
    <image-menu
      slot="menu"
      image="infoposts_whole"
      overlayColor="#a0a3af"
      :overlayOpacity="0.40"
      position-x="1080px"
    >
      <page-menu>
        <page-menu-item
          v-for="category in $orderedCategories"
          :key="category"
          type="infoposts"
          :to-link="{name: 'infoposts', query: {category}}"
          :category="category"
          :title="$categoryNames[category]"
          :icon="$categoryIcons[category]"
          :count="counts[category]"
        />
      </page-menu>
    </image-menu>
    <div slot="header">
      <page-header
        title="Infoposts"
        :subtitle="$categoryNames[category]"
        :icon="$categoryIcons[category]"
        type="infoposts"
        :count="infoposts.length"
      />
    </div>
    <div slot="content">
      <infopost
        v-for="infopost in infoposts"
        :key="infopost.id"
        :infopost="infopost"
        :show-icon="false"
      />
    </div>
  </page>
</template>

<script>
import ImageMenu from '../components/common/image-menu.vue';
import PageMenu from '../components/navigation/page-menu.vue';
import PageMenuItem from '../components/navigation/page-menu-item.vue';
import Page from '../components/common/page.vue';
import Infopost from '../components/events/infopost.vue';
import PageHeader from '../components/common/page-header.vue';
import api from '../api/index';
import InfopostMixin from '../components/mixins/infopost-mixin';

export default {
  components: {
    ImageMenu,
    Page,
    PageMenu,
    PageMenuItem,
    Infopost,
    PageHeader
  },
  mixins: [InfopostMixin],
  data() {
    return {
      infoposts: [],
      counts: {}
    };
  },
  computed: {
    category() {
      return this.$route.query.category;
    }
  },
  created() {
    this.fetchInfoposts();
    this.fetchCounts();
  },
  watch: {
    '$route.query'() {
      this.fetchInfoposts();
      this.fetchCounts();
    }
  },
  methods: {
    async fetchInfoposts() {
      this.infoposts = await api.infoposts.getAll({
        category: this.$route.query.category
      });
    },
    async fetchCounts() {
      this.counts = (await api.infoposts.getCounts()).reduce((acc, curr) => {
        acc[curr.category] = curr.count;
        return acc;
      }, {});
    }
  }
};
</script>

<style scoped lang="scss">
.infoposts {
  background-image: linear-gradient(
    to bottom,
    white,
    #f1f7ff 1000px
  );
}
</style>
