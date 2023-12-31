import { createNativeStackNavigator, NativeStackScreenProps, } from '@react-navigation/native-stack';
import WebViewUrl from '../../components/redirectUrl/WebView';
import AuthStackNavigate from '../auth/AuthUserNavigate';
import PlayMusic from '../../pages/another/amuse/PlayMusic';
import FeedBackOrder from '../../pages/another/contact/FeedBackOrder';
import ContactFeedBack from '../../pages/another/contact/ContactFeedBack';
import Address from '../../pages/another/addresses/SaveAddress';
import AddAddress from '../../pages/another/addresses/AddAddress';
import EditAddress from '../../pages/another/addresses/EditAddress';
import AboutCoffee from '../../pages/another/ordinary/AboutCoffee';
import MapsAddress from '../../pages/another/addresses/MapsAddress';
import SearchMapAddress from '../../pages/another/addresses/SearchMapAddress';
import Favourites from '../../pages/general/Favourites';
import RankMember from '../../pages/code/RankMember';
import HistoryBean from '../../pages/code/HistoryBean';
import ChangeBean from '../../pages/code/ChangeBean';
import PermissionProfit from '../../pages/code/PermissionProfit';
import DiscountUser from '../../pages/discount/DiscountUser';
import Rules from '../../pages/another/amuse/Rules';
import Notifee from '../../pages/general/Notifee';
import DetailOrder from '../../pages/order/DetailOrder';
import SelectedAddressOrder from '../../pages/cart/SelectedAddressOrder';
import UpdateOrderUser from '../../pages/cart/UpdateOrderUser';
import StatusOrder from '../../pages/another/history/StatusOrder';

const Stack = createNativeStackNavigator();

export type ParamsStack = {
  WebView: {
    name: string;
    url: string;
  };
};

export enum EnumStackNaviagte {
  auth = 'authstack',
  WebView = 'WebViewUrl',
  Favourite = 'Favourites',
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
  Detail = 'DetailOrder',
  map = 'MapsAddress',
  sreachmap = 'SearchMapAddress',
  selected = 'SelectedAddressOrder',
  user = 'UpdateOrderUser',
  statusOrder = 'StatusOrder',
}

const StackHomeNavigate = (): React.JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={EnumStackNaviagte.Detail} component={DetailOrder} />
      <Stack.Screen name={EnumStackNaviagte.WebView} component={WebViewUrl} />
      <Stack.Screen name={EnumStackNaviagte.Favourite} component={Favourites} />
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
      <Stack.Screen name={EnumStackNaviagte.map} component={MapsAddress} />
      <Stack.Screen name={EnumStackNaviagte.sreachmap} component={SearchMapAddress} />
      <Stack.Screen name={EnumStackNaviagte.selected} component={SelectedAddressOrder} />
      <Stack.Screen name={EnumStackNaviagte.user} component={UpdateOrderUser} />
      <Stack.Screen name={EnumStackNaviagte.statusOrder} component={StatusOrder} />
    </Stack.Navigator>
  );
};

export type ParamsUrl = NativeStackScreenProps<ParamsStack, 'WebView'>;

export default StackHomeNavigate;
