import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import StyleDiscountUser from '../../styles/general/StyleDiscountUset';
import { Icon } from '../../constant/Icon';
import { useGoBack } from '../../utils/GoBack';
import { useGetDiscountQuery } from '../../service/api/IndexDiscount';
import { FlashList } from '@huunguyen312/flash-list';
import ItemDiscount from '../../components/item/ItemDiscount';

const DiscountUser = () => {
  const goback = useGoBack();
  StatusBar.setBarStyle('dark-content');
  StatusBar.setBackgroundColor('#fff');
  const { data } = useGetDiscountQuery();
  const item = data?.data

  return (
    <View style={StyleDiscountUser.container}>
      <View style={StyleDiscountUser.viewheader}>
        <TouchableOpacity onPress={goback}>
          <Image source={Icon.BACK} style={StyleDiscountUser.iconBack} />
        </TouchableOpacity>
        <Text style={StyleDiscountUser.textHeader}>Phiếu ưu đãi của bạn</Text>
      </View>
      <View style={StyleDiscountUser.viewbody}>
        <Text style={StyleDiscountUser.textbody}>Sẵn sàng sử dụng</Text>
        <FlashList
          data={item}
          renderItem={({ item }) => <ItemDiscount item={item} />}
          keyExtractor={(item: any) => item._id}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={200}
          removeClippedSubviews={true}
          viewabilityConfig={{
            waitForInteraction: true,
            itemVisiblePercentThreshold: 50,
            minimumViewTime: 1000,
          }}
        />
      </View>
    </View>
  );
};

export default DiscountUser;
