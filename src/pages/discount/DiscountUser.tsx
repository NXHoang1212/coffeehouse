import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import StyleDiscountUser from '../../styles/general/StyleDiscountUset'
import { Icon } from '../../constant/Icon'
import { useGoBack } from '../../utils/GoBack'
import { ThemLightStatusBar } from '../../constant/ThemLight'

const DiscountUser = () => {
  ThemLightStatusBar('dark-content', '#fff');
  const goback = useGoBack();
  return (
    <View style={StyleDiscountUser.container}>
      <View style={StyleDiscountUser.viewheader}>
        <TouchableOpacity onPress={goback}>
          <Image source={Icon.BACK} style={StyleDiscountUser.iconBack} />
        </TouchableOpacity>
        <Text style={StyleDiscountUser.textHeader}>Phiếu ưu đãi của bạn</Text>
      </View>
    </View>
  )
}

export default DiscountUser