import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '../../constant/Icon'
import styleCartOrder from '../../styles/cart/StyleCartOrder'
import { ThemLightStatusBar } from '../../constant/ThemLight'
import { useNavigation } from '@react-navigation/native'
import { StackHomeNavigateTypeParam } from '../../data/types/TypeStack'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useAuth } from '../../hooks/UseAuth'

const CartOrder = () => {
  ThemLightStatusBar('dark-content', '#fff');
  const { isLoggedIn } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<StackHomeNavigateTypeParam>>();
  const handeleGeneral = (destination: string) => {
    if (destination === 'DiscountUser') {
      //@ts-ignore
      navigation.navigate(isLoggedIn ? 'StackHomeNavigate' : 'AuthStackUser', { screen: 'DiscountUser' })
    } else if (destination === 'Notifee') {
      //@ts-ignore
      navigation.navigate(isLoggedIn ? 'StackHomeNavigate' : 'AuthStackUser', { screen: 'Notifee' })
    }
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
    </View>
  )
}

export default CartOrder