import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { Icon, TabCoffee } from '../../../constant/Icon';
import { useGoBack } from '../../../utils/GoBack';
import StyleSaveAddress from '../../../styles/another/StyleAddress';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackHomeNavigateTypeParam } from '../../../data/types/TypeStack';
import { useNavigation } from '@react-navigation/native';
import { useGetAddressIdQuery } from '../../../service/api/IndexAddress';
import { useSelector } from 'react-redux';
import { FlashList } from '@huunguyen312/flash-list';
import ItemAddress from '../../../components/item/ItemAddress';
import { RootState } from '../../../redux/store/Store';
import { useIsFocused } from '@react-navigation/native';
import IconAddressHome from '../../../assets/Svg/IconAddressHome';

const Address: React.FC = () => {
  let isFocused = useIsFocused();
  const goback = useGoBack();
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const id = useSelector((state: RootState) => state.root.user._id);
  const { data, refetch } = useGetAddressIdQuery(id);
  const Addressess = data?.data;
  const isLastItem = (currentIndex: number) => { return Addressess && currentIndex === Addressess.length - 1 };

  useEffect(() => {
    refetch();
  }, [isFocused]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={StyleSaveAddress.container}>
        <View style={StyleSaveAddress.viewheader}>
          <TouchableOpacity onPress={goback}>
            <Image source={Icon.BACK} style={StyleSaveAddress.iconBack} />
          </TouchableOpacity>
          <Text style={StyleSaveAddress.textHeader}>Địa chỉ đã lưu</Text>
        </View>
        <View style={StyleSaveAddress.viewbody}>
          <TouchableOpacity
            style={StyleSaveAddress.viewAddress}
            onPress={() => navigation.navigate('AddAddress' as any, { name: 'Nhà' })}>
            <Image
              source={TabCoffee.HOME}
              style={StyleSaveAddress.iconAddress}
            />
            <Text style={StyleSaveAddress.textAddress}>Thêm địa chỉ nhà</Text>
          </TouchableOpacity>
          <View style={StyleSaveAddress.line} />
          <TouchableOpacity
            style={StyleSaveAddress.viewAddress}
            onPress={() => navigation.navigate('AddAddress' as any, { name: 'Công ty' })}>
            <IconAddressHome style={StyleSaveAddress.iconAddress} />
            <Text style={StyleSaveAddress.textAddress}>Thêm địa chỉ công ty</Text>
          </TouchableOpacity>
          <View style={StyleSaveAddress.line} />
          <TouchableOpacity
            style={StyleSaveAddress.viewAddress}
            onPress={() => navigation.navigate('AddAddress' as any, { name: '' })}>
            <Image source={Icon.PLUS} style={StyleSaveAddress.iconplus} />
            <Text style={StyleSaveAddress.textAddress}>Thêm địa chỉ mới</Text>
          </TouchableOpacity>
          <View style={StyleSaveAddress.line} />
          <View style={StyleSaveAddress.viewitem}>
            <FlashList
              data={Addressess}
              renderItem={({ item, index }) => (
                <ItemAddress item={item} isLastItem={isLastItem(index)} />
              )}
              keyExtractor={(item: any) => item._id}
              estimatedItemSize={200}
              showsVerticalScrollIndicator={false}
              removeClippedSubviews={true}
              viewabilityConfig={{
                waitForInteraction: true,
                itemVisiblePercentThreshold: 50,
                minimumViewTime: 1000,
              }}
            />
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default Address;
