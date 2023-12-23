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
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';

const SelectedAddressOrder: React.FC = () => {
  const goback = useGoBack();
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const id = useSelector((state: RootState) => state.root.user._id);
  const { data, refetch } = useGetAddressIdQuery(id);
  const dataAddress = data?.data.filter(item => item !== null).map(item => ({
    ...item,
    done: 'Xong',
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
      <View style={StyleSelectedAddressOrder.body}>
        <FlashList
          data={dataAddress}
          renderItem={({ item, index }) => (<ItemSelectedAddressOrder address={item} showDoneButton={index === dataAddress?.length as any - 1 && showDoneButton} />)}
          contentContainerStyle={{ paddingBottom: 50 }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item._id}
          estimatedItemSize={200}
        />
      </View>
      <TouchableOpacity style={StyleSelectedAddressOrder.viewadd} onPress={() => navigation.navigate('StackHomeNavigate' as any, { screen: 'SaveAddress' })}>
        <Text style={StyleSelectedAddressOrder.textadd}>Thêm địa chỉ mới</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectedAddressOrder;
