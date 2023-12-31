import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useGoBack } from '../../utils/GoBack';
import { ThemLightStatusBar } from '../../constant/ThemLight';
import { Icon } from '../../constant/Icon';
import StylePermissionProfit from '../../styles/code/StylePermissionProfit';
import { useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import FastImage from 'react-native-fast-image';
import * as Progress from 'react-native-progress';

interface RouteParams {
  url: string;
}

const PermissionProfit = () => {
  const { url } = useRoute().params as RouteParams;
  const goback = useGoBack();
  ThemLightStatusBar('dark-content', '#fff');

  return (
    <View style={StylePermissionProfit.container}>
      <View style={StylePermissionProfit.viewheader}>
        <TouchableOpacity onPress={goback}>
          <FastImage source={Icon.BACK} style={StylePermissionProfit.iconBack} />
        </TouchableOpacity>
        <Text style={StylePermissionProfit.textHeader}>Quyền lợi của bạn</Text>
      </View>
      <WebView
        startInLoadingState={true}
        renderLoading={() => (
          <View style={StylePermissionProfit.viewLoading}>
            <Progress.Bar
              indeterminate={true}
              width={500}
              color={'blue'}
              progress={0.3}
              animated={true}
              borderColor='blue'
              borderRadius={0}
              borderWidth={0}
              height={1}
              useNativeDriver={true}
              animationConfig={{ bounciness: 0 }}
              style={StylePermissionProfit.progress}
            />
          </View>
        )}
        source={{ uri: url }}
      />
    </View>
  );
};

export default PermissionProfit;
