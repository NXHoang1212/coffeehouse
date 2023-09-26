import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import FastImage from 'react-native-fast-image';
import React, { useState } from 'react'
import StyleItemInformationOrder from '../../styles/item/StyleItemInformationOrder';
import { GetCartOrder } from '../../data/types/CartOrder.entity';

interface PropsDetailItemProduct {
    item: GetCartOrder;
}

const ItemInformationOrder: React.FC<PropsDetailItemProduct> = ({ item }) => {

    return (
        <View style={StyleItemInformationOrder.container}>
            <Text>{item.PriceProduct}</Text>
        </View>
    )
}

export default ItemInformationOrder


