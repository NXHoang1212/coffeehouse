import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react'
import { Icon } from '../../../constant/Icon';
import StyleDeepLinkAccount from '../../../styles/code/ordinary/StyleDeepLinkAccount';
import { useGoBack } from '../../../utils/GoBack';
import { showMessage } from 'react-native-flash-message';


const DeepLinkAcount = () => {
  const goback = useGoBack();

  const showFlashMessage = () => {
    showMessage({
      message: "Thông báo",
      description: "Chức năng đang được phát triển",
      type: "warning",
      icon: "warning",
      duration: 2000
    })
  }

  return (
    <View style={StyleDeepLinkAccount.container}>
      <View style={StyleDeepLinkAccount.viewheader}>
        <TouchableOpacity onPress={goback}>
          <Image source={Icon.BACK} style={StyleDeepLinkAccount.iconBack} />
        </TouchableOpacity>
        <Text style={StyleDeepLinkAccount.textHeader}>Liên kết tài khoản</Text>
      </View>
      <TouchableOpacity onPress={showFlashMessage}>
        <View style={StyleDeepLinkAccount.viewitem}>
          <Image source={Icon.HARAVAN} style={StyleDeepLinkAccount.iconharavan} />
          <Text style={StyleDeepLinkAccount.textitem}>Liên kết với Harawoks</Text>
          <Image source={Icon.RIGHT} style={StyleDeepLinkAccount.iconright} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default DeepLinkAcount