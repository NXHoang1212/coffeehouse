import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, Share } from 'react-native'
import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { ParamsUrl } from '../../navigation/home/StackHomeNavigate';
import { Icon } from '../../constant/Icon';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';
import { FONTSTYLE } from '../../constant/Fonts';
import { COLOR } from '../../constant/Color';
import { TrunacteString } from '../../utils/TrunacteString';
import { useGoBack } from '../../utils/GoBack';

const WebViewUrl = () => {
  const goBack = useGoBack(); // Gọi Hook ở đây
  const params = useRoute<ParamsUrl['route']>().params
  console.log(params)
  const onShare = async () => {
    try {
      const result = await Share.share({ message: params.url });
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLOR.WHITE} barStyle="dark-content" />
      <View style={styles.viewtitlte}>
        <TouchableOpacity onPress={goBack}>
          <Image source={Icon.BACK} style={{ width: WIDTH(3), height: HEIGHT(3) }} />
        </TouchableOpacity>
        <Text style={styles.titlename}>{TrunacteString(params.name, 31)}</Text>
        <TouchableOpacity onPress={onShare}>
          <Image source={Icon.SHARE} style={{ width: WIDTH(4), height: HEIGHT(2), marginLeft: WIDTH(7) }} />
        </TouchableOpacity>
      </View>
      <WebView source={{ uri: params.url }} />
    </View>
  )
}

export default WebViewUrl

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  viewtitlte: {
    flexDirection: 'row',
    alignItems: 'center',
    left: WIDTH(3),
    gap: WIDTH(3),
    marginTop: HEIGHT(1),
  },
  titlename: {
    fontSize: FONTSIZE(2),
    color: COLOR.BLACK,
    fontFamily: FONTSTYLE.REGULAR,
    fontWeight: 'bold',
  },
})