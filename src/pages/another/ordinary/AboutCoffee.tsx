import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import WebView from 'react-native-webview';
import { useGoBack } from '../../../utils/GoBack';
import { Icon } from '../../../constant/Icon';
import StyleAboutCoffee from '../../../styles/another/StyleAboutCoffee';
import FastImage from 'react-native-fast-image';
import * as Progress from 'react-native-progress';

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
          <FastImage source={Icon.BACK} style={StyleAboutCoffee.iconBack} />
        </TouchableOpacity>
        <Text style={StyleAboutCoffee.textHeader}>Về chúng tôi</Text>
      </View>
      <WebView
        startInLoadingState={true}
        renderLoading={() => (
          <View style={StyleAboutCoffee.viewLoading}>
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
              style={StyleAboutCoffee.progress}
            />
          </View>
        )}
        source={{ uri: url }}
      />
    </View>
  );
};

export default AboutCoffee;
