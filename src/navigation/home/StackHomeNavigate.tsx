import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import WebViewUrl from "../../components/redirectUrl/WebView";


const Stack = createNativeStackNavigator();

export type ParamsStack = {
    WebView: {
        name: string;
        url: string;
    }
};

export enum EnumStackNaviagte {
    WebView = 'WebViewUrl',
}


const StackHomeNavigate = (): React.JSX.Element => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name={EnumStackNaviagte.WebView} component={WebViewUrl} />
        </Stack.Navigator>
    )
};

export type ParamsUrl = NativeStackScreenProps<ParamsStack, 'WebView'>;
// export type DetailProductScreenProps = NativeStackScreenProps<CartStackParamList, 'CartProduct'>

export default StackHomeNavigate;
