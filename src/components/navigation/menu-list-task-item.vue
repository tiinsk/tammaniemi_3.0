<template>
  <router-link
    class="menu-list-task-item"
    :class="{isCategory}"
    :to="toLink"
    active-class="active"
    exact
  >
    <div class="icon">
      <i class="material-icons" v-if="isList">menu</i>
      <i class="material-icons" v-else-if="isUndoneList">check_box_outline_blank</i>
      <i class="material-icons" v-else-if="isRecentList">history</i>
    </div>
    <div class="title">{{ $categoryName(category) }}</div>
    <div class="count-box" v-if="category.doneCount > 0">
      <span class="checkbox">
        <i class="material-icons">check</i>
      </span>
      {{ category.doneCount }}
    </div>
    <div class="count-box" v-if="category.undoneCount > 0">
      <span class="un-checkbox"/>
      {{ category.undoneCount }}
    </div>
  </router-link>

</template>

<script>
import { TaskCategory } from '../../types/task';
import TaskMixin from '../mixins/task-mixin';

export default {
  mixins: [TaskMixin],
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  computed: {
    isCategory() {
      return [TaskCategory.CONTAINS_UNDONE, TaskCategory.CONTAINS_RECENTLY_MODIFIED].includes(
        this.category.type
      );
    },
    isList() {
      return this.category.type === TaskCategory.TASK_LIST;
    },
    isUndoneList() {
      return this.category.type === TaskCategory.CONTAINS_UNDONE;
    },
    isRecentList() {
      return this.category.type === TaskCategory.CONTAINS_RECENTLY_MODIFIED;
    },
    toLink() {
      if (this.category.type === TaskCategory.TASK_LIST) {
        return { name: 'tasks', query: { id: this.category.id } };
      } else {
        return { name: 'tasks', query: { type: this.category.type } };
      }
    }
  }
};
</script>

<style scoped lang="scss">
.menu-list-task-item {
  padding: $base-size/2 0;
  margin: 0 $base-size;

  position: relative;

  display: flex;
  align-items: center;

  cursor: pointer;

  line-height: $base-size;
  color: white;
  text-decoration: none;
  text-shadow: 1px 0 20px #00000021;

  &.isCategory {
    font-weight: $font-weight-semibold;
  }

  &.isCategory + &:not(.isCategory) {
    margin-top: $base-size/2;
    padding-top: 3 * $base-size / 4;
    border-top: 1px solid #ffffff30;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: $base-size/4;
  }

  .count-box {
    padding: 3px 7px;
    margin-left: $base-size/2;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px/50%;

    background: rgba(white, 0.35);

    font-size: $font-size-xsmall;
    color: white;
    line-height: $base-size/2;

    .checkbox {
      width: 14px;
      height: 14px;
      border-radius: 2px;
      margin-right: 4px;
      border: 2px solid $color-tasks;

      .material-icons {
        font-size: $font-size-xxxsmall;
        padding-right: 2px;
        color: $color-tasks;
        font-weight: $font-weight-bold;
      }
    }
    .un-checkbox {
      width: 14px;
      height: 14px;
      border-radius: 2px;
      margin-right: 4px;
      border: 2px solid $color-semi-light-grey;
    }
  }

  &.active {
    .title {
      border-bottom: 1px solid white;
      margin-bottom: -1px;
    }
  }
}
</style>
