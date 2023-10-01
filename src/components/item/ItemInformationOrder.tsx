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
    //kiểm tra có param nào truyền vào không
    const route = useRoute<any>();
    const address = route.params?.item;
    console.log("🚀 ~ file: ItemInformationOrder.tsx:19 ~ address:", address);
    const SelectedAddress = () => {
        //@ts-ignore
        navigation.navigate('StackHomeNavigate', { screen: 'SelectedAddressOrder' })
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
                    <Text style={StyleItemInformationOrder.textaddress}>Vui lòng mời bạn chọn địa chỉ giao hàng</Text>
                </TouchableOpacity>
            )}

        </View>
    )
}

export default ItemInformationOrder


