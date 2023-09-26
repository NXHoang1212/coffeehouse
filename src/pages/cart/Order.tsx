import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Icon } from '../../constant/Icon'
import styleCartOrder from '../../styles/cart/StyleCartOrder'
import { ThemLightStatusBar } from '../../constant/ThemLight'
import { useNavigation } from '@react-navigation/native'
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useIsFocused } from '@react-navigation/native'
import { useAuth } from '../../hooks/UseAuth'
import { useSelector } from 'react-redux'
import { FlashList } from '@huunguyen312/flash-list'
import { useGetCartQuery } from '../../service/api/IndexCart'
import ItemInformationOrder from '../../components/item/ItemInformationOrder'

const Order = () => {
  ThemLightStatusBar('dark-content', '#fff');
  const { isLoggedIn } = useAuth();
  const isFocused = useIsFocused();
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const id = useSelector((state: any) => state.user._id)
  const { data, refetch } = useGetCartQuery(id)
  const datacart = data?.data
  const freshcontrol = () => {
    refetch()
  }
  const handeleGeneral = (destination: string) => {
    if (destination === 'DiscountUser') {
      //@ts-ignore
      navigation.navigate(isLoggedIn ? 'StackHomeNavigate' : 'AuthStackUser', { screen: 'DiscountUser' })
    } else if (destination === 'Notifee') {
      //@ts-ignore
      navigation.navigate(isLoggedIn ? 'StackHomeNavigate' : 'AuthStackUser', { screen: 'Notifee' })
    }
  }

  useEffect(() => {
    refetch()
  }, [isFocused])

  if (!data) {
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
        <Text style={styleCartOrder.textheader}>Sản phẩm giỏ hàng</Text>
        <TouchableOpacity style={styleCartOrder.viewpromo} onPress={() => handeleGeneral('DiscountUser')}>
          <Image source={Icon.PROMO} style={styleCartOrder.iconpromo} />
        </TouchableOpacity>
        <TouchableOpacity style={styleCartOrder.viewnotify} onPress={() => handeleGeneral('Notifee')}>
          <Image source={Icon.NOTIFY} style={styleCartOrder.iconnotify} />
        </TouchableOpacity>
      </View>
      <View style={styleCartOrder.viewbody}>
        <FlashList
          data={datacart}
          renderItem={({ item }) => <ItemInformationOrder item={item} />}
          keyExtractor={(item: any) => item._id}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={200}
          refreshing={false}
          onRefresh={freshcontrol}
        />
      </View>
    </View>
  )
}

export default Order