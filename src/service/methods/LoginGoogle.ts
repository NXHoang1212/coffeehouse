import { GoogleSignin, statusCodes, } from '@react-native-google-signin/google-signin';


export const loginGoogle = async () => {
    try {
        GoogleSignin.configure({
            webClientId: '1019108648743-afg6r9l61upb85ejod4608f4jh827c0c.apps.googleusercontent.com',
            scopes: ['email', 'profile'],
            offlineAccess: true,
            forceCodeForRefreshToken: true,
        });
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log("🚀 ~ file: LoginGoogle.ts:8 ~ loginGoogle ~ userInfo", userInfo)
        return userInfo;
    } catch (error: any) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            console.log("🚀 ~ file: LoginGoogle.ts:14 ~ loginGoogle ~ user cancelled the login flow")
        } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
            console.log("🚀 ~ file: LoginGoogle.ts:17 ~ loginGoogle ~ operation (e.g. sign in) is in progress already")
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
            console.log("🚀 ~ file: LoginGoogle.ts:20 ~ loginGoogle ~ play services not available or outdated")
        } else {
            // some other error happened
            console.log("🚀 ~ file: LoginGoogle.ts:23 ~ loginGoogle ~ some other error happened")
        }
    }
};