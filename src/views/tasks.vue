<template>
  <page class="tasks" background-color="#fffdfa">
    <image-menu
      slot="menu"
      type="tasks"
    >
      <menu-list slot="navigation">
        <menu-list-task-item
          v-for="(category, i) in counts"
          :key="i"
          :category="category"
        />
      </menu-list>
      <div class="task-options" slot="options">
        <create-button
          type="tasks"
        />
        <toggle-button
          name="show-done-toggle"
          label="Näytä myös tehdyt"
          v-model="showDone"
        />
      </div>
    </image-menu>
    <div slot="header">
      <page-header
        title="Tasks"
        icon="task"
        type="tasks"
      >
        <count-box
          slot="tags"
          :done-count="doneCount"
          :undone-count="undoneCount"
        />
      </page-header>
    </div>
    <div slot="content">
      <task
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        :show-done="showDone"
      />
    </div>
  </page>
</template>

<script>
import api from '../api/index';
import ImageMenu from '../components/common/image-menu.vue';
import Page from '../components/common/page.vue';
import MenuList from '../components/navigation/menu-list.vue';
import PageHeader from '../components/common/page-header.vue';
import Task from '../components/events/task.vue';
import TaskMixin from '../components/mixins/task-mixin';
import MenuListTaskItem from '../components/navigation/menu-list-task-item';
import CountBox from '../components/common/count-box';
import { TaskStatus } from '../types/task';
import ToggleButton from '../components/common/toggle-button';
import CreateButton from '../components/common/create-button';

export default {
  components: {
    CreateButton,
    ToggleButton,
    CountBox,
    MenuListTaskItem,
    ImageMenu,
    Page,
    PageHeader,
    Task,
    MenuList
  },
  mixins: [TaskMixin],
  data() {
    return {
      tasks: [],
      counts: [],
      showDone: true
    };
  },
  created() {
    this.fetchTasks();
    this.fetchCounts();
  },
  watch: {
    '$route.query'() {
      this.fetchTasks();
      this.fetchCounts();
    }
  },
  computed: {
    filteredTasks() {
      if (this.showDone) {
        return this.tasks;
      }
      return this.tasks.map(taskList => ({
        ...taskList,
        tasks: c
      }));
    },
    doneCount() {
      return this.tasks.reduce((acc, curr) => {
        return acc + curr.tasks.filter(task => task.status === TaskStatus.DONE).length;
      }, 0);
    },
    undoneCount() {
      return this.tasks.reduce((acc, curr) => {
        return acc + curr.tasks.filter(task => task.status !== TaskStatus.DONE).length;
      }, 0);
    }
  },
  methods: {
    async fetchTasks() {
      this.tasks = await api.tasks.getAll({
        type: this.$route.query.type,
        id: this.$route.query.id
      });
    },
    async fetchCounts() {
      this.counts = await api.tasks.getCounts();
    }
  }
};
</script>

<style scoped lang="scss">
.tasks {
  .task-options {
    display: flex;
    align-items: baseline;
    justify-content: space-around;
  }
}
</style>
