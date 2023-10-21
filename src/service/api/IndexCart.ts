import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import AxiosInstance from "../../utils/AxiosIntance";
import { HOST } from "../../constant/Host";
import { CartOrder, GetCartOrder, UpdateCartOrder } from '../../data/types/CartOrder.entity';


export const ApiCart = createApi({
    reducerPath: 'ApiCart',
    baseQuery: fetchBaseQuery({ baseUrl: HOST.API }),
    tagTypes: ['ApiCart'],
    endpoints: build => ({
        getCart: build.query<{ data: CartOrder[] }, string>({
            query: (id) => `/api/users/cart/getCart/${id}`,
            // providesTags: (result) =>
            //     result
            //         ? [
            //             ...result.data.map(({ id }) => ({ type: 'ApiCart', id })),
            //             { type: 'ApiCart', id: 'LIST' },
            //         ]
            //         : [{ type: 'ApiCart', id: 'LIST' }],
            
        }),
        detailCart: build.query<{ data: GetCartOrder[] }, { id: number, productId: number }>({
            query: ({ id, productId }) => `/api/users/cart/detailCart/${id}/${productId}`,
        }),
        updateCart: build.mutation<UpdateCartOrder, { id: number, productId: number, data: UpdateCartOrder }>({
            query: ({ id, productId, data }) => ({
                url: `/api/users/cart/update/${id}/${productId}`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['ApiCart'],
        }),
    }),
});

export const { useGetCartQuery, useDetailCartQuery, useUpdateCartMutation } = ApiCart;

export const GetApiCart = async (id: number) => {
    try {
        const response = await AxiosInstance().get(`/api/users/cart/getCart/${id}`);
        return response.data;
    } catch (error: any) {
        console.log("🚀 ~ file: IndexAddress.ts ~ line 59 ~ ApiLogin ~ error", error)
    }
}


export const CreateEmptyCart = async (data: CartOrder) => {
    try {
        const response = await AxiosInstance().post('/api/users/cart/create', data);
        return response.data;
    } catch (error: any) {
        console.log("🚀 ~ file: IndexAddress.ts ~ line 59 ~ ApiLogin ~ error", error)
    }
};


export const UpdateCart = async (id: number, productId: number, data: UpdateCartOrder) => {
    try {
        const response = await AxiosInstance().post(`/api/users/cart/update/${id}/${productId}`, data);
        console.log("🚀 ~ file: IndexAddress.ts ~ line 59 ~ ApiLogin ~ response", response)
        return response.data;
    } catch (error: any) {
        console.log("🚀 ~ file: IndexAddress.ts ~ line 59 ~ ApiLogin ~ error", error)
    }
};


export const DeleteCartProductId = async (id: number, productId: number) => {
    try {
        const response = await AxiosInstance().delete(`/api/users/cart/delete/${id}/${productId}`);
        console.log("🚀 ~ file: IndexAddress.ts ~ line 59 ~ ApiLogin ~ response", response)
        return response.data;
    } catch (error: any) {
        console.log("🚀 ~ file: IndexAddress.ts ~ line 59 ~ ApiLogin ~ error", error)
    }
};


export const DeleteAllCart = async (id: number) => {
    try {
        const response = await AxiosInstance().delete(`/api/users/cart/deleteAll/${id}`);
        return response.data;
    } catch (error: any) {
        console.log("🚀 ~ file: IndexAddress.ts ~ line 59 ~ ApiLogin ~ error", error)
    }
}


