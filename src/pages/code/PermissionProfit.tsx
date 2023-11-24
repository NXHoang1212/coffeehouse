import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useGoBack} from '../../utils/GoBack';
import {ThemLightStatusBar} from '../../constant/ThemLight';
import {Icon} from '../../constant/Icon';
import StylePermissionProfit from '../../styles/code/StylePermissionProfit';
import {useRoute} from '@react-navigation/native';
import {WebView} from 'react-native-webview';

//định nghĩa dữ liệu url
interface RouteParams {
  url: string;
}

const PermissionProfit = () => {
  const {url} = useRoute().params as RouteParams;
  const goback = useGoBack();
  ThemLightStatusBar('dark-content', '#fff');

  return (
    <View style={StylePermissionProfit.container}>
      <View style={StylePermissionProfit.viewheader}>
        <TouchableOpacity onPress={goback}>
          <Image source={Icon.BACK} style={StylePermissionProfit.iconBack} />
        </TouchableOpacity>
        <Text style={StylePermissionProfit.textHeader}>Quyền lợi của bạn</Text>
      </View>
      <WebView source={{uri: url}} />
    </View>
  );
};

export default PermissionProfit;
