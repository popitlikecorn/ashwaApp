export interface Driver {
  id: string;
  name: string;
  route: string;
  seats: string;
  fee: number;
  distance: number;
  pickupTime: string;
}

export interface Notification {
  message: string;
  type: 'success' | 'warning';
}
