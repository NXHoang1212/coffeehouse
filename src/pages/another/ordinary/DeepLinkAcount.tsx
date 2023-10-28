import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react'
import { Icon } from '../../../constant/Icon';
import StyleDeepLinkAccount from '../../../styles/code/ordinary/StyleDeepLinkAccount';
import { useGoBack } from '../../../utils/GoBack';
import { Messenger } from '../../../utils/ShowMessage';


const DeepLinkAcount = () => {
  const goback = useGoBack();



  return (
    <View style={StyleDeepLinkAccount.container}>
      <View style={StyleDeepLinkAccount.viewheader}>
        <TouchableOpacity onPress={goback}>
          <Image source={Icon.BACK} style={StyleDeepLinkAccount.iconBack} />
        </TouchableOpacity>
        <Text style={StyleDeepLinkAccount.textHeader}>Liên kết tài khoản</Text>
      </View>
      <View style={StyleDeepLinkAccount.body}>
        <TouchableOpacity onPress={() => Messenger('Chức năng đang phát triển', 'warning')}>
          <View style={StyleDeepLinkAccount.viewitem}>
            <Image source={Icon.HARAVAN} style={StyleDeepLinkAccount.iconharavan} />
            <Text style={StyleDeepLinkAccount.textitem}>Liên kết với Harawoks</Text>
            <Image source={Icon.RIGHT} style={StyleDeepLinkAccount.iconright} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DeepLinkAcount