import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HOST } from './Host';

const AxiosInstance = (contentType = 'application/json') => {
    const axiosInstance = axios.create({
        baseURL: HOST,
    });
    axiosInstance.interceptors.request.use(
        async (config: any) => {
            const token = await AsyncStorage.getItem('accessToken');
            config.headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'content-Type': contentType,
            }
            return config;
        },
        err => Promise.reject(err)
    );

    axiosInstance.interceptors.response.use(
        res => res.data,
        err => Promise.reject(err)
    );
    return axiosInstance;
};

export default AxiosInstance;