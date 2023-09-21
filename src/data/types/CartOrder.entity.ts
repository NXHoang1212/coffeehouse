export interface CartOrder {
  _id: string;
  NameProduct: string;
  PriceProduct: number;
  SizeProduct: string;
  ToppingProduct: string;
  QuantityProduct: number;
  NoteProduct: string;
  AmountShipping: number;
  UserId: string;
}

export interface GetCartOrder {
  NameProduct: string;
  PriceProduct: number;
  SizeProduct: string;
  ToppingProduct: string;
  QuantityProduct: number;
  NoteProduct: string;
  AmountShipping: number;
  UserId: string;
}

export enum CartStackNames {
  Login = 'Login',
  Cart = 'CartOrder',
  Search = 'SearchOrder',
}

export type CartStackParamList = {
  CartOrder: undefined;
};