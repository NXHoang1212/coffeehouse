import { View, Text, TouchableOpacity, TextInput, TouchableNativeFeedback } from 'react-native';
import { memo, useState } from 'react';
import { useGoBack } from '../../utils/GoBack';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';
import { OrderResponse } from '../../data/types/Order.entity';
import StyleItemHistoryOrderReject from '../../styles/item/StyleItemHistoryOrderReject';
import FastImage from 'react-native-fast-image';
import { Icon } from '../../constant/Icon';
import DetailHistoryOrderReject from '../../pages/another/history/DetailHistoryOrderReject';

interface PropsDetailItemProduct {
    item: OrderResponse;
}

const ItemHistoryOrderReject: React.FC<PropsDetailItemProduct> = memo(({ item }) => {
    const [reject, setReject] = useState<boolean>(false);

    return (
        <View style={StyleItemHistoryOrderReject.container}>
            <View style={StyleItemHistoryOrderReject.viewtitle}>
                <View style={StyleItemHistoryOrderReject.viewtext}>
                    <Text style={StyleItemHistoryOrderReject.textTitle}>Giao tận nơi</Text>
                    {item.OrderCart.map((item, index) => (
                        <Text key={index} style={StyleItemHistoryOrderReject.textNameProduct}>{item.NameProduct}</Text>
                    ))}
                </View>
                <TouchableOpacity style={StyleItemHistoryOrderReject.viewdetail} onPress={() => setReject(true)}>
                    <Text style={StyleItemHistoryOrderReject.textdetail}>Chi tiết</Text>
                </TouchableOpacity>
            </View>
            <View style={StyleItemHistoryOrderReject.viewimage}>
                <FastImage
                    source={Icon.ORDERSTATUS}
                    style={StyleItemHistoryOrderReject.imagestatus}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </View>
            <View style={StyleItemHistoryOrderReject.viewstatus}>
                <Text style={StyleItemHistoryOrderReject.textime}>Thời gian giao dự kiến</Text>
                <Text style={StyleItemHistoryOrderReject.textstatus}>{item.status}</Text>
            </View>
            <DetailHistoryOrderReject show={reject} onDismiss={() => setReject(false)} item={item} enableBackDropDismiss/>
        </View>
    );
});

export default ItemHistoryOrderReject;
