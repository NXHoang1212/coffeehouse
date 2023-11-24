import { View, Text, TouchableOpacity, TextInput, TouchableNativeFeedback } from 'react-native';
import { useState } from 'react';
import { useGoBack } from '../../utils/GoBack';
import { OrderResponse } from '../../data/types/Order.entity';
import StyleItemHistoryOrderSuccess from '../../styles/item/StyleItemHistoryOrderSuccess';
import FastImage from 'react-native-fast-image';
import { Icon } from '../../constant/Icon';
import DetailHistoryOrderSuccess from '../../pages/another/history/DetailHistoryOrderSuccess';

interface PropsDetailItemProduct {
    item: OrderResponse;
}

const ItemHistoryOrderSuccess: React.FC<PropsDetailItemProduct> = ({ item }) => {
    const goBack = useGoBack();
    const [suceess, setsuccess] = useState<boolean>(false);

    return (
        <View style={StyleItemHistoryOrderSuccess.container}>
            <View style={StyleItemHistoryOrderSuccess.viewtitle}>
                <View style={StyleItemHistoryOrderSuccess.viewtext}>
                    <Text style={StyleItemHistoryOrderSuccess.textTitle}>Giao tận nơi</Text>
                    {item.OrderCart.map((item, index) => (
                        <Text key={index} style={StyleItemHistoryOrderSuccess.textNameProduct}>{item.NameProduct}</Text>
                    ))}
                </View>
                <TouchableOpacity style={StyleItemHistoryOrderSuccess.viewdetail} onPress={() => setsuccess(true)}>
                    <Text style={StyleItemHistoryOrderSuccess.textdetail}>Chi tiết</Text>
                </TouchableOpacity>
            </View>
            <View style={StyleItemHistoryOrderSuccess.viewimage}>
                <FastImage
                    source={Icon.ORDERSTATUS}
                    style={StyleItemHistoryOrderSuccess.imagestatus}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </View>
            <View style={StyleItemHistoryOrderSuccess.viewstatus}>
                <Text style={StyleItemHistoryOrderSuccess.textime}>Thời gian giao dự kiến</Text>
                <Text style={StyleItemHistoryOrderSuccess.textstatus}>{item.status}</Text>
            </View>
            <DetailHistoryOrderSuccess show={suceess} onDismiss={() => setsuccess(false)} item={item} />
        </View>
    );
};

export default ItemHistoryOrderSuccess;
