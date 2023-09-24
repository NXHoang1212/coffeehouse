import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HOST } from '../../constant/Host';
import { ProductGet, Products, DetailProduct } from '../../data/types/Product.entity';
import AxiosInstance from '../../utils/AxiosIntance';


export const ApiProducts = createApi({
    reducerPath: 'apiProducts',
    baseQuery: fetchBaseQuery({ baseUrl: HOST.API }),
    endpoints: build => ({
        //đây là 1 api endpoint dùng để lấy dữ liệu từ server về client 
        //void được dùng khi không có tham số truyền vào
        getProducts: build.query<{ data: DetailProduct[] }, void>({
            query: () => '/api/users/product'
        }),

        getProductsById: build.query<{ data: Products[] }, string>({
            query: (id) => `/api/users/product/detail/${id}`,
        }),
    }),
});

export const { useGetProductsQuery, useGetProductsByIdQuery } = ApiProducts



// export const getProducts = async () => {
//     const res = await AxiosInstance().get('/api/users/product');
//     return res.data;
// }   