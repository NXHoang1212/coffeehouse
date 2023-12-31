import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AddRess, CreateAddRess } from '../../data/types/AddRess.entity';
import AxiosInstance from '../../utils/AxiosIntance';
import { HOST } from '../../constant/Host';

export const ApiAddress = createApi({
  reducerPath: 'apiAddress',
  baseQuery: fetchBaseQuery({ baseUrl: HOST.API }),
  endpoints: build => ({
    getAddressId: build.query<{ data: AddRess[] }, number>({
      query: id => `/api/address/GetAddress/${id}`,
    }),
  }),
});

export const { useGetAddressIdQuery } = ApiAddress;

export const GetApiAddress = async (id: string) => {
  try {
    const response = await AxiosInstance().get(`/api/address/GetAddress/${id}`);
    return response.data;
  } catch (error: any) {
    console.log(
      '🚀 ~ file: IndexAddress.ts ~ line 59 ~ ApiLogin ~ error',
      error,
    );
  }
};

export const CreateAddress = async (data: CreateAddRess) => {
  try {
    const response = await AxiosInstance().post('/api/address/create', data);
    return response.data;
  } catch (error: any) {
    console.log(
      '🚀 ~ file: IndexAddress.ts ~ line 59 ~ ApiLogin ~ error',
      error,
    );
  }
};

export const UpdateAddress = async (id: string, data: AddRess) => {
  try {
    const response = await AxiosInstance().post(
      `/api/address/update/${id}`,
      data,
    );
    return response.data;
  } catch (error: any) {
    console.log(
      '🚀 ~ file: IndexAddress.ts ~ line 59 ~ ApiLogin ~ error',
      error,
    );
  }
};

export const DeleteAddress = async (id: string) => {
  try {
    const response = await AxiosInstance().delete(`/api/address/delete/${id}`);
    return response.data;
  } catch (error: any) {
    console.log(
      '🚀 ~ file: IndexAddress.ts ~ line 59 ~ ApiLogin ~ error',
      error,
    );
  }
};
