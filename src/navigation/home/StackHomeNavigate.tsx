import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import WebViewUrl from "../../components/redirectUrl/WebView";
import Favourites from "../../pages/infatuated/Favourites";
import SearchOrder from "../../pages/order/SearchOrder";
import RankMember from "../../pages/code/RankMember";
import HistoryBean from "../../pages/code/HistoryBean";
import ChangeBean from "../../pages/code/ChangeBean";
import PermissionProfit from "../../pages/code/PermissionProfit";
import DiscountUser from "../../pages/discount/DiscountUser";
import Rules from "../../pages/another/Rules";
import PlayMusic from "../../pages/another/PlayMusic";
import FeedBackOrder from "../../pages/another/FeedBackOrder";
import ContactFeedBack from "../../pages/another/ContactFeedBack";
import Address from "../../pages/another/addresses/SaveAddress";
import AddAddress from "../../pages/another/addresses/AddAddress";
import EditAddress from "../../pages/another/addresses/EditAddress";
import AboutCoffee from "../../pages/another/ordinary/AboutCoffee";
import Notifee from "../../pages/general/Notifee";

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
    Rank = 'RankMember',
    History = 'HistoryBean',
    Change = 'ChangeBean',
    Permission = 'PermissionProfit',
    Discount = 'DiscountUser',
    Ru = 'Rules',
    Music = 'PlayMusic',
    FeedBack = 'FeedBackOrder',
    Contact = 'ContactFeedBack',
    Save = 'SaveAddress',
    Add = 'AddAddress',
    Edit = 'EditAddress',
    About = 'AboutCoffee',
    Notication = 'Notifee',
}


const StackHomeNavigate = (): React.JSX.Element => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name={EnumStackNaviagte.WebView} component={WebViewUrl} />
            <Stack.Screen name={EnumStackNaviagte.Favourite} component={Favourites} />
            <Stack.Screen name={EnumStackNaviagte.Search} component={SearchOrder} />
            <Stack.Screen name={EnumStackNaviagte.Rank} component={RankMember} />
            <Stack.Screen name={EnumStackNaviagte.History} component={HistoryBean} />
            <Stack.Screen name={EnumStackNaviagte.Change} component={ChangeBean} />
            <Stack.Screen name={EnumStackNaviagte.Permission} component={PermissionProfit} />
            <Stack.Screen name={EnumStackNaviagte.Discount} component={DiscountUser} />
            <Stack.Screen name={EnumStackNaviagte.Ru} component={Rules} />
            <Stack.Screen name={EnumStackNaviagte.Music} component={PlayMusic} />
            <Stack.Screen name={EnumStackNaviagte.FeedBack} component={FeedBackOrder} />
            <Stack.Screen name={EnumStackNaviagte.Contact} component={ContactFeedBack} />
            <Stack.Screen name={EnumStackNaviagte.Save} component={Address} />
            <Stack.Screen name={EnumStackNaviagte.Add} component={AddAddress} />
            <Stack.Screen name={EnumStackNaviagte.Edit} component={EditAddress} />
            <Stack.Screen name={EnumStackNaviagte.About} component={AboutCoffee} />
            <Stack.Screen name={EnumStackNaviagte.Notication} component={Notifee} />
        </Stack.Navigator>
    )
};

export type ParamsUrl = NativeStackScreenProps<ParamsStack, 'WebView'>;

export default StackHomeNavigate;
