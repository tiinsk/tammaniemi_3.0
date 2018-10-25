<template>
  <page class="images">
    <header-image
      slot="menu"
      image="login"
      overlayColor="#768DB5"
      :overlayOpacity="0.23"
      title="Gallery"
    />
    <div slot="header">
      <page-header
        title="Images"
        type="images"
      />
    </div>
    <div slot="content">
      content
    </div>
  </page>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderImage from '../components/common/image-menu.vue';
import Page from '../components/common/page.vue';
import PageHeader from '../components/common/page-header.vue';

export default Vue.extend({
  components: {
    HeaderImage,
    Page,
    PageHeader
  }
});
</script>

<style scoped lang="scss">
.images {
}
</style>
