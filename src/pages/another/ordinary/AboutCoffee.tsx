import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react'
import { useRoute } from '@react-navigation/native';
import WebView from 'react-native-webview';
import { useGoBack } from '../../../utils/GoBack';
import { Icon } from '../../../constant/Icon';
import StyleAboutCoffee from '../../../styles/code/ordinary/StyleAboutCoffee';

interface RouteParams {
  url: string;
}
const AboutCoffee = () => {
  const { url } = useRoute().params as RouteParams;
  const goback = useGoBack();

  return (
    <View style={StyleAboutCoffee.container}>
      <View style={StyleAboutCoffee.viewheader}>
        <TouchableOpacity onPress={goback}>
          <Image source={Icon.BACK} style={StyleAboutCoffee.iconBack} />
        </TouchableOpacity>
        <Text style={StyleAboutCoffee.textHeader}>Về chúng tôi</Text>
      </View>
      <WebView source={{ uri: url }} />
    </View>
  )
}

export default AboutCoffee