import { GoogleSignin, statusCodes, } from '@react-native-google-signin/google-signin';
import { ApiLogin } from '../api/IndexUser';
import { setUser } from '../../redux/slices/AuthSlice';
import { User } from '../../data/types/auth/User.entity';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginGoogle = async (dispatch: (arg0: { payload: User; type: "user/setUser"; }) => void, navigation: { navigate: (arg0: string) => void; }) => {
    try {
        GoogleSignin.configure({
            webClientId: '1019108648743-afg6r9l61upb85ejod4608f4jh827c0c.apps.googleusercontent.com',
            scopes: ['email', 'profile'],
            offlineAccess: true,
        });
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log("🚀 ~ file: LoginGoogle.ts:15 ~ loginGoogle ~ userInfo:", userInfo.user.email)
        const data: any = {
            googleId: userInfo.user.id,
        }
        const response = await ApiLogin(data);
        // AsyncStorage.setItem('token', response.token);
        console.log("🚀 ~ file: LoginGoogle.ts:17 ~ loginGoogle ~ res", response)
        const user = {
            ...response.user,
            token: userInfo.idToken,
            email: userInfo.user.email,
            name: userInfo.user.givenName,
            holder: userInfo.user.familyName
        }
        dispatch(setUser(user));
        //@ts-ignore
        navigation.navigate('AuthStackUser', { screen: 'InputPhone' });
    } catch (error: any) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log('User cancelled login flow');
        } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log('Operation (e.g. sign in) is in progress already');
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log('Play services not available or outdated');
        } else {
            console.log('Some other error happened:', error);
        }
    }
};