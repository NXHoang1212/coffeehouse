import AxiosInstance from "../../utils/AxiosIntance";
import { Favourite, CreateFavourite } from "../../data/types/Favourite.entity";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HOST } from "../../constant/Host";

export const ApiFavourites = createApi({
    reducerPath: 'ApiFavourites',
    baseQuery: fetchBaseQuery({ baseUrl: HOST.API }),
    tagTypes: ['Favourites'],
    endpoints: build => ({
        getFavourites: build.query<{ data: Favourite[] }, number>({
            query: (id) => `/api/users/favourites/get/${id}`,
            providesTags: [{ type: 'Favourites', id: 'LIST' }],
        }),
        createFavourites: build.mutation<Favourite, CreateFavourite>({
            query: (data) => ({
                url: `/api/users/favourites/create`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: [{ type: 'Favourites', id: 'LIST' }],
        }),
        deleteFavourites: build.mutation<Favourite, string>({
            query: (id) => ({
                url: `/api/users/favourites/delete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Favourites', id: 'LIST' }],
        }),
    }),
});

export const { useGetFavouritesQuery, useCreateFavouritesMutation, useDeleteFavouritesMutation } = ApiFavourites;


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

