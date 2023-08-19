import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styleFavourite from '../../styles/infatuated/StyleFavourite'
import { Icon } from '../../constant/Icon'
import { useGoBack } from '../../utils/GoBack'
import styleHeart from '../../styles/infatuated/StyleHeart'
import { ThemLightStatusBar } from '../../constant/ThemLight'

const Heart = () => {
  ThemLightStatusBar('dark-content', '#fff');
  return (
    <View style={styleHeart.container}>
      <View style={styleHeart.viewheader}>
        <Text style={styleHeart.textheader}>Sản phẩm Yêu Thích</Text>
      </View>
    </View>
  )
}

export default Heart