import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import CartOrder from '../../pages/order/CartOrder';
import DetailOrder from '../../pages/order/DetailOrder';
import { CartStackNames } from '../../data/types/product/CartOrder.entity';
import SearchOrder from '../../pages/order/SearchOrder';
import AuthStackNavigate from '../auth/AuthUserNavigate';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/Store';
import LoginUser from '../../pages/auth/LoginUser';
import { useEffect, useState } from 'react';

const CartStack = createNativeStackNavigator();
const CartNavigator = (): React.JSX.Element => {
    return (
        <CartStack.Navigator screenOptions={{ headerShown: false }}>
            <CartStack.Screen
                name={CartStackNames.Cart}
                component={CartOrder}
            />
            <CartStack.Screen
                name={CartStackNames.Search}
                component={SearchOrder}
            />
        </CartStack.Navigator>
    );
};



export default CartNavigator;
