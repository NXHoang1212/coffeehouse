import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, Share, } from 'react-native';
import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { ParamsUrl } from '../../navigation/home/StackHomeNavigate';
import { Icon } from '../../constant/Icon';
import { WIDTH, HEIGHT, FONTSIZE } from '../../constant/Responsive';
import { FONTSTYLE } from '../../constant/Fonts';
import { COLOR } from '../../constant/Color';
import { TrunacteString } from '../../utils/TrunacteString';
import { useGoBack } from '../../utils/GoBack';
import * as Progress from 'react-native-progress';
import IconShare from '../../assets/Svg/IconShare';

const WebViewUrl = () => {
  const goBack = useGoBack();
  const params = useRoute<ParamsUrl['route']>().params;
  const onShare = async () => {
    try {
      const result = await Share.share({ message: params.url });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLOR.WHITE} barStyle="dark-content" />
      <View style={styles.viewtitlte}>
        <TouchableOpacity onPress={goBack}>
          <Image
            source={Icon.BACK}
            style={{ width: WIDTH(3), height: HEIGHT(3) }}
          />
        </TouchableOpacity>
        <Text style={styles.titlename}>{TrunacteString(params.name, 31)}</Text>
        <TouchableOpacity onPress={onShare}>
          <IconShare style={{ width: WIDTH(4), height: HEIGHT(2), marginLeft: WIDTH(7) }} />
        </TouchableOpacity>
      </View>
      <WebView
        startInLoadingState={true}
        renderLoading={() => (
          <View style={styles.viewloading}>
            <Progress.Bar
              indeterminate={true}
              width={500}
              color='blue'
              progress={0.3}
              animated={true}
              borderColor='blue'
              borderRadius={0}
              borderWidth={0}
              height={2}
              useNativeDriver={true}
              animationConfig={{ bounciness: 0 }}
            />
          </View>
        )}
        source={{ uri: params.url }}
      />
    </View>
  );
};

export default WebViewUrl;

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
  viewloading: {
    bottom: WIDTH(196),
  },
});
