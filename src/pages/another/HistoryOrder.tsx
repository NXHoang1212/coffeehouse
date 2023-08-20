import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import StyleHistoryOrder from '../../styles/code/StyleHistoryOrder'
import { ThemLightStatusBar } from '../../constant/ThemLight'
import { Icon } from '../../constant/Icon'
import { useGoBack } from '../../utils/GoBack'

const HistoryOrder = () => {
  ThemLightStatusBar('dark-content', '#fff');
  const goback = useGoBack();
  return (
    <View style={StyleHistoryOrder.container}>
      <View style={StyleHistoryOrder.viewheader}>
        <TouchableOpacity onPress={goback}>
          <Image source={Icon.BACK} style={StyleHistoryOrder.iconBack} />
        </TouchableOpacity>
        <Text style={StyleHistoryOrder.textHeader}>Lịch sử đơn hàng</Text>
      </View>
    </View>
  )
}

export default HistoryOrder