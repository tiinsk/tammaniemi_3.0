import posts, { counts } from '../fake-data/posts';

export default {
  getAll: params => {
    console.log(params);
    return Promise.resolve(posts);
  },
  getCounts: () => {
    return Promise.resolve(counts);
  }
};
