import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { useGoBack } from '../../utils/GoBack';
import { Icon } from '../../constant/Icon';
import StyleRules from '../../styles/other/StyleRules';
import { ThemLightStatusBar } from '../../constant/ThemLight';
import * as Progress from 'react-native-progress';

//định nghĩa dữ liệu url
interface RouteParams {
  url: string;
}

const Rules = () => {
  ThemLightStatusBar('dark-content', '#fff');
  const { url } = useRoute().params as RouteParams;
  console.log("🚀 ~ file: Rules.tsx:16 ~ Rules ~ url:", url)
  const goback = useGoBack();
  return (
    <View style={StyleRules.container}>
      <View style={StyleRules.viewheader}>
        <TouchableOpacity onPress={goback}>
          <Image source={Icon.BACK} style={StyleRules.iconBack} />
        </TouchableOpacity>
        <Text style={StyleRules.textHeader}>Điều khoản</Text>
      </View>
      <WebView source={{ uri: url }} />
    </View>
  )
}

export default Rules