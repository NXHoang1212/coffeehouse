
export interface Order {
  OrderCart: [
    {
      NameProduct: string,
      PriceProduct: number,
      QuantityProduct: number,
      ToppingProduct: string[],
      SizeProduct: string[],
      NoteProduct: string,
    }
  ]
  user: any;
  address: string;
  note: string;
  promo: number;
  payment: string;
  status: string;
  statusPayment: string;
  reason: string;
}

export declare interface OrderResponse {
  _id: string;
  OrderCart: [
    {
      NameProduct: string,
      PriceProduct: number,
      QuantityProduct: number,
      ToppingProduct: any[],
      SizeProduct: any[],
      NoteProduct: string,
    }
  ]
  user: any;
  address: string;
  note: string;
  promo: string;
  date: Date;
  payment: string;
  TransactionId: string;
  status: string;
  statusPayment: string;
  reason: string;
}


export declare interface GetOrder {
  _id: string;
  OrderCart: [
    {
      NameProduct: string,
      PriceProduct: number,
      QuantityProduct: number,
      ToppingProduct: any[],
      SizeProduct: any[],
      NoteProduct: string,
    }
  ]
  user: any;
  address: string;
  note: string;
  promo: string;
  date: Date;
  payment: string;
  TransactionId: string;
  status: string;
  statusPayment: string;
  reason: string;
}