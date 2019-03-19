import { TaskCategory } from '../../types/task';

export default {
  computed: {},
  methods: {
    $categoryName(category) {
      if (category.type === TaskCategory.TASK_LIST) {
        return category.name;
      } else if (category.type === TaskCategory.CONTAINS_UNDONE) {
        return 'Kaikki avoimet';
      } else if (category.type === TaskCategory.CONTAINS_RECENTLY_MODIFIED) {
        return 'Viimeksi muokatut';
      }
    }
  }
};
