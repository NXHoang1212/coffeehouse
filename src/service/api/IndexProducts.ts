import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HOST } from '../../constant/Host';
import { Products } from '../../data/types/product/Product.entity';


export const ApiProducts = createApi({
    reducerPath: 'apiProducts',
    baseQuery: fetchBaseQuery({ baseUrl: HOST.API }),
    endpoints: build => ({
        //đây là 1 api endpoint dùng để lấy dữ liệu từ server về client 
        getProducts: build.query<{ data: Products[] }, void>({
            query: () => '/api/users/product',
        }),

        getProductsById: build.query<{ data: Products }, string>({
            query: (id) => `/api/users/product/detail/${id}`,
        }),
    }),
});

export const { useGetProductsQuery, useGetProductsByIdQuery } = ApiProducts