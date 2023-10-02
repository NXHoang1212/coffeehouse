import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { Icon } from '../../constant/Icon';
import React, { useState } from 'react'
import StyleItemInformationOrder from '../../styles/item/StyleItemInformationOrder';
import { GetCartOrder } from '../../data/types/CartOrder.entity';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';
import { useRoute } from '@react-navigation/native';
interface PropsDetailItemProduct {
    item: GetCartOrder;
}

const ItemInformationOrder: React.FC<PropsDetailItemProduct> = ({ item }) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
    const route = useRoute<any>();
    const address = route.params?.item;
    const [note, setNote] = useState<string>('');
    const SelectedAddress = () => {
        //@ts-ignore
        navigation.navigate('StackHomeNavigate', { screen: 'SelectedAddressOrder' })
    }
    const UpdateOrder = () => {
        //@ts-ignore
        navigation.navigate('StackHomeNavigate', { screen: 'UpdateOrderUser', params: { item: item } })
    }
    return (
        <View style={StyleItemInformationOrder.container}>
            <View style={StyleItemInformationOrder.header}>
                <Text style={StyleItemInformationOrder.texttilte}>Giao hàng tận nơi</Text>
                <TouchableOpacity style={StyleItemInformationOrder.viewedit}>
                    <Text style={StyleItemInformationOrder.textedit}>Xóa đơn hàng</Text>
                </TouchableOpacity>
            </View>
            {address ? (
                <View style={StyleItemInformationOrder.viewaddress}>
                    <View style={StyleItemInformationOrder.viewtextaddress}>
                        <Text style={StyleItemInformationOrder.textdetailaddress}>{address.DescribeAddRess}</Text>
                    </View>
                    <TouchableOpacity style={StyleItemInformationOrder.vieweditaddress} onPress={() => SelectedAddress()}>
                        <Image source={Icon.RIGHT} style={StyleItemInformationOrder.iconedit} />
                    </TouchableOpacity>
                </View>
            ) : (
                <TouchableOpacity style={StyleItemInformationOrder.viewaddress} onPress={SelectedAddress}>
                    <Text style={StyleItemInformationOrder.textaddress}>Vui lòng chọn địa chỉ giao tới</Text>
                </TouchableOpacity>
            )}
            <TextInput
                placeholder='Thêm hướng dẫn cho shipper....'
                style={StyleItemInformationOrder.textinput}
                onChangeText={(text) => setNote(text)}
                value={note}
            />
            <View style={StyleItemInformationOrder.itemuser}>
                <TouchableOpacity onPress={UpdateOrder}>
                    <Text style={StyleItemInformationOrder.textuser}>{item.UserId.name}</Text>
                    <Text style={StyleItemInformationOrder.textuser}>{item.UserId.mobile}</Text>
                    <Text style={StyleItemInformationOrder.textline}>-------------------------</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ItemInformationOrder


