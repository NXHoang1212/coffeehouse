import auth from '@react-native-firebase/auth';
import { ApiLogin } from '../api/IndexUser';


export const loginSendOtp = async (phone: string, navigation: { navigate: (arg0: string) => void; }) => {
    try {
        const phoneNumber: string = `+84${phone.substring(1)}`;
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        if (confirmation) {
            //@ts-ignore
            navigation.navigate('ConfirmOtpCode', { confirmation: confirmation, phone: phone });
        } else {
            throw new Error('Không thể gửi mã OTP');
        }
    } catch (error: any) {
        console.log("🚀 ~ file: LoginSendOtp.ts ~ line 50 ~ loginSendOtp ~ error", error)
        return error;
    }
}

export const confirmOtp = async (phone: string, navigation: { navigate: (arg0: string) => void; }) => {
    try {
        const confirmation = await auth().verifyPhoneNumber(phone);
        console.log("🚀 ~ file: LoginSendOtp.ts:19 ~ confirmOtp ~ confirmation:", confirmation)
        return confirmation;
    } catch (error: any) {
        console.log("🚀 ~ file: LoginSendOtp.ts ~ line 50 ~ loginSendOtp ~ error", error)
        return error;
    }
}