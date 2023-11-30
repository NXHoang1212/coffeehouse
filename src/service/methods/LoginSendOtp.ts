import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Messenger } from '../../utils/ShowMessage';
import { User } from '../../data/types/User.entity';
import { ApiLogin, ApiUpdateUser } from '../api/IndexUser';
import { setUser } from '../../redux/slices/AuthSlice';

let confirmation: FirebaseAuthTypes.ConfirmationResult | null = null;

export const signInWithPhoneNumber = async (phoneNumber: string, navigation: { navigate: (arg0: string) => void }) => {
  try {
    const phone: string = `+84${phoneNumber.substring(1)}`;
    confirmation = await auth().signInWithPhoneNumber(phone);
    if (confirmation) {
      navigation.navigate('ConfirmOtpCode')
    } else {
      Messenger('Số điện thoại không hợp lệ', 'danger')
    }
  } catch (error) {
    console.error('Error signing in with phone number:', error);
  }
};

export const confirmCode = async (code: string, dispatch: (arg0: { payload: User; type: 'user/setUser' }) => void, mobile: string, navigation: { navigate: (arg0: string) => void }, login: () => void) => {
  try {
    if (confirmation) {
      const otp = await confirmation.confirm(code);
      console.log("🚀 ~ file: LoginSendOtp.ts:27 ~ confirmCode ~ otp:", otp)
      if (otp) {
        const data: any = { mobile: otp.user.phoneNumber };
        const response = await ApiLogin(data);
        const user = { ...response.user };
        dispatch(setUser(user));
        login();
        navigation.navigate(mobile ? 'Trang chủ' : 'InputPhone');
      }
    } else {
      Messenger('Mã OTP không hợp lệ', 'danger')
    }
  } catch (error) {
    console.error('Invalid code:', error);
  }
};

export const ConfirmPhone = async (code: string, navigation: { navigate: (arg0: string) => void }, login: () => void, name: string, id: number) => {
  try {
    if (confirmation) {
      const otp = await confirmation.confirm(code);
      if (otp) {
        const data: any = { mobile: otp.user.phoneNumber };
        const response = await ApiUpdateUser(id, data);
        login();
        navigation.navigate(name ? 'CreateInformation' : 'Trang chủ');
      }
    } else {
      Messenger('Mã OTP không hợp lệ', 'danger')
    }
  } catch (error) {
    console.error('Invalid code:', error);
  }

}

