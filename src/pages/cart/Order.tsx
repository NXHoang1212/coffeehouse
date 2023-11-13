import { View, Text, Image, TouchableOpacity, StatusBar, RefreshControl, FlatList, } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Icon } from '../../constant/Icon';
import styleCartOrder from '../../styles/cart/StyleCartOrder';
import { useNavigation } from '@react-navigation/native';
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import ItemInformationOrder from '../../components/item/ItemInformationOrder';
import { RootState, AppDispatch } from '../../redux/store/Store';
import { useGetCartQuery } from '../../service/api/IndexCart';
import { useGetDiscountQuery } from '../../service/api/IndexDiscount';
import { cartStatus } from '../../data/types/Enum.entity';

const Order: React.FC = () => {
  StatusBar.setBarStyle('dark-content');
  StatusBar.setBackgroundColor('#fff');
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const id = useSelector((state: RootState) => state.user.user._id);
  const isLoggedIn = useSelector((state: RootState) => state.IsLoggedIn.isLoggedIn.isLoggedIn);
  const { data: dataDiscount } = useGetDiscountQuery();
  const count = dataDiscount?.data.length;
  const { data, refetch } = useGetCartQuery(id);
  const datacart = data?.data.filter(item => item !== null).map(item => ({
    ...item,
    ProductId: item.ProductId.filter(item => item.StatusProduct === cartStatus.PENDING) || [],
    _id: item ? item._id || '' : '',
  }));

  const onsRefresh = () => {
    setTimeout(() => {
      refetch();
    }, 1500);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#fff');
    });
    return unsubscribe;
  }, [navigation]);

  if (!isLoggedIn) {
    return (
      <View style={styleCartOrder.containernoitem}>
        <Image source={Icon.FEEDBACK} style={styleCartOrder.iconnoitem} />
        <Text style={styleCartOrder.textbacknoorder}>
          Bạn chưa đăng nhập vui lòng đăng nhập để xem thông tin đơn hàng
        </Text>
        <TouchableOpacity
          style={styleCartOrder.viewbacknoorder}
          onPress={() => navigation.navigate('AuthStackUser')}>
          <Text style={styleCartOrder.textbacknoorder}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    );
  }
  if (datacart?.length === 0 || !datacart?.some(item => item.ProductId && item.ProductId.length > 0)) {
    return (
      <View style={styleCartOrder.containernoitem}>
        <Image source={Icon.FEEDBACK} style={styleCartOrder.iconnoitem} />
        <Text style={styleCartOrder.textbacknoorder}>
          Bạn chưa có đơn hàng vui lòng quay lại đặt hàng
        </Text>
        <TouchableOpacity
          style={styleCartOrder.viewbacknoorder}
          onPress={() => navigation.navigate('Đặt hàng' as any)}>
          <Text style={styleCartOrder.textbacknoorder}>Quay lại</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styleCartOrder.container}>
      <View style={styleCartOrder.viewheader}>
        <Text style={styleCartOrder.textheader}>Thông tin đơn hàng</Text>
        <TouchableOpacity
          style={styleCartOrder.viewpromo}
          onPress={() =>
            navigation.navigate(
              isLoggedIn ? 'StackHomeNavigate' : ('AuthStackUser' as any),
              { screen: 'DiscountUser' },
            )
          }>
          <Image source={Icon.PROMO} style={styleCartOrder.iconpromo} />
          <Text style={styleCartOrder.textpromo}>{count}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleCartOrder.viewnotify}
          onPress={() => navigation.navigate(isLoggedIn ? 'StackHomeNavigate' : ('AuthStackUser' as any), { screen: 'Notifee' })}>
          <Image source={Icon.NOTIFY} style={styleCartOrder.iconnotify} />
        </TouchableOpacity>
      </View>
      <View style={styleCartOrder.viewbody}>
        <FlatList
          data={datacart}
          renderItem={({ item }: any) => <ItemInformationOrder item={item} />}
          keyExtractor={item => item._id}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={onsRefresh} />
          }
        />
      </View>
    </View>
  );
};

export default Order;
