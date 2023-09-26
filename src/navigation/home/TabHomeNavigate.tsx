import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabHomeParamList, TabHomeNavigateEnum, TabHomeNavigateType } from "../../data/types/TypesTab";
import HomePage from "../../pages/home/HomePage";
import { TabCoffee } from '../../constant/Icon';
import PromoDiscount from "../../pages/code/PromoDiscount";
import Other from "../../pages/another/Other";
import { COLOR } from "../../constant/Color";
import React from "react";
import { Image, StyleSheet } from "react-native";
import CartNavigator from "../cart/TabOrderNavigare";
import { HEIGHT, WIDTH, FONTSIZE } from "../../constant/Responsive";
import Order from "../../pages/cart/Order";
import OtherNavigator from "../other/TabOtherNavigate";
import { useState } from "react";

const BottomTabNavigate = createBottomTabNavigator<TabHomeParamList>();
//tabhomenavigatetype sẽ dùng [] để chứa các tab navigate
const TabNavigate: TabHomeNavigateType[] = [
    {
        component: HomePage,
        name: TabHomeNavigateEnum.HomePage,
        icon: TabCoffee.HOME,
    },
    {
        component: CartNavigator,
        name: TabHomeNavigateEnum.Order,
        icon: TabCoffee.ORDER,
    },
    {
        component: Order,
        name: TabHomeNavigateEnum.Cart,
        icon: TabCoffee.CART,
    },
    {
        component: PromoDiscount,
        name: TabHomeNavigateEnum.PromoDiscount,
        icon: TabCoffee.DISCOUNT,
    },
    {
        component: OtherNavigator,
        name: TabHomeNavigateEnum.Other,
        icon: TabCoffee.OTHER,
    }
]

const TabHomeNavigate = () => {
    return (
        <BottomTabNavigate.Navigator
            screenOptions=
            {{
                tabBarHideOnKeyboard: true,
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
            {TabNavigate.map((item) => (
                <BottomTabNavigate.Screen
                    key={item.name}
                    name={item.name}
                    component={item.component}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={item.icon}
                                style={{
                                    width: 24,
                                    height: 24,
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

export default TabHomeNavigate;


const styles = StyleSheet.create({
    bottomBar: {
        borderTopWidth: 1,
        borderTopColor: COLOR.GRAY,
        height: HEIGHT(6.3),
    },
});