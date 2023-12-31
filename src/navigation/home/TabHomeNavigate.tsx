import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect, useState } from 'react';
import { TabHomeParamList, TabHomeNavigateEnum, TabHomeNavigateType, } from '../../data/types/TypesTab';
import HomePage from '../../pages/home/HomePage';
import { TabCoffee } from '../../constant/Icon';
import PromoDiscount from '../../pages/code/PromoDiscount';
import { COLOR } from '../../constant/Color';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import CartNavigator from '../cart/TabOrderNavigare';
import { HEIGHT, WIDTH, FONTSIZE } from '../../constant/Responsive';
import OtherNavigator from '../other/TabOtherNavigate';
import Order from '../../pages/cart/Order';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/Store';
import { useGetCartQuery } from '../../service/api/IndexCart';

const BottomTabNavigate = createBottomTabNavigator<TabHomeParamList>();
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
  },
];

const TabHomeNavigate = () => {
  let id = useSelector((state: RootState) => state.root.user._id);
  let isLoggedIn = useSelector((state: RootState) => state.root.isLoggedIn.isLoggedIn);
  const { data } = useGetCartQuery(id, {
    skip: !id,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  const datacart = data?.data.filter(item => item !== null).map(item => ({
    ...item,
    ProductId: item.ProductId.filter(item => item.StatusProduct === 'Đã thêm vào giỏ hàng') || [],
    _id: item ? item._id || '' : '',
  }));
  const [count, setCount] = useState<string | undefined>(undefined);
  useEffect(() => {
    if (
      datacart?.length !== 0 &&
      datacart?.some(item => item.ProductId && item.ProductId.length > 0)
    ) {
      setCount(
        datacart
          ?.reduce((total, item) => total + item.ProductId.length, 0)
          .toString(),
      );
    } else {
      setCount(undefined);
    }
  }, [datacart, count]);

  return (
    <BottomTabNavigate.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: COLOR.ORANGE,
        tabBarInactiveTintColor: COLOR.GRAY,
        tabBarStyle: styles.bottomBar,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: FONTSIZE(1.4),
          fontWeight: 'bold',
        },
      }}>
      {TabNavigate.map(item => (
        <BottomTabNavigate.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={item.icon}
                style={{ width: 24, height: 24, tintColor: focused ? COLOR.ORANGE : COLOR.GRAY, }}
              />
            ),
            tabBarBadge: item.name === TabHomeNavigateEnum.Cart && isLoggedIn ? count : undefined,
          }}
        />
      ))}
    </BottomTabNavigate.Navigator>
  );
};

export default TabHomeNavigate;

const styles = StyleSheet.create({
  bottomBar: {
    borderTopWidth: 1,
    borderTopColor: COLOR.GRAY,
    height: HEIGHT(6.3),
  },
});
