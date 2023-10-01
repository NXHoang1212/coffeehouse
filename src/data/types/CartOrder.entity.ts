export interface CartOrder {
  _id: string;
  NameProduct: string;
  PriceProduct: string;
  SizeProduct: string[];
  ToppingProduct: string[];
  QuantityProduct: string;
  NoteProduct: string;
  AmountShipping: string;
  UserId: string;
}

export interface GetCartOrder {
  NameProduct: string;
  PriceProduct: number;
  SizeProduct: string[];
  ToppingProduct: string[];
  QuantityProduct: string;
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