import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import CartOrder from '../../pages/order/CartOrder';
import DetailOrder from '../../pages/order/DetailOrder';
import { ProductCart } from '../../data/types/product/CartProduct';
import { CartStackNames } from '../../data/types/product/CartProduct';
import { CartStackParamList } from '../../data/types/product/CartProduct';

const CartStack = createNativeStackNavigator();
const CartNavigator = (): React.JSX.Element => {
    return (
        <CartStack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <CartStack.Screen
                name={CartStackNames.Cart}
                component={CartOrder}
            />
            <CartStack.Screen
                name={CartStackNames.DetailOrder}
                component={DetailOrder}
            />
        </CartStack.Navigator>
    );
};


export type DetailProductScreenProps = NativeStackScreenProps<CartStackParamList, 'CartProduct'>

export default CartNavigator;
