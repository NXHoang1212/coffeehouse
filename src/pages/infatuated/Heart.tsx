import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '../../constant/Icon'
import styleHeart from '../../styles/infatuated/StyleHeart'
import { ThemLightStatusBar } from '../../constant/ThemLight'

const Heart = () => {
  ThemLightStatusBar('dark-content', '#fff');
  return (
    <View style={styleHeart.container}>
      <View style={styleHeart.viewheader}>
        <Text style={styleHeart.textheader}> Yêu Thích</Text>
        <TouchableOpacity style={styleHeart.viewpromo}>
          <Image source={Icon.PROMO} style={styleHeart.iconpromo} />
        </TouchableOpacity>
        <TouchableOpacity style={styleHeart.viewnotify}>
          <Image source={Icon.NOTIFY} style={styleHeart.iconnotify} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Heart