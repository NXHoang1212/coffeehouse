export interface CartOrder {
  _id: string;
  UserId: string;
  ProductId: [
    {
      _id: string;
      ProductId: string;
      NameProduct: string;
      PriceProduct: number;
      QuantityProduct: number;
      ToppingProduct: any[];
      SizeProduct: any,
      NoteProduct: string;
    }
  ]
}

export interface GetCartOrder {
  _id: number;
  UserId: any;
  ProductId: [
    {
      _id: string;
      ProductId: string;
      NameProduct: string;
      PriceProduct: number;
      QuantityProduct: number;
      ToppingProduct: any[];
      SizeProduct: any,
      NoteProduct: string;
    }
  ]
}

export interface UpdateCartOrder {
  UserId: string;
  ProductId: [
    {
      ProductId: string;
      NameProduct: string;
      PriceProduct: number;
      QuantityProduct: number;
      ToppingProduct: any[];
      SizeProduct: any,
      NoteProduct: string;
    }
  ]
}

export interface DetailProductOrder {
  UserId: string;
  ProductId: [
    {
      _id: string;
      ProductId: string;
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