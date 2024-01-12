import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HOST } from '../../constant/Host';
import { Notification } from '../../data/types/Notication.entity';
import AxiosInstance from '../../utils/AxiosIntance';

export const ApiNotification = createApi({
    reducerPath: 'apiNotification',
    baseQuery: fetchBaseQuery({ baseUrl: HOST.API }),
    tagTypes: ['Notification'],
    endpoints: build => ({
        getNotifications: build.query<Notification[], void>({
            query: () => '/api/users/notification',
            providesTags: ['Notification'],
        }),
        getNotification: build.query<Notification, string>({
            query: id => `/api/users/notification/${id}`,
        }),
    }),
});

export const { useGetNotificationsQuery, useGetNotificationQuery } = ApiNotification;


