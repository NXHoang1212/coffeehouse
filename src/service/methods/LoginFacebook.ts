import { LoginManager, AccessToken, Profile } from "react-native-fbsdk-next";
import { ApiLogin } from "../api/IndexUser";
import { setUser } from "../../redux/slices/AuthSlice";
import { User } from "../../data/types/User.entity";

export const loginFacebook = async (dispatch: (arg0: { payload: User; type: "user/setUser"; }) => void, navigation: { navigate: (arg0: string) => void; }, login: () => void) => {
    try {
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
        if (result.isCancelled) {
            console.log('Login cancelled');
        } else {
            const data = await AccessToken.getCurrentAccessToken();
            console.log("🚀 ~ file: LoginFacebook.ts:13 ~ loginFacebook ~ data:", data)
            if (!data) {
                console.log('Something went wrong obtaining access token');
            } else {
                const profile = await Profile.getCurrentProfile();
                console.log("🚀 ~ file: LoginFacebook.ts:20 ~ loginFacebook ~ profile", profile)
                const data: any = {
                    facebookId: profile?.userID
                }
                const response = await ApiLogin(data);
                console.log("🚀 ~ file: LoginFacebook.ts:20 ~ loginFacebook ~ res", response)
                const user = {
                    ...response.user,
                    name: profile?.firstName,
                    holder: profile?.lastName,
                    email: profile?.email
                }
                dispatch(setUser(user));
                login();
                //@ts-ignore
                navigation.navigate('AuthStackUser', { screen: 'InputPhone' });
            }
        }
    } catch (error: any) {
        console.log("🚀 ~ file: LoginFacebook.ts:20 ~ loginFacebook ~ error:", error)
    }
};