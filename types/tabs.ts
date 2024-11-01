export interface Tab {
    id: string;
    title: string;
    status: 'active' | 'pending' | 'completed' | 'default';
    isCloseable: boolean;
    color?: string;
    lightColor?: string;
  }