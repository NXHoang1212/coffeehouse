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
  ThemLightStatusBar('dark-content', '#fff');
  const { id } = useRoute().params as PropsDetailOrder;
  const { data } = useGetProductsByIdQuery(id);
  const showdetail = data?.data;

  return (
    <View style={StyleDetailOrder.container}>
      <FlashList
        data={showdetail}
        keyExtractor={item => item._id}
        renderItem={({ item }) => <ItemDetailProduct item={item} />}
        estimatedItemSize={150}
      />
    </View>
  )
}

export default DetailOrder