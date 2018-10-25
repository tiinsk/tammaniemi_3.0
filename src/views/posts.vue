<template>
  <page class="posts">
    <image-menu
      slot="menu"
      image="kuva"
      overlayColor="#524CA4"
      :overlayOpacity="0.33"
      title="Posts"
      position-x="1705px"
    >
      <page-menu>
        <page-menu-item
          v-for="year in counts"
          :key="year.year"
          :to-link="{name: 'posts', query: {year: year.year}}"
          :title="year.year"
          :count="year.count"
        />
      </page-menu>
    </image-menu>
    <div slot="header">
      <page-header
        title="Posts"
        type="posts"
        :count="posts.length"
      />
    </div>
    <div slot="content">
      <post
        v-for="post in posts"
        :key="post.id"
        :post="post"
        :show-icon="false"
      />
    </div>
  </page>
</template>

<script>
import ImageMenu from '../components/common/image-menu.vue';
import Page from '../components/common/page.vue';
import PageMenu from '../components/navigation/page-menu.vue';
import PageMenuItem from '../components/navigation/page-menu-item.vue';
import PageHeader from '../components/common/page-header.vue';
import Post from '../components/events/post.vue';
import api from '../api/index';

export default {
  components: {
    ImageMenu,
    Page,
    PageMenu,
    PageMenuItem,
    PageHeader,
    Post
  },
  data() {
    return {
      posts: [],
      counts: {}
    };
  },
  computed: {
    year() {
      return this.$route.query.year;
    },
    month() {
      return this.$route.query.month;
    }
  },
  created() {
    this.fetchPosts();
    this.fetchCounts();
  },
  watch: {
    '$route.query'() {
      this.fetchPosts();
      this.fetchCounts();
    }
  },
  methods: {
    async fetchPosts() {
      this.posts = await api.posts.getAll({
        year: this.$route.query.year
      });
    },
    async fetchCounts() {
      this.counts = await api.posts.getCounts();
    }
  }
};
</script>

<style scoped lang="scss">
.posts {
  background-image: linear-gradient(
      to bottom,
      white,
      #f6f6ff 1000px
  );
}
</style>
