import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

export const useAuth = () => {
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const login = async () => {
        try {
            await AsyncStorage.setItem('isLoggedIn', 'true');
            console.log("🚀 ~ file: UseAuth.tsx:12 ~ login ~ Đăng nhập thành công và đã lưu trạng thái đăng nhập vào AsyncStorage");
            setLoggedIn(true);
        } catch (error) {
            console.error('Lỗi khi lưu trạng thái đăng nhập:', error);
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('isLoggedIn');
            console.log("🚀 ~ file: UseAuth.tsx:22 ~ logout ~ Đăng xuất thành công và đã xóa trạng thái đăng nhập khỏi AsyncStorage");
            setLoggedIn(false);
        } catch (error) {
            console.error('Lỗi khi xóa trạng thái đăng nhập:', error);
        }
    };

    const logoutReduxPersist = async () => {
        try {
            await AsyncStorage.removeItem('root');
            console.log("🚀 ~ file: UseAuth.tsx:22 ~ logout ~ Đăng xuất thành công và đã xóa trạng thái đăng nhập khỏi AsyncStorage");
            setLoggedIn(false);
        } catch (error) {
            console.error('Lỗi khi xóa trạng thái đăng nhập:', error);
        }
    }

    // Hàm kiểm tra trạng thái đăng nhập khi ứng dụng khởi động
    const checkLoginStatus = async () => {
        try {
            const isLoggedInStatus = await AsyncStorage.getItem('isLoggedIn');
            if (isLoggedInStatus === 'true') {
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
            console.log("🚀 ~ file: UseAuth.tsx:37 ~ checkLoginStatus ~ Kiểm tra trạng thái đăng nhập khi ứng dụng khởi động");
        } catch (error) {
            console.error('Lỗi khi kiểm tra trạng thái đăng nhập:', error);
        }
    };

    //gọi ngay lập tức khi component được tạo 
    useEffect(() => {
        checkLoginStatus();
    }, [isFocused]);

    return { isLoggedIn, login, logout, checkLoginStatus, logoutReduxPersist };
};
