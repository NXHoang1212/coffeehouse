export interface Order {
  cart: number;
  name: string;
  mobile: string;
  address: string;
  promo: number;
  payment: string;
  status: string;
}

export interface OrderResponse {
  _id: number;
  cart: string;
  name: string;
  mobile: string;
  address: string;
  promo: string;
  date: Date;
  payment: string;
  TransactionId: string;
  status: string;
}
