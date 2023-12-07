import AxiosInstance from '../../utils/AxiosIntance';
import { HOST } from '../../constant/Host';
import { Order, OrderResponse } from '../../data/types/Order.entity';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ApiOrder = createApi({
  reducerPath: 'ApiOrder',
  baseQuery: fetchBaseQuery({ baseUrl: HOST.API }),
  tagTypes: ['Order'],
  endpoints: build => ({
    GetOrder: build.query<{ data: OrderResponse[] }, string>({
      query: id => `/api/users/orders/GetOrder/${id}`,
      providesTags(result) {
        if (result && Array.isArray(result.data)) {
          const validData = result.data
            .filter(item => item && item._id)
            .map(item => ({ type: 'Order', _id: item._id } as const));
          return [...validData, { type: 'Order', id: 'Order' }];
        }
        return [{ type: 'Order', id: 'Order' }];
      },
    }),
    GetOrderUser: build.query<{ data: OrderResponse[] }, number>({
      query: id => `/api/users/orders/GetAllOrderUser/${id}`,
      providesTags: [{ type: 'Order', id: 'Order' }],
    }),
    createOrder: build.mutation<OrderResponse, Order>({
      query: data => ({
        url: '/api/users/orders/CreateOrder',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{ type: 'Order', id: 'Order' }],
    }),
    updateOrder: build.mutation<Order, OrderResponse>({
      query: data => ({
        url: `/api/users/orders/UpdateOrder/${data._id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: [{ type: 'Order', id: 'Order' }],
    }),
    confimOrder: build.mutation<{ data: OrderResponse }, { id: string, data: any }>({
      query: ({ id, data }) => ({
        url: `/api/users/orders/confirm/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: [{ type: 'Order', id: 'Order' }],
    }),
  }),
});

export const { useGetOrderQuery, useCreateOrderMutation, useUpdateOrderMutation, useGetOrderUserQuery, useConfimOrderMutation } = ApiOrder;


export const updateOrder = async (id: string, data: Order) => {
  try {
    const response = await AxiosInstance().put(`/api/users/orders/UpdatePayment/${id}`, data);
    return response;
  } catch (error: any) {
    console.log(error.message);
  }
};


export const getOrder = async (id: string) => {
  try {
    const response = await AxiosInstance().get(`/api/users/orders/GetOrder/${id}`);
    return response;
  } catch (error: any) {
    console.log(error.message);
  }
}