export interface CartOrder {
  _id: string;
  UserId: string;
  ProductId: [
    {
      NameProduct: string;
      PriceProduct: string;
      QuantityProduct: string;
      ToppingProduct: string[];
      SizeProduct: string,
      NoteProduct: string;
    }
  ]
}

export interface GetCartOrder {
  _id: string;
  UserId: any;
  ProductId: [
    {
      NameProduct: string;
      PriceProduct: number;
      QuantityProduct: number;
      ToppingProduct: any[];
      SizeProduct: any,
      NoteProduct: string;
    }
  ]
}

export enum CartStackNames {
  Login = 'Login',
  Cart = 'CartOrder',
  Search = 'SearchOrder',
}

export type CartStackParamList = {
  CartOrder: undefined;
};