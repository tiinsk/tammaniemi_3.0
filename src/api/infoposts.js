import infoposts, {counts} from '../fake-data/infoposts';

export default {
  getAll: (params) => {
    return Promise.resolve(infoposts.filter(item => item.category === params.category));
  },
  getCounts: () => {
    return Promise.resolve(counts);
  }
};


