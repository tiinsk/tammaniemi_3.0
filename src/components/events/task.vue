<template>
  <card class="task" :show-icon="showIcon" :contentStyle="{padding: 0}">
    <template class="tick-box" slot="icon">
      <icon :type="icon" size="30px" :color="iconColor"/>
    </template>
    <template slot="content">
      <h2 class="task-title">{{task.title}}</h2>
      <task-list
        :tasks="task.tasks"
        :show-done="showDone"
      />
      <event-info
        class="task-info"
        :person="task.creator"
        :timestamp="task.timestamp"
        info-style="bottom"
      />
    </template>
  </card>
</template>
<script>
import Icon from '../common/icon.vue';
import Card from '../common/card.vue';
import colors from '../../assets/_colors.scss';
import EventInfo from '../common/event-info.vue';
import { monthShort } from '../../utils/dates';
import TaskList from '../tasks/task-list';

export default {
  monthShort,
  components: {
    TaskList,
    Icon,
    Card,
    EventInfo
  },
  props: {
    task: {
      type: Object,
      required: true
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    showDone: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    iconColor() {
      return colors['colors-tasks'];
    },
    icon() {
      return 'task';
    }
  },
  methods: {}
};
</script>
<style scoped lang="scss">
.task {
  .task-title {
    padding: $base-size;
    border-bottom: 1px solid $color-light-grey;
  }
  .task-info {
    padding: $base-size;
  }
}
</style>
