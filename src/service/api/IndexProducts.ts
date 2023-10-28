import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HOST } from '../../constant/Host';
import { ProductGet, Products, DetailProduct } from '../../data/types/Product.entity';
import AxiosInstance from '../../utils/AxiosIntance';


export const ApiProducts = createApi({
    reducerPath: 'apiProducts',
    baseQuery: fetchBaseQuery({ baseUrl: HOST.API }),
    endpoints: build => ({
        getProducts: build.query<{ data: DetailProduct[] }, void>({
            query: () => '/api/users/product'
        }),

        getProductsById: build.query<{ data: Products[] }, string>({
            query: (id) => `/api/users/product/detail/${id}`,
        }),
    }),
});

export const { useGetProductsQuery, useGetProductsByIdQuery } = ApiProducts

