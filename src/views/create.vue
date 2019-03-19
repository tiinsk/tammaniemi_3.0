<template>
  <page class="create">
    <header-image
      slot="menu"
      type="create"
    />
    <div slot="header">
      <page-header
        title="Create"
        type="posts"
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
.create {
}
</style>
