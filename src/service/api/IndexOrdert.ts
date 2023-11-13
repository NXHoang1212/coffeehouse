import AxiosInstance from '../../utils/AxiosIntance';
import { HOST } from '../../constant/Host';
import { Order, OrderResponse } from '../../data/types/Order.entity';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ApiOrder = createApi({
  reducerPath: 'ApiOrder',
  baseQuery: fetchBaseQuery({ baseUrl: HOST.API }),
  tagTypes: ['Order'],
  endpoints: build => ({
    GetOrder: build.query<{ data: OrderResponse[] }, number>({
      query: id => `/api/users/orders/GetPayment/${id}`,
      providesTags: result =>
        result
          ? [
            ...result.data.map(({ _id }) => ({ type: 'Order', _id } as const)),
            { type: 'Order', id: 'LIST' },
          ]
          : [{ type: 'Order', id: 'LIST' }],
    }),
    createOrder: build.mutation<OrderResponse, Order>({
      query: data => ({
        url: '/api/users/orders/Payment',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{ type: 'Order', id: 'LIST' }],
    }),
  }),
});

export const { useGetOrderQuery, useCreateOrderMutation } = ApiOrder;
