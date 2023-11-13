import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {HOST} from '../../constant/Host';
import {Discount} from '../../data/types/Discount.entity';
import AxiosInstance from '../../utils/AxiosIntance';

export const Apidiscount = createApi({
  reducerPath: 'apiDiscount',
  baseQuery: fetchBaseQuery({baseUrl: HOST.API}),
  endpoints: build => ({
    getDiscount: build.query<{data: Discount[]}, void>({
      query: () => '/api/users/discounts/GetPromotion',
    }),
  }),
});

export const {useGetDiscountQuery} = Apidiscount;
