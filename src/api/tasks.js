import tasks from '../fake-data/tasks';
import { counts } from '../fake-data/tasks';
import { TaskCategory, TaskStatus } from '../types/task';

export default {
  getAll: params => {
    if (params.id) {
      return Promise.resolve(tasks.filter(task => task.id === params.id));
    } else if (params.type === TaskCategory.CONTAINS_UNDONE) {
      return tasks.reduce((acc, curr) => {
        const items = curr.tasks.filter(task => task.status !== TaskStatus.DONE);
        if (items.length > 0) {
          acc.push(curr);
        }
        return acc;
      }, []);
    }
    return Promise.resolve(tasks);
  },
  getCounts: () => {
    return Promise.resolve(counts);
  }
};
