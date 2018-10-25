import posts, {counts} from '../fake-data/posts';

export default {
  getAll: (params) => {
    return Promise.resolve(posts);
  },
  getCounts: () => {
    return Promise.resolve(counts);
  }
};


