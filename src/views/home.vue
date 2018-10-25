<template>
  <page>
    <image-menu
      slot="menu"
      image="home_whole"
      overlayColor="#8093B8"
      :overlayOpacity="0.3"
      title="Tammaniemi"
      position-x="1540px"
    />
    <div slot="header">
      <page-header
        title="Home"
        type="home"
      />
    </div>
    <div slot="content">
      content
    </div>
  </page>
</template>

<script>
import ImageMenu from '../components/common/image-menu.vue';
import Page from '../components/common/page.vue';
import PageHeader from '../components/common/page-header.vue';

export default {
  components: {
    ImageMenu,
    Page,
    PageHeader
  }
};
</script>

<style scoped lang="scss">
</style>
