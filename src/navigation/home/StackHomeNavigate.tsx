import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import WebViewUrl from "../../components/redirectUrl/WebView";
import Favourites from "../../pages/infatuated/Favourites";
import SearchOrder from "../../pages/order/SearchOrder";


const Stack = createNativeStackNavigator();

export type ParamsStack = {
    WebView: {
        name: string;
        url: string;
    }
};

export enum EnumStackNaviagte {
    WebView = 'WebViewUrl',
    Favourite = 'Favourites',
    Search = 'SearchOrder',
}


const StackHomeNavigate = (): React.JSX.Element => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name={EnumStackNaviagte.WebView} component={WebViewUrl} />
            <Stack.Screen name={EnumStackNaviagte.Favourite} component={Favourites} />
            <Stack.Screen name={EnumStackNaviagte.Search} component={SearchOrder} />
        </Stack.Navigator>
    )
};

export type ParamsUrl = NativeStackScreenProps<ParamsStack, 'WebView'>;
// export type DetailProductScreenProps = NativeStackScreenProps<CartStackParamList, 'CartProduct'>

export default StackHomeNavigate;
