import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { ThemLightStatusBar } from '../../constant/ThemLight';
import { useGetProductsByIdQuery } from '../../service/api/IndexProducts';
import { FlashList } from '@huunguyen312/flash-list';
import StyleDetailOrder from '../../styles/order/StyleDetailOrder';
import ItemDetailProduct from '../../components/item/ItemDetailProduct';

interface PropsDetailOrder {
  id: string;
}

const DetailOrder = () => {
  ThemLightStatusBar('dark-content', '#fff');
  const { id } = useRoute().params as PropsDetailOrder;
  console.log("🚀 ~ file: DetailOrder.tsx:136 ~ DetailOrder ~ id", id)


  return (
    <View style={StyleDetailOrder.container}>
      <Text>DetailOrder</Text>
    </View>
  )
}

export default DetailOrder