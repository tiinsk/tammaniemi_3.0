<template>
  <page class="images">
    <header-image
      slot="menu"
      type="images"
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

<script>
import HeaderImage from '../components/common/image-menu.vue';
import Page from '../components/common/page.vue';
import PageHeader from '../components/common/page-header.vue';

export default {
  components: {
    HeaderImage,
    Page,
    PageHeader
  }
};
</script>

<style scoped lang="scss">
.images {
}
</style>
