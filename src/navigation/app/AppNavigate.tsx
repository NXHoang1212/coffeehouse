import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TabHomeNavigateComponent from "../home/TabHomeNavigate";
import { StackHomeNavigateTypeParam, StackHomeNavigateNameEnum } from "../../data/types/navigation/TypeStack";


const Stack = createNativeStackNavigator<StackHomeNavigateTypeParam>();


const AppNavigate = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={StackHomeNavigateNameEnum.HomePage} component={TabHomeNavigateComponent} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigate