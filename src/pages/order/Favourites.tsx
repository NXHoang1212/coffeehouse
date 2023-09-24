import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styleFavourite from '../../styles/order/StyleFavourite'
import { Icon } from '../../constant/Icon'
import { useGoBack } from '../../utils/GoBack'

const Favourites = () => {
  const goBack = useGoBack()
  return (
    <View style={styleFavourite.container}>
      <View style={styleFavourite.viewheader}>
        <TouchableOpacity onPress={goBack}>
          <Image source={Icon.BACK} style={styleFavourite.iconback} />
        </TouchableOpacity>
        <Text style={styleFavourite.textheader}>Sản phẩm Yêu Thích</Text>
      </View>
      <View style={styleFavourite.line} />
    </View>
  )
}

export default Favourites