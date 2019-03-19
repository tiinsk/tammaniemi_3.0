<template>
  <div class="task-list">
    <task-list-item
      v-for="task in filteredTasks"
      :key="task.id"
      :task="task"
    />
    <div class="no-tasks" v-if="tasks.length < 1">
      <i class="material-icons">add</i>
      <span>Lisää ensimmäinen tehtävä</span>
    </div>
    <div class="no-tasks" v-else-if="!showDone && tasks.length > 0 && filteredTasks.length < 1">
      <i class="material-icons">check</i>
      <span>Kaikki tehtävät tehty</span>
    </div>
  </div>
</template>
<script>
import TaskListItem from './task-list-item.vue';
import { TaskStatus } from '../../types/task';

export default {
  components: {
    TaskListItem
  },
  props: {
    tasks: {
      type: Array,
      default: () => []
    },
    showDone: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    filteredTasks() {
      if (this.showDone) {
        return this.tasks;
      }
      return this.tasks.filter(task => task.status !== TaskStatus.DONE);
    }
  },
  methods: {}
};
</script>
<style scoped lang="scss">
.task-list {
  .no-tasks {
    padding: $base-size/2;
    border-bottom: 1px solid $color-light-grey;

    display: flex;
    align-items: center;

    color: $color-semi-light-grey;
    font-size: $font-size-default;
    font-style: italic;
    font-family: $font-body;
    font-weight: $font-weight-thin;

    .material-icons {
      color: $color-tasks;
      padding-right: $base-size/4;
    }
  }
}
</style>
