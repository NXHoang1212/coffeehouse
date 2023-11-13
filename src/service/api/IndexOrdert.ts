import AxiosInstance from '../../utils/AxiosIntance';
import {HOST} from '../../constant/Host';
import {Order, OrderResponse} from '../../data/types/Order.entity';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const ApiOrder = createApi({
  reducerPath: 'ApiOrder',
  baseQuery: fetchBaseQuery({baseUrl: HOST.API}),
  tagTypes: ['Order'],
  endpoints: build => ({
    getOrder: build.query<{data: Order[]}, number>({
      query: id => `/api/users/orders/get/${id}`,
      providesTags: [{type: 'Order', id: 'LIST'}],
    }),
    createOrder: build.mutation<OrderResponse, Order>({
      query: data => ({
        url: '/api/users/orders/Payment',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{type: 'Order', id: 'LIST'}],
    }),
  }),
});

export const {useGetOrderQuery, useCreateOrderMutation} = ApiOrder;
