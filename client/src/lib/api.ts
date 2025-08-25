import { API_BASE } from './config';

export const api = {
  welcome: async () => {
    const response = await fetch(`${API_BASE}/api/welcome`);
    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.error || 'Request failed');
    }
    
    return data.data;
  },
};
