import { View, Text, TouchableOpacity, TextInput, TouchableNativeFeedback } from 'react-native';
import { useGoBack } from '../../utils/GoBack';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';
import { OrderResponse } from '../../data/types/Order.entity';
import StyleItemHistoryOrder from '../../styles/item/StyleItemHistoryOrder';
import FastImage from 'react-native-fast-image';
import { Icon } from '../../constant/Icon';

interface PropsDetailItemProduct {
    item: OrderResponse;
}

const ItemHistoryOrder: React.FC<PropsDetailItemProduct> = ({ item }) => {
    const goBack = useGoBack();
    const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();

    return (
        <View style={StyleItemHistoryOrder.container}>
            <View style={StyleItemHistoryOrder.viewtitle}>
                {/* <View style={StyleItemHistoryOrder.viewtext}>
                    <Text style={StyleItemHistoryOrder.textTitle}>Giao tận nơi</Text>
                    {item.cart.ProductId.map((item) => (
                        <Text key={item._id} style={StyleItemHistoryOrder.textNameProduct}>{item.NameProduct}</Text>
                    ))}
                </View> */}
                <TouchableOpacity style={StyleItemHistoryOrder.viewdetail}>
                    <Text style={StyleItemHistoryOrder.textdetail}>Chi tiết</Text>
                </TouchableOpacity>
            </View>
            <View style={StyleItemHistoryOrder.viewimage}>
                <FastImage
                    source={Icon.ORDERSTATUS}
                    style={StyleItemHistoryOrder.imagestatus}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </View>
            <View style={StyleItemHistoryOrder.viewstatus}>
                <Text style={StyleItemHistoryOrder.textime}>Thời gian giao dự kiến</Text>
                <Text style={StyleItemHistoryOrder.textstatus}>{item.status}</Text>
            </View>
        </View>
    );
};

export default ItemHistoryOrder;
