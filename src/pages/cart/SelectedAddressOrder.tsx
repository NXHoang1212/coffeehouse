import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StyleSelectedAddressOrder } from '../../styles/cart/StyleSelectedAddressOrder';
import { FlashList } from '@huunguyen312/flash-list';
import ItemSelectedAddressOrder from '../../components/item/ItemSelectedAddressOrder';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/Store';
import { useGetAddressIdQuery } from '../../service/api/IndexAddress';
import { Icon } from '../../constant/Icon';
import { useGoBack } from '../../utils/GoBack';

const SelectedAddressOrder: React.FC = () => {
  const goback = useGoBack();
  const id = useSelector((state: RootState) => state.user.user._id);
  const { data, refetch } = useGetAddressIdQuery(id);
  const dataAddress = data?.data.filter(item => item !== null).map(item => ({
    ...item,
    _id: item ? item._id || '' : '',
    done: 'Chọn địa chỉ giao hàng',
  }));
  const showDoneButton = true;
  
  useEffect(() => {
    refetch();
  }, []);

  return (
    <View style={StyleSelectedAddressOrder.container}>
      <View style={StyleSelectedAddressOrder.viewheader}>
        <TouchableOpacity onPress={goback}>
          <Image source={Icon.BACK} style={StyleSelectedAddressOrder.iconBack} />
        </TouchableOpacity>
        <Text style={StyleSelectedAddressOrder.textheader}>Chọn địa chỉ giao hàng</Text>
      </View>
      <FlashList
        data={dataAddress}
        renderItem={({ item, index }) => (
          <ItemSelectedAddressOrder
            address={item}
            showDoneButton={index === dataAddress?.length as any - 1 && showDoneButton}
          />
        )}
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item._id}
        estimatedItemSize={200}
      />
    </View>
  );
};

export default SelectedAddressOrder;
