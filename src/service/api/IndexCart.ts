import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import AxiosInstance from '../../utils/AxiosIntance';
import {HOST} from '../../constant/Host';
import {
  CartOrder,
  GetCartOrder,
  UpdateCartOrder,
} from '../../data/types/CartOrder.entity';

export const ApiCart = createApi({
  reducerPath: 'ApiCart',
  baseQuery: fetchBaseQuery({baseUrl: HOST.API}),
  tagTypes: ['CartOrder'],
  endpoints: build => ({
    getCart: build.query<{data: CartOrder[]}, number>({
      query: id => `/api/users/cart/getCart/${id}`,
      providesTags(result) {
        if (result && Array.isArray(result.data)) {
          const validData = result.data
            .filter(item => item && item._id)
            .map(item => ({type: 'CartOrder', _id: item._id} as const));
          return [...validData, {type: 'CartOrder', id: 'CART'}];
        }
        return [{type: 'CartOrder', id: 'CART'}];
      },
    }),
    CreateEmptyCart: build.mutation<{data: CartOrder}, CartOrder>({
      query: data => ({
        url: '/api/users/cart/create',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{type: 'CartOrder', id: 'CART'}],
    }),
    UpdateCart: build.mutation<
      {data: CartOrder},
      {id: number; ProductId: number; data: UpdateCartOrder}
    >({
      query: ({id, ProductId, data}) => ({
        url: `/api/users/cart/update/${id}/${ProductId}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{type: 'CartOrder', id: 'CART'}],
    }),
    UpdateStatus: build.mutation<{data: CartOrder}, number>({
      query: id => ({
        url: `/api/users/cart/updateStatus/${id}`,
        method: 'POST',
        body: id,
      }),
      invalidatesTags: [{type: 'CartOrder', id: 'CART'}],
    }),
    DeleteCartProductId: build.mutation<
      {data: CartOrder},
      {id: number; ProductId: number}
    >({
      query: ({id, ProductId}) => ({
        url: `/api/users/cart/delete/${id}/${ProductId}`,
        method: 'DELETE',
        body: {id, ProductId},
      }),
      invalidatesTags: [{type: 'CartOrder', id: 'CART'}],
    }),
    DeleteAllCart: build.mutation<{data: CartOrder}, number>({
      query: id => ({
        url: `/api/users/cart/deleteAll/${id}`,
        method: 'DELETE',
        body: {id},
      }),
      invalidatesTags: [{type: 'CartOrder', id: 'CART'}],
    }),
  }),
});

export const {
  useGetCartQuery,
  useCreateEmptyCartMutation,
  useUpdateCartMutation,
  useDeleteCartProductIdMutation,
  useDeleteAllCartMutation,
  useUpdateStatusMutation,
} = ApiCart;

export const GetApiCart = async (id: number) => {
  try {
    const response = await AxiosInstance().get(`/api/users/cart/getCart/${id}`);
    return response.data;
  } catch (error: any) {
    console.log(
      '🚀 ~ file: IndexAddress.ts ~ line 59 ~ ApiLogin ~ error',
      error,
    );
  }
};

export const CreateEmptyCart = async (data: CartOrder) => {
  try {
    const response = await AxiosInstance().post('/api/users/cart/create', data);
    return response.data;
  } catch (error: any) {
    console.log(
      '🚀 ~ file: IndexAddress.ts ~ line 59 ~ ApiLogin ~ error',
      error,
    );
  }
};

export const UpdateCart = async (
  id: number,
  productId: number,
  data: UpdateCartOrder,
) => {
  try {
    const response = await AxiosInstance().post(
      `/api/users/cart/update/${id}/${productId}`,
      data,
    );
    console.log(
      '🚀 ~ file: IndexAddress.ts ~ line 59 ~ ApiLogin ~ response',
      response,
    );
    return response.data;
  } catch (error: any) {
    console.log(
      '🚀 ~ file: IndexAddress.ts ~ line 59 ~ ApiLogin ~ error',
      error,
    );
  }
};

export const DeleteCartProductId = async (id: number, productId: number) => {
  try {
    const response = await AxiosInstance().delete(
      `/api/users/cart/delete/${id}/${productId}`,
    );
    console.log(
      '🚀 ~ file: IndexAddress.ts ~ line 59 ~ ApiLogin ~ response',
      response,
    );
    return response.data;
  } catch (error: any) {
    console.log(
      '🚀 ~ file: IndexAddress.ts ~ line 59 ~ ApiLogin ~ error',
      error,
    );
  }
};

export const DeleteAllCart = async (id: number) => {
  try {
    const response = await AxiosInstance().delete(
      `/api/users/cart/deleteAll/${id}`,
    );
    return response.data;
  } catch (error: any) {
    console.log(
      '🚀 ~ file: IndexAddress.ts ~ line 59 ~ ApiLogin ~ error',
      error,
    );
  }
};

export const UpdateStatus = async (id: number) => {
  try {
    const response = await AxiosInstance().post(
      `/api/users/cart/updateStatus/${id}`,
    );
    return response.data;
  } catch (error: any) {
    console.log(
      '🚀 ~ file: IndexAddress.ts ~ line 59 ~ ApiLogin ~ error',
      error.response.data,
    );
  }
};
