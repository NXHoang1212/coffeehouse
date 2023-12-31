import { NativeStackScreenProps, createNativeStackNavigator, } from '@react-navigation/native-stack';
import HistoryOrder from '../../pages/another/history/HistoryOrder';
import Information from '../../pages/another/employerr/Information';
import Seeting from '../../pages/another/ordinary/Setting';
import Other from '../../pages/another/Other';
import DeepLinkAcount from '../../pages/another/ordinary/DeepLinkAcount';
import { StackEnumOther, StackParamsOther } from '../../data/types/StackOrther';


const OtherStack = createNativeStackNavigator();

const OtherNavigator = (): React.JSX.Element => {
  return (
    <OtherStack.Navigator screenOptions={{ headerShown: false }}>
      <OtherStack.Screen name={StackEnumOther.Another} component={Other} />
      <OtherStack.Screen name={StackEnumOther.General} component={Seeting} />
      <OtherStack.Screen name={StackEnumOther.Link} component={DeepLinkAcount} />
      <OtherStack.Screen name={StackEnumOther.History} component={HistoryOrder} />
      <OtherStack.Screen name={StackEnumOther.User} component={Information} />
    </OtherStack.Navigator>
  );
};

export default OtherNavigator;
