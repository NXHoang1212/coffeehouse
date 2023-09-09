import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '../../constant/Icon'
import styleHeart from '../../styles/infatuated/StyleHeart'
import { ThemLightStatusBar } from '../../constant/ThemLight'
import { useNavigation } from '@react-navigation/native'
import { StackHomeNavigateTypeParam } from '../../data/types/navigation/TypeStack'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useAuth } from '../../hooks/UseAuth'

const Heart = () => {
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
    <View style={styleHeart.container}>
      <View style={styleHeart.viewheader}>
        <Text style={styleHeart.textheader}> Yêu Thích</Text>
        <TouchableOpacity style={styleHeart.viewpromo} onPress={() => handeleGeneral('DiscountUser')}>
          <Image source={Icon.PROMO} style={styleHeart.iconpromo} />
        </TouchableOpacity>
        <TouchableOpacity style={styleHeart.viewnotify} onPress={() => handeleGeneral('Notifee')}>
          <Image source={Icon.NOTIFY} style={styleHeart.iconnotify} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Heart