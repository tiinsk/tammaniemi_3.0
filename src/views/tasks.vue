<template>
  <page class="tasks">
    <header-image
      slot="menu"
      image="IMGP1410_whole"
      overlayColor="#667690"
      :overlayOpacity="0.33"
      title="Tasks"
      position-x="865px"
    />
    <div slot="header">
      <page-header
        title="Tasks"
        icon="task"
        type="tasks"
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
.tasks {
}
</style>
