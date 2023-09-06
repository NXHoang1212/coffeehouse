export interface ProductCart {
  _id: string;
  name: string;
  photo: string;
  price: number;
  weight: number;
  category_id?: string;
  count: number;
  buycount?: number;
}

export enum CartStackNames {
  Login = 'Login',
  Cart = 'CartOrder',
  Search = 'SearchOrder',
  DetailOrder = 'DetailOrder',
}

export type CartStackParamList = {
  CartOrder: undefined;
  CartProduct: ProductCart;
};