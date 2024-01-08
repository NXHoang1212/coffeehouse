import { LoginManager, AccessToken, Profile } from 'react-native-fbsdk-next';
import { ApiLogin } from '../api/IndexUser';
import { setUser } from '../../redux/slices/AuthSlice';
import { User } from '../../data/types/User.entity';
import auth from '@react-native-firebase/auth';
import { Messenger } from '../../utils/ShowMessage';
import { GeneralNotification } from '../../utils/GeneralNotification';

// export const loginFacebook = async (dispatch: (arg0: { payload: User; type: 'user/setUser' }) => void, navigation: { navigate: (arg0: string) => void }, login: () => void) => {
//   try {
//     const result = await LoginManager.logInWithPermissions(['public_profile', 'email',]);
//     if (result.isCancelled) {
//       console.log('Login cancelled');
//     } else {
//       const data = await AccessToken.getCurrentAccessToken();
//       if (!data) {
//         console.log('Something went wrong obtaining access token');
//       } else {
//         const profile = await Profile.getCurrentProfile();
//         const data: any = { facebookId: profile?.userID };
//         const response = await ApiLogin(data);
//         const user = {
//           ...response.user,
//           name: profile?.firstName,
//           holder: profile?.lastName,
//           email: profile?.email,
//         };
//         dispatch(setUser(user));
//         login();
//         //@ts-ignore
//         // navigation.navigate('AuthStackUser', { screen: 'InputPhone' });
//         navigation.navigate(response.users.mobile ? 'Trang chủ' : 'InputPhone');
//       }
//     }
//   } catch (error: any) {
//     console.log('🚀 ~ file: LoginFacebook.ts:20 ~ loginFacebook ~ error:', error,);
//   }
// };



export const loginFacebook = async (dispatch: (arg0: { payload: User; type: 'user/setUser' }) => void, navigation: { navigate: (arg0: string) => void }, login: () => void) => {
  try {
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    const token = await AccessToken.getCurrentAccessToken();
    console.log('data', token);
    if (!token) {
      throw 'Something went wrong obtaining access token';
    }
    const facebookCredential = auth.FacebookAuthProvider.credential(token.accessToken);
    const response = await auth().signInWithCredential(facebookCredential);
    const data: any = { facebookId: response.additionalUserInfo?.profile?.id, avatar: response.user.photoURL };
    const providerLogin = await ApiLogin(data);
    const user = {
      ...providerLogin.user,
      name: response.additionalUserInfo?.profile?.first_name,
      holder: response.additionalUserInfo?.profile?.last_name,
      email: response.additionalUserInfo?.profile?.email,
      avatar: response.user.photoURL,
    };
    if (providerLogin.user.mobile) {
      dispatch(setUser(user));
      login();
      navigation.navigate('Trang chủ');
      GeneralNotification()
    } else {
      dispatch(setUser(user));
      login();
      navigation.navigate('InputPhone');
    }
  } catch (error: any) {
    console.log('🚀 ~ file: LoginFacebook.ts:20 ~ loginFacebook ~ error:', error);
  }
}