import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabHomeParamList, TabHomeNavigateEnum, TabHomeNavigateType } from "../../data/types/navigation/TypesTab";
import HomePage from "../../pages/home/HomePage";
import { TabCoffee, Icon } from '../../constant/Icon';
import PromoDiscount from "../../pages/code/PromoDiscount";
import Favourites from "../../pages/infatuated/Favourites";
import Other from "../../pages/another/Other";
import { COLOR } from "../../constant/Color";
import React from "react";
import { Image, StyleSheet } from "react-native";
import CartNavigator from "../cart/TabOrderNavigare";
import { HEIGHT, WIDTH, FONTSIZE } from "../../constant/Responsive";

const BottomTabNavigate = createBottomTabNavigator<TabHomeParamList>();
//tabhomenavigatetype sẽ dùng [] để chứa các tab navigate
const TabHomeNavigate: TabHomeNavigateType[] = [
    {
        component: HomePage,
        name: TabHomeNavigateEnum.HomePage,
        icon: TabCoffee.HOME,
    },
    {
        component: CartNavigator,
        name: TabHomeNavigateEnum.CartOrder,
        icon: TabCoffee.ORDER,
    },
    {
        component: Favourites,
        name: TabHomeNavigateEnum.Favourites,
        icon: TabCoffee.HEART,
    },
    {
        component: PromoDiscount,
        name: TabHomeNavigateEnum.PromoDiscount,
        icon: TabCoffee.DISCOUNT,
    },
    {
        component: Other,
        name: TabHomeNavigateEnum.Other,
        icon: TabCoffee.OTHER,
    }
]

const TabHomeNavigateComponent = () => {
    return (
        <BottomTabNavigate.Navigator
            screenOptions=
            {{
                tabBarActiveTintColor: COLOR.ORANGE,
                tabBarInactiveTintColor: COLOR.GRAY,
                tabBarStyle: styles.bottomBar,
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: FONTSIZE(1.4),
                    fontWeight: 'bold',
                },
            }}
        >
            {TabHomeNavigate.map((item) => (
                <BottomTabNavigate.Screen
                    key={item.name}
                    name={item.name}
                    component={item.component}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={item.icon}
                                style={{
                                    width: 22,
                                    height: 22,
                                    tintColor: focused ? COLOR.ORANGE : COLOR.GRAY,
                                }}
                            />
                        ),
                    }}
                />
            ))}
        </BottomTabNavigate.Navigator>
    )
}

export default TabHomeNavigateComponent;


const styles = StyleSheet.create({
    bottomBar: {
        borderTopWidth: 1,
        borderTopColor: COLOR.GRAY,
    },
});