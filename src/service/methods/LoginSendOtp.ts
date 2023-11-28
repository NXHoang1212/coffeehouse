import auth from '@react-native-firebase/auth';


export const loginSendOtp = async (phone: string, navigation: { navigate: (arg0: string) => void }) => {
  try {
    const phoneNumber: string = `+84${phone.substring(1)}`;
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    console.log("🚀 ~ file: LoginSendOtp.ts:8 ~ loginSendOtp ~ confirmation:", confirmation)
    // Tắt reCAPTCHA cho môi trường thử nghiệm
    // auth().settings.appVerificationDisabledForTesting = true;
    if (confirmation) {
      //@ts-ignore
      navigation.navigate('ConfirmOtpCode', { confirm: confirmation });
    } else {
      throw new Error('Không thể gửi mã OTP');
    }
  } catch (error: any) {
    console.log("🚀 ~ file: LoginSendOtp.ts:18 ~ loginSendOtp ~ error:", error)
  }
};

//xác nhận mã otp khi đăng nhập
export const loginConfirmOtp = async (confirm: any, code: string, navigation: { navigate: (arg0: string) => void }) => {
  try {
    const response = await confirm.confirm(code);
    console.log("🚀 ~ file: LoginSendOtp.ts:26 ~ loginConfirmOtp ~ response:", response)
    if (response) {
      //@ts-ignore
      // navigation.navigate('LoginSuccess');
    } else {
      throw new Error('Mã OTP không đúng');
    }
  } catch (error: any) {
    console.log("🚀 ~ file: LoginSendOtp.ts:31 ~ loginConfirmOtp ~ error:", error)
  }
}