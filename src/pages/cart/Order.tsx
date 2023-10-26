import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon } from '../../constant/Icon'
import styleCartOrder from '../../styles/cart/StyleCartOrder'
import { ThemLightStatusBar } from '../../constant/ThemLight'
import { useNavigation } from '@react-navigation/native'
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useIsFocused } from '@react-navigation/native'
import { useAuth } from '../../hooks/UseAuth'
import { useSelector } from 'react-redux'
import ItemInformationOrder from '../../components/item/ItemInformationOrder'
import { RootState } from '../../redux/store/Store'
import { useGetCartQuery } from '../../service/api/IndexCart'

const Order: React.FC = () => {
  ThemLightStatusBar('dark-content', '#fff');
  const { isLoggedIn } = useAuth();
  const isFocused = useIsFocused();
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const id = useSelector((state: RootState) => state.user.user._id)
  const handeleGeneral = (destination: string) => {
    if (destination === 'DiscountUser') {
      //@ts-ignore
      navigation.navigate(isLoggedIn ? 'StackHomeNavigate' : 'AuthStackUser', { screen: 'DiscountUser' })
    } else if (destination === 'Notifee') {
      //@ts-ignore
      navigation.navigate(isLoggedIn ? 'StackHomeNavigate' : 'AuthStackUser', { screen: 'Notifee' })
    }
  }
  const { data, refetch } = useGetCartQuery(id);
  const datacart = data?.data.filter(item => item !== null).map(item => ({
    ...item,
    ProductId: item ? item.ProductId || '' : '',
    _id: item ? item._id || '' : '',
  }));
  useEffect(() => {
    if (isFocused) {
      refetch()
    }
  }, [isFocused, refetch, data])
  const onsRefresh = () => {
    setTimeout(() => {
      refetch()
    }, 2000);
  }
  if (!isLoggedIn) {
    return (
      <View style={styleCartOrder.containernoitem}>
        <Image source={Icon.FEEDBACK} style={styleCartOrder.iconnoitem} />
        <Text style={styleCartOrder.textbacknoorder}>Bạn chưa đăng nhập vui lòng đăng nhập để xem thông tin đơn hàng</Text>
        {/* @ts-ignore */}
        <TouchableOpacity style={styleCartOrder.viewbacknoorder} onPress={() => navigation.navigate('AuthStackUser')}>
          <Text style={styleCartOrder.textbacknoorder}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    )
  }
  if (datacart?.length === 0 || !datacart?.some(item => item.ProductId && item.ProductId.length > 0)) {
    return (
      <View style={styleCartOrder.containernoitem}>
        <Image source={Icon.FEEDBACK} style={styleCartOrder.iconnoitem} />
        <Text style={styleCartOrder.textbacknoorder}>Bạn chưa có đơn hàng vui lòng quay lại đặt hàng</Text>
        {/* @ts-ignore */}
        <TouchableOpacity style={styleCartOrder.viewbacknoorder} onPress={() => navigation.navigate('Đặt hàng')}>
          <Text style={styleCartOrder.textbacknoorder}>Quay lại</Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styleCartOrder.container}>
      <View style={styleCartOrder.viewheader}>
        <Text style={styleCartOrder.textheader}>Thông tin đơn hàng</Text>
        <TouchableOpacity style={styleCartOrder.viewpromo} onPress={() => handeleGeneral('DiscountUser')}>
          <Image source={Icon.PROMO} style={styleCartOrder.iconpromo} />
        </TouchableOpacity>
        <TouchableOpacity style={styleCartOrder.viewnotify} onPress={() => handeleGeneral('Notifee')}>
          <Image source={Icon.NOTIFY} style={styleCartOrder.iconnotify} />
        </TouchableOpacity>
      </View>
      <View style={styleCartOrder.viewbody}>
        <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={false} onRefresh={onsRefresh} />}>
          {datacart?.map((item: any, index: number) => {
            return (<ItemInformationOrder key={index} item={item} />)
          })}
        </ScrollView>
      </View>
    </View>
  )
}

export default Order