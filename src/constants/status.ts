export const STATUS_CONFIG = {
    active: {
      message: 'Action required',
      color: '#FF9999',
      lightColor: '#FFE0E0'
    },
    pending: {
      message: 'In progress',
      color: '#FFB366',
      lightColor: '#FFF0E0'
    },
    completed: {
      message: 'Task completed',
      color: '#99FF99',
      lightColor: '#E0FFE0'
    },
    default: {
      message: 'No active tasks',
      color: '#D1D5DB',
      lightColor: '#F3F4F6'
    }
  } as const;