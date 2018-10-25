<template>
  <card class="infopost" :show-icon="showIcon">
    <div slot="icon">
      <icon :type="icon" size="30px" :color="iconColor"/>
    </div>
    <div slot="content">
      <h2>{{ infopost.title }}</h2>
      <event-info
        :person="infopost.creator"
        :timestamp="infopost.timestamp"
        :color="iconColor"
      />
      <event-content :content="infopost.content" :color="iconColor"/>
    </div>
  </card>
</template>
<script>
import Icon from '../common/icon.vue';
import Card from '../common/card.vue';
import colors from '../../assets/_colors.scss';
import InfopostMixin from '../mixins/infopost-mixin';
import EventInfo from '../common/event-info.vue';
import EventContent from '../common/event-content.vue';

export default {
  mixins: [InfopostMixin],
  components: {
    Icon,
    Card,
    EventInfo,
    EventContent
  },
  props: {
    infopost: {
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
      return colors['colors-infoposts'];
    },
    icon() {
      return this.$categoryIcons[this.infopost.category];
    }
  }
};
</script>
<style scoped lang="scss">
.infopost {
}
</style>
