import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HOST } from '../../constant/Host';
import AxiosInstance from '../../utils/AxiosIntance';
import { Banner, Category } from '../../data/types/Banner&Category.entity';

export const ApiBanner = createApi({
    reducerPath: 'apiBanner',
    baseQuery: fetchBaseQuery({ baseUrl: HOST.API }),
    endpoints: build => ({
        getBanner: build.query<{ data: Banner[] }, void>({
            query: () => '/api/users/GetBanner',
        }),
    }),
});

export const { useGetBannerQuery } = ApiBanner;

export const ApiCategory = createApi({
    reducerPath: 'apiCategory',
    baseQuery: fetchBaseQuery({ baseUrl: HOST.API }),
    endpoints: build => ({
        getCategory: build.query<{ data: Category[] }, void>({
            query: () => '/api/users/GetCategory',
        }),
    }),
});

export const { useGetCategoryQuery } = ApiCategory;