import auth from '@react-native-firebase/auth';


export const loginSendOtp = async (phone: string) => {
    try {
       //định dạng số điện thoại
        const phoneNumber = `+84${phone.substring(1)}`;
        //gửi mã otp
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        console.log("🚀 ~ file: LoginSendOtp.ts:10 ~ loginSendOtp ~ confirmation:", confirmation.verificationId)
        return confirmation;
    } catch (error: any) {
        console.log("🚀 ~ file: LoginSendOtp.ts ~ line 50 ~ loginSendOtp ~ error", error)
        return error;
    }
}