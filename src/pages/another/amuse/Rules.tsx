import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { useGoBack } from '../../../utils/GoBack';
import { Icon } from '../../../constant/Icon';
import StyleRules from '../../../styles/another/StyleRules';
import { ThemLightStatusBar } from '../../../constant/ThemLight';
import * as Progress from 'react-native-progress';

interface RouteParams {
  link: string;
}

const Rules = () => {
  ThemLightStatusBar('dark-content', '#fff');
  const { link } = useRoute().params as RouteParams;
  const goback = useGoBack();
  return (
    <View style={StyleRules.container}>
      <View style={StyleRules.viewheader}>
        <TouchableOpacity onPress={goback}>
          <Image source={Icon.BACK} style={StyleRules.iconBack} />
        </TouchableOpacity>
        <Text style={StyleRules.textHeader}>Điều khoản</Text>
      </View>
      <WebView
        startInLoadingState={true}
        renderLoading={() => (
          <View style={StyleRules.viewLoading}>
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
              style={StyleRules.progress}
            />
          </View>
        )}
        source={{ uri: link }}
      />
    </View>
  );
};

export default Rules;
