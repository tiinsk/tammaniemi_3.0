<template>
  <div class="task-list-item">
    <div class="checkbox-wrapper">
      <div class="checkbox" :class="{isDone}">
        <i class="material-icons" v-if="isDone">check</i>
      </div>
    </div>
    <div class="task-content" :class="{checked: isDone}">{{task.content}}</div>
  </div>
</template>
<script>
import { TaskStatus } from '../../types/task';

export default {
  components: {

  },
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  computed: {
    isDone() {
      return this.task.status === TaskStatus.DONE;
    }
  },
  methods: {
  }
};
</script>
<style scoped lang="scss">
.task-list-item {
  border-bottom: 1px solid $color-light-grey;

  display: flex;

  .checkbox-wrapper {
    border-right: 1px solid $color-light-grey;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: $base-size/2;

    .checkbox {
      height: 20px;
      width: 20px;

      border: 2px solid $color-tasks;
      border-radius: 2px;

      display: flex;
      justify-content: center;
      align-items: center;

      &.isDone {
        background: $color-tasks;
      }

      .material-icons {
        font-size: 1.7rem;
        font-weight: $font-weight-semibold;
        color: white;
      }
    }
  }
  .task-content {
    padding: $base-size/2;

    font-family: $font-body;
    color: $color-semi-dark-grey;
    font-size: $font-size-default;

    &.checked {
      color: $color-semi-light-grey;
      text-decoration: line-through;
    }
  }
}
</style>
