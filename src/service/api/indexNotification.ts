import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HOST } from '../../constant/Host';
import { Notification } from '../../data/types/Notication.entity';
import AxiosInstance from '../../utils/AxiosIntance';

export const ApiNotification = createApi({
    reducerPath: 'apiNotification',
    baseQuery: fetchBaseQuery({ baseUrl: HOST.API }),
    endpoints: build => ({
        getNotifications: build.query<Notification[], void>({
            query: () => ({
                url: `/notification`,
                method: 'GET',
            }),
        }),
        getNotification: build.query<Notification, string>({
            query: id => ({
                url: `/notification/${id}`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetNotificationsQuery, useGetNotificationQuery } = ApiNotification;


