import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { useGoBack } from '../../utils/GoBack';
import { Icon } from '../../constant/Icon';
import StyleRules from '../../styles/other/StyleRules';
import { ThemLightStatusBar } from '../../constant/ThemLight';

//định nghĩa dữ liệu url
interface RouteParams {
  link: string;
}

const Rules = () => {
  ThemLightStatusBar('dark-content', '#fff');
  const { link } = useRoute().params as RouteParams;
  console.log("🚀 ~ file: Rules.tsx:16 ~ Rules ~ url:", link)
  const goback = useGoBack();
  return (
    <View style={StyleRules.container}>
      <View style={StyleRules.viewheader}>
        <TouchableOpacity onPress={goback}>
          <Image source={Icon.BACK} style={StyleRules.iconBack} />
        </TouchableOpacity>
        <Text style={StyleRules.textHeader}>Điều khoản</Text>
      </View>
      <WebView source={{ uri: link }} />
    </View>
  )
}

export default Rules