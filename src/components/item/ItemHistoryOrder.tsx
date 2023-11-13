import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, TouchableNativeFeedback } from 'react-native';
import React, { useState } from 'react';
import { useGoBack } from '../../utils/GoBack';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';
import { OrderResponse } from '../../data/types/Order.entity';
import StyleItemHistoryOrder from '../../styles/item/StyleItemHistoryOrdet';

interface PropsDetailItemProduct {
    item: OrderResponse;
}

const ItemHistoryOrder: React.FC<PropsDetailItemProduct> = ({ item }) => {
    const goBack = useGoBack();
    const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();

    return (
        <View style={StyleItemHistoryOrder.container}>


        </View>
    );
};

export default ItemHistoryOrder;
