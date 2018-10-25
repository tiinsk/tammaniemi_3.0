<template>
  <card class="post" :show-icon="showIcon">
    <div slot="icon">
      <icon :type="icon" size="30px" :color="iconColor"/>
    </div>
    <div slot="content">
      <h2>{{ post.title }}</h2>
      <event-info
        :person="post.creator"
        :timestamp="post.timestamp"
        :color="iconColor"
      />
      <event-content :content="post.content" :color="iconColor"/>
    </div>
  </card>
</template>
<script>
import Vue from 'vue';
import Icon from '../common/icon.vue';
import Card from '../common/card.vue';
import colors from '../../assets/_colors.scss';
import EventInfo from '../common/event-info.vue';
import EventContent from '../common/event-content.vue';

export default Vue.extend({
  components: {
    Icon,
    Card,
    EventInfo,
    EventContent
  },
  props: {
    post: {
      type: Object,
      required: true
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconColor() {
      return colors['colors-posts'];
    },
    icon() {
      return 'posts';
    }
  }
});
</script>
<style scoped lang="scss">
.post {
}
</style>
