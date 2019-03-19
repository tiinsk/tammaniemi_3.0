import { TaskCategory, TaskStatus } from '../types/task';

export default [
  {
    id: 1,
    title: 'Joku lista',
    timestamp: Date.now(),
    creator: {
      id: 1,
      name: 'Jaska Jokunen'
    },
    tasks: [
      {
        id: 1,
        created: Date.now(),
        creator: {
          id: 1,
          name: 'Jaska Jokunen'
        },
        status: TaskStatus.CREATED,
        editor: {
          id: 1,
          name: 'Jaska Jokunen'
        },
        content: 'Lorem ipsum dolor sit amet'
      },
      {
        id: 2,
        created: Date.now(),
        creator: {
          id: 1,
          name: 'Jaska Jokunen'
        },
        status: TaskStatus.CREATED,
        editor: {
          id: 1,
          name: 'Jaska Jokunen'
        },
        content: 'Lorem ipsum'
      },
      {
        id: 3,
        created: Date.now(),
        creator: {
          id: 1,
          name: 'Jaska Jokunen'
        },
        status: TaskStatus.DONE,
        editor: {
          id: 1,
          name: 'Jaska Jokunen'
        },
        content: 'Lorem'
      }
    ]
  },
  {
    id: 2,
    title: 'Joku lista 2',
    timestamp: Date.now(),
    creator: {
      id: 1,
      name: 'Jaska Jokunen'
    },
    tasks: [
      {
        id: 4,
        created: Date.now(),
        creator: {
          id: 1,
          name: 'Jaska Jokunen'
        },
        status: TaskStatus.CREATED,
        editor: {
          id: 1,
          name: 'Jaska Jokunen'
        },
        content: 'Lorem ipsum dolor sit amet 2'
      },
      {
        id: 5,
        created: Date.now(),
        creator: {
          id: 1,
          name: 'Jaska Jokunen'
        },
        status: TaskStatus.CREATED,
        editor: {
          id: 1,
          name: 'Jaska Jokunen'
        },
        content: 'Lorem ipsum 2'
      },
      {
        id: 6,
        created: Date.now(),
        creator: {
          id: 1,
          name: 'Jaska Jokunen'
        },
        status: TaskStatus.CREATED,
        editor: {
          id: 1,
          name: 'Jaska Jokunen'
        },
        content: 'Lorem 2'
      }
    ]
  },
  {
    id: 3,
    title: 'Joku lista 3',
    timestamp: Date.now(),
    creator: {
      id: 1,
      name: 'Jaska Jokunen'
    },
    tasks: [
      {
        id: 7,
        created: Date.now(),
        creator: {
          id: 1,
          name: 'Jaska Jokunen'
        },
        status: TaskStatus.DONE,
        editor: {
          id: 1,
          name: 'Jaska Jokunen'
        },
        content: 'Lorem ipsum dolor sit amet 2'
      },
      {
        id: 8,
        created: Date.now(),
        creator: {
          id: 1,
          name: 'Jaska Jokunen'
        },
        status: TaskStatus.DONE,
        editor: {
          id: 1,
          name: 'Jaska Jokunen'
        },
        content: 'Lorem ipsum 2'
      }
    ]
  }
];

export const counts = [
  {
    count: 1,
    type: TaskCategory.CONTAINS_RECENTLY_MODIFIED
  },
  {
    count: 6,
    type: TaskCategory.CONTAINS_UNDONE,
    undoneCount: 5
  },
  {
    count: 3,
    type: TaskCategory.TASK_LIST,
    id: 1,
    name: 'Joku lista',
    undoneCount: 2,
    doneCount: 1
  },
  {
    count: 3,
    type: TaskCategory.TASK_LIST,
    id: 2,
    name: 'Joku lista 2',
    undoneCount: 3,
    doneCount: 0
  },
  {
    count: 2,
    type: TaskCategory.TASK_LIST,
    id: 3,
    name: 'Joku lista 3',
    undoneCount: 0,
    doneCount: 2
  }
];
