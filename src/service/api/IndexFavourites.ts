import AxiosInstance from "../../utils/AxiosIntance";
import { GetFarvourites, CreateFavourite } from "../../data/types/Favourite.entity";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HOST } from "../../constant/Host";

export const ApiFavourites = createApi({
    reducerPath: 'ApiFavourites',
    baseQuery: fetchBaseQuery({ baseUrl: HOST.API }),
    tagTypes: ['Favourites'],
    endpoints: build => ({
        getFavourites: build.query<{ data: GetFarvourites[] }, string>({
            query: (id) => `/api/users/favourites/get/${id}`,
        }),
    }),
});

export const { useGetFavouritesQuery } = ApiFavourites;


export const GetApiFavourites = async (id: number) => {
    try {
        const response = await AxiosInstance().get(`/api/users/favourites/get/${id}`);
        return response.data;
    } catch (error: any) {
        console.log("🚀 ~ file: IndexFavourites.ts ~ line 59 ~ ApiLogin ~ error", error)
    }
}


export const CreateFavourites = async (data: CreateFavourite) => {
    try {
        const response = await AxiosInstance().post('/api/users/favourites/create', data);
        return response.data;
    } catch (error: any) {
        console.log("🚀 ~ file: IndexFavourites.ts ~ line 59 ~ ApiLogin ~ error", error)
    }
}


export const DeleteFavourites = async (id: number) => {
    try {
        const response = await AxiosInstance().delete(`/api/users/favourites/delete/${id}`);
        return response.data;
    } catch (error: any) {
        console.log("🚀 ~ file: IndexFavourites.ts ~ line 59 ~ ApiLogin ~ error", error)
    }
}

