import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StackHomeNavigateTypeParam, StackHomeNavigateNameEnum } from "../../data/types/navigation/TypeStack";
import StackHomeNavigateComponent from "../home/StackHomeNavigate";
import TabHomeNavigate from "../home/TabHomeNavigate";
import StackHomeNavigate from "../home/StackHomeNavigate";


const Stack = createNativeStackNavigator<StackHomeNavigateTypeParam>();


const AppNavigate = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={StackHomeNavigateNameEnum.TabHomePage} component={TabHomeNavigate} />
                <Stack.Screen name={StackHomeNavigateNameEnum.StackHomeUrl} component={StackHomeNavigateComponent} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigate