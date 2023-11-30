import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Messenger } from '../../utils/ShowMessage';
import { User } from '../../data/types/User.entity';
import { ApiLogin } from '../api/IndexUser';
import { setUser } from '../../redux/slices/AuthSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/Store';

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

export const confirmCode = async (code: string, dispatch: (arg0: { payload: User; type: 'user/setUser' }) => void, navigation: { navigate: (arg0: string) => void }, login: () => void, mobile: string) => {
  try {
    if (confirmation) {
      const otp = await confirmation.confirm(code);
      if (otp) {
        const data: any = { mobile: otp.user.phoneNumber };
        const response = await ApiLogin(data);
        const user = { ...response.user};
        dispatch(setUser(user));
        login();
        navigation.navigate(mobile ? 'Trang chủ' : 'CreateInformation');
      }
    } else {
      Messenger('Mã OTP không hợp lệ', 'danger')
    }
  } catch (error) {
    console.error('Invalid code:', error);
  }
};

