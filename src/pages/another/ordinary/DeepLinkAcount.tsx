import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Icon } from '../../../constant/Icon';
import StyleDeepLinkAccount from '../../../styles/another/StyleDeepLinkAccount';
import { useGoBack } from '../../../utils/GoBack';
import { Messenger } from '../../../utils/ShowMessage';
import FastImage from 'react-native-fast-image';
import IconHarvan from '../../../assets/Svg/IconHarvan';
import { COLOR } from '../../../constant/Color';

const DeepLinkAcount = () => {
  const goback = useGoBack();

  return (
    <View style={StyleDeepLinkAccount.container}>
      <View style={StyleDeepLinkAccount.viewheader}>
        <TouchableOpacity onPress={goback}>
          <FastImage source={Icon.BACK} style={StyleDeepLinkAccount.iconBack} />
        </TouchableOpacity>
        <Text style={StyleDeepLinkAccount.textHeader}>Liên kết tài khoản</Text>
      </View>
      <View style={StyleDeepLinkAccount.body}>
        <TouchableOpacity
          onPress={() => Messenger.warning('Chức năng đang phát triển')}>
          <View style={StyleDeepLinkAccount.viewitem}>
            <IconHarvan style={StyleDeepLinkAccount.iconharavan} fill={COLOR.BLUE} />
            <Text style={StyleDeepLinkAccount.textitem}>
              Liên kết với Harawoks
            </Text>
            <FastImage source={Icon.RIGHT} style={StyleDeepLinkAccount.iconright} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeepLinkAcount;
