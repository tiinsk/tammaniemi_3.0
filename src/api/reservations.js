import reservations, {counts} from '../fake-data/reservations';

export default {
  getAll: (params) => {
    return Promise.resolve(reservations);
  }
};


