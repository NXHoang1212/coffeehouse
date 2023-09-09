import { View, Text, StatusBar, ScrollView, FlatList } from 'react-native'
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
  ThemLightStatusBar('light-content', '#000');
  const { id } = useRoute().params as PropsDetailOrder;
  console.log("🚀 ~ file: DetailOrder.tsx:136 ~ DetailOrder ~ id", id)
  const { data } = useGetProductsByIdQuery(id);
  const showdetail = data?.data;
  console.log("🚀 ~ file: DetailOrder.tsx:20 ~ DetailOrder ~ showdetail:", showdetail)

  return (
    <View style={StyleDetailOrder.container}>
      {showdetail?.map((item, index) => {
        return (<ItemDetailProduct key={index} item={item} />)
      })
      }
    </View>
  )
}

export default DetailOrder