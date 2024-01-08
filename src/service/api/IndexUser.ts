import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HOST } from '../../constant/Host';
import { UpdateUser, User } from '../../data/types/User.entity';
import AxiosInstance from '../../utils/AxiosIntance';
import { UserMethods, UserData } from '../../data/types/User.entity';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ApiUser = createApi({
  reducerPath: 'apiUser',
  baseQuery: fetchBaseQuery({
    baseUrl: HOST.API,
    prepareHeaders: async headers => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${JSON.parse(token)}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: build => ({
    //đây là 1 api endpoint dùng để lấy dữ liệu từ server về client
    getUserId: build.query<{ data: User }, void>({
      query: () => '/api/users/login',
    }),
    getUserById: build.query<{ data: User }, number>({
      query: id => `/api/users/getUserById/${id}`,
      providesTags: (result, error, id) => [{ type: 'User', id: 'LIST' }],
    }),
  }),
});

export const { useGetUserIdQuery, useGetUserByIdQuery } = ApiUser;

export const ApiLogin = async (data: UserMethods) => {
  try {
    const response = await AxiosInstance().post('/api/users/login', data);
    return response.data;
  } catch (error: any) {
    console.log('🚀 ~ file: IndexUser.ts ~ line 59 ~ ApiLogin ~ error', error);
  }
};

export const ApiUpdateUser = async (id: number, data: UpdateUser) => {
  try {
    const response = await AxiosInstance().post(`/api/users/updateUserById/${id}`, data,);
    return response.data;
  } catch (error: any) {
    console.log('🚀 ~ file: IndexUser.ts ~ line 59 ~ ApiLogin ~ error', error);
  }
};

export const ApiGetUserById = async (id: string) => {
  try {
    const response = await AxiosInstance().get(`/api/users/getUserById/${id}`);
    return response.data;
  } catch (error: any) {
    console.log('🚀 ~ file: IndexUser.ts ~ line 59 ~ ApiLogin ~ error', error);
  }
};

export const UploadAvatar = async (id: number, avatar: string) => {
  try {
    const formData = new FormData();
    formData.append('avatar', {
      uri: avatar, // Đường dẫn tới tệp ảnh
      type: 'image/jpeg', // Loại MIME của tệp ảnh
      name: 'avatar.jpg', // Tên tệp ảnh
    });
    const response = await AxiosInstance('multipart/form-data').post(`/api/users/upload-avatar/${id}`, formData);
    console.log('🚀 ~ file: IndexUser.ts:55 ~ UploadAvatar ~ response:', response.data.avatar);
    return response.data.avatar;
  } catch (error: any) {
    console.log('🚀 ~ file: IndexUser.ts ~ line 59 ~ ApiLogin ~ error', error);
  }
};
