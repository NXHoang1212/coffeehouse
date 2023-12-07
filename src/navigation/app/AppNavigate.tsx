import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StackHomeNavigateTypeParam, StackHomeNavigateNameEnum, } from '../../data/types/TypeStack';
import StackHomeNavigateComponent, { EnumStackNaviagte, } from '../home/StackHomeNavigate';
import TabHomeNavigate from '../home/TabHomeNavigate';
import AuthStackNavigate from '../auth/AuthUserNavigate';
import SlashWellcome from '../../pages/slash/SlashWellcome';

const Stack = createNativeStackNavigator<StackHomeNavigateTypeParam>();

const AppNavigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={StackHomeNavigateNameEnum.slash}>
        <Stack.Screen
          name={StackHomeNavigateNameEnum.slash}
          component={SlashWellcome}
        />
        <Stack.Screen
          name={StackHomeNavigateNameEnum.TabHomePage}
          component={TabHomeNavigate}
        />
        <Stack.Screen
          name={StackHomeNavigateNameEnum.StackHomeUrl}
          component={StackHomeNavigateComponent}
        />
        <Stack.Screen
          name={StackHomeNavigateNameEnum.AuthStackUser}
          component={AuthStackNavigate}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigate;
