import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HOST } from '../../constant/Host';
import { UpdateUser, User } from '../../data/types/auth/User.entity';
import AxiosInstance from '../../utils/AxiosIntance';
import { UserMethods, UserData } from '../../data/types/auth/User.entity';


export const ApiUser = createApi({
    reducerPath: 'apiUser',
    baseQuery: fetchBaseQuery({ baseUrl: HOST.API }),
    endpoints: build => ({
        //đây là 1 api endpoint dùng để lấy dữ liệu từ server về client 
        getUserId: build.query<{ data: User }, void>({
            query: () => '/api/users/login',
        }),
    }),
});

export const { useGetUserIdQuery } = ApiUser


export const ApiLogin = async (data: UserMethods) => {
    try {
        const response = await AxiosInstance().post('/api/users/login', data);
        return response.data;
    } catch (error: any) {
        console.log("🚀 ~ file: IndexUser.ts ~ line 59 ~ ApiLogin ~ error", error)
    }
}



export const ApiUpdateUser = async (id: string, data: UpdateUser) => {
    try {
        const response = await AxiosInstance().post(`/api/users/updateUserById/${id}`, data);
        return response;
    } catch (error: any) {
        console.log("🚀 ~ file: IndexUser.ts ~ line 59 ~ ApiLogin ~ error", error)
    }
}

export const ApiGetUserById = async (id: string) => {
    try {
        const response = await AxiosInstance().get(`/api/users/getUserById/${id}`);
        return response.data;
    } catch (error: any) {
        console.log("🚀 ~ file: IndexUser.ts ~ line 59 ~ ApiLogin ~ error", error)
    }
}

