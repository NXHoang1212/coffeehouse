import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import LoginUser from "../../pages/auth/LoginUser";

const Stack = createNativeStackNavigator();


export enum AuthEnumStackNavigate {
    Login = 'Login',

}


const AuthStackNavigate = (): React.JSX.Element => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name={AuthEnumStackNavigate.Login} component={LoginUser} />
        </Stack.Navigator>
    )
};

export default AuthStackNavigate;
