import auth from '@react-native-firebase/auth';
import { ApiLogin } from '../api/IndexUser';


export const loginSendOtp = async (phone: string, navigation: { navigate: (arg0: string) => void; }) => {
    try {
       navigation.navigate('ConfirmOtpCode');
    } catch (error: any) {
        console.log("🚀 ~ file: LoginSendOtp.ts ~ line 50 ~ loginSendOtp ~ error", error)
        return error;
    }
}

export const confirmOtp = async (otp: string, navigation: { navigate: (arg0: string) => void; }) => {
    try {
        const confirmation = await auth().verifyPhoneNumber(otp);
        console.log("🚀 ~ file: LoginSendOtp.ts:19 ~ confirmOtp ~ confirmation:", confirmation)
        return confirmation;
    } catch (error: any) {
        console.log("🚀 ~ file: LoginSendOtp.ts ~ line 50 ~ loginSendOtp ~ error", error)
        return error;
    }
}