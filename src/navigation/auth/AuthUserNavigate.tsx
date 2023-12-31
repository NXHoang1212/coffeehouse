import { createNativeStackNavigator, NativeStackScreenProps, } from '@react-navigation/native-stack';
import LoginUser from '../../pages/auth/LoginUser';
import InputPhone from '../../pages/auth/InputPhone';
import ConfirmOtpCode from '../../pages/auth/ConfirmOtpCode';
import CreateInformation from '../../pages/auth/CreateInformation';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/Store';

const Stack = createNativeStackNavigator();

export enum AuthEnumStackNavigate {
  Login = 'Login',
  Phone = 'InputPhone',
  Otp = 'ConfirmOtpCode',
  CreateUser = 'CreateInformation',
}

const AuthStackNavigate = (): React.JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AuthEnumStackNavigate.Login} component={LoginUser} />
      <Stack.Screen name={AuthEnumStackNavigate.Phone} component={InputPhone} />
      <Stack.Screen
        name={AuthEnumStackNavigate.Otp}
        component={ConfirmOtpCode}
      />
      <Stack.Screen
        name={AuthEnumStackNavigate.CreateUser}
        component={CreateInformation}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigate;
