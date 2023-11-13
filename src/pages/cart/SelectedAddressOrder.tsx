import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StyleSelectedAddressOrder } from '../../styles/cart/StyleSelectedAddressOrder';
import { FlashList } from '@huunguyen312/flash-list';
import ItemSelectedAddressOrder from '../../components/item/ItemSelectedAddressOrder';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/Store';
import { useGetAddressIdQuery } from '../../service/api/IndexAddress';

const SelectedAddressOrder: React.FC = () => {
  const id = useSelector((state: RootState) => state.user.user._id);
  const { data, refetch } = useGetAddressIdQuery(id);
  const dataAddress = data?.data.filter(item => item !== null).map(item => ({
    ...item,
    _id: item ? item._id || '' : '',
  }));
  return (
    <View style={StyleSelectedAddressOrder.container}>
      <Text style={StyleSelectedAddressOrder.textheader}>
        Chọn địa chỉ giao hàng
      </Text>
      <FlashList
        data={dataAddress}
        renderItem={({ item }) => <ItemSelectedAddressOrder address={item} />}
        keyExtractor={(item: any) => item._id}
        estimatedItemSize={100}
      />
    </View>
  );
};

export default SelectedAddressOrder;
