import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import AxiosInstance from "../../utils/AxiosIntance";
import { HOST } from "../../constant/Host";
import { CartOrder, GetCartOrder } from '../../data/types/CartOrder.entity';


export const ApiCart = createApi({
    reducerPath: 'ApiCart',
    baseQuery: fetchBaseQuery({ baseUrl: HOST.API }),
    endpoints: build => ({
        getCart: build.query<{ data: CartOrder[] }, string>({
            query: (id) => `/api/users/cart/getCard/${id}`,
        }),
    }),
});

export const { useGetCartQuery } = ApiCart;

export const GetApiCart = async (id: number) => {
    try {
        const response = await AxiosInstance().get(`/api/users/cart/getCard/${id}`);
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


export const UpdateCart = async (id: number, data: GetCartOrder) => {
    try {
        const response = await AxiosInstance().post(`/api/users/cart/UpdateCart/${id}`, data);
        return response.data;
    } catch (error: any) {
        console.log("🚀 ~ file: IndexAddress.ts ~ line 59 ~ ApiLogin ~ error", error)
    }
};


export const DeleteCart = async (id: number) => {
    try {
        const response = await AxiosInstance().delete(`/api/users/delete/${id}`);
        return response.data;
    } catch (error: any) {
        console.log("🚀 ~ file: IndexAddress.ts ~ line 59 ~ ApiLogin ~ error", error)
    }
};


