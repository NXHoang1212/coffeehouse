import { View, Text, TouchableOpacity, TextInput, TouchableNativeFeedback } from 'react-native';
import { useState } from 'react';
import { useGoBack } from '../../utils/GoBack';
import { OrderResponse } from '../../data/types/Order.entity';
import StyleItemHistoryOrderProcessing from '../../styles/item/StyleItemHistoryOrderProcessing';
import FastImage from 'react-native-fast-image';
import { Icon } from '../../constant/Icon';
import DetailHistoryOrderProcessing from '../../pages/another/history/DetailHistoryOrderProcessing';

interface PropsDetailItemProduct {
    item: OrderResponse;
}

const ItemHistoryOrderProcessing: React.FC<PropsDetailItemProduct> = ({ item }) => {
    const goBack = useGoBack();
    const [processing, setprocessing] = useState<boolean>(false);

    return (
        <View style={StyleItemHistoryOrderProcessing.container}>
            <View style={StyleItemHistoryOrderProcessing.viewtitle}>
                <View style={StyleItemHistoryOrderProcessing.viewtext}>
                    <Text style={StyleItemHistoryOrderProcessing.textTitle}>Giao tận nơi</Text>
                    {item.OrderCart.map((item, index) => (
                        <Text key={index} style={StyleItemHistoryOrderProcessing.textNameProduct}>{item.NameProduct}</Text>
                    ))}
                </View>
                <TouchableOpacity style={StyleItemHistoryOrderProcessing.viewdetail} onPress={() => setprocessing(true)}>
                    <Text style={StyleItemHistoryOrderProcessing.textdetail}>Chi tiết</Text>
                </TouchableOpacity>
            </View>
            <View style={StyleItemHistoryOrderProcessing.viewimage}>
                <FastImage
                    source={Icon.ORDERSTATUS}
                    style={StyleItemHistoryOrderProcessing.imagestatus}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </View>
            <View style={StyleItemHistoryOrderProcessing.viewstatus}>
                <Text style={StyleItemHistoryOrderProcessing.textime}>Thời gian giao dự kiến</Text>
                <Text style={StyleItemHistoryOrderProcessing.textstatus}>{item.status}</Text>
            </View>
            <DetailHistoryOrderProcessing show={processing} onDismiss={() => setprocessing(false)} item={item} enableBackDropDismiss />
        </View>
    );
};

export default ItemHistoryOrderProcessing;
