import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStackNavigate from '../auth/AuthUserNavigate';
import HistoryOrder from '../../pages/another/HistoryOrder';
import Information from '../../pages/another/Information';
import Seeting from '../../pages/another/ordinary/Setting';
import Other from '../../pages/another/Other';
import DeepLinkAcount from '../../pages/another/ordinary/DeepLinkAcount';
import { StackEnumOther, StackParamsOther } from '../../data/types/other/StackOrther';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/Store';

const OtherStack = createNativeStackNavigator();

const OtherNavigator = (): React.JSX.Element => {
    const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
    return (
        <OtherStack.Navigator screenOptions={{ headerShown: false, }}>
            <OtherStack.Screen name={StackEnumOther.Another} component={Other} />
            <OtherStack.Screen name={StackEnumOther.General} component={Seeting} />
            <OtherStack.Screen name={StackEnumOther.Link} component={DeepLinkAcount} />
            <OtherStack.Screen name={StackEnumOther.History} component={isLoggedIn ? HistoryOrder : AuthStackNavigate} />
            <OtherStack.Screen name={StackEnumOther.User} component={isLoggedIn ? Information : AuthStackNavigate} />
        </OtherStack.Navigator>
    );
};



export default OtherNavigator;
